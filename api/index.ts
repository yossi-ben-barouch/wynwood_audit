import express from "express";
import cookieParser from "cookie-parser";
import { createHmac } from "crypto";
import { auditData } from "../server/data/audit-data";
import { promotionAudit } from "../server/data/promotion-audit";
import { platformReviewData } from "../server/data/Audit/platform-review";

const app = express();

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

// Middleware
app.use(express.json());
app.use(cookieParser());

// Auth endpoints
app.post("/api/auth/login", (req, res) => {
  const { password } = req.body;
  if (password === AUTH_PASSWORD) {
    const token = createAuthToken();
    res.cookie("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
      path: "/",
    });
    res.json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid password" });
  }
});

app.post("/api/auth/logout", (req, res) => {
  res.clearCookie("auth_token", { path: "/" });
  res.json({ success: true, message: "Logged out successfully" });
});

app.get("/api/auth/status", (req, res) => {
  const token = req.cookies?.auth_token;
  const authenticated = verifyAuthToken(token);
  res.json({ authenticated });
});

// Auth middleware
const requireAuth = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const token = req.cookies?.auth_token;
  if (verifyAuthToken(token)) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
};

// Protected data endpoints
app.get("/api/executive-summary", requireAuth, (_req, res) => {
  res.json(auditData.executiveSummary);
});

app.get("/api/organizational-structure", requireAuth, (_req, res) => {
  res.json(auditData.organizational);
});

app.get("/api/current-state", requireAuth, (_req, res) => {
  res.json(auditData.currentState);
});

app.get("/api/problems", requireAuth, (_req, res) => {
  res.json(auditData.problems);
});

app.get("/api/recommendations", requireAuth, (_req, res) => {
  res.json(auditData.recommendations);
});

app.get("/api/marketing-strategy", requireAuth, (_req, res) => {
  res.json(auditData.marketingStrategy);
});

app.get("/api/promotion-audit", requireAuth, (_req, res) => {
  res.json(promotionAudit);
});

app.get("/api/platform-review", requireAuth, (_req, res) => {
  res.json(platformReviewData);
});

app.get("/api/team-reviews", requireAuth, (_req, res) => {
  res.json(auditData.teamReviews);
});

app.get("/api/audit-data", requireAuth, (_req, res) => {
  res.json(auditData);
});

export default app;
