import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Megaphone,
  Globe2,
  Mail,
  Share2,
  Store,
  Target,
  BarChart3,
} from "lucide-react";
import { usePromotionAuditQuery } from "@/api/promotion-audit";

export default function EcommerceReviewPromotion() {
  const {
    data: promotionAudit,
    isLoading: auditLoading,
    error: auditError,
  } = usePromotionAuditQuery();

  return (
    <div className="flex-1 overflow-auto">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-8 py-6">
        <header className="space-y-2">
          <div className="flex items-center gap-2">
            <Megaphone className="h-6 w-6 text-primary" />
            <h1 className="text-2xl font-semibold text-foreground">
              Promotion Review
            </h1>
          </div>
          <p className="text-sm text-muted-foreground">
            SEO, paid media, email/CRM, social, and marketplaces — interactive,
            tabular summary with evidence.
          </p>
        </header>

        {promotionAudit?.summary && (
          <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
            <CardHeader>
              <CardTitle>{promotionAudit.summary.executive.headline}</CardTitle>
              <CardDescription>{promotionAudit.summary.executive.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-5">
                {promotionAudit.summary.channels.map((channel) => (
                  <div key={channel.id} className="rounded-md border p-3 text-sm hover:border-primary/40 transition">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium">{channel.name}</span>
                      <Badge variant={channel.statusColor === "destructive" ? "destructive" : "secondary"} className="text-xs">
                        {channel.status}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-xs leading-relaxed">{channel.headline}</p>
                  </div>
                ))}
              </div>

              <Separator />

              <div className="space-y-4">
                <h3 className="font-semibold text-foreground">Key Insights</h3>
                <div className="grid gap-3 md:grid-cols-2">
                  {promotionAudit.summary.keyInsights.map((insight, i) => (
                    <div key={i} className="rounded-md border-l-4 border-primary/40 bg-primary/5 p-3">
                      <div className="font-medium text-sm">{insight.title}</div>
                      <p className="mt-1 text-xs text-muted-foreground">{insight.description}</p>
                    </div>
                  ))}
                </div>
              </div>

            </CardContent>
          </Card>
        )}

        <Card>
          <CardHeader>
            <CardTitle>Channel Deep Dive</CardTitle>
            <CardDescription>
              Switch tabs to review channels. Overview summarizes all findings.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="paid" className="w-full">
              <TabsList>
                <TabsTrigger value="paid">Paid</TabsTrigger>
                <TabsTrigger value="seo">SEO</TabsTrigger>
                <TabsTrigger value="email">Email/CRM</TabsTrigger>
                <TabsTrigger value="social">Social</TabsTrigger>
                <TabsTrigger value="marketplaces">Marketplaces</TabsTrigger>
              </TabsList>

              <TabsContent value="paid">
                {auditLoading ? (
                  <div className="p-4 text-sm text-muted-foreground">Loading paid audit…</div>
                ) : auditError ? (
                  <div className="p-4 text-sm text-destructive">Failed to load paid audit.</div>
                ) : promotionAudit?.paid ? (
                <div className="grid gap-4 grid-cols-1">
                  <Card className="border-red-300 shadow-sm ring-1 ring-red-200/60 bg-gradient-to-br from-red-50/70 to-transparent">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-red-600" />
                          <CardTitle className="text-base">{promotionAudit.paid.conversionIssue.title}</CardTitle>
                        </div>
                        <Badge variant="secondary">{promotionAudit.paid.conversionIssue.severity}</Badge>
                      </div>
                      <CardDescription>{promotionAudit.paid.conversionIssue.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                      <div className="rounded-md border bg-white/40 p-3 text-muted-foreground">{promotionAudit.paid.conversionIssue.explanation}</div>
                      <div className="grid gap-2">
                        <div className="font-medium text-foreground">
                          What this means (for stakeholders)
                        </div>
                        <div className="text-muted-foreground">{promotionAudit.paid.conversionIssue.stakeholders}</div>
                      </div>
                      <div className="grid gap-2">
                        <div className="font-medium text-foreground">
                          Implementation notes (for technical)
                        </div>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {promotionAudit.paid.conversionIssue.technical.map((t, i) => (
                            <li key={i}>{t}</li>
                          ))}
                        </ul>
                      </div>
                      <Separator />
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Owner: {promotionAudit.paid.conversionIssue.owner}</Badge>
                        <Badge variant="outline">Impact: {promotionAudit.paid.conversionIssue.impact}</Badge>
                        <Badge variant="outline">Timeline: {promotionAudit.paid.conversionIssue.timeline}</Badge>
                      </div>
                      {promotionAudit.paid.conversionIssue.media && promotionAudit.paid.conversionIssue.media.length > 0 && (
                        <div className="mt-2 grid gap-3 md:grid-cols-2">
                          {promotionAudit.paid.conversionIssue.media.map((m, i) => (
                            <Dialog key={i}>
                              <DialogTrigger asChild>
                                <button className="group text-left">
                                  <div className="text-xs mb-1 flex items-center justify-between">
                                    <span>{m.title}</span>
                                    {m.badge && <Badge variant="outline">{m.badge}</Badge>}
                                  </div>
                                  <img src={m.src} alt={m.alt} className="rounded-md border shadow-sm group-hover:shadow" />
                                </button>
                              </DialogTrigger>
                              <DialogContent className="max-w-[95vw] p-2 sm:p-4">
                                <DialogHeader>
                                  <DialogTitle>{m.title}</DialogTitle>
                                  {m.description && <DialogDescription>{m.description}</DialogDescription>}
                                </DialogHeader>
                                <img src={m.src} alt={m.alt} className="w-full max-h-[85vh] object-contain rounded-md border" />
                              </DialogContent>
                            </Dialog>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="border-amber-300 ring-1 ring-amber-200/60 bg-gradient-to-br from-amber-50/70 to-transparent">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <BarChart3 className="h-4 w-4 text-amber-600" />
                          <CardTitle className="text-base">{promotionAudit.paid.feedOptimization.title}</CardTitle>
                        </div>
                        <Badge variant="outline">{promotionAudit.paid.feedOptimization.badge}</Badge>
                      </div>
                      <CardDescription>{promotionAudit.paid.feedOptimization.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                      <div className="rounded-md border bg-white/40 p-3 text-muted-foreground">{promotionAudit.paid.feedOptimization.explanation}</div>
                      <div className="grid gap-2">
                        <div className="font-medium text-foreground">
                          Action
                        </div>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {promotionAudit.paid.feedOptimization.actions.map((a, i) => (
                            <li key={i}>{a}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Owner: {promotionAudit.paid.feedOptimization.owner}</Badge>
                        <Badge variant="outline">Impact: {promotionAudit.paid.feedOptimization.impact}</Badge>
                        <Badge variant="outline">Timeline: {promotionAudit.paid.feedOptimization.timeline}</Badge>
                      </div>
                      {promotionAudit.paid.feedOptimization.media && promotionAudit.paid.feedOptimization.media.length > 0 && (
                        <div className="mt-2 grid gap-3 md:grid-cols-2">
                          {promotionAudit.paid.feedOptimization.media.map((m, i) => (
                            <Dialog key={i}>
                              <DialogTrigger asChild>
                                <button className="group text-left">
                                  <div className="text-xs mb-1 flex items-center justify-between">
                                    <span>{m.title}</span>
                                    {m.badge && <Badge variant="outline">{m.badge}</Badge>}
                                  </div>
                                  <img src={m.src} alt={m.alt} className="rounded-md border shadow-sm group-hover:shadow" />
                                </button>
                              </DialogTrigger>
                              <DialogContent className="max-w-[95vw] p-2 sm:p-4">
                                <DialogHeader>
                                  <DialogTitle>{m.title}</DialogTitle>
                                  {m.description && <DialogDescription>{m.description}</DialogDescription>}
                                </DialogHeader>
                                <img src={m.src} alt={m.alt} className="w-full max-h-[85vh] object-contain rounded-md border" />
                              </DialogContent>
                            </Dialog>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="border-blue-300 ring-1 ring-blue-200/60 bg-gradient-to-br from-blue-50/70 to-transparent">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Target className="h-4 w-4 text-blue-600" />
                          <CardTitle className="text-base">{promotionAudit.paid.campaignStructure.title}</CardTitle>
                        </div>
                        <Badge variant="outline">{promotionAudit.paid.campaignStructure.badge}</Badge>
                      </div>
                      <CardDescription>{promotionAudit.paid.campaignStructure.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                      <div className="grid gap-1">
                        <div className="font-medium">Target state</div>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {promotionAudit.paid.campaignStructure.architecture.map((a, i) => (
                            <li key={i}>{a}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="grid gap-1">
                        <div className="font-medium">
                          Weekly operating cadence
                        </div>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {promotionAudit.paid.campaignStructure.cadence.map((c, i) => (
                            <li key={i}>{c}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Owner: {promotionAudit.paid.campaignStructure.owner}</Badge>
                        <Badge variant="outline">Impact: {promotionAudit.paid.campaignStructure.impact}</Badge>
                        <Badge variant="outline">Timeline: {promotionAudit.paid.campaignStructure.timeline}</Badge>
                      </div>
                      {promotionAudit.paid.campaignStructure.media && promotionAudit.paid.campaignStructure.media.length > 0 && (
                        <div className="mt-2 grid gap-3 md:grid-cols-2">
                          {promotionAudit.paid.campaignStructure.media.map((m, i) => (
                            <Dialog key={i}>
                              <DialogTrigger asChild>
                                <button className="group text-left">
                                  <div className="text-xs mb-1 flex items-center justify-between">
                                    <span>{m.title}</span>
                                    {m.badge && <Badge variant="outline">{m.badge}</Badge>}
                                  </div>
                                  <img src={m.src} alt={m.alt} className="rounded-md border shadow-sm group-hover:shadow" />
                                </button>
                              </DialogTrigger>
                              <DialogContent className="max-w-[95vw] p-2 sm:p-4">
                                <DialogHeader>
                                  <DialogTitle>{m.title}</DialogTitle>
                                  {m.description && <DialogDescription>{m.description}</DialogDescription>}
                                </DialogHeader>
                                <img src={m.src} alt={m.alt} className="w-full max-h-[85vh] object-contain rounded-md border" />
                              </DialogContent>
                            </Dialog>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="border-fuchsia-300 ring-1 ring-fuchsia-200/60 bg-gradient-to-br from-fuchsia-50/70 to-transparent">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Share2 className="h-4 w-4 text-fuchsia-600" />
                          <CardTitle className="text-base">{promotionAudit.paid.metaAds.title}</CardTitle>
                        </div>
                        <Badge variant="secondary">{promotionAudit.paid.metaAds.badge}</Badge>
                      </div>
                      <CardDescription>{promotionAudit.paid.metaAds.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                      <div className="grid gap-1">
                        <div className="font-medium">Plan</div>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {promotionAudit.paid.metaAds.recommendations.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Owner: {promotionAudit.paid.metaAds.owner}</Badge>
                        <Badge variant="outline">Impact: {promotionAudit.paid.metaAds.impact}</Badge>
                        <Badge variant="outline">Timeline: {promotionAudit.paid.metaAds.timeline}</Badge>
                      </div>
                      {promotionAudit.paid.metaAds.media && promotionAudit.paid.metaAds.media.length > 0 && (
                        <div className="mt-2 grid gap-3 md:grid-cols-2">
                          {promotionAudit.paid.metaAds.media.map((m, i) => (
                            <Dialog key={i}>
                              <DialogTrigger asChild>
                                <button className="group text-left">
                                  <div className="text-xs mb-1 flex items-center justify-between">
                                    <span>{m.title}</span>
                                    {m.badge && <Badge variant="outline">{m.badge}</Badge>}
                                  </div>
                                  <img src={m.src} alt={m.alt} className="rounded-md border shadow-sm group-hover:shadow" />
                                </button>
                              </DialogTrigger>
                              <DialogContent className="max-w-[95vw] p-2 sm:p-4">
                                <DialogHeader>
                                  <DialogTitle>{m.title}</DialogTitle>
                                  {m.description && <DialogDescription>{m.description}</DialogDescription>}
                                </DialogHeader>
                                <img src={m.src} alt={m.alt} className="w-full max-h-[85vh] object-contain rounded-md border" />
                              </DialogContent>
                            </Dialog>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="border-emerald-300 ring-1 ring-emerald-200/60 bg-gradient-to-br from-emerald-50/70 to-transparent">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Store className="h-4 w-4 text-emerald-600" />
                          <CardTitle className="text-base">{promotionAudit.paid.amazonAds.title}</CardTitle>
                        </div>
                        <Badge variant="outline">{promotionAudit.paid.amazonAds.badge}</Badge>
                      </div>
                      <CardDescription>{promotionAudit.paid.amazonAds.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4 text-sm">
                      <div className="grid gap-1">
                        <div className="font-medium">Action</div>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {promotionAudit.paid.amazonAds.recommendations.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="rounded-md border border-amber-200 bg-amber-50/60 p-3 text-xs text-amber-900">{promotionAudit.paid.amazonAds.warning}</div>
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline">Owner: {promotionAudit.paid.amazonAds.owner}</Badge>
                        <Badge variant="outline">Impact: {promotionAudit.paid.amazonAds.impact}</Badge>
                        <Badge variant="outline">Timeline: {promotionAudit.paid.amazonAds.timeline}</Badge>
                      </div>
                      {promotionAudit.paid.amazonAds.media && promotionAudit.paid.amazonAds.media.length > 0 && (
                        <div className="mt-2 grid gap-3 md:grid-cols-3">
                          {promotionAudit.paid.amazonAds.media.map((m, i) => (
                            <Dialog key={i}>
                              <DialogTrigger asChild>
                                <button className="group text-left">
                                  <div className="text-xs mb-1 flex items-center justify-between">
                                    <span>{m.title}</span>
                                    {m.badge && <Badge variant="outline">{m.badge}</Badge>}
                                  </div>
                                  <img src={m.src} alt={m.alt} className="rounded-md border shadow-sm group-hover:shadow" />
                                </button>
                              </DialogTrigger>
                              <DialogContent className="max-w-[95vw] p-2 sm:p-4">
                                <DialogHeader>
                                  <DialogTitle>{m.title}</DialogTitle>
                                  {m.description && <DialogDescription>{m.description}</DialogDescription>}
                                </DialogHeader>
                                <img src={m.src} alt={m.alt} className="w-full max-h-[85vh] object-contain rounded-md border" />
                              </DialogContent>
                            </Dialog>
                          ))}
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  <Card className="border-primary/40 ring-1 ring-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base">{promotionAudit.paid.actionPlan14d.title}</CardTitle>
                      <Badge variant="secondary">Execution</Badge>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm text-muted-foreground">
                      <ol className="list-decimal pl-5">
                        {promotionAudit.paid.actionPlan14d.steps.map((s, i) => (
                          <li key={i}>{s}</li>
                        ))}
                      </ol>
                    </CardContent>
                  </Card>
                </div>
                ) : (
                  <div className="p-4 text-sm text-muted-foreground">No paid audit data.</div>
                )}
              </TabsContent>

              <TabsContent value="seo">
                {auditLoading ? (
                  <div className="p-4 text-sm text-muted-foreground">Loading SEO audit…</div>
                ) : auditError ? (
                  <div className="p-4 text-sm text-destructive">Failed to load SEO audit.</div>
                ) : promotionAudit?.seo ? (
                  <div className="grid gap-4 grid-cols-1">
                    <Card className="border-green-300 ring-1 ring-green-200/60 bg-gradient-to-br from-green-50/70 to-transparent">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">{promotionAudit.seo.performanceSnapshot.badge}</CardTitle>
                        </div>
                        <CardDescription>{promotionAudit.seo.performanceSnapshot.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm">
                        <div className="grid gap-2">
                          {promotionAudit.seo.performanceSnapshot.metrics.map((m, i) => (
                            <div key={i} className="flex justify-between">
                              <span className="text-muted-foreground">{m.label}</span>
                              <span className="font-medium">{m.value}</span>
                            </div>
                          ))}
                        </div>
                        {promotionAudit.seo.performanceSnapshot.notes.map((n, i) => (
                          <p key={i} className="text-muted-foreground">{n}</p>
                        ))}
                      </CardContent>
                    </Card>

                    <Card className="border-red-300 ring-1 ring-red-200/60 bg-gradient-to-br from-red-50/70 to-transparent">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">{promotionAudit.seo.oosIssue.title}</CardTitle>
                          <Badge variant="secondary">{promotionAudit.seo.oosIssue.severity}</Badge>
                        </div>
                        <CardDescription>{promotionAudit.seo.oosIssue.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm">
                        <div className="grid gap-2">
                          <div className="font-medium">What this means (stakeholders)</div>
                          {promotionAudit.seo.oosIssue.stakeholders.map((s, i) => (
                            <p key={i} className="text-muted-foreground">{s}</p>
                          ))}
                        </div>
                        <div className="grid gap-2">
                          <div className="font-medium">Implementation notes (technical)</div>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            {promotionAudit.seo.oosIssue.technical.map((t, i) => (
                              <li key={i}>{t}</li>
                            ))}
                          </ul>
                        </div>
                        <Separator />
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Owner: {promotionAudit.seo.oosIssue.owner}</Badge>
                          <Badge variant="outline">Impact: {promotionAudit.seo.oosIssue.impact}</Badge>
                          <Badge variant="outline">Timeline: {promotionAudit.seo.oosIssue.timeline}</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-blue-300 ring-1 ring-blue-200/60 bg-gradient-to-br from-blue-50/70 to-transparent">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">Category Hubs (Mini Homepages)</CardTitle>
                          <Badge variant="outline">{promotionAudit.seo.categoryHubs.badge}</Badge>
                        </div>
                        <CardDescription>{promotionAudit.seo.categoryHubs.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm">
                        <div className="grid gap-2">
                          <div className="font-medium">Components</div>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            {promotionAudit.seo.categoryHubs.components.map((c, i) => (
                              <li key={i}>{c}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Owner: {promotionAudit.seo.categoryHubs.owner}</Badge>
                          <Badge variant="outline">Impact: {promotionAudit.seo.categoryHubs.impact}</Badge>
                          <Badge variant="outline">Timeline: {promotionAudit.seo.categoryHubs.timeline}</Badge>
                        </div>
                        {promotionAudit.seo.categoryHubs.media && promotionAudit.seo.categoryHubs.media.length > 0 && (
                          <div className="mt-4 grid gap-3 md:grid-cols-2">
                            {promotionAudit.seo.categoryHubs.media.map((m, i) => (
                              <Dialog key={i}>
                                <DialogTrigger asChild>
                                  <button className="group text-left">
                                    <div className="text-xs mb-1 flex items-center justify-between">
                                      <span>{m.title}</span>
                                      {m.badge && <Badge variant="outline">{m.badge}</Badge>}
                                    </div>
                                    <img src={m.src} alt={m.alt} className="rounded-md border shadow-sm group-hover:shadow" />
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-[95vw] p-2 sm:p-4">
                                  <DialogHeader>
                                    <DialogTitle>{m.title}</DialogTitle>
                                    {m.description && <DialogDescription>{m.description}</DialogDescription>}
                                  </DialogHeader>
                                  <img src={m.src} alt={m.alt} className="w-full max-h-[85vh] object-contain rounded-md border" />
                                </DialogContent>
                              </Dialog>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    <Card className="border-yellow-300 ring-1 ring-yellow-200/60 bg-gradient-to-br from-yellow-50/70 to-transparent">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Content Strategy: TOFU · MOFU · BOFU</CardTitle>
                        <Badge variant="outline">{promotionAudit.seo.contentStrategy.badge}</Badge>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm">
                        <div className="grid gap-2">
                          <div className="font-medium">TOFU (Top of Funnel) — build authority</div>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            {promotionAudit.seo.contentStrategy.tofu.map((t, i) => (
                              <li key={i}>{t}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid gap-2">
                          <div className="font-medium">MOFU (Middle) — compare and consider</div>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            {promotionAudit.seo.contentStrategy.mofu.map((m, i) => (
                              <li key={i}>{m}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid gap-2">
                          <div className="font-medium">BOFU (Bottom) — convert</div>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            {promotionAudit.seo.contentStrategy.bofu.map((b, i) => (
                              <li key={i}>{b}</li>
                            ))}
                          </ul>
                        </div>
                        <Separator />
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Owner: {promotionAudit.seo.contentStrategy.owner}</Badge>
                          <Badge variant="outline">Impact: {promotionAudit.seo.contentStrategy.impact}</Badge>
                          <Badge variant="outline">Timeline: {promotionAudit.seo.contentStrategy.timeline}</Badge>
                        </div>
                        {promotionAudit.seo.contentStrategy.media && promotionAudit.seo.contentStrategy.media.length > 0 && (
                          <div className="mt-4 grid gap-3 md:grid-cols-2">
                            {promotionAudit.seo.contentStrategy.media.map((m, i) => (
                              <Dialog key={i}>
                                <DialogTrigger asChild>
                                  <button className="group text-left">
                                    <div className="text-xs mb-1 flex items-center justify-between">
                                      <span>{m.title}</span>
                                      {m.badge && <Badge variant="outline">{m.badge}</Badge>}
                                    </div>
                                    <img src={m.src} alt={m.alt} className="rounded-md border shadow-sm group-hover:shadow" />
                                  </button>
                                </DialogTrigger>
                                <DialogContent className="max-w-[95vw] p-2 sm:p-4">
                                  <DialogHeader>
                                    <DialogTitle>{m.title}</DialogTitle>
                                    {m.description && <DialogDescription>{m.description}</DialogDescription>}
                                  </DialogHeader>
                                  <img src={m.src} alt={m.alt} className="w-full max-h-[85vh] object-contain rounded-md border" />
                                </DialogContent>
                              </Dialog>
                            ))}
                          </div>
                        )}
                      </CardContent>
                    </Card>

                    <Card className="border-purple-300 ring-1 ring-purple-200/60 bg-gradient-to-br from-purple-50/70 to-transparent">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Press, Links, and Internal Pathways</CardTitle>
                        <Badge variant="outline">{promotionAudit.seo.pressLinks.badge}</Badge>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm">
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {promotionAudit.seo.pressLinks.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Owner: {promotionAudit.seo.pressLinks.owner}</Badge>
                          <Badge variant="outline">Impact: {promotionAudit.seo.pressLinks.impact}</Badge>
                          <Badge variant="outline">Timeline: {promotionAudit.seo.pressLinks.timeline}</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-pink-300 ring-1 ring-pink-200/60 bg-gradient-to-br from-pink-50/70 to-transparent">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Seasonal & Gift SEO</CardTitle>
                        <Badge variant="outline">{promotionAudit.seo.seasonal.badge}</Badge>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm">
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {promotionAudit.seo.seasonal.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                        <div className="flex flex-wrap gap-2">
                          <Badge variant="outline">Owner: {promotionAudit.seo.seasonal.owner}</Badge>
                          <Badge variant="outline">Impact: {promotionAudit.seo.seasonal.impact}</Badge>
                          <Badge variant="outline">Timeline: {promotionAudit.seo.seasonal.timeline}</Badge>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-primary/40 ring-1 ring-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Next 90 Days: SEO Roadmap</CardTitle>
                        <Badge variant="secondary">{promotionAudit.seo.roadmap90d.badge}</Badge>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm text-muted-foreground">
                        <ol className="list-decimal pl-5">
                          {promotionAudit.seo.roadmap90d.steps.map((s, i) => (
                            <li key={i}>{s}</li>
                          ))}
                        </ol>
                      </CardContent>
                    </Card>

                    <Card className="border-primary/40 ring-1 ring-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Expected Outcomes</CardTitle>
                        <Badge variant="secondary">{promotionAudit.seo.outcomes.badge}</Badge>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm text-muted-foreground">
                        <ul className="list-disc pl-5">
                          {promotionAudit.seo.outcomes.bullets.map((b, i) => (
                            <li key={i}>{b}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div className="p-4 text-sm text-muted-foreground">No SEO audit data.</div>
                )}
              </TabsContent>

              <TabsContent value="email">
                {auditLoading ? (
                  <div className="p-4 text-sm text-muted-foreground">Loading email audit…</div>
                ) : auditError ? (
                  <div className="p-4 text-sm text-destructive">Failed to load email audit.</div>
                ) : promotionAudit?.email ? (
                  <div className="grid gap-4 grid-cols-1">
                    <Card className="border-blue-300 ring-1 ring-blue-200/60 bg-gradient-to-br from-blue-50/70 to-transparent">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Overview</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm">
                        <div className="grid gap-2">
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Tool</span>
                            <span className="font-medium">{promotionAudit.email.overview.tool}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Monthly Cost</span>
                            <span className="font-medium">{promotionAudit.email.overview.monthlyCost}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-muted-foreground">Subscribers</span>
                            <span className="font-medium">{promotionAudit.email.overview.subscribers}</span>
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <div className="font-medium">Key Issues</div>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            {promotionAudit.email.overview.notes.map((n, i) => (
                              <li key={i}>{n}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-red-300 ring-1 ring-red-200/60 bg-gradient-to-br from-red-50/70 to-transparent">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Diagnosis</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm">
                        {promotionAudit.email.diagnosis.map((d, i) => (
                          <div key={i} className="border-l-4 border-red-300 pl-3">
                            <div className="font-medium">{d.issue}</div>
                            <div className="text-muted-foreground">Symptom: {d.symptom}</div>
                            <div className="text-muted-foreground">Impact: {d.impact}</div>
                            <div className="text-muted-foreground">Fix: {d.fix}</div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                    <Card className="border-green-300 ring-1 ring-green-200/60 bg-gradient-to-br from-green-50/70 to-transparent">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Migration: {promotionAudit.email.migration.recommendedTool}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm">
                        <div className="grid gap-2">
                          <div className="font-medium">Rationale</div>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            {promotionAudit.email.migration.rationale.map((r, i) => (
                              <li key={i}>{r}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid gap-2">
                          <div className="font-medium">Projections</div>
                          <div className="grid gap-1 text-muted-foreground">
                            <div>Monthly Cost: {promotionAudit.email.migration.projections.monthlyCost}</div>
                            <div>CTR: {promotionAudit.email.migration.projections.ctr}</div>
                            <div>CVR: {promotionAudit.email.migration.projections.cvr}</div>
                            <div>Revenue Share: {promotionAudit.email.migration.projections.revenueShare}</div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-purple-300 ring-1 ring-purple-200/60 bg-gradient-to-br from-purple-50/70 to-transparent">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Segmentation & List Hygiene</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm">
                        <div className="grid gap-2">
                          <div className="font-medium">Phase 1: Cleanup</div>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            {promotionAudit.email.segmentation.phase1Cleanup.map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid gap-2">
                          <div className="font-medium">Phase 2: Rebuild</div>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            {promotionAudit.email.segmentation.phase2Rebuild.map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-amber-300 ring-1 ring-amber-200/60 bg-gradient-to-br from-amber-50/70 to-transparent">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Automations</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm">
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {promotionAudit.email.automations.map((a, i) => (
                            <li key={i}>{a}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-cyan-300 ring-1 ring-cyan-200/60 bg-gradient-to-br from-cyan-50/70 to-transparent">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Creative & Templates</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm">
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {promotionAudit.email.creative.recommendations.map((r, i) => (
                            <li key={i}>{r}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>

                    <Card className="border-indigo-300 ring-1 ring-indigo-200/60 bg-gradient-to-br from-indigo-50/70 to-transparent">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Analytics & Tracking</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm">
                        <div className="grid gap-2">
                          <div className="font-medium">Tracking Setup</div>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            {promotionAudit.email.analytics.tracking.map((t, i) => (
                              <li key={i}>{t}</li>
                            ))}
                          </ul>
                        </div>
                        <div className="grid gap-2">
                          <div className="font-medium">KPIs to Monitor</div>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            {promotionAudit.email.analytics.kpis.map((k, i) => (
                              <li key={i}>{k}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-primary/40 ring-1 ring-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">90-Day Migration Plan</CardTitle>
                        <Badge variant="secondary">Execution</Badge>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm text-muted-foreground">
                        <ol className="list-decimal pl-5">
                          {promotionAudit.email.plan90d.map((p, i) => (
                            <li key={i}>{p}</li>
                          ))}
                        </ol>
                      </CardContent>
                    </Card>

                    <Card className="border-primary/40 ring-1 ring-primary/30 bg-gradient-to-br from-primary/5 to-transparent">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">Expected Outcomes</CardTitle>
                        <Badge variant="secondary">Targets</Badge>
                      </CardHeader>
                      <CardContent className="space-y-3 text-sm text-muted-foreground">
                        <ul className="list-disc pl-5">
                          {promotionAudit.email.outcomes.map((o, i) => (
                            <li key={i}>{o}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                ) : (
                  <div className="p-4 text-sm text-muted-foreground">No email audit data.</div>
                )}
              </TabsContent>

              <TabsContent value="social">
                {auditLoading ? (
                  <div className="p-4 text-sm text-muted-foreground">Loading social audit…</div>
                ) : auditError ? (
                  <div className="p-4 text-sm text-destructive">Failed to load social audit.</div>
                ) : promotionAudit?.social ? (
                  <div className="grid gap-4 grid-cols-1">
                    <Card className="border-blue-300 ring-1 ring-blue-200/60 bg-gradient-to-br from-blue-50/70 to-transparent">
                      <CardHeader className="pb-2">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base">{promotionAudit.social.snapshot.title}</CardTitle>
                          <Badge variant="secondary">{promotionAudit.social.snapshot.badge}</Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm">
                        <p className="text-muted-foreground">{promotionAudit.social.snapshot.description}</p>
                        <div className="grid gap-2">
                          <div className="font-medium">Platform Mix</div>
                          <ul className="list-disc pl-5 text-muted-foreground">
                            {promotionAudit.social.snapshot.platforms.map((p, i) => (
                              <li key={i}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="border-red-300 ring-1 ring-red-200/60 bg-gradient-to-br from-red-50/70 to-transparent">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-base">{promotionAudit.social.keyGaps.title}</CardTitle>
                        <Badge variant="secondary">{promotionAudit.social.keyGaps.badge}</Badge>
                      </CardHeader>
                      <CardContent className="space-y-4 text-sm">
                        {promotionAudit.social.keyGaps.gaps.map((g, i) => (
                          <div key={i} className="border-l-4 border-red-300 pl-3">
                            <div className="font-medium">{g.issue}</div>
                            <div className="text-muted-foreground">{g.description}</div>
                            <div className="flex flex-wrap gap-2 mt-2">
                              <Badge variant="outline" className="text-xs">Impact: {g.impact}</Badge>
                              <Badge variant="outline" className="text-xs">Owner: {g.owner}</Badge>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                    </Card>

                  </div>
                ) : (
                  <div className="p-4 text-sm text-muted-foreground">No social audit data.</div>
                )}
              </TabsContent>

              <TabsContent value="marketplaces">
                {auditLoading ? (
                  <div className="p-4 text-sm text-muted-foreground">Loading marketplaces…</div>
                ) : auditError ? (
                  <div className="p-4 text-sm text-destructive">Failed to load marketplaces data.</div>
                ) : promotionAudit?.marketplaces ? (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead className="text-left text-muted-foreground">
                        <tr>
                          <th className="py-2 pr-4">Status</th>
                          <th className="py-2 pr-4">Key Findings</th>
                          <th className="py-2 pr-4">Recommendations</th>
                          <th className="py-2 pr-4">Owner</th>
                          <th className="py-2 pr-4">Evidence</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="py-3 pr-4 align-top"><Badge variant="secondary">{promotionAudit.marketplaces.status}</Badge></td>
                          <td className="py-3 pr-4 align-top">{promotionAudit.marketplaces.findings}</td>
                          <td className="py-3 pr-4 align-top">{promotionAudit.marketplaces.recommendations}</td>
                          <td className="py-3 pr-4 align-top">{promotionAudit.marketplaces.owner}</td>
                          <td className="py-3 pr-4 align-top">{promotionAudit.marketplaces.evidence}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <div className="p-4 text-sm text-muted-foreground">No marketplaces data.</div>
                )}
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
