"use client"

import Image from "next/image"
import { Calendar, Clock, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/blog-data"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"
import { useLanguage } from "@/components/language-context"

interface BlogContentProps {
  post: BlogPost
}

export function BlogContent({ post }: BlogContentProps) {
  const { t } = useLanguage()

  // Function to convert markdown-like content to HTML
  // This is a simple implementation - in a real app, you'd use a proper markdown parser
  const formatContent = (content: string) => {
    const lines = content.split("\n")
    const formattedContent = []

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]

      // Handle headings
      if (line.startsWith("# ")) {
        formattedContent.push(
          <h1 key={i} className="text-3xl font-bold mt-8 mb-4">
            {line.substring(2)}
          </h1>,
        )
      } else if (line.startsWith("## ")) {
        formattedContent.push(
          <h2 key={i} className="text-2xl font-bold mt-6 mb-3">
            {line.substring(3)}
          </h2>,
        )
      } else if (line.startsWith("### ")) {
        formattedContent.push(
          <h3 key={i} className="text-xl font-bold mt-5 mb-2">
            {line.substring(4)}
          </h3>,
        )
      }
      // Handle lists
      else if (line.startsWith("- ")) {
        formattedContent.push(
          <li key={i} className="ml-6 mb-1">
            {line.substring(2)}
          </li>,
        )
      }
      // Handle code blocks
      else if (line.startsWith("```")) {
        const codeContent = []
        let j = i + 1
        while (j < lines.length && !lines[j].startsWith("```")) {
          codeContent.push(lines[j])
          j++
        }
        formattedContent.push(
          <pre key={i} className="bg-muted p-4 rounded-md my-4 overflow-x-auto">
            <code>{codeContent.join("\n")}</code>
          </pre>,
        )
        i = j // Skip the code block content
      }
      // Handle blockquotes
      else if (line.startsWith("> ")) {
        formattedContent.push(
          <blockquote key={i} className="border-l-4 border-primary pl-4 italic my-4">
            {line.substring(2)}
          </blockquote>,
        )
      }
      // Handle paragraphs
      else if (line.trim() !== "") {
        formattedContent.push(
          <p key={i} className="my-4">
            {line}
          </p>,
        )
      }
    }

    return formattedContent
  }

  return (
    <article className="max-w-4xl mx-auto">
      <FadeIn direction="up">
        <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      </FadeIn>

      <FadeIn direction="up" delay={0.1}>
        <div className="flex flex-wrap items-center gap-4 mb-8 text-sm text-muted-foreground">
          <div className="flex items-center">
            <Image
              src={post.author.avatar || "/placeholder.svg"}
              alt={post.author.name}
              width={32}
              height={32}
              className="rounded-full mr-2"
            />
            <span>{post.author.name}</span>
          </div>

          <div className="flex items-center">
            <Calendar className="w-4 h-4 mr-1" />
            {post.date}
          </div>

          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {post.readingTime}
          </div>

          <Badge variant="secondary">{post.category}</Badge>
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.2}>
        <div className="relative w-full h-[400px] mb-8 rounded-lg overflow-hidden">
          <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
        </div>
      </FadeIn>

      <FadeIn direction="up" delay={0.3} className="prose prose-lg dark:prose-invert max-w-none">
        <div className="blog-content">{formatContent(post.content)}</div>
      </FadeIn>

      <FadeIn direction="up" delay={0.4}>
        <div className="mt-8 pt-6 border-t">
          <h3 className="text-lg font-semibold mb-3">{t("blog.tags")}</h3>
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <motion.div key={tag} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Badge variant="outline">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              </motion.div>
            ))}
          </div>
        </div>
      </FadeIn>
    </article>
  )
}

