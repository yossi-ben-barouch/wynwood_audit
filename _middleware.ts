const BASIC_USER = process.env.BASIC_AUTH_USER;
const BASIC_PASS = process.env.BASIC_AUTH_PASSWORD;
const REALM = "Audit Dashboard";

function isAuthorized(request: Request): boolean {
  const auth = request.headers.get("authorization");
  if (!auth || !auth.startsWith("Basic ")) return false;

  const base64 = auth.slice("Basic ".length).trim();

  let decoded: string;
  try {
    // atob is available in the Edge-style runtime
    decoded = atob(base64);
  } catch {
    return false;
  }

  const [user, pass] = decoded.split(":");
  return user === BASIC_USER && pass === BASIC_PASS;
}

// This function runs before your static Vite build on every request
export default function middleware(request: Request) {
  const url = new URL(request.url);

  // Allow static assets and some public files through without auth
  if (
    url.pathname.startsWith("/assets") ||
    url.pathname.startsWith("/favicon") ||
    url.pathname === "/robots.txt"
  ) {
    return;
  }

  // If already authorized, continue to the site
  if (isAuthorized(request)) {
    return;
  }

  // Otherwise, ask browser for Basic Auth credentials
  return new Response("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${REALM}"`,
    },
  });
}
