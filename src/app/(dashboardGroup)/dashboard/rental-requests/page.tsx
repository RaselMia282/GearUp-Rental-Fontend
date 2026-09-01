import { getProviderGears } from "@/service/getProviderGears";
import RentalRequestRow from "./RentalRequestRow";

export default async function RentalRequestsPage() {
  const response = await getProviderGears();
  const orders = response?.data || response || [];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Rental Requests</h1>
        <p className="text-sm text-gray-500">
          Manage incoming rental requests from customers.
        </p>
      </div>

      {(!Array.isArray(orders) || orders.length === 0) ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center shadow-sm">
          <div className="w-12 h-12 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center mx-auto text-xl font-bold mb-3">
            📩
          </div>
          <h3 className="text-base font-semibold text-gray-800">No rental requests found</h3>
          <p className="text-xs text-gray-500 mt-1">
            When customers request your gear, orders will appear here.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-700 uppercase text-xs font-semibold border-b">
                <tr>
                  <th className="px-6 py-4">Gear</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Rental Duration</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {orders.map((order: any) => (
                  <RentalRequestRow key={order.id || order.id} order={order} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}