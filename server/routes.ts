import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { auditData } from "./data/audit-data";

export async function registerRoutes(app: Express): Promise<Server> {
  // Audit Data API Routes

  // Executive Summary
  app.get("/api/executive-summary", (_req, res) => {
    res.json(auditData.executiveSummary);
  });

  // Organizational Structure
  app.get("/api/organizational-structure", (_req, res) => {
    res.json(auditData.organizational);
  });

  // Current State Assessment
  app.get("/api/current-state", (_req, res) => {
    res.json(auditData.currentState);
  });

  // Critical Problems
  app.get("/api/problems", (_req, res) => {
    res.json(auditData.problems);
  });

  // Strategic Recommendations
  app.get("/api/recommendations", (_req, res) => {
    res.json(auditData.recommendations);
  });

  // Marketing Strategy
  app.get("/api/marketing-strategy", (_req, res) => {
    res.json(auditData.marketingStrategy);
  });

  // Team Reviews
  app.get("/api/team-reviews", (_req, res) => {
    res.json(auditData.teamReviews);
  });

  // Full Audit Data (if needed)
  app.get("/api/audit-data", (_req, res) => {
    res.json(auditData);
  });

  const httpServer = createServer(app);

  return httpServer;
}
