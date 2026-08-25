"use server";

const trendingImages: Record<string, string> = {
  "Trek Marlin 7 Mountain Bike": "https://i.ibb.co.com/G4FQRD83/unnamed-1.jpg",
  "Thule Motion XT Roof Cargo Box": "https://i.ibb.co.com/60K0vRn7/Screenshot-2026-08-22-at-11-06-52-AM.png",
  "Sony Alpha A7 IV Mirrorless Camera": "https://i.ibb.co.com/QFFTj8D3/Screenshot-2026-08-22-at-11-04-41-AM.png",
  "Rock Climbing Shoes": "https://i.ibb.co.com/SXMCfTC0/Screenshot-2026-08-22-at-9-17-30-PM.png",
  "Safety Climbing Harness": "https://i.ibb.co.com/dwNkFqXq/Screenshot-2026-08-22-at-9-16-02-PM.png",
  "Dynamic Climbing Rope 60m ": "https://i.ibb.co.com/cXRYCxXW/Screenshot-2026-08-22-at-9-13-19-PM.png",
  "Waterproof Hiking Boots": "https://i.ibb.co.com/NdSxMx66/Screenshot-2026-08-22-at-9-12-07-PM.png",
  "Trail Running GPS Watch": "https://i.ibb.co.com/vvzF5VtF/Screenshot-2026-08-22-at-9-09-53-PM.png",
  "Trekking Poles Pair": "https://i.ibb.co.com/JjVWC9C0/Screenshot-2026-08-22-at-9-08-02-PM.png",
  "Ultralight Hiking Backpack 45L": "https://i.ibb.co.com/sdbx4SPV/Screenshot-2026-08-22-at-9-06-39-PM.png",
  "Box": "https://i.ibb.co.com/60K0vRn7/Screenshot-2026-08-22-at-11-06-52-AM.png",
};

// ImgBB ডোমেইনের ইমেজের সাহায্যে ফলব্যাক হ্যান্ডলিং
function getGearImage(title: string, imgURL: string | null): string {
  if (imgURL) return imgURL;
  if (trendingImages[title]) return trendingImages[title];

  const cleanTitle = title.toLowerCase();

  if (cleanTitle.includes("tent") || cleanTitle.includes("camping") || cleanTitle.includes("stove")) {
    return "https://i.ibb.co.com/SXMCfTC0/Screenshot-2026-08-22-at-9-17-30-PM.png";
  }
  if (cleanTitle.includes("lantern") || cleanTitle.includes("light")) {
    return "https://i.ibb.co.com/vvzF5VtF/Screenshot-2026-08-22-at-9-09-53-PM.png";
  }
  if (cleanTitle.includes("paddle") || cleanTitle.includes("water") || cleanTitle.includes("inflatable")) {
    return "https://i.ibb.co.com/60K0vRn7/Screenshot-2026-08-22-at-11-06-52-AM.png";
  }

  return "https://i.ibb.co.com/G4FQRD83/unnamed-1.jpg";
}

export async function getGears() {
  try {
    const res = await fetch("http://localhost:8000/api/gear", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.error(`API Error status:${res.status}`);
      return [];
    }

    const result = await res.json();
    const gearsData = result.data || [];

    return gearsData.map((item: any) => ({
      id: item.id || item._id,
      title: item.title,
      brand: item.brand,
      price: item.pricePerDay || item.price || 0,
      category: typeof item.category === "object" ? item.category?.name : item.category || "Outdoor",
      image: getGearImage(item.title, item.imgURL),
    }));
  } catch (error) {
    console.error("Failed to fetch gears", error);
    return [];
  }
}