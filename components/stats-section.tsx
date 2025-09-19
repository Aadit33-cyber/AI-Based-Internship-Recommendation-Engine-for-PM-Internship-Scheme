import { Card, CardContent } from "@/components/ui/card"

export function StatsSection() {
  const stats = [
    {
      number: "10,000+",
      label: "Students Registered",
      description: "Across multiple disciplines",
    },
    {
      number: "500+",
      label: "Partner Companies",
      description: "Verified industry partners",
    },
    {
      number: "85%",
      label: "Placement Success",
      description: "Students placed within 6 months",
    },
    {
      number: "50+",
      label: "Career Paths",
      description: "Across diverse industries",
    },
  ]

  return (
    <section className="py-20 lg:py-32 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-balance mb-6">
            Trusted by Students and <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Our platform has successfully connected thousands of students with meaningful career opportunities,
            supporting India's vision of a skilled workforce.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-0 shadow-lg bg-background text-center">
              <CardContent className="p-8">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
