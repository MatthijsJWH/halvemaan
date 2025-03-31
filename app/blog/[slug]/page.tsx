"use client"

import { useParams } from "next/navigation"
import { blogPosts } from "@/lib/blog-data"
import { BlogContent } from "@/components/blog/blog-content"
import { PageTransition } from "@/components/animations/page-transition"
import { notFound } from "next/navigation"

export default function BlogPostPage() {
  const params = useParams()
  const slug = params?.slug as string

  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <PageTransition>
      <div className="container px-4 py-8 mx-auto">
        <BlogContent post={post} />
      </div>
    </PageTransition>
  )
}

