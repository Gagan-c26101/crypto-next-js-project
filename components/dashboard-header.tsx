"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { Menu, X, TrendingUp, Bell, ChevronDown, User, LogOut } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export default function DashboardHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { name: "Utility Services", href: "/dashboard", isActive: true },
    
    { name: "Subscription", href: "/dashboard/subscription"},
    { name: "Market", href: "/markets" },
    { name: "Fees", href: "/fees" },
    { name: "Trade", href: "/trade" },
    { name: "Buy Crypto", href: "/dashboard/buy-crypto" },
  ]


  const mobileMenuItems = [
    { name: "Dashboard", href: "/dashboard" },
    { name: "Wallet", href: "/dashboard/wallet" },
    { name: "Buy Crypto", href: "/dashboard/buy-crypto" },
    { name: "Bank Info", href: "/dashboard/bank-info" },
    { name: "Earn", href: "/dashboard/earn" },
    { name: "History", href: "/dashboard/history" },
    { name: "Security", href: "/dashboard/security" },
    { name: "Identification", href: "/dashboard/identification" },
    { name: "AML", href: "/dashboard/aml" },
    { name: "Support Ticket", href: "/dashboard/support-ticket" },
    { name: "Announcements", href: "/dashboard/announcements" },
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
                  className={`text-base font-medium transition-colors whitespace-nowrap ${
                    item.isActive
                      ? "text-green-600 bg-green-50 dark:bg-green-500/10 px-3 py-2 rounded-lg"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Earn Dropdown */}
              
            </nav>
          </div>

          {/* Right side - Notification, User menu and theme toggle */}
          <div className="flex items-center space-x-3">
            <div className="hidden md:flex items-center space-x-3">
              {/* Notification Bell */}
              <Button variant="ghost" size="sm" className="relative p-2">
                <Bell className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-3 w-3 bg-red-500 rounded-full"></span>
              </Button>

              {/* User Profile Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm" className="flex items-center space-x-2 p-2">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">U</span>
                    </div>
                    <ChevronDown className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48 z-[60]" sideOffset={5}>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/edit-profile" className="w-full cursor-pointer">
                      Profile Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/security" className="w-full cursor-pointer">
                      Security
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/dashboard/wallet" className="w-full cursor-pointer">
                      Wallet
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600 cursor-pointer">Logout</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>

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
            <div className="px-4 py-4 space-y-2 max-h-[calc(100vh-100px)] overflow-y-auto">
              {/* Dashboard Menu Items */}
              {mobileMenuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block text-base font-medium py-3 px-3 rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              {/* User Actions Section */}
              <div className="pt-4 border-t space-y-2">
                <Link
                  href="/dashboard/announcements"
                  className="flex items-center text-base font-medium py-3 px-3 rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Bell className="h-5 w-5 mr-3" />
                  Notifications
                </Link>
                <Link
                  href="/dashboard/edit-profile"
                  className="flex items-center text-base font-medium py-3 px-3 rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-accent"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <User className="h-5 w-5 mr-3" />
                  Profile Settings
                </Link>
                <button className="flex items-center w-full text-base font-medium py-3 px-3 rounded-lg transition-colors text-red-600 hover:bg-red-50 dark:hover:bg-red-500/10">
                  <LogOut className="h-5 w-5 mr-3" />
                  Logout
                </button>
                <div className="flex justify-start pt-2 px-3">
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
