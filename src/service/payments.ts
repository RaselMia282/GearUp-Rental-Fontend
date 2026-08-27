"use server";

import { cookies } from "next/headers";

export async function createPayments(orderId: string) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      console.error("No access token found in cookies!");
      return { success: false, message: "No authentication token found" };
    }

    const res = await fetch("http://localhost:8000/api/payments/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ orderId }),
    });

    const result = await res.json();
    console.log("Backend Payment API Result:", result);

    if (!res.ok) {
      return { success: false, message: result?.message || "Payment creation failed" };
    }

    return result; 
  } catch (error) {
    console.error("Payment server action error:", error);
    return { success: false, message: "Network error occurred" };
  }
}