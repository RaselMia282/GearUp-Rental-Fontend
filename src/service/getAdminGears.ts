"use server";

import { cookies } from "next/headers";

export async function getAdminGears() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) return null;

    const res = await fetch("http://localhost:8000/api/admin/gears", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}