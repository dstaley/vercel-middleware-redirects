import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(req: NextRequest, ev: NextFetchEvent) {
  if (req.nextUrl.pathname === "/redirect") {
    const url = req.nextUrl.clone();
    url.pathname = "/redirected-from-middleware";
    return NextResponse.redirect(url, 307);
  }

  // Continue request processing
  return NextResponse.next();
}
