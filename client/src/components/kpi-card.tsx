import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface KPICardProps {
  label: string;
  value: string | number;
  suffix?: string;
  className?: string;
}

export function KPICard({ label, value, suffix, className }: KPICardProps) {
  return (
    <Card className={className} data-testid="card-kpi">
      <CardHeader className="space-y-0 pb-2">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline gap-2">
          <span
            className="text-4xl font-bold font-mono tracking-tight"
            data-testid={`text-metric-${label
              .toLowerCase()
              .replace(/\s+/g, "-")}`}
          >
            {value}
          </span>
          {suffix && (
            <span className="text-lg text-muted-foreground">{suffix}</span>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
