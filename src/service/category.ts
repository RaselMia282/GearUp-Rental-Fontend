"use server";

export async function getCategories() {
  try {

    const BASE_URL = process.env.BACKEND_API_URL || "https://sports-gear-rental-api.onrender.com";


    const res = await fetch(`${BASE_URL}/api/categories`, {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`API Error Status: ${res.status}`);
      return [];
    }

    const result = await res.json();
    
    
    return result.data || [];
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
}