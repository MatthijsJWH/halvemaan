"use client"

import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, Tag } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { BlogPost } from "@/lib/blog-data"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"

interface BlogCardProps {
  post: BlogPost
  featured?: boolean
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  const { t } = useLanguage()

  return (
    <motion.div whileHover={{ y: -10 }} transition={{ type: "spring", stiffness: 300, damping: 20 }}>
      <Card className={`overflow-hidden h-full flex flex-col ${featured ? "md:flex-row" : ""}`}>
        <div className={`relative ${featured ? "md:w-1/2 h-60 md:h-auto" : "h-48"}`}>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.4 }} className="h-full">
            <Image src={post.coverImage || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
          </motion.div>
        </div>
        <CardContent className={`p-6 flex-grow flex flex-col ${featured ? "md:w-1/2" : ""}`}>
          <div className="flex items-center gap-2 mb-3">
            <Badge variant="secondary">{post.category}</Badge>
            <div className="flex items-center text-xs text-muted-foreground">
              <Calendar className="w-3 h-3 mr-1" />
              {post.date}
            </div>
            <div className="flex items-center text-xs text-muted-foreground">
              <Clock className="w-3 h-3 mr-1" />
              {post.readingTime}
            </div>
          </div>

          <h3 className={`font-bold ${featured ? "text-2xl mb-3" : "text-xl mb-2"}`}>
            <Link href={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
              {post.title}
            </Link>
          </h3>

          <p className={`text-muted-foreground ${featured ? "mb-4" : "mb-3"} line-clamp-3`}>{post.excerpt}</p>

          <div className="mt-auto">
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="outline" className="text-xs">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center">
              <Image
                src={post.author.avatar || "/placeholder.svg"}
                alt={post.author.name}
                width={32}
                height={32}
                className="rounded-full mr-2"
              />
              <span className="text-sm font-medium">{post.author.name}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

