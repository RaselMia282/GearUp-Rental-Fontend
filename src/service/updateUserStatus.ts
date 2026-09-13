"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

export async function updateUserStatus(userId: string, status: string) {
  try {
      if (!userId || userId === "undefined") {
      return { success: false, message: "User ID is missing or undefined!" };
    }

    const cookieStore = await cookies();
    
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return { success: false, message: "Unauthorized access: Token missing" };
    }

    const res = await fetch(`http://localhost:8000/api/admin/users/${userId}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        
        Authorization: `Bearer ${token}`, 
      },
      body: JSON.stringify({ status }),
    });

    const result = await res.json();

    if (!res.ok || !result?.success) {
      return {
        success: false,
        message: result?.message || "Failed to update status",
      };
    }

    // revalidatePath("/dashboard/users");
    // revalidatePath("/dashboard/admin/users");

    return { success: true, message: result?.message, data: result?.data };
  } catch (error) {
    console.error("Update status error:", error);
    return { success: false, message: "Server connection failed" };
  }
}