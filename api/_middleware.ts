import type { VercelRequest, VercelResponse } from "@vercel/node";

const BASIC_USER = process.env.BASIC_AUTH_USER;
const BASIC_PASS = process.env.BASIC_AUTH_PASSWORD;
const REALM = "Audit Dashboard";

function isAuthorized(req: VercelRequest): boolean {
  const auth = req.headers.authorization;
  if (!auth || !auth.startsWith("Basic ")) return false;

  const base64 = auth.slice("Basic ".length).trim();

  let decoded: string;
  try {
    decoded = Buffer.from(base64, "base64").toString("utf-8");
  } catch {
    return false;
  }

  const [user, pass] = decoded.split(":");

  // If env vars aren't set, fail safe (never allow)
  if (!BASIC_USER || !BASIC_PASS) return false;

  return user === BASIC_USER && pass === BASIC_PASS;
}

export default function handler(req: VercelRequest, res: VercelResponse) {
  const url = new URL(req.url);

  // Let static assets & some public files through
  if (
    url.pathname.startsWith("/assets") ||
    url.pathname.startsWith("/favicon") ||
    url.pathname === "/robots.txt"
  ) {
    return;
  }

  // If credentials are valid, serve the requested file
  if (isAuthorized(req)) {
    return;
  }

  // Otherwise prompt for Basic Auth
  res.setHeader("WWW-Authenticate", `Basic realm="${REALM}"`);
  res.status(401).send("Authentication required");
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|assets/).*)"],
};
