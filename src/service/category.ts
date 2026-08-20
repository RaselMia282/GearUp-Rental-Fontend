"use server";

export async function getCategories() {
  try {
    
    const res = await fetch("http://localhost:8000/api/categories", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`API Error Status: ${res.status}`);
      return [];
    }

    const result = await res.json();
    console.log(result);
    
    return result.data || [];
  } catch (error) {
    console.error("Failed to fetch categories:", error);
    return [];
  }
}