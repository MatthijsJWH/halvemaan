"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { FadeIn } from "@/components/animations/fade-in"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { useLanguage } from "@/components/language-context"

export function Skills() {
  const { t } = useLanguage()
  // State to animate progress bars
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Set a timeout to start the progress animation
    const timeout = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timeout)
  }, [])

  const technicalSkills = [
    { name: "React / Next.js", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "CSS / Tailwind", level: 90 },
    { name: "Database Design", level: 75 },
    { name: "UI/UX Design", level: 70 },
  ]

  const hanballSkills = [
    { name: "Team Coordination", level: 95 },
    { name: "Strategic Planning", level: 85 },
    { name: "Quick Decision Making", level: 90 },
    { name: "Adaptability", level: 80 },
    { name: "Leadership", level: 85 },
  ]

  return (
    <section className="py-8">
      <FadeIn direction="up">
        <h2 className="mb-8 text-3xl font-bold">{t("home.skills")}</h2>
      </FadeIn>

      <div className="grid gap-8 md:grid-cols-2">
        <FadeIn direction="left" delay={0.2}>
          <Card>
            <CardHeader>
              <CardTitle>{t("home.technicalSkills")}</CardTitle>
              <CardDescription>{t("home.technicalSkillsDescription")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress
                    value={isVisible ? skill.level : 0}
                    className="h-2"
                    // Adding a transition to the progress bar
                    style={{
                      transition: `width ${0.8 + index * 0.1}s cubic-bezier(0.4, 0, 0.2, 1)`,
                    }}
                  />
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </FadeIn>

        <FadeIn direction="right" delay={0.4}>
          <Card>
            <CardHeader>
              <CardTitle>{t("home.handballSkills")}</CardTitle>
              <CardDescription>{t("home.handballSkillsDescription")}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {hanballSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="space-y-2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress
                    value={isVisible ? skill.level : 0}
                    className="h-2"
                    // Adding a transition to the progress bar
                    style={{
                      transition: `width ${0.8 + index * 0.1}s cubic-bezier(0.4, 0, 0.2, 1)`,
                    }}
                  />
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </FadeIn>
      </div>
    </section>
  )
}

