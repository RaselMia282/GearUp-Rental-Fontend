"use client";

import { useState } from "react";
import { updateUserStatus } from "@/service/updateUserStatus";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function UserRow({ user }: { user: any }) {
  const [loading, setLoading] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(user.status || "ACTIVE");

  const handleToggle = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoading(true);

    const nextStatus = currentStatus === "ACTIVE" ? "SUSPEND" : "ACTIVE";
    const userId = user.id;

    try {
      const res = await updateUserStatus(userId, nextStatus);

      if (res?.success) {
        setCurrentStatus(nextStatus);
      } else {
        alert(res?.message || "Update failed");
      }
    } catch (err) {
      alert("Server error!");
    } finally {
      setLoading(false);
    }
  };
  return (
    <tr className="hover:bg-gray-50 transition border-b border-gray-100">
      <td className="px-6 py-4">
        <div>
          <p className="font-medium text-gray-900">{user.name || "N/A"}</p>
          <p className="text-xs text-gray-500">{user.email}</p>
        </div>
      </td>
      <td className="px-6 py-4 text-xs font-semibold text-gray-500">
        <span className="bg-gray-100 px-2.5 py-1 rounded-full uppercase">
          {user.role || "CUSTOMER"}
        </span>
      </td>
      <td className="px-6 py-4">
        <span
          className={`text-xs px-2.5 py-1 rounded-full font-medium ${
            currentStatus === "ACTIVE"
              ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
              : "bg-rose-50 text-rose-700 border border-rose-200"
          }`}
        >
          {currentStatus}
        </span>
      </td>
      <td className="px-6 py-4 text-right">
        <button
          type="button"
          onClick={handleToggle}
          disabled={loading}
          className={`text-xs px-3 py-1.5 rounded-lg font-medium transition ${
            currentStatus === "ACTIVE"
              ? "bg-rose-50 text-rose-600 hover:bg-rose-100 border border-rose-200"
              : "bg-emerald-50 text-emerald-600 hover:bg-emerald-100 border border-emerald-200"
          } ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          {loading
            ? "Updating..."
            : currentStatus === "SUSPEND"
              ? "Unblock User"
              : "Block User"}
        </button>
      </td>
    </tr>
  );
}
