import { Navigation } from "@/components/navigation"
import { CareerExplorerSection } from "@/components/careers/career-explorer-section"
import { CareerPathsSection } from "@/components/careers/career-paths-section"
import { SkillGapAnalysisSection } from "@/components/careers/skill-gap-analysis-section"
import { Footer } from "@/components/footer"

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4">
              <span className="text-primary">Career Navigator</span> - Discover Your Path
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Explore personalized career paths across multiple disciplines. Get AI-powered recommendations, understand
              skill requirements, and plan your journey to success.
            </p>
          </div>

          <div className="space-y-12">
            {/* Career Explorer */}
            <CareerExplorerSection />

            {/* Career Paths */}
            <CareerPathsSection />

            {/* Skill Gap Analysis */}
            <SkillGapAnalysisSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
