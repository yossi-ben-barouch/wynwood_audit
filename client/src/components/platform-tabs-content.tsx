import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { PlatformReview } from "@/api/platform-review";
import {
  AlertCircle,
  CheckCircle2,
  Lightbulb,
  Maximize2,
  Settings,
  TrendingDown,
  TrendingUp,
} from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface TabsContentProps {
  platformReview: PlatformReview;
}

export function MeasurementTabContent({ platformReview }: TabsContentProps) {
  const { measurementDeepDive } = platformReview;

  return (
    <div className="space-y-6">
      <div className="rounded-md border-l-4 border-blue-500 bg-blue-50/50 p-4">
        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-blue-600" />
          {measurementDeepDive.headline}
        </h3>
        <p className="text-base text-muted-foreground">
          {measurementDeepDive.description}
        </p>
      </div>

      <Card className="border-blue-200 bg-blue-50/30">
        <CardHeader>
          <CardTitle className="text-base">Current State</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-base">
          <div>
            <span className="font-medium">Status:</span>
            <Badge variant="destructive" className="ml-2">
              {measurementDeepDive.currentState.status}
            </Badge>
          </div>
          <div>
            <span className="font-medium">Implementation:</span>
            <span className="text-muted-foreground ml-2">
              {measurementDeepDive.currentState.implementation}
            </span>
          </div>
          <div>
            <span className="font-medium">Active Events:</span>
            <div className="mt-1 flex flex-wrap gap-1">
              {measurementDeepDive.currentState.activeEvents.map((event, i) => (
                <Badge key={i} variant="outline" className="text-sm">
                  {event}
                </Badge>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <span className="font-medium text-red-600">Critical Issues:</span>
            <ul className="mt-2 space-y-1">
              {measurementDeepDive.currentState.criticalIssues.map(
                (issue, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1 block h-1 w-1 rounded-full bg-red-600 flex-shrink-0" />
                    <span>{issue}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h3 className="font-semibold text-lg text-foreground">Issues & Fixes</h3>
        {measurementDeepDive.issues.map((issue) => (
          <Card
            key={issue.id}
            className={
              issue.severity === "Critical"
                ? "border-red-200"
                : "border-yellow-200"
            }
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{issue.title}</CardTitle>
                <Badge
                  variant={
                    issue.severity === "Critical" ? "destructive" : "secondary"
                  }
                >
                  {issue.severity}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 text-base">
              <div>
                <span className="font-medium">Description:</span>
                <p className="text-muted-foreground mt-1">
                  {issue.description}
                </p>
              </div>
              <div>
                <span className="font-medium">Impact:</span>
                <p className="text-muted-foreground mt-1">{issue.impact}</p>
              </div>
              {issue.currentBehavior && (
                <div>
                  <span className="font-medium">Current Behavior:</span>
                  <p className="text-muted-foreground mt-1">
                    {issue.currentBehavior}
                  </p>
                </div>
              )}
              {issue.requiredFix && (
                <div>
                  <span className="font-medium text-primary">
                    Required Fix:
                  </span>
                  <p className="text-muted-foreground mt-1">
                    {issue.requiredFix}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">
          UTM Governance Template
        </h3>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">UTM Structure</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-base">
            <div className="rounded bg-muted p-3 font-mono text-xs">
              {measurementDeepDive.utmTemplate.structure}
            </div>
            <div className="space-y-2">
              {measurementDeepDive.utmTemplate.examples.map((ex, i) => (
                <div key={i} className="rounded border p-2">
                  <div className="font-medium text-foreground">
                    {ex.channel}
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    Template: {ex.template}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Example: {ex.example}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Recommendations</h3>
        {measurementDeepDive.recommendations.map((rec) => (
          <Card key={rec.priority} className="border-blue-200 bg-blue-50/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{rec.title}</CardTitle>
                <Badge variant="outline" className="bg-blue-100 text-blue-800">
                  Priority {rec.priority}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-base text-muted-foreground">{rec.description}</p>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">
                  Actions:
                </p>
                <ul className="space-y-1">
                  {rec.actions.map((action: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 block h-1 w-1 rounded-full bg-blue-600 flex-shrink-0" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function FeedsTabContent({ platformReview }: TabsContentProps) {
  const { feedsDeepDive } = platformReview;

  return (
    <div className="space-y-6">
      <div className="rounded-md border-l-4 border-blue-500 bg-blue-50/50 p-4">
        <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
          <AlertCircle className="h-5 w-5 text-blue-600" />
          {feedsDeepDive.headline}
        </h3>
        <p className="text-base text-muted-foreground">
          {feedsDeepDive.description}
        </p>
      </div>

      {feedsDeepDive.imageReference && (
        <div className="rounded-lg border border-border overflow-hidden">
          <img
            src={feedsDeepDive.imageReference}
            alt="Product feeds diagram"
            className="w-full h-auto"
          />
        </div>
      )}

      <Card className="border-blue-200 bg-blue-50/30">
        <CardHeader>
          <CardTitle className="text-base">Current State</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-base">
          <div>
            <span className="font-medium">Active Feeds:</span>
            <span className="text-muted-foreground ml-2">
              {feedsDeepDive.currentState.feedCount}
            </span>
          </div>
          <div>
            <span className="font-medium">Management Method:</span>
            <span className="text-muted-foreground ml-2">
              {feedsDeepDive.currentState.managementMethod}
            </span>
          </div>
          <div>
            <span className="font-medium">Data Control:</span>
            <span className="text-muted-foreground ml-2">
              {feedsDeepDive.currentState.dataControl}
            </span>
          </div>
          <Separator />
          <div>
            <span className="font-medium text-orange-600">Primary Issue:</span>
            <p className="text-muted-foreground mt-1 text-xs">
              {feedsDeepDive.currentState.primaryIssue}
            </p>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Issues</h3>
        {feedsDeepDive.issues.map((issue) => (
          <Card
            key={issue.id}
            className={
              issue.severity === "Critical"
                ? "border-red-200"
                : "border-yellow-200"
            }
          >
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{issue.title}</CardTitle>
                <Badge
                  variant={
                    issue.severity === "Critical" ? "destructive" : "secondary"
                  }
                >
                  {issue.severity}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 text-base">
              <p className="text-muted-foreground">{issue.description}</p>
              <div className="text-sm">
                <span className="font-medium">Impact:</span>
                <p className="text-muted-foreground mt-1">{issue.impact}</p>
              </div>
              <div className="text-sm">
                <span className="font-medium text-primary">
                  Recommendation:
                </span>
                <p className="text-muted-foreground mt-1">
                  {issue.recommendation}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Recommendations</h3>
        {feedsDeepDive.recommendations.map((rec) => (
          <Card key={rec.priority} className="border-blue-200 bg-blue-50/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{rec.title}</CardTitle>
                <Badge variant="outline" className="bg-blue-100 text-blue-800">
                  Priority {rec.priority}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-base text-muted-foreground">{rec.description}</p>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">
                  Actions:
                </p>
                <ul className="space-y-1">
                  {rec.actions.map((action: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 block h-1 w-1 rounded-full bg-blue-600 flex-shrink-0" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function CatalogTabContent({ platformReview }: TabsContentProps) {
  const { catalogDeepDive } = platformReview;

  return (
    <div className="space-y-6">
      <div className="rounded-md border-l-4 border-blue-500 bg-blue-50/50 p-4">
        <h3 className="font-semibold text-foreground mb-2">
          {catalogDeepDive.headline}
        </h3>
        <p className="text-base text-muted-foreground">
          {catalogDeepDive.description}
        </p>
      </div>

      <Card className="border-blue-200 bg-blue-50/30">
        <CardHeader>
          <CardTitle className="text-base">Current State</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4 text-sm">
          <div>
            <span className="font-medium">Total SKUs:</span>
            <span className="text-muted-foreground ml-2">
              {catalogDeepDive.currentState.totalSKUs.toLocaleString()}
            </span>
          </div>
          <div>
            <span className="font-medium text-green-700">Strengths:</span>
            <ul className="mt-2 space-y-1">
              {catalogDeepDive.currentState.strengths.map((strength, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1 block h-1 w-1 rounded-full bg-green-600 flex-shrink-0" />
                  <span>{strength}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <span className="font-medium text-amber-700">Opportunities:</span>
            <ul className="mt-2 space-y-1">
              {catalogDeepDive.currentState.opportunities.map((opp, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1 block h-1 w-1 rounded-full bg-amber-600 flex-shrink-0" />
                  <span>{opp}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Issues</h3>
        {catalogDeepDive.issues.map((issue) => (
          <Card key={issue.id}>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{issue.title}</CardTitle>
                <Badge
                  variant={issue.severity === "High" ? "secondary" : "outline"}
                >
                  {issue.severity}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2 text-base">
              <p className="text-muted-foreground">{issue.description}</p>
              <div className="text-sm">
                <span className="font-medium">Impact:</span>
                <p className="text-muted-foreground mt-1">{issue.impact}</p>
              </div>
              <div className="text-sm">
                <span className="font-medium text-primary">
                  Recommendation:
                </span>
                <p className="text-muted-foreground mt-1">
                  {issue.recommendation}
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Recommendations</h3>
        {catalogDeepDive.recommendations?.map((rec) => (
          <Card key={rec.priority} className="border-blue-200 bg-blue-50/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{rec.title}</CardTitle>
                <Badge variant="outline" className="bg-blue-100 text-blue-800">
                  Priority {rec.priority}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-base text-muted-foreground">{rec.description}</p>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">
                  Actions:
                </p>
                <ul className="space-y-1">
                  {rec.actions.map((action: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 block h-1 w-1 rounded-full bg-blue-600 flex-shrink-0" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function IntegrationsTabContent({ platformReview }: TabsContentProps) {
  const { integrationsDeepDive } = platformReview;

  return (
    <div className="space-y-6">
      <div className="rounded-md border-l-4 border-green-500 bg-green-50/50 p-4">
        <h3 className="font-semibold text-foreground mb-2">
          {integrationsDeepDive.headline}
        </h3>
        <p className="text-base text-muted-foreground">
          {integrationsDeepDive.description}
        </p>
      </div>

      <Card className="border-green-200 bg-green-50/30">
        <CardHeader>
          <CardTitle className="text-base">Integration Strengths</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="space-y-2">
            {integrationsDeepDive.currentState.integrationStrengths.map(
              (strength, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-green-600 flex-shrink-0" />
                  <span>{strength}</span>
                </li>
              )
            )}
          </ul>
        </CardContent>
      </Card>

      <Card className="border-purple-200 bg-purple-50/30">
        <CardHeader>
          <CardTitle className="text-base">App Stack</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-base">
          <div>
            <span className="font-medium">
              Active Apps ({integrationsDeepDive.appStack.activeApps.length}):
            </span>
            <div className="mt-2 space-y-2">
              {integrationsDeepDive.appStack.activeApps.map((app, i) => (
                <div key={i} className="rounded border p-2 text-xs">
                  <div className="font-medium flex items-center justify-between">
                    <span>{app.name}</span>
                    <Badge variant="outline">{app.status}</Badge>
                  </div>
                  <div className="text-muted-foreground mt-1">
                    {app.purpose}
                  </div>
                  <div className="text-muted-foreground">Cost: {app.cost}</div>
                  <div className="text-red-600 mt-1">⚠️ {app.issues}</div>
                </div>
              ))}
            </div>
          </div>
          <Separator />
          <div>
            <span className="font-medium text-green-700">
              Recommended Critical Apps:
            </span>
            <div className="mt-2 space-y-3">
              {integrationsDeepDive.appStack.criticalApps.map((app, i) => (
                <div
                  key={i}
                  className="rounded border border-green-200 bg-green-50/30 p-3 text-xs"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-sm">{app.app}</span>
                    <Badge
                      variant="outline"
                      className="bg-green-100 text-green-800"
                    >
                      {app.priority} Priority
                    </Badge>
                  </div>
                  <div className="text-muted-foreground mb-1">
                    <span className="font-medium">Category:</span>{" "}
                    {app.category}
                  </div>
                  <div className="text-muted-foreground mb-2">
                    <span className="font-medium">Why:</span>{" "}
                    {app.recommendation}
                  </div>
                  <div className="mb-2">
                    <span className="font-medium text-foreground">
                      Benefits:
                    </span>
                    <ul className="mt-1 space-y-1 ml-3">
                      {app.benefits.map((benefit, bi) => (
                        <li
                          key={bi}
                          className="flex gap-2 text-muted-foreground"
                        >
                          <span className="mt-1 block h-1 w-1 rounded-full bg-green-600 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-green-700 font-medium">
                    Est. Cost: {app.estimatedCost}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Data Flow</h3>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Flow Diagram</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-base">
            <div className="rounded bg-muted p-3 font-mono text-xs">
              {integrationsDeepDive.dataFlow.flowDiagram}
            </div>
            <div>
              <span className="font-medium">Steps:</span>
              <div className="mt-2 space-y-2">
                {integrationsDeepDive.dataFlow.steps.map((step) => (
                  <div key={step.step} className="rounded border p-2 text-xs">
                    <div className="font-medium">
                      {step.step}. {step.from} → {step.to}
                    </div>
                    <div className="text-muted-foreground mt-1">
                      Method: {step.method}
                    </div>
                    <div className="text-muted-foreground">
                      Details: {step.details}
                    </div>
                    <div className="text-red-600 mt-1">⚠️ {step.issues}</div>
                  </div>
                ))}
              </div>
            </div>
            <Separator />
            <div>
              <span className="font-medium">Manual Bottlenecks:</span>
              <ul className="mt-2 space-y-1">
                {integrationsDeepDive.dataFlow.manualBottlenecks.map(
                  (bottleneck, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 block h-1 w-1 rounded-full bg-red-600 flex-shrink-0" />
                      <span>{bottleneck}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">API & Webhook Usage</h3>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">
              Current State: {integrationsDeepDive.apiWebhookUsage.currentState}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3 text-base">
            <ul className="space-y-1">
              {integrationsDeepDive.apiWebhookUsage.details.map((detail, i) => (
                <li
                  key={i}
                  className="flex gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1 block h-1 w-1 rounded-full bg-muted-foreground flex-shrink-0" />
                  <span>{detail}</span>
                </li>
              ))}
            </ul>
            <Separator />
            <div className="text-sm">
              <span className="font-medium">Impact:</span>
              <p className="text-muted-foreground mt-1">
                {integrationsDeepDive.apiWebhookUsage.impact}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="space-y-3">
        <h3 className="font-semibold text-foreground">Recommendations</h3>
        {integrationsDeepDive.recommendations.map((rec) => (
          <Card key={rec.priority} className="border-green-200 bg-green-50/30">
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <CardTitle className="text-base">{rec.title}</CardTitle>
                <Badge
                  variant="outline"
                  className="bg-green-100 text-green-800"
                >
                  Priority {rec.priority}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-base text-muted-foreground">{rec.description}</p>
              <div>
                <p className="text-sm font-medium text-foreground mb-2">
                  Actions:
                </p>
                <ul className="space-y-1">
                  {rec.actions.map((action: string, i: number) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 block h-1 w-1 rounded-full bg-green-600 flex-shrink-0" />
                      <span>{action}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export function UXTabContent({ platformReview }: TabsContentProps) {
  const { uxDeepDive } = platformReview;

  return (
    <div className="space-y-6">
      <div className="rounded-md border-l-4 border-primary bg-primary/5 p-4">
        <h3 className="font-semibold text-foreground mb-2">
          {platformReview.uxDeepDive.headline}
        </h3>
        <p className="text-base text-muted-foreground">
          {platformReview.uxDeepDive.description}
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-green-200 bg-green-50/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Current Strengths</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {platformReview.uxDeepDive.currentState.strengths.map(
                (strength, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-green-600 flex-shrink-0" />
                    <span className="text-foreground">{strength}</span>
                  </li>
                )
              )}
            </ul>
          </CardContent>
        </Card>
        <Card className="border-amber-200 bg-amber-50/50">
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Areas for Improvement</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {platformReview.uxDeepDive.currentState.weaknesses.map(
                (weakness, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <span className="mt-1 block h-1.5 w-1.5 rounded-full bg-amber-600 flex-shrink-0" />
                    <span className="text-foreground">{weakness}</span>
                  </li>
                )
              )}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Product Page Improvements */}
      <Card className="border-primary/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>
              {platformReview.uxDeepDive.productPageImprovements.title}
            </CardTitle>
            <div className="flex gap-2">
              <Badge variant="secondary">
                {platformReview.uxDeepDive.productPageImprovements.priority}
              </Badge>
              <Badge variant="outline">
                {platformReview.uxDeepDive.productPageImprovements.status}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          {platformReview.uxDeepDive.productPageImprovements.recommendations.map(
            (rec, i) => (
              <div key={i} className="rounded-md border bg-muted/30 p-4">
                <h4 className="font-semibold text-foreground mb-2">
                  {rec.area}
                </h4>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-medium">Issue:</span>{" "}
                    <span className="text-muted-foreground">{rec.issue}</span>
                  </div>
                  <div>
                    <span className="font-medium">Solution:</span>{" "}
                    <span className="text-muted-foreground">
                      {rec.solution}
                    </span>
                  </div>
                  <div>
                    <span className="font-medium">Actions:</span>
                    <ul className="mt-1 space-y-1">
                      {rec.actions.map((action, j) => (
                        <li
                          key={j}
                          className="flex gap-2 text-muted-foreground"
                        >
                          <span className="mt-1 block h-1 w-1 rounded-full bg-primary flex-shrink-0" />
                          <span>{action}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="text-sm font-medium text-primary">
                    {rec.impact}
                  </div>
                  {rec.area === "Custom Sections & Content Distribution" && (
                    <div className="mt-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="group text-left w-full">
                            <div className="text-sm mb-1 flex items-center justify-between">
                              <span className="text-muted-foreground">
                                Example: Custom Product Page Sections
                              </span>
                              <Maximize2 className="h-3 w-3 text-muted-foreground" />
                            </div>
                            <img
                              src="/media/custom_section_example.png"
                              alt="Custom product page sections example"
                              className="w-full max-w-[300px] rounded-md border shadow-sm group-hover:shadow transition"
                            />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] p-2 sm:p-4">
                          <DialogHeader>
                            <DialogTitle>
                              Custom Product Page Sections
                            </DialogTitle>
                          </DialogHeader>
                          <img
                            src="/media/custom_section_example.png"
                            alt="Custom product page sections example"
                            className="w-full rounded-md"
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                  {rec.image && (
                    <div className="mt-3">
                      <Dialog>
                        <DialogTrigger asChild>
                          <button className="group text-left w-full">
                            <div className="text-sm mb-1 flex items-center justify-between">
                              <span className="text-muted-foreground">
                                Example: {rec.area}
                              </span>
                              <Maximize2 className="h-3 w-3 text-muted-foreground" />
                            </div>
                            <img
                              src={rec.image}
                              alt={`${rec.area} example`}
                              className="w-full max-w-[300px] rounded-md border shadow-sm group-hover:shadow transition"
                            />
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-[95vw] p-2 sm:p-4">
                          <DialogHeader>
                            <DialogTitle>{rec.area}</DialogTitle>
                          </DialogHeader>
                          <img
                            src={rec.image}
                            alt={`${rec.area} example`}
                            className="w-full rounded-md"
                          />
                        </DialogContent>
                      </Dialog>
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </CardContent>
      </Card>

      {/* Collection Page Redesign */}
      <Card className="border-blue-200 bg-blue-50/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>
              {platformReview.uxDeepDive.collectionPageRedesign.title}
            </CardTitle>
            <Badge variant="destructive">
              {platformReview.uxDeepDive.collectionPageRedesign.priority}
            </Badge>
          </div>
          <CardDescription>
            {platformReview.uxDeepDive.collectionPageRedesign.status}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-base">
          <div>
            <span className="font-medium">Issue:</span>{" "}
            <span className="text-muted-foreground">
              {platformReview.uxDeepDive.collectionPageRedesign.issue}
            </span>
          </div>
          <div>
            <span className="font-medium">Solution:</span>{" "}
            <span className="text-muted-foreground">
              {platformReview.uxDeepDive.collectionPageRedesign.solution}
            </span>
          </div>
          <div>
            <span className="font-medium">Recommended Components:</span>
            <div className="mt-2 grid gap-2">
              {platformReview.uxDeepDive.collectionPageRedesign.recommendations.map(
                (comp, i) => (
                  <div key={i} className="rounded border bg-white p-2 text-xs">
                    <div className="font-medium">{comp.component}</div>
                    <div className="text-muted-foreground">
                      {comp.description}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="text-sm font-medium text-primary pt-2 border-t">
            {platformReview.uxDeepDive.collectionPageRedesign.impact}
          </div>
        </CardContent>
      </Card>

      {/* Mobile Optimization */}
      <Card className="border-purple-200 bg-purple-50/30">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>
              {platformReview.uxDeepDive.mobileOptimization.title}
            </CardTitle>
            <Badge variant="destructive">
              {platformReview.uxDeepDive.mobileOptimization.priority}
            </Badge>
          </div>
          <CardDescription>
            {platformReview.uxDeepDive.mobileOptimization.status}
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3 text-base">
          <div>
            <span className="font-medium">Issue:</span>{" "}
            <span className="text-muted-foreground">
              {platformReview.uxDeepDive.mobileOptimization.issue}
            </span>
          </div>
          <div>
            <span className="font-medium">Solution:</span>{" "}
            <span className="text-muted-foreground">
              {platformReview.uxDeepDive.mobileOptimization.solution}
            </span>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <div className="font-medium mb-2">Implementation:</div>
              <ul className="space-y-1">
                {platformReview.uxDeepDive.mobileOptimization.recommendations.map(
                  (rec, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 block h-1 w-1 rounded-full bg-purple-600 flex-shrink-0" />
                      <span>{rec}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <div className="font-medium mb-2">Benefits:</div>
              <ul className="space-y-1">
                {platformReview.uxDeepDive.mobileOptimization.benefits.map(
                  (benefit, i) => (
                    <li
                      key={i}
                      className="flex gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1 block h-1 w-1 rounded-full bg-green-600 flex-shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>
          <div className="text-sm font-medium text-primary pt-2 border-t">
            {platformReview.uxDeepDive.mobileOptimization.impact}
          </div>
        </CardContent>
      </Card>

      {/* CRO Features */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle>{platformReview.uxDeepDive.croFeatures.title}</CardTitle>
            <Badge variant="destructive">
              {platformReview.uxDeepDive.croFeatures.priority}
            </Badge>
          </div>
          <CardDescription>
            {platformReview.uxDeepDive.croFeatures.status}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {platformReview.uxDeepDive.croFeatures.missingFeatures.map(
              (feature, i) => (
                <div key={i} className="rounded-md border p-3 text-sm">
                  <div className="font-medium text-foreground mb-1">
                    {feature.feature}
                  </div>
                  <div className="text-sm text-muted-foreground mb-2">
                    {feature.description}
                  </div>
                  <div className="text-sm text-primary font-medium">
                    {feature.impact}
                  </div>
                </div>
              )
            )}
          </div>
          <div className="mt-4 text-xs text-muted-foreground pt-3 border-t">
            {platformReview.uxDeepDive.croFeatures.implementation}
          </div>
        </CardContent>
      </Card>

      {/* Strategic Recommendations */}
      <div className="mt-8">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-600/10 text-green-600">
            <Lightbulb className="h-5 w-5" />
          </div>
          <h3 className="text-2xl font-bold tracking-tight">
            Strategic Recommendations
          </h3>
          <Badge variant="secondary" className="text-sm">
            Platform Optimization
          </Badge>
        </div>

        <div className="grid gap-6">
          {/* Theme Recommendation */}
          <Card className="border-2 border-green-200/50 bg-gradient-to-br from-green-50/50 to-background transition-all hover:shadow-xl dark:from-green-950/20">
            <CardHeader>
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 dark:bg-green-900/20">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <CardTitle className="text-xl">
                    Upgrade to a Conversion-Optimized Theme
                  </CardTitle>
                  <CardDescription className="text-base mt-1">
                    Implement a CRO-focused Shopify theme with built-in optimization features
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="rounded-lg border border-green-200 bg-green-50/50 p-5 dark:border-green-900/50 dark:bg-green-950/20">
                <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-green-700 dark:text-green-400">
                  <TrendingUp className="h-4 w-4" />
                  Recommended Solution
                </h4>
                <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                  Select a modern Shopify theme that includes native conversion rate optimization components 
                  and features. <strong>The Ella theme</strong> is an excellent example, offering advanced 
                  filtering, quick view functionality, sticky add-to-cart buttons, and optimized mobile 
                  checkout flows that can significantly improve conversion rates without custom development.
                </p>
                <div className="space-y-3">
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Built-in CRO Components
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Advanced product filtering, quick view, sticky cart, wishlist functionality
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Mobile-First Design
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Optimized for mobile commerce with touch-friendly interfaces and fast loading
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-600" />
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        Reduced Technical Debt
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Professional maintenance and updates included, minimizing custom code complexity
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
