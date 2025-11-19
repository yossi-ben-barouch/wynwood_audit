import type { VercelRequest, VercelResponse } from "@vercel/node";
import { createHmac } from "crypto";

const AUTH_PASSWORD = process.env.AUTH_PASSWORD || "changeme";
const SESSION_SECRET =
  process.env.SESSION_SECRET || "your-secret-key-change-this";

// Helper to create signed token
function createAuthToken(): string {
  const timestamp = Date.now();
  const expiresAt = timestamp + 24 * 60 * 60 * 1000; // 24 hours
  const payload = `${expiresAt}`;
  const signature = createHmac("sha256", SESSION_SECRET)
    .update(payload)
    .digest("hex");
  return `${payload}.${signature}`;
}

// Helper to verify token
function verifyAuthToken(token: string): boolean {
  if (!token) return false;
  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  const expectedSignature = createHmac("sha256", SESSION_SECRET)
    .update(payload)
    .digest("hex");

  if (signature !== expectedSignature) return false;

  const expiresAt = parseInt(payload, 10);
  return Date.now() < expiresAt;
}

// Helper to parse cookies
function parseCookies(
  cookieHeader: string | undefined
): Record<string, string> {
  if (!cookieHeader) return {};
  return Object.fromEntries(
    cookieHeader.split(";").map((c) => {
      const [key, ...v] = c.trim().split("=");
      return [key, v.join("=")];
    })
  );
}

// Helper to set cookie
function setCookie(
  res: VercelResponse,
  name: string,
  value: string,
  options: any
) {
  const cookieParts = [`${name}=${value}`];
  if (options.httpOnly) cookieParts.push("HttpOnly");
  if (options.secure) cookieParts.push("Secure");
  if (options.sameSite) cookieParts.push(`SameSite=${options.sameSite}`);
  if (options.maxAge)
    cookieParts.push(`Max-Age=${Math.floor(options.maxAge / 1000)}`);
  if (options.path) cookieParts.push(`Path=${options.path}`);
  res.setHeader("Set-Cookie", cookieParts.join("; "));
}

// Main handler function
export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const { url, method } = req;
  const path = url?.replace("/api", "") || "/";
  const cookies = parseCookies(req.headers.cookie as string);
  const token = cookies.auth_token;

  // Auth endpoints
  if (path === "/auth/login" && method === "POST") {
    const { password } = req.body as { password: string };
    if (password === AUTH_PASSWORD) {
      const authToken = createAuthToken();
      setCookie(res, "auth_token", authToken, {
        httpOnly: true,
        secure: true,
        sameSite: "lax",
        maxAge: 24 * 60 * 60 * 1000,
        path: "/",
      });
      return res
        .status(200)
        .json({ success: true, message: "Login successful" });
    } else {
      return res
        .status(401)
        .json({ success: false, message: "Invalid password" });
    }
  }

  if (path === "/auth/logout" && method === "POST") {
    res.setHeader(
      "Set-Cookie",
      "auth_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT"
    );
    return res
      .status(200)
      .json({ success: true, message: "Logged out successfully" });
  }

  if (path === "/auth/status" && method === "GET") {
    const authenticated = verifyAuthToken(token);
    return res.status(200).json({ authenticated });
  }

  // All other routes - not found
  return res.status(404).json({ message: "Not found" });
}
