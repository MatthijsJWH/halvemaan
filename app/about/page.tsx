"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ExperienceTimeline } from "@/components/experience-timeline"
import { PageTransition } from "@/components/animations/page-transition"
import { FadeIn } from "@/components/animations/fade-in"
import { useLanguage } from "@/components/language-context"

export default function AboutPage() {
  const { t } = useLanguage()

  const experiences = [
    {
      id: 1,
      role: "Senior Frontend Developer",
      company: "Tech Innovations",
      location: "Remote",
      period: "2021 - Present",
      description:
        "Lead developer for multiple web applications using Next.js and React. Implemented responsive designs and improved performance across all projects. Mentored junior developers and established coding standards.",
      skills: ["Next.js", "React", "TypeScript", "Performance Optimization"],
    },
    {
      id: 2,
      role: "Web Developer",
      company: "Digital Solutions Inc.",
      location: "New York, NY",
      period: "2019 - 2021",
      description:
        "Developed and maintained client websites and web applications. Collaborated with designers to implement responsive interfaces. Integrated third-party APIs and services.",
      skills: ["React", "Node.js", "REST APIs", "Responsive Design"],
    },
    {
      id: 3,
      role: "Junior Developer",
      company: "StartUp Hub",
      location: "Boston, MA",
      period: "2017 - 2019",
      description:
        "Assisted in the development of web applications. Worked on bug fixes and feature implementations. Participated in code reviews and team meetings.",
      skills: ["JavaScript", "HTML/CSS", "jQuery", "Git"],
    },
    {
      id: 4,
      role: "Handball Coach (Part-time)",
      company: "City Sports Club",
      location: "Boston, MA",
      period: "2016 - 2019",
      description:
        "Coached youth handball teams while studying and starting my development career. Developed training programs and organized competitions.",
      skills: ["Leadership", "Training", "Team Management", "Communication"],
    },
  ]

  return (
    <PageTransition>
      <div className="container px-4 py-8 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - About content and timeline */}
          <div className="space-y-12">
            {/* About content */}
            <div>
              <FadeIn direction="up">
                <h1 className="mb-4 text-4xl font-bold">{t("about.title")}</h1>
              </FadeIn>
              <FadeIn direction="up" delay={0.1}>
                <p className="mb-4 text-lg text-muted-foreground">{t("about.intro")}</p>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <h2 className="mt-8 mb-4 text-2xl font-semibold">{t("about.journeyTitle")}</h2>
                <p className="mb-4 text-muted-foreground">{t("about.journeyText")}</p>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <h2 className="mt-8 mb-4 text-2xl font-semibold">{t("about.handballTitle")}</h2>
                <p className="mb-4 text-muted-foreground">{t("about.handballText")}</p>
              </FadeIn>

              <FadeIn direction="up" delay={0.4}>
                <div className="flex flex-wrap gap-2 mt-6">
                  <Badge>{t("about.traits.teamPlayer")}</Badge>
                  <Badge>{t("about.traits.problemSolver")}</Badge>
                  <Badge>{t("about.traits.fastLearner")}</Badge>
                  <Badge>{t("about.traits.detailOriented")}</Badge>
                  <Badge>{t("about.traits.handballEnthusiast")}</Badge>
                </div>
              </FadeIn>
            </div>

            {/* Timeline - only visible on desktop */}
            <div className="hidden md:block">
              <FadeIn direction="up" delay={0.5}>
                <h2 className="mb-6 text-2xl font-semibold">{t("about.experience")}</h2>
              </FadeIn>
              <ExperienceTimeline items={experiences} />
            </div>
          </div>

          {/* Right Column - Profile image and cards */}
          <div className="space-y-6">
            <FadeIn direction="right" delay={0.2}>
              <div className="overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Profile picture"
                  width={600}
                  height={400}
                  className="object-cover w-full h-auto"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right" delay={0.4}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-medium">{t("about.achievements")}</h3>
                  <ul className="space-y-2 list-disc list-inside text-muted-foreground">
                    {(t("about.achievementsList") as []).map((achievement, index) => (
                      <li key={index}>{achievement}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="right" delay={0.6}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-medium">{t("about.certifications")}</h3>
                  <div className="space-y-4">
                    {(t("about.certificationItems") as []).map((item: {degree: string, institution: string}, index) => (
                      <div key={index}>
                        <p className="font-medium">{item.degree}</p>
                        <p className="text-sm text-muted-foreground">{item.institution}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>

            <FadeIn direction="right" delay={0.8}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-medium">{t("about.education")}</h3>
                  <div className="space-y-4">
                    {(t("about.educationItems") as []).map((item: {degree: string, institution: string}, index) => (
                      <div key={index}>
                        <p className="font-medium">{item.degree}</p>
                        <p className="text-sm text-muted-foreground">{item.institution}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </FadeIn>
          </div>
        </div>

        {/* Timeline - only visible on mobile */}
        <div className="mt-12 md:hidden">
          <FadeIn direction="up">
            <h2 className="mb-6 text-2xl font-semibold">{t("about.experience")}</h2>
          </FadeIn>
          <ExperienceTimeline items={experiences} />
        </div>
      </div>
    </PageTransition>
  )
}

