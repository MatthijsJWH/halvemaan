"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import {
  Home,
  User,
  Code2,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Moon,
  MoonStar,
  Sun,
  BookOpen,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
  SidebarSeparator,
} from "@/components/ui/sidebar"
import { motion } from "framer-motion"
import { useLanguage } from "@/components/language-context"
import { LanguageSwitcher } from "@/components/language-switcher"

export function AppSidebar() {
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const { t } = useLanguage()

  const navigation = [
    { name: t("navigation.home"), href: "/", icon: Home },
    { name: t("navigation.about"), href: "/about", icon: User },
    { name: t("navigation.projects"), href: "/projects", icon: Code2 },
    // { name: t("navigation.blog"), href: "/blog", icon: BookOpen },
  ]

  const socialLinks = [
    { name: "GitHub", href: "https://github.com", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
    { name: "Twitter", href: "https://twitter.com", icon: Twitter },
    { name: "Email", href: "mailto:contact@example.com", icon: Mail },
  ]

  return (
    <Sidebar variant="inset">
      <SidebarHeader className="flex flex-col items-center justify-center p-4">
        <motion.div
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center justify-center w-12 h-12 mb-2 text-primary bg-primary/10 rounded-full"
        >
          <MoonStar className="w-6 h-6" />
        </motion.div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-xl font-bold"
        >
          Matthijs Halvemaan
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-sm text-muted-foreground"
        >
          Software Engineer
        </motion.p>
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        <SidebarMenu>
          {navigation.map((item, index) => (
            <SidebarMenuItem key={item.name as string}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <SidebarMenuButton
                  asChild
                  isActive={pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))}
                  tooltip={item.name as string}
                >
                  <Link href={item.href} className="relative group">
                    <item.icon className="w-5 h-5 transition-all duration-200 group-hover:text-primary" />
                    <span>{item.name}</span>
                    {(pathname === item.href || (item.href !== "/" && pathname?.startsWith(item.href))) && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute inset-0 rounded-md bg-primary/10 -z-10"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </Link>
                </SidebarMenuButton>
              </motion.div>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>

        <SidebarSeparator className="my-4" />

        <motion.div
          className="px-3 mb-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 + navigation.length * 0.1 }}
        >
          <h2 className="mb-2 text-xs font-semibold text-muted-foreground">Connect</h2>
        </motion.div>

        <SidebarMenu>
          {socialLinks.map((item, index) => (
            <SidebarMenuItem key={item.name}>
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.9 + index * 0.1 }}
              >
                <SidebarMenuButton asChild tooltip={item.name}>
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className="relative group">
                    <item.icon className="w-5 h-5 transition-all duration-200 group-hover:text-primary" />
                    <span>{item.name}</span>
                  </a>
                </SidebarMenuButton>
              </motion.div>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>

      <SidebarFooter className="p-4 space-y-2">
        <LanguageSwitcher />

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="w-full"
          >
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </motion.div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  )
}

