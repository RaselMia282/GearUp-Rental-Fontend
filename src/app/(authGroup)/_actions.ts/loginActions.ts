"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import jwt from "jsonwebtoken";

type loginState = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    accessToken: string;
    refreshToken: string;
  };
};

export const loginAction = async (
  prevState: loginState,
  formData: FormData,
) => {
  console.log(formData);
  const email = formData.get("email");
  const password = formData.get("password");

  const payload = {
    email,
    password,
  };

  const res = await fetch(`${process.env.BACKEND_API_URL}/api/auth/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(payload),
  });

  const result: loginState = await res.json();
  // console.log("LOGIN RESULT:", result);
  // console.log("ACCESS TOKEN:", result.data?.accessToken);

  if (!result.success) {
    return result;
  }

  const decoded = jwt.decode(result.data.accessToken) as {
    id: string;
    email: string;
    role: string;
  };

  // console.log("DECODED TOKEN:", decoded);
  const cookieStore = await cookies();
  cookieStore.set("accessToken", result.data.accessToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
  });

  cookieStore.set("refreshToken", result.data.refreshToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
  });

  cookieStore.set("role", decoded.role, {
    httpOnly: true,
    maxAge: 60 * 60 * 24,
    sameSite: "lax",
  });

  // console.log("ROLE COOKIE SET:", decoded.role);

  redirect("/dashboard");

  return result;
};
