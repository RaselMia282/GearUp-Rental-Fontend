"use client";

import { useState } from "react";
import { updateProviderOrder } from "@/service/updateProviderOrder";

export default function RentalRequestRow({ order }: { order: any }) {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(order.status || "PENDING");

  const handleStatusUpdate = async (newStatus: "APPROVED" | "REJECTED") => {
    setLoading(true);
    const res = await updateProviderOrder(order.id || order._id, newStatus);
    
    if (res?.success || res?.status) {
      setStatus(newStatus);
    } else {
      alert(res?.message || "Failed to update order status");
    }
    setLoading(false);
  };

  return (
    <tr className="hover:bg-gray-50/50 transition border-b border-gray-100">
      {/* Gear Title */}
      <td className="px-6 py-4 font-semibold text-gray-800">
        {order.gear?.title || order.gear?.name || "Gear Item"}
      </td>

      {/* Customer Info */}
      <td className="px-6 py-4">
        <div>
          <p className="font-medium text-gray-800">{order.user?.name || "Customer"}</p>
          <p className="text-xs text-gray-400">{order.user?.email}</p>
        </div>
      </td>

      {/* Dates */}
      <td className="px-6 py-4 text-xs text-gray-600 space-y-0.5">
        <div><span className="font-medium">From:</span> {order.startDate ? new Date(order.startDate).toLocaleDateString() : 'N/A'}</div>
        <div><span className="font-medium">To:</span> {order.endDate ? new Date(order.endDate).toLocaleDateString() : 'N/A'}</div>
      </td>

      {/* Status Badge */}
      <td className="px-6 py-4">
        <span
          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
            status === "APPROVED"
              ? "bg-green-50 text-green-700 border border-green-200"
              : status === "REJECTED"
              ? "bg-red-50 text-red-700 border border-red-200"
              : "bg-yellow-50 text-yellow-700 border border-yellow-200"
          }`}
        >
          {status}
        </span>
      </td>

      {/* Action Buttons */}
      <td className="px-6 py-4 text-right space-x-2">
        {status === "PENDING" ? (
          <>
            <button
              disabled={loading}
              onClick={() => handleStatusUpdate("APPROVED")}
              className="bg-green-500 hover:bg-green-600 disabled:opacity-50 text-white font-medium text-xs px-3 py-1.5 rounded-lg transition"
            >
              {loading ? "..." : "Approve"}
            </button>
            <button
              disabled={loading}
              onClick={() => handleStatusUpdate("REJECTED")}
              className="bg-red-500 hover:bg-red-600 disabled:opacity-50 text-white font-medium text-xs px-3 py-1.5 rounded-lg transition"
            >
              {loading ? "..." : "Reject"}
            </button>
          </>
        ) : (
          <span className="text-xs text-gray-400 italic">Action Taken</span>
        )}
      </td>
    </tr>
  );
}