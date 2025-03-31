"use client"

import { motion } from "framer-motion"

interface AnimateTextProps {
  text: string
  className?: string
  once?: boolean
}

export function AnimateText({ text, className = "", once = true }: AnimateTextProps) {
  // Animation for each word
  const wordAnimation = {
    hidden: {},
    visible: {},
  }

  // Animation for each character
  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  }

  return (
    <motion.span
      className={className}
      aria-label={text}
      initial="hidden"
      whileInView="visible"
      viewport={{ once }}
      variants={{
        visible: {
          transition: {
            staggerChildren: 0.025,
          },
        },
      }}
    >
      {text.split("").map((char, index) => (
        <motion.span key={`${char}-${index}`} className="inline-block" variants={characterAnimation}>
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </motion.span>
  )
}

