import { NextResponse } from "next/server";
import * as jose from "jose";

export default function middleware(request) {
  // cek apakah ada cookie
  const cookie = request.cookies.get("eatyes-token")?.value;

  if (!cookie) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  // parse ke string
  const token = JSON.parse(cookie);
  // cek apakah token valid
  const isValid = jose.decodeJwt(token);
  // cek apakah token expired
  const isExpired = new Date(isValid.exp * 1000) < new Date();

  if (isExpired) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/search", "/account", "/search"],
};
