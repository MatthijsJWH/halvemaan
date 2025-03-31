"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"

interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  image: string
  demoUrl: string
  githubUrl: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useLanguage()

  return (
    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <Card className="overflow-hidden flex flex-col h-full">
        <div className="relative h-48 overflow-hidden">
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="h-full">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
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
        <CardFooter className="p-6 pt-0 flex gap-2">
          <Button variant="outline" size="sm" className="flex-1 relative overflow-hidden group" asChild>
            <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center justify-center">
                <ExternalLink className="mr-2 h-4 w-4" /> {t("projects.demo")}
              </span>
              <motion.span
                className="absolute inset-0 bg-primary/10"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </a>
          </Button>
          <Button variant="outline" size="sm" className="flex-1 relative overflow-hidden group" asChild>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <span className="relative z-10 flex items-center justify-center">
                <Github className="mr-2 h-4 w-4" /> {t("projects.code")}
              </span>
              <motion.span
                className="absolute inset-0 bg-primary/10"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </a>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}

