// import { cookies } from "next/headers"

// export const logOut = async()=>{
//     const cookieStore = await cookies ();
//     cookieStore.delete("accessToken");
//     cookieStore.delete("refreshToken")
// }

"use server";

import { cookies } from "next/headers";

export const getAuthData = async () => {
  const cookieStore = await cookies();
  const role = cookieStore.get("role")?.value || null;
  const token = cookieStore.get("accessToken")?.value || null;

  return { role, token };
};

export const logOut = async () => {
  const cookieStore = await cookies();
  cookieStore.delete("accessToken");
  cookieStore.delete("refreshToken");
  cookieStore.delete("role");
};
