import { getMyRentals } from "@/service/getMyRentals";
// import { myRentals } from "@/service/myRental";

import { IRentalOrder } from "@/types/rental";
import Link from "next/link";
const userRentalPage = async () => {
  const rentals: IRentalOrder[] = await getMyRentals();

  console.log("Rentals in Page:", rentals);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">
        My Rental Orders
      </h1>

      {rentals.length === 0 ? (
        <div className="bg-white p-8 rounded-lg shadow-sm border text-center text-gray-500">
          You haven't placed any rental orders yet.
        </div>
      ) : (
        <div className="space-y-4">
          {rentals.map((order) => (
            <div
              key={order.id}
              className="bg-white rounded-xl shadow-sm border p-5"
            >
              {/* Order Header */}
              <div className="flex flex-wrap justify-between items-center border-b pb-3 mb-4 gap-2">
                <div>
                  <span className="text-xs text-gray-400 block">ORDER ID</span>
                  <span className="font-mono text-sm text-gray-600">
                    {order.id}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">
                    RENTAL DATES
                  </span>
                  <span className="text-sm font-medium text-gray-700">
                    {new Date(order.startDate).toLocaleDateString()} –{" "}
                    {new Date(order.endDate).toLocaleDateString()}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block">STATUS</span>
                  <span
                    className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      order.status === "APPROVED"
                        ? "bg-green-100 text-green-700"
                        : order.status === "PENDING"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {order.status}
                  </span>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-3">
                {order.items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden shrink-0">
                      {item.gears?.imgURL ? (
                        <img
                          src={item.gears.imgURL}
                          alt={item.gears.title}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-xs text-gray-400">No Image</span>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800">
                        {item.gears?.title}
                      </h3>
                      <p className="text-xs text-gray-500">
                        Brand: {item.gears?.brand}
                      </p>
                      <p className="text-xs text-gray-500">
                        Qty: {item.quantity} × ${item.priceAtRental}/day
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Footer */}
              <div className="border-t mt-4 pt-3 flex justify-between items-center">
                <div>
                  <span className="text-sm text-gray-500">Total Price</span>
                  <span className="block text-lg font-bold text-orange-600">
                    ${order.totalPrice}
                  </span>
                </div>

                {order.status === "PENDING" && (
                  <Link
                    href={`/payment/${order.id}`}
                    className="rounded-lg bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-orange-700"
                  >
                    Pay Now
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default userRentalPage;
