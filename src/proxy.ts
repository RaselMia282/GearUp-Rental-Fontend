import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

const PUBLIC_ROUTES = ["/", "/gears", "/categories", "/how-it-works"];

const AUTH_ROUTES = ["/login", "/register"];

const ROLE_BASED_ROUTES = {
  ADMIN: ["/dashboard/users", "/dashboard/all-gears"],
  PROVIDER: [
    "/dashboard/my-gears",
    "/dashboard/my-gears/add",
    "/dashboard/rental-requests",
  ],
  CUSTOMER: ["/dashboard/my-rentals", "/checkout", "/payment"],
};

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const accessToken = request.cookies.get("accessToken")?.value;

  let userRole: string | null = null;
  if (accessToken) {
    try {
      const decodedToken = jwt.decode(accessToken) as JwtPayload;
      userRole = decodedToken?.role || null;
    } catch {
      userRole = null;
    }
  }

  const isAuthRoute = AUTH_ROUTES.some(
    (route) => pathname === route || pathname.startsWith(route + "/"),
  );

  const isPublicRoute =
    PUBLIC_ROUTES.includes(pathname) || pathname.startsWith("/gears/");

  if (!accessToken && !isPublicRoute && !isAuthRoute) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  if (accessToken && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  if (accessToken && userRole) {
    if (
      ROLE_BASED_ROUTES.ADMIN.some((route) => pathname.startsWith(route)) &&
      userRole !== "ADMIN"
    ) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }

    if (
      ROLE_BASED_ROUTES.PROVIDER.some((route) => pathname.startsWith(route)) &&
      userRole !== "PROVIDER" &&
      userRole !== "ADMIN"
    ) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\.png$).*)"],
};
