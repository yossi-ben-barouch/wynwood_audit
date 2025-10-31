import { ArrowUp, ArrowDown, Minus } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface KPICardProps {
  label: string;
  value: string | number;
  trend?: number;
  trendDirection?: 'up' | 'down' | 'neutral';
  suffix?: string;
  className?: string;
}

export function KPICard({ label, value, trend, trendDirection, suffix, className }: KPICardProps) {
  const getTrendIcon = () => {
    if (!trendDirection || trendDirection === 'neutral') {
      return <Minus className="w-4 h-4" />;
    }
    return trendDirection === 'up' ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />;
  };

  const getTrendColor = () => {
    if (!trendDirection || trendDirection === 'neutral') return 'text-muted-foreground';
    return trendDirection === 'up' ? 'text-green-500' : 'text-red-500';
  };

  return (
    <Card className={className} data-testid="card-kpi">
      <CardHeader className="space-y-0 pb-2">
        <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
      </CardHeader>
      <CardContent>
        <div className="flex items-baseline justify-between">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl font-bold font-mono tracking-tight" data-testid={`text-metric-${label.toLowerCase().replace(/\s+/g, '-')}`}>
              {value}
            </span>
            {suffix && <span className="text-lg text-muted-foreground">{suffix}</span>}
          </div>
          {trend !== undefined && (
            <div className={`flex items-center gap-1 text-sm font-medium ${getTrendColor()}`}>
              {getTrendIcon()}
              <span>{Math.abs(trend)}%</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
