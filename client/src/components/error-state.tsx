import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, RefreshCw } from "lucide-react";

interface ErrorStateProps {
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({ message = "Failed to load data. Please try again.", onRetry }: ErrorStateProps) {
  return (
    <div className="flex items-center justify-center h-full p-8">
      <Card className="max-w-md border-destructive/30">
        <CardHeader className="text-center">
          <div className="w-12 h-12 rounded-full bg-destructive/10 flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-6 h-6 text-destructive" />
          </div>
          <CardTitle className="text-xl">Error Loading Data</CardTitle>
          <CardDescription className="text-base">{message}</CardDescription>
        </CardHeader>
        {onRetry && (
          <CardContent className="text-center">
            <Button onClick={onRetry} variant="outline" data-testid="button-retry">
              <RefreshCw className="w-4 h-4 mr-2" />
              Retry
            </Button>
          </CardContent>
        )}
      </Card>
    </div>
  );
}
