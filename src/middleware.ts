import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";
import config from "./lib/config";

// Daftar rute yang memerlukan login
const protectedRoutes = ["/dummy"];

// Daftar rute yang tidak boleh diakses jika sudah login
const publicRoutes = ["/login", "/register"];

export async function middleware(request: NextRequest) {
  // Ambil token dari cookie
  const token = await getToken({ req: request, secret: config.nextAuthSecret });

  // Cek rute yang perlu login
  if (
    protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    // Jika token tidak ada, arahkan ke halaman login
    if (!token) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }
  // Cek rute public
  if (
    publicRoutes.some((route) => request.nextUrl.pathname.startsWith(route))
  ) {
    // Jika token ada, arahkan ke halaman dashboard
    if (token) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  // Jika tidak memenuhi aturan di atas, lanjutkan akses
  return NextResponse.next();
}
