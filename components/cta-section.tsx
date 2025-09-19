import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="border-0 shadow-2xl bg-gradient-to-br from-primary/10 via-background to-accent/10 overflow-hidden">
          <CardContent className="p-12 md:p-16 text-center relative">
            {/* Background decoration */}
            <div className="absolute inset-0 bg-grid-pattern opacity-5" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="h-8 w-8 text-accent mr-3" />
                <span className="text-lg font-semibold text-accent">Ready to Transform Your Career?</span>
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
                Join Thousands of Students Building Their <span className="text-primary">Future Careers</span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 leading-relaxed">
                Get personalized career guidance, AI-powered resume analysis, and access to exclusive internship
                opportunities. Start your journey to career success today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild className="text-lg px-8 py-6">
                  <Link href="/register">
                    Start Your Journey
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-lg px-8 py-6 bg-transparent">
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>

              <div className="mt-8 text-sm text-muted-foreground">
                Free to get started • No credit card required • Join 10,000+ students
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
