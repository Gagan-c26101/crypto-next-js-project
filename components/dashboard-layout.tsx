"use client"

import type React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  LayoutDashboard,
  Wallet,
  History,
  Shield,
  CreditCard,
  FileText,
  HelpCircle,
  Bell,
  Gift,
  ChevronRight,
  Building2,
} from "lucide-react"

const navigation = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Wallet",
    href: "/dashboard/wallet",
    icon: Wallet,
  },
  {
    name: "Buy Crypto",
    href: "/dashboard/buy-crypto",
    icon: CreditCard,
  },
  {
    name: "Bank Info",
    href: "/dashboard/bank-info",
    icon: Building2,
  },
  {
    name: "Earn",
    href: "/dashboard/earn",
    icon: Gift,
  },
  {
    name: "History",
    href: "/dashboard/history",
    icon: History,
  },
  {
    name: "Security",
    href: "/dashboard/security",
    icon: Shield,
  },
  {
    name: "Identification",
    href: "/dashboard/identification",
    icon: FileText,
  },
  {
    name: "AML",
    href: "/dashboard/aml",
    icon: Shield,
  },
  {
    name: "Support Ticket",
    href: "/dashboard/support-ticket",
    icon: HelpCircle,
  },
  {
    name: "Announcements",
    href: "/dashboard/announcements",
    icon: Bell,
  },
]

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const pathname = usePathname()

  const SidebarContent = () => (
    <div className="flex h-full flex-col">
      {/* Profile Section */}
      <div className="p-4 border-b flex-shrink-0">
        <Link
          href="/dashboard/edit-profile"
          className="flex items-center space-x-3 p-3 rounded-lg hover:bg-accent transition-colors group"
        >
          <Avatar className="h-10 w-10">
            <AvatarImage src="/placeholder.svg?height=40&width=40" alt="Profile" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <p className="text-base font-medium truncate">John Doe</p>
            <p className="text-sm text-muted-foreground truncate">john.doe@example.com</p>
          </div>
          <ChevronRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto px-4">
        <div className="space-y-2 py-4">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 rounded-lg px-3 py-3 text-base font-medium transition-all duration-200",
                  isActive
                    ? "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-md"
                    : "text-muted-foreground hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-500 hover:text-white hover:shadow-md",
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                <span className="truncate">{item.name}</span>
              </Link>
            )
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t flex-shrink-0">
        <div className="text-xs text-muted-foreground">
          <p>© 2024 CryptoBull</p>
          <p>Version 1.0.0</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex bg-background">
      {/* Desktop Sidebar */}
      <div className="hidden lg:flex lg:w-72 lg:flex-col lg:fixed lg:inset-y-0 lg:top-[100px] lg:border-r lg:bg-card lg:h-[calc(100vh-100px)]">
        <SidebarContent />
      </div>

      {/* Main Content */}
      <div className="flex flex-1 flex-col lg:pl-72 pt-[100px]">
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  )
}
