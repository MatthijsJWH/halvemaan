"use client"

import { useState } from "react"
import { blogPosts } from "@/lib/blog-data"
import { FeaturedPost } from "@/components/blog/featured-post"
import { BlogList } from "@/components/blog/blog-list"
import { CategoryFilter } from "@/components/blog/category-filter"
import { PageTransition } from "@/components/animations/page-transition"
import { useLanguage } from "@/components/language-context"

export default function BlogPage() {
  const { t } = useLanguage()
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  // Get featured posts
  const featuredPost = blogPosts.find((post) => post.featured) || blogPosts[0]

  // Get all categories
  const categories = Array.from(new Set(blogPosts.map((post) => post.category)))

  // Filter posts by category
  const filteredPosts = selectedCategory
    ? blogPosts.filter((post) => post.category === selectedCategory && post.id !== featuredPost.id)
    : blogPosts.filter((post) => post.id !== featuredPost.id)

  return (
    <PageTransition>
      <div className="container px-4 py-8 mx-auto">
        <h1 className="text-4xl font-bold mb-8">{t("blog.title")}</h1>

        <FeaturedPost post={featuredPost} />

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <BlogList
          posts={filteredPosts}
          title={selectedCategory ? `${selectedCategory} ${t("blog.allPosts")}` : t("blog.allPosts") as string}
        />
      </div>
    </PageTransition>
  )
}

