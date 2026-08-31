import { cookies } from "next/headers";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function createGears(payload:any) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    if (!token) {
      return [];
    }

    const res = await fetch("http://localhost:8000/api/provider/gear", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body:JSON.stringify(payload),
      cache: "no-store",
    });

    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
