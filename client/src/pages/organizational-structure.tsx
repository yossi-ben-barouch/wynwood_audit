import { useQuery } from "@tanstack/react-query";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { ErrorState } from "@/components/error-state";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import type { OrganizationalData } from "@shared/schema";
import { Users, Mail, Briefcase, AlertCircle } from "lucide-react";

export default function OrganizationalStructure() {
  const { data, isLoading, error, refetch } = useQuery<OrganizationalData>({
    queryKey: ['/api/organizational-structure'],
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="animate-pulse space-y-4 w-full max-w-7xl px-8">
          <div className="h-8 bg-muted rounded w-1/4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="h-64 bg-muted rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return <ErrorState onRetry={() => refetch()} />;
  }

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(n => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="flex-1 overflow-auto">
      <div className="max-w-7xl mx-auto px-8 py-6 space-y-8">
        {/* Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-semibold text-foreground" data-testid="text-page-title">
            Organizational Structure
          </h1>
          <p className="text-base text-muted-foreground">
            Key personnel, roles, and structural challenges within the Wynwood Walls team
          </p>
        </div>

        {/* Reporting Issues Alert */}
        {data?.reportingIssues && data.reportingIssues.length > 0 && (
          <Card className="border-l-4 border-l-destructive bg-destructive/5">
            <CardHeader>
              <div className="flex items-start gap-4">
                <AlertCircle className="w-6 h-6 text-destructive mt-1" />
                <div>
                  <CardTitle className="text-xl mb-2 text-destructive">Structural Challenges</CardTitle>
                  <CardDescription className="text-base">
                    Critical gaps identified in the current organizational structure
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {data.reportingIssues.map((issue, index) => (
                  <li key={index} className="flex gap-3">
                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-destructive flex-shrink-0" />
                    <p className="text-base text-foreground">{issue}</p>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {/* Team Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data?.teamMembers.map((member) => (
            <Card key={member.id} className="hover-elevate" data-testid={`card-team-member-${member.id}`}>
              <CardHeader className="space-y-4">
                <div className="flex items-start gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-primary text-primary-foreground font-semibold">
                      {getInitials(member.name)}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-lg text-foreground truncate">
                      {member.name}
                    </h3>
                    <p className="text-sm text-primary font-medium">{member.role}</p>
                    <p className="text-xs text-muted-foreground mt-1 flex items-center gap-1.5">
                      <Briefcase className="w-3 h-3" />
                      {member.department}
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    Key Responsibilities
                  </h4>
                  <ul className="space-y-1.5">
                    {member.description.slice(0, 3).map((desc, index) => (
                      <li key={index} className="flex gap-2 text-sm">
                        <div className="mt-1.5 w-1 h-1 rounded-full bg-primary flex-shrink-0" />
                        <span className="text-foreground">{desc}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {member.strengths && member.strengths.length > 0 && (
                  <div className="pt-2 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {member.strengths.slice(0, 3).map((strength, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {strength}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
