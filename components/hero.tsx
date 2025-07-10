import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Image from "next/image"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 dark:from-black dark:via-black dark:to-gray-900/20">
      <div className="w-full max-w-none px-4 lg:px-6 py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="grid gap-8 lg:gap-12 xl:gap-16 lg:grid-cols-2 items-center max-w-7xl mx-auto">
          {/* Text Content - First on mobile, left on desktop */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-1">
            <div className="space-y-4">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm dark:border-gray-700">
                <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>
                {"#1 Crypto Exchange Platform"}
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
                Trade Crypto
                <span className="block bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
                  Like a Pro
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl">
                Join millions of traders worldwide. Buy, sell, and trade Bitcoin, Ethereum, and 100+ cryptocurrencies
                with advanced tools and industry-leading security.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 h-12 px-6"
              >
                Start Trading Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="dark:border-gray-700 dark:hover:bg-gray-800 bg-transparent h-12 px-6"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 sm:gap-6 lg:gap-8 pt-6 lg:pt-8 border-t dark:border-gray-800">
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold">$2.1T+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">24h Volume</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold">10M+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Active Users</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold">100+</div>
                <div className="text-xs sm:text-sm text-muted-foreground">Cryptocurrencies</div>
              </div>
            </div>
          </div>

          {/* Image - Second on mobile, right on desktop */}
          <div className="relative order-2 lg:order-2">
            <div className="relative z-10">
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Crypto Trading Dashboard"
                width={500}
                height={500}
                className="rounded-2xl shadow-2xl dark:shadow-gray-900/50 w-full h-auto max-w-lg mx-auto"
                priority
              />
            </div>
            <div className="absolute -top-4 -right-4 h-48 w-48 sm:h-64 sm:w-64 lg:h-72 lg:w-72 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 blur-3xl"></div>
            <div className="absolute -bottom-4 -left-4 h-48 w-48 sm:h-64 sm:w-64 lg:h-72 lg:w-72 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
