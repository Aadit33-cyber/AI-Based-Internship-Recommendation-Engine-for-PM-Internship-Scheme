import { Navigation } from "@/components/navigation"
import { ResumeUploadSection } from "@/components/analyzer/resume-upload-section"
import { AnalysisResultsSection } from "@/components/analyzer/analysis-results-section"
import { Footer } from "@/components/footer"

export default function AnalyzerPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-balance mb-4">
              AI-Powered <span className="text-primary">Resume Analyzer</span>
            </h1>
            <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Get instant feedback on your resume with our advanced AI analysis. Check ATS compatibility, optimize
              keywords, and receive personalized improvement suggestions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Upload Section */}
            <ResumeUploadSection />

            {/* Results Section */}
            <AnalysisResultsSection />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
