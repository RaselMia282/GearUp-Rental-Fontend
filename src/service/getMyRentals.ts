import { cookies } from "next/headers";

export async function getMyRentals() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("accessToken")?.value;

    if (!token) {
      return [];
    }

    const res = await fetch("http://localhost:8000/api/rentals", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    });

    const result = await res.json();

    console.log("MY RENTALS:", result);

    return result.data;
  } catch (error) {
    console.error("GET RENTALS ERROR:", error);
    return [];
  }
}