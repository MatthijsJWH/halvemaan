"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"

export function FeaturedProjects() {
  const { t } = useLanguage()

  const featuredProjects = [
    {
      id: 1,
      title: "Handball Stats Tracker",
      description: "A web application for tracking handball game statistics with real-time updates and visualization.",
      tags: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: 2,
      title: "Team Management Dashboard",
      description:
        "A dashboard for sports team management with scheduling, player profiles, and performance analytics.",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "React Query"],
      image: "/placeholder.svg?height=300&width=600",
    },
    {
      id: 3,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce solution with product management, cart functionality, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg?height=300&width=600",
    },
  ]

  return (
    <section className="py-8">
      <FadeIn direction="up">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">{t("home.featuredProjects")}</h2>
          <Button variant="ghost" asChild>
            <Link href="/projects" className="flex items-center group">
              {t("home.viewAll")} <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </FadeIn>

      <StaggerContainer className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ y: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <Card className="overflow-hidden h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="h-full">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform"
                  />
                </motion.div>
              </div>
              <CardContent className="p-6 flex-grow">
                <h3 className="mb-2 text-xl font-semibold">{project.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button variant="outline" size="sm" className="w-full relative overflow-hidden group">
                  <span className="relative z-10">{t("projects.demo")}</span>
                  <motion.span
                    className="absolute inset-0 bg-primary/10"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.3 }}
                  />
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </StaggerContainer>
    </section>
  )
}

