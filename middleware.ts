import { NextRequest, NextResponse } from "next/server"; // Types only; it's fine in TS

const username = process.env.BASIC_AUTH_USER;
const password = process.env.BASIC_AUTH_PASSWORD;

export function middleware(req: NextRequest) {
  // Skip for static assets and Vite internals if needed
  const { pathname } = req.nextUrl;
  if (
    pathname.startsWith("/assets") || // vite static assets
    pathname.startsWith("/favicon") ||
    pathname.startsWith("/_vercel")
  ) {
    return NextResponse.next();
  }

  const authHeader = req.headers.get("authorization");

  if (authHeader) {
    const [scheme, encoded] = authHeader.split(" ");

    if (scheme === "Basic" && encoded) {
      const decoded = Buffer.from(encoded, "base64").toString("utf-8");
      const [user, pass] = decoded.split(":");

      if (user === username && pass === password) {
        // Auth success
        return NextResponse.next();
      }
    }
  }

  // Auth failed → ask browser for basic auth
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Audit Dashboard"',
    },
  });
}
