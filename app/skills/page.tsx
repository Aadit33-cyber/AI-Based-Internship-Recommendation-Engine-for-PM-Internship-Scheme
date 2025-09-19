import { Navigation } from "@/components/navigation"
import { SkillOverviewSection } from "@/components/skills/skill-overview-section"
import { SkillCategoriesSection } from "@/components/skills/skill-categories-section"
import { LeaderboardSection } from "@/components/skills/leaderboard-section"
import { TestHistorySection } from "@/components/skills/test-history-section"
import { Footer } from "@/components/footer"

export default function SkillsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4">
              <span className="text-primary">Skill Testing</span> & Certification Hub
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Test your abilities across multiple domains, earn verified certifications, and compete on leaderboards.
              Build credible proof of your skills with AI-powered assessments.
            </p>
          </div>

          <div className="space-y-12">
            {/* Skill Overview */}
            <SkillOverviewSection />

            {/* Skill Categories */}
            <SkillCategoriesSection />

            {/* Leaderboard */}
            <LeaderboardSection />

            {/* Test History */}
            <TestHistorySection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
