import { Badge } from "@/components/ui/badge";
import { AlertCircle, CheckCircle2, AlertTriangle, Info } from "lucide-react";

interface StatusBadgeProps {
  type: 'critical' | 'high' | 'medium' | 'low' | 'success' | 'info' | 'warning';
  label: string;
  showIcon?: boolean;
}

export function StatusBadge({ type, label, showIcon = true }: StatusBadgeProps) {
  const getConfig = () => {
    switch (type) {
      case 'critical':
        return {
          className: 'bg-destructive/10 text-destructive border-destructive/20',
          icon: AlertCircle,
        };
      case 'high':
        return {
          className: 'bg-orange-500/10 text-orange-600 border-orange-500/20',
          icon: AlertTriangle,
        };
      case 'medium':
        return {
          className: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
          icon: Info,
        };
      case 'low':
        return {
          className: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
          icon: Info,
        };
      case 'success':
        return {
          className: 'bg-green-500/10 text-green-600 border-green-500/20',
          icon: CheckCircle2,
        };
      case 'warning':
        return {
          className: 'bg-yellow-500/10 text-yellow-600 border-yellow-500/20',
          icon: AlertTriangle,
        };
      case 'info':
      default:
        return {
          className: 'bg-blue-500/10 text-blue-600 border-blue-500/20',
          icon: Info,
        };
    }
  };

  const config = getConfig();
  const Icon = config.icon;

  return (
    <Badge className={`${config.className} px-3 py-1 text-xs font-medium uppercase tracking-wide`}>
      {showIcon && <Icon className="w-3 h-3 mr-1.5" />}
      {label}
    </Badge>
  );
}
