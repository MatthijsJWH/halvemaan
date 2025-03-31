"use client"

import { ProjectCard } from "@/components/project-card"
import { PageTransition } from "@/components/animations/page-transition"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"

export default function ProjectsPage() {
  const { t } = useLanguage()

  const projects = [
    {
      id: 1,
      title: "Handball Stats Tracker",
      description: "A web application for tracking handball game statistics with real-time updates and visualization.",
      tags: ["Next.js", "TypeScript", "Prisma", "Chart.js"],
      image: "/placeholder.svg?height=300&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description:
        "A full-featured e-commerce solution with product management, cart functionality, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg?height=300&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Team Management Dashboard",
      description:
        "A dashboard for sports team management with scheduling, player profiles, and performance analytics.",
      tags: ["Next.js", "Firebase", "Tailwind CSS", "React Query"],
      image: "/placeholder.svg?height=300&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Personal Blog",
      description: "A blog built with Next.js and MDX for sharing technical articles and handball insights.",
      tags: ["Next.js", "MDX", "Tailwind CSS", "Vercel"],
      image: "/placeholder.svg?height=300&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 5,
      title: "Weather Application",
      description: "A weather app with location-based forecasts and interactive maps.",
      tags: ["React", "OpenWeather API", "Leaflet", "Styled Components"],
      image: "/placeholder.svg?height=300&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 6,
      title: "Task Management Tool",
      description: "A Kanban-style task management application with drag-and-drop functionality.",
      tags: ["React", "Redux", "React Beautiful DnD", "Firebase"],
      image: "/placeholder.svg?height=300&width=600",
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  return (
    <PageTransition>
      <div className="container px-4 py-8 mx-auto">
        <FadeIn direction="up">
          <h1 className="mb-8 text-4xl font-bold">{t("projects.title")}</h1>
        </FadeIn>
        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </PageTransition>
  )
}

