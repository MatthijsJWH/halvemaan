"use client"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { FadeIn } from "@/components/animations/fade-in"

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string | null
  onSelectCategory: (category: string | null) => void
}

export function CategoryFilter({ categories, selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <FadeIn direction="up" className="mb-8">
      <div className="flex flex-wrap gap-2">
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Badge
            variant={selectedCategory === null ? "default" : "outline"}
            className="cursor-pointer text-sm py-1.5 px-3"
            onClick={() => onSelectCategory(null)}
          >
            All
          </Badge>
        </motion.div>

        {categories.map((category) => (
          <motion.div key={category} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Badge
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer text-sm py-1.5 px-3"
              onClick={() => onSelectCategory(category)}
            >
              {category}
            </Badge>
          </motion.div>
        ))}
      </div>
    </FadeIn>
  )
}

