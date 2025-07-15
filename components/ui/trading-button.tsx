import type React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface TradingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "buy" | "sell" | "active"
  size?: "sm" | "md" | "lg"
  children: React.ReactNode
}

const TradingButton = forwardRef<HTMLButtonElement, TradingButtonProps>(
  ({ className, variant = "default", size = "md", children, ...props }, ref) => {
    const baseStyles = "rounded-2xl font-medium transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"

    const variants = {
      default:
        "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg hover:shadow-xl",
      outline:
        "border-2 border-muted hover:border-orange-500/50 hover:bg-orange-500/5 dark:border-gray-700 dark:hover:border-orange-500/50 dark:hover:bg-orange-500/10",
      ghost: "hover:bg-muted/50 dark:hover:bg-gray-800/50",
      buy: "bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white shadow-lg hover:shadow-xl hover:shadow-green-500/25",
      sell: "bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 text-white shadow-lg hover:shadow-xl hover:shadow-red-500/25",
      active: "bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-lg",
    }

    const sizes = {
      sm: "h-8 px-3 text-xs",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-6 text-base",
    }

    return (
      <Button ref={ref} className={cn(baseStyles, variants[variant], sizes[size], className)} {...props}>
        {children}
      </Button>
    )
  },
)

TradingButton.displayName = "TradingButton"

export { TradingButton }
