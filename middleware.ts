const BASIC_USER = process.env.BASIC_AUTH_USER;
const BASIC_PASS = process.env.BASIC_AUTH_PASSWORD;
const REALM = "Audit Dashboard";

function isAuthorized(request: Request): boolean {
  const auth = request.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) return false;

  const base64 = auth.slice("Basic ".length).trim();

  let decoded: string;
  try {
    decoded = atob(base64);
  } catch {
    return false;
  }

  const [user, pass] = decoded.split(":");

  // If env vars aren't set, fail safe (never allow)
  if (!BASIC_USER || !BASIC_PASS) return false;

  return user === BASIC_USER && pass === BASIC_PASS;
}

export function middleware(request: Request) {
  const url = new URL(request.url);

  // Let static assets & some public files through
  if (
    url.pathname.startsWith("/assets") || // Vite build output
    url.pathname.startsWith("/favicon") ||
    url.pathname === "/robots.txt"
  ) {
    return;
  }

  // If credentials are valid, continue to site
  if (isAuthorized(request)) {
    return;
  }

  // Otherwise prompt for Basic Auth
  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${REALM}"`,
    },
  });
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - assets (Vite build output)
     * - favicon
     */
    "/((?!assets|favicon).*)",
  ],
};
