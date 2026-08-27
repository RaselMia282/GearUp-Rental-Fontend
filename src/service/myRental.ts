"use server";

import { cookies } from "next/headers";

export async function myRentals(payload?: any) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return {
        success: false,
        message: "No token found",
        data: null,
      };
    }

    const res = await fetch("http://localhost:8000/api/rentals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    const result = await res.json();

    console.log("RENTAL API STATUS:", res.status);
    console.log("RENTAL API RESULT:", result);

    return {
      success: result.success,
      message: result.message,
      data: result.data
        ? {
            id: result.data.id,
          }
        : null,
    };
  } catch (error) {
    console.error("RENTAL SERVICE ERROR:", error);

    return {
      success: false,
      message: "Order creation failed",
      data: null,
    };
  }
}