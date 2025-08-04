import type React from "react"
import DashboardHeader from "@/components/dashboard-header"
import DashboardLayout from "@/components/dashboard-layout"

export default function DashboardRootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <DashboardHeader />
      <DashboardLayout>{children}</DashboardLayout>
    </>
  )
}
