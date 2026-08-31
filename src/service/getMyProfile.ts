
"use server"

import { cookies } from "next/headers";

export async function getMyProfile() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    if (!token) {
      return { success: false, message: "No access token found", data: null };
    }

    const res = await fetch("http://localhost:8000/api/auth/me", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const result =await res.json();
    return result;
  } catch (error) {
    console.error("GET PROFILE ERROR:", error);
    
  }
}
