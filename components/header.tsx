"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, TrendingUp, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Market", href: "/markets" },
    { name: "Trade", href: "/trade" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Futures", href: "/futures" },
   
    { name: "Blog", href: "/blog" },
    { name: "Support", href: "/support" },
  ]

  const earnItems = [
    { name: "Offers", href: "/earn/offers" },
    { name: "Trade Contest", href: "/earn/trade-contest" },
    { name: "Task Center", href: "/earn/task-center" },
    { name: "Mystery", href: "/earn/mystery" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-[#121212]/95">
      <div className="w-full max-w-none px-4 lg:px-6">
        <div className="flex h-[100px] items-center justify-between">
          {/* Left side - Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">CryptoBull</span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors whitespace-nowrap"
                >
                  {item.name}
                </Link>
              ))}

              {/* Earn Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    className="text-base font-medium text-muted-foreground hover:text-foreground transition-colors h-auto p-2 flex items-center"
                  >
                    Earn
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48 z-[60]" sideOffset={5}>
                  {earnItems.map((item) => (
                    <DropdownMenuItem key={item.name} asChild>
                      <Link href={item.href} className="w-full cursor-pointer">
                        {item.name}
                      </Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>
          </div>

          {/* Right side - Auth buttons and theme toggle */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-3">
              <Button variant="ghost" size="sm" className="text-base" asChild>
                <Link href="/login">Log In</Link>
              </Button>
              <Button
                size="sm"
                className="text-base bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
                asChild
              >
                <Link href="/signup">Sign Up</Link>
              </Button>
              <ThemeToggle />
            </div>

            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="lg:hidden border-t bg-background dark:bg-[#121212] absolute left-0 right-0 top-[100px] shadow-lg">
            <div className="px-4 py-4 space-y-4 max-h-[calc(100vh-100px)] overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium text-muted-foreground hover:text-foreground py-3 px-2 rounded-lg hover:bg-accent transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* Mobile Earn Section */}
              <div className="space-y-2">
                <div className="text-base font-medium text-muted-foreground py-3 px-2 border-t pt-4">Earn</div>
                {earnItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="block text-base text-muted-foreground hover:text-foreground py-2 pl-6 pr-2 rounded-lg hover:bg-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col space-y-3 pt-4 border-t">
                <Button variant="ghost" size="sm" className="justify-start text-left" asChild>
                  <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                    Log In
                  </Link>
                </Button>
                <Button
                  size="sm"
                  className="text-base bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all duration-200 justify-start"
                  asChild
                >
                  <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
                <div className="flex justify-start pt-2">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
