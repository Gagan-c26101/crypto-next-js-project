import { Card, CardContent } from "@/components/ui/card"
import { Shield, Lock, Eye, UserCheck } from "lucide-react"

export default function SecuritySection() {
  const securityFeatures = [
    {
      icon: Shield,
      title: "Multi-Layer Security",
      description: "Advanced encryption and multi-signature wallets protect your assets",
    },
    {
      icon: Lock,
      title: "Cold Storage",
      description: "95% of funds stored offline in bank-grade security vaults",
    },
    {
      icon: Eye,
      title: "Real-time Monitoring",
      description: "24/7 monitoring and anomaly detection systems",
    },
    {
      icon: UserCheck,
      title: "KYC Compliance",
      description: "Fully regulated and compliant with global standards",
    },
  ]

  return (
    <section className="py-12 lg:py-16 bg-muted/30">
      <div className="w-full max-w-none px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 lg:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">Security First</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
              Your security is our top priority. We employ industry-leading security measures to protect your assets and
              personal information.
            </p>
          </div>

          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {securityFeatures.map((feature, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardContent className="p-4 sm:p-6">
                  <div className="mb-4 flex justify-center">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                      <feature.icon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                    </div>
                  </div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
