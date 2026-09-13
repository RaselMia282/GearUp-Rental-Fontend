import { getAdminGears } from "@/service/getAdminGears";
import GearRow from "./GearRow";

export default async function AdminGearsPage() {
  const response = await getAdminGears();
  const gears = response?.data || response || [];

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-800">Gear Management</h1>
        <p className="text-sm text-gray-500">
          Monitor all gear listings uploaded across the platform.
        </p>
      </div>

      {(!Array.isArray(gears) || gears.length === 0) ? (
        <div className="bg-white rounded-xl border border-gray-100 p-12 text-center shadow-sm">
          <p className="text-sm text-gray-500">No gear listings found.</p>
        </div>
      ) : (
        <div className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-600">
              <thead className="bg-gray-50 text-gray-700 uppercase text-xs font-semibold border-b">
                <tr>
                  <th className="px-6 py-4">Gear Info</th>
                  <th className="px-6 py-4">Price</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Provider</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {gears.map((gear: any) => (
                  <GearRow key={ gear.id} gear={gear} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}