"use client"

import type { BlogPost } from "@/lib/blog-data"
import { BlogCard } from "@/components/blog/blog-card"
import { FadeIn } from "@/components/animations/fade-in"
import { useLanguage } from "@/components/language-context"

interface FeaturedPostProps {
  post: BlogPost
}

export function FeaturedPost({ post }: FeaturedPostProps) {
  const { t } = useLanguage()

  return (
    <section className="mb-12">
      <FadeIn direction="up">
        <h2 className="text-3xl font-bold mb-6">{t("blog.featuredPost")}</h2>
      </FadeIn>
      <FadeIn direction="up" delay={0.1}>
        <BlogCard post={post} featured />
      </FadeIn>
    </section>
  )
}

