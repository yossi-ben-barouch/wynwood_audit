import express from "express";
import session from "express-session";
import { auditData } from "../server/data/audit-data";
import { promotionAudit } from "../server/data/promotion-audit";
import { platformReviewData } from "../server/data/Audit/platform-review";

const app = express();

const AUTH_PASSWORD = process.env.AUTH_PASSWORD || "changeme";
const SESSION_SECRET =
  process.env.SESSION_SECRET || "your-secret-key-change-this";

// Extend session data type
declare module "express-session" {
  interface SessionData {
    authenticated?: boolean;
  }
}

// Middleware
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000, // 24 hours
    },
  })
);

// Auth endpoints
app.post("/api/auth/login", (req, res) => {
  const { password } = req.body;
  if (password === AUTH_PASSWORD) {
    req.session.authenticated = true;
    res.json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid password" });
  }
});

app.post("/api/auth/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ success: false, message: "Logout failed" });
    }
    res.json({ success: true, message: "Logged out successfully" });
  });
});

app.get("/api/auth/status", (req, res) => {
  res.json({ authenticated: !!req.session.authenticated });
});

// Auth middleware
const requireAuth = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  if (req.session.authenticated) {
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
