import { HeroSection } from "@/components/hero-section"
import { FeaturedProjects } from "@/components/featured-projects"
import { Skills } from "@/components/skills"
import { PageTransition } from "@/components/animations/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <div className="container px-4 py-8 mx-auto space-y-16">
        <HeroSection />
        <FeaturedProjects />
        <Skills />
      </div>
    </PageTransition>
  )
}

