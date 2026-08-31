"use server"

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";
export async function updateMyProfile(payload: any) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return { success: false, message: "No access token found" };
    }

    const res = await fetch("http://localhost:8000/api/auth/me",{
        method:"PATCH",
        headers:{"content-type":"application/json",
            Authorization:`Bearer ${token}`
        },
        body:JSON.stringify(payload)
    })

    const result = await res.json();
    if (result.success) {
      revalidatePath("/", "layout"); 
    }
    console.log("BACKEND RESULT:", result);
    return result;
  } catch (error) {
    console.error("UPDATE PROFILE ERROR:", error);
    
  }
}