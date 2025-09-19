import { Navigation } from "@/components/navigation"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { JobReadinessCard } from "@/components/dashboard/job-readiness-card"
import { QuickActionsCard } from "@/components/dashboard/quick-actions-card"
import { RecentActivityCard } from "@/components/dashboard/recent-activity-card"
import { UpcomingDeadlinesCard } from "@/components/dashboard/upcoming-deadlines-card"
import { RecommendationsCard } from "@/components/dashboard/recommendations-card"
import { SkillProgressCard } from "@/components/dashboard/skill-progress-card"
import { Footer } from "@/components/footer"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <DashboardHeader />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            <JobReadinessCard />
            <QuickActionsCard />
            <RecentActivityCard />
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-6">
            <UpcomingDeadlinesCard />
            <RecommendationsCard />
            <SkillProgressCard />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
