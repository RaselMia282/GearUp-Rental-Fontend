"use server";

import { cookies } from "next/headers";

export async function updateProviderOrder(
  orderId: string,
  status: "APPROVED" | "REJECTED",
) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    if (!token) {
      return null;
    }

    const res = await fetch(
      `http://localhost:8000/api/provider/gear/order/${orderId}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ status }),
      },
    );
    const result = await res.json();
    return result ;
  } catch (error) {
    console.log(error);
    return { success: false, message: "Something went wrong" };
  }
}
