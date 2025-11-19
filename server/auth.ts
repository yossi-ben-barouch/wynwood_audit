import type { Express, Request, Response, NextFunction } from "express";
import session from "express-session";

const AUTH_PASSWORD = process.env.AUTH_PASSWORD || "changeme";
const SESSION_SECRET =
  process.env.SESSION_SECRET || "your-secret-key-change-this";

// Extend session data type
declare module "express-session" {
  interface SessionData {
    authenticated?: boolean;
  }
}

export function setupAuth(app: Express) {
  // Setup session middleware
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

  // Login endpoint
  app.post("/api/auth/login", (req: Request, res: Response) => {
    const { password } = req.body;

    if (password === AUTH_PASSWORD) {
      req.session.authenticated = true;
      res.json({ success: true, message: "Login successful" });
    } else {
      res.status(401).json({ success: false, message: "Invalid password" });
    }
  });

  // Logout endpoint
  app.post("/api/auth/logout", (req: Request, res: Response) => {
    req.session.destroy((err) => {
      if (err) {
        return res
          .status(500)
          .json({ success: false, message: "Logout failed" });
      }
      res.json({ success: true, message: "Logged out successfully" });
    });
  });

  // Check auth status endpoint
  app.get("/api/auth/status", (req: Request, res: Response) => {
    res.json({ authenticated: !!req.session.authenticated });
  });
}

// Middleware to protect routes
export function requireAuth(req: Request, res: Response, next: NextFunction) {
  if (req.session.authenticated) {
    return next();
  }
  res.status(401).json({ message: "Unauthorized" });
}
