import { cookies } from "next/headers";

export async function getMyGears() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;
    if (!token) {
      return [];
    }

    const res = await fetch("http://localhost:8000/api/provider/gear", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const result = await res.json();
    return result;
  } catch (error) {
    console.log(error);
  }
}
