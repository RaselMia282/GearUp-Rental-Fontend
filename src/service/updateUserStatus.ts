"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function updateUserStatus(userId: string, status: string) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) return { success: false, message: "Unauthorized" };

    const res = await fetch(`http://localhost:8000/api/admin/users/${userId}/status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ status }), // e.g. "BLOCKED" or "ACTIVE"
    });

    const result = await res.json();
    revalidatePath("/dashboard/admin/users");
    return result;
  } catch (error) {
    console.error(error);
    return { success: false, message: "Failed to update status" };
  }
}