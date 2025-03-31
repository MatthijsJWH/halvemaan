"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"

interface TimelineItem {
  id: number
  role: string
  company: string
  location: string
  period: string
  description: string
  skills: string[]
}

interface ExperienceTimelineProps {
  items: TimelineItem[]
}

export function ExperienceTimeline({ items }: ExperienceTimelineProps) {
  const timelineRef = useRef(null)
  const isInView = useInView(timelineRef, { once: true, amount: 0.2 })

  return (
    <motion.div
      ref={timelineRef}
      className="relative space-y-6 before:absolute before:inset-0 before:left-5 before:-translate-x-px before:h-full before:w-0.5 before:origin-top before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent"
      style={
        {
          // Animate the timeline line when in view
          "--scaleY": isInView ? 1 : 0,
        } as any
      }
    >
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          className="relative flex items-start"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.5,
            delay: index * 0.2,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <motion.div
            className="flex items-center justify-center w-10 h-10 rounded-full bg-background border border-border shadow shrink-0"
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 15,
              delay: 0.1 + index * 0.2,
            }}
          >
            <Briefcase className="w-5 h-5 text-primary" />
          </motion.div>

          <motion.div
            className="w-[calc(100%-3rem)] ml-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.4,
              delay: 0.2 + index * 0.2,
            }}
          >
            <Card className="overflow-hidden">
              <CardContent className="p-4">
                <div className="flex flex-col space-y-1">
                  <div>
                    <h3 className="font-bold">{item.role}</h3>
                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                      <span>{item.company}</span>
                      <span>•</span>
                      <span>{item.location}</span>
                    </div>
                    <span className="text-sm font-medium text-muted-foreground">{item.period}</span>
                  </div>

                  <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>

                  <div className="flex flex-wrap gap-2 mt-2">
                    {item.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          delay: 0.4 + index * 0.2 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 300,
                          damping: 15,
                        }}
                      >
                        <Badge variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  )
}

