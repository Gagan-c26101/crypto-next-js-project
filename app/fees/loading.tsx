import { Skeleton } from "@/components/ui/skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import DashboardHeader from "@/components/dashboard-header"

export default function FeesLoading() {
  return (
    <>
      <DashboardHeader />
      <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 pt-[100px]">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8">
              <Skeleton className="h-10 w-80 mb-2" />
              <Skeleton className="h-6 w-96" />
            </div>

            <Card className="shadow-2xl border-0 bg-card/50 backdrop-blur-sm">
              <CardHeader className="pb-6">
                <Skeleton className="h-8 w-48 mb-6" />

                <div className="flex flex-wrap gap-3 mb-6">
                  <Skeleton className="h-12 w-40" />
                  <Skeleton className="h-12 w-56" />
                  <Skeleton className="h-12 w-60" />
                </div>

                <Skeleton className="h-12 w-80" />
              </CardHeader>

              <CardContent className="p-0">
                <div className="bg-card/80 rounded-b-lg p-6">
                  <div className="space-y-4">
                    {Array.from({ length: 7 }).map((_, i) => (
                      <div key={i} className="flex items-center space-x-4 py-4">
                        <Skeleton className="h-10 w-10 rounded-full" />
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-6 w-16" />
                        <Skeleton className="h-6 w-16" />
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  )
}
