"use server";

import { cookies } from "next/headers";

export async function myRentals() {
  try {
    const cookieStore = await cookies ();
    const token = cookieStore.get("accessToken")?.value;
    console.log("Cookie Token Exists:", !!token);
    if(!token) return [];

    const res = await fetch("http://localhost:8000/api/rentals",{
        headers:{Authorization:`Bearer ${token}`,},
        cache:"no-store",
    })

    if (!res.ok) {
      console.error(`API Error Status: ${res.status}`);
      return [];
    }

    const result = await res.json();
    return result.data || [];

  } catch (error) {
    console.error(error)
  }
}
