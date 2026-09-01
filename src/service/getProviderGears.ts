"use server";

import { cookies } from "next/headers";

export async function getProviderGears() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    if(!token){
        return null
    }
    const res = await fetch ("http://localhost:8000/api/provider/gear/orders",{
        method:"GET",
        headers:{"content-type":"application/json",
            Authorization:`Bearer ${token}`,
        },
        cache:"no-store",
    })

    const result = res.json()
    return result
  } catch (error) {
    console.log(error);
  }
}
