import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, BarChart3, Smartphone, Globe, Headphones } from "lucide-react"

const features = [
  {
    icon: Shield,
    title: "Bank-Level Security",
    description: "Your funds are protected by industry-leading security measures and cold storage.",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Execute trades in milliseconds with our high-performance matching engine.",
  },
  {
    icon: BarChart3,
    title: "Advanced Charts",
    description: "Professional trading tools with 100+ technical indicators and drawing tools.",
  },
  {
    icon: Smartphone,
    title: "Mobile Trading",
    description: "Trade on the go with our award-winning mobile app for iOS and Android.",
  },
  {
    icon: Globe,
    title: "Global Access",
    description: "Available in 180+ countries with local payment methods and currencies.",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Get help anytime with our dedicated customer support team.",
  },
]

export default function TradingFeatures() {
  return (
    <section className="py-12 lg:py-16">
      <div className="w-full max-w-none px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Why Choose CryptoBull?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
              Experience the most advanced cryptocurrency trading platform with features designed for both beginners and
              professionals
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
                      <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm sm:text-base">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
