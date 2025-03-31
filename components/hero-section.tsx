"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MoonStar, ArrowRight } from "lucide-react"
import { AnimateText } from "@/components/animations/animate-text"
import { FadeIn } from "@/components/animations/fade-in"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center md:py-24">
      <FadeIn direction="down" duration={0.6}>
        <motion.div
          className="flex items-center justify-center w-20 h-20 mb-6 text-primary bg-primary/10 rounded-full"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          <MoonStar className="w-10 h-10" />
        </motion.div>
      </FadeIn>

      <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
        <AnimateText text={t("home.title") as string} className="block" />
      </h1>

      <FadeIn direction="up" delay={0.4} duration={0.6}>
        <p className="max-w-2xl mb-8 text-xl text-muted-foreground">{t("home.subtitle")}</p>
      </FadeIn>

      <StaggerContainer className="flex flex-wrap gap-4" delay={0.6}>
        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <Button asChild size="lg" className="relative overflow-hidden group">
            <Link href="/projects">
              <span className="relative z-10">{t("home.viewProjects")}</span>
              <ArrowRight className="relative z-10 ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              <motion.span
                className="absolute inset-0 bg-primary/10"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </Button>
        </motion.div>

        <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
          <Button variant="outline" size="lg" asChild className="relative overflow-hidden group">
            <Link href="/about">
              <span className="relative z-10">{t("home.aboutMe")}</span>
              <motion.span
                className="absolute inset-0 bg-primary/10"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </Button>
        </motion.div>
      </StaggerContainer>
    </div>
  )
}

