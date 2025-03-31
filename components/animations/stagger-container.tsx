"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface StaggerContainerProps {
  children: ReactNode
  className?: string
  delay?: number
  staggerChildren?: number
}

export function StaggerContainer({
  children,
  className = "",
  delay = 0,
  staggerChildren = 0.1,
}: StaggerContainerProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      animate="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delay,
            staggerChildren,
            when: "beforeChildren",
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

