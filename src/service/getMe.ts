"use server";

import { cookies } from "next/headers";

export const getMe = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) return null;

    const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/me`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const result = await res.json();

    
    return result?.data || result;
  } catch (error) {
    console.error("Fetch Error:", error);
    return null;
  }
};