"use client"

import type { BlogPost } from "@/lib/blog-data"
import { BlogCard } from "@/components/blog/blog-card"
import { StaggerContainer } from "@/components/animations/stagger-container"
import { motion } from "framer-motion"

interface BlogListProps {
  posts: BlogPost[]
  title?: string
}

export function BlogList({ posts, title }: BlogListProps) {
  return (
    <section>
      {title && <h2 className="text-3xl font-bold mb-6">{title}</h2>}

      <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <motion.div
            key={post.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <BlogCard post={post} />
          </motion.div>
        ))}
      </StaggerContainer>
    </section>
  )
}

