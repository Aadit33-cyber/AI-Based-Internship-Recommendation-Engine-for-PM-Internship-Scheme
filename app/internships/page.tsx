import { Navigation } from "@/components/navigation"
import { InternshipSearchSection } from "@/components/internships/internship-search-section"
import { RecommendedInternshipsSection } from "@/components/internships/recommended-internships-section"
import { MicroInternshipsSection } from "@/components/internships/micro-internships-section"
import { ApplicationTrackingSection } from "@/components/internships/application-tracking-section"
import { Footer } from "@/components/footer"

export default function InternshipsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4">
              <span className="text-primary">Internship Engine</span> - Find Your Perfect Match
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-3xl mx-auto leading-relaxed">
              Discover internships tailored to your skills and career goals. From traditional internships to
              micro-opportunities, find the perfect stepping stone to your dream career.
            </p>
          </div>

          <div className="space-y-12">
            {/* Search Section */}
            <InternshipSearchSection />

            {/* Recommended Internships */}
            <RecommendedInternshipsSection />

            {/* Micro-Internships */}
            <MicroInternshipsSection />

            {/* Application Tracking */}
            <ApplicationTrackingSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
