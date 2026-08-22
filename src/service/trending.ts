"use server";

const trendingImages:Record<string,string> = {
  "Trek Marlin 7 Mountain Bike":"https://i.ibb.co.com/G4FQRD83/unnamed-1.jpg",

  "Thule Motion XT Roof Cargo Box":"https://i.ibb.co.com/60K0vRn7/Screenshot-2026-08-22-at-11-06-52-AM.png",

  "Sony Alpha A7 IV Mirrorless Camera":"https://i.ibb.co.com/QFFTj8D3/Screenshot-2026-08-22-at-11-04-41-AM.png"
}

export async function trendingNow() {
  try {
    const res = await fetch("http://localhost:8000/api/gear", {
      cache: "no-store",
    });
    if (!res.ok) {
      console.error(`API Error status:${res.status}`);
      return [];
    }

    const result = await res.json();
    console.log("from trending",result);

    const trendingData = result.data || [];

    return trendingData.map((item: any, index: any) => ({
      ...item,
      image: trendingImages[item.title] ,
    }));
  } catch (error) {
    console.error("failed to fetch trending", error);

    return [];
  }
}
