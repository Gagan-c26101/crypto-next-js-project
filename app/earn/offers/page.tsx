import type { Metadata } from "next"
import Header from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Gift, Clock, Users, Star, TrendingUp, Zap, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Offers - CryptoBull",
  description:
    "Discover exclusive offers, bonuses, and rewards on CryptoBull. Maximize your trading potential with our special promotions.",
}

const offers = [
  {
    id: 1,
    title: "Welcome Bonus",
    description: "Get up to $500 bonus on your first deposit",
    reward: "$500",
    type: "Deposit Bonus",
    difficulty: "Easy",
    timeLeft: "Unlimited",
    participants: "12.5K",
    progress: 0,
    requirements: ["Complete KYC verification", "Make first deposit of $100+", "Trade within 30 days"],
    status: "active",
  },
  {
    id: 2,
    title: "Daily Trading Bonus",
    description: "Earn 0.1% cashback on all trades every day",
    reward: "0.1% Cashback",
    type: "Daily Reward",
    difficulty: "Easy",
    timeLeft: "23h 45m",
    participants: "8.2K",
    progress: 65,
    requirements: ["Complete at least 5 trades", "Minimum volume of $1,000"],
    status: "active",
  },
  {
    id: 3,
    title: "Referral Rewards",
    description: "Earn $50 for each friend you refer",
    reward: "$50 per referral",
    type: "Referral",
    difficulty: "Medium",
    timeLeft: "Unlimited",
    participants: "15.7K",
    progress: 25,
    requirements: ["Friend completes KYC", "Friend deposits $200+", "Friend trades $5,000+"],
    status: "active",
  },
  {
    id: 4,
    title: "VIP Cashback",
    description: "Premium users get 0.5% cashback on all trades",
    reward: "0.5% Cashback",
    type: "VIP Exclusive",
    difficulty: "Hard",
    timeLeft: "Unlimited",
    participants: "2.1K",
    progress: 0,
    requirements: ["Achieve VIP status", "Maintain $10,000+ balance", "Trade $50,000+ monthly"],
    status: "locked",
  },
  {
    id: 5,
    title: "Lightning Challenge",
    description: "Complete 100 trades in 24 hours for bonus rewards",
    reward: "$200 + NFT",
    type: "Challenge",
    difficulty: "Hard",
    timeLeft: "6h 12m",
    participants: "892",
    progress: 45,
    requirements: ["Complete 100 trades", "Within 24 hours", "Minimum $50 per trade"],
    status: "active",
  },
  {
    id: 6,
    title: "Weekend Special",
    description: "Double rewards on all weekend trades",
    reward: "2x Rewards",
    type: "Weekend Bonus",
    difficulty: "Easy",
    timeLeft: "2d 14h",
    participants: "5.3K",
    progress: 80,
    requirements: ["Trade on Saturday or Sunday", "Minimum 3 trades", "Any trading pair"],
    status: "active",
  },
]

const stats = [
  { label: "Total Rewards Distributed", value: "$2.5M", icon: Gift },
  { label: "Active Participants", value: "45.2K", icon: Users },
  { label: "Offers Completed", value: "128K", icon: Award },
  { label: "Average Reward", value: "$125", icon: Star },
]

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Easy":
      return "bg-green-500"
    case "Medium":
      return "bg-yellow-500"
    case "Hard":
      return "bg-red-500"
    default:
      return "bg-gray-500"
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-500"
    case "locked":
      return "bg-gray-500"
    case "completed":
      return "bg-blue-500"
    default:
      return "bg-gray-500"
  }
}

export default function OffersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/10 dark:from-black dark:via-black dark:to-gray-900/20">
      <Header />

      <main className="container mx-auto px-4 py-8 lg:py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-orange-500 to-red-500">
              <Gift className="h-8 w-8 text-white" />
            </div>
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">
            Exclusive Offers
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Maximize your trading potential with our exclusive bonuses, rewards, and special promotions
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center border-0 bg-card/50 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex justify-center mb-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-r from-orange-500 to-red-500">
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
                <div className="text-2xl font-bold">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Offers Grid */}
        <div className="grid gap-6 lg:grid-cols-2">
          {offers.map((offer) => (
            <Card
              key={offer.id}
              className="overflow-hidden border-0 shadow-lg bg-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-200"
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className={`${getStatusColor(offer.status)} text-white border-0`}>
                        {offer.status === "active" ? "Active" : offer.status === "locked" ? "Locked" : "Completed"}
                      </Badge>
                      <Badge variant="secondary">{offer.type}</Badge>
                    </div>
                    <CardTitle className="text-xl">{offer.title}</CardTitle>
                    <CardDescription className="text-base">{offer.description}</CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-orange-500">{offer.reward}</div>
                    <div
                      className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium text-white ${getDifficultyColor(offer.difficulty)}`}
                    >
                      {offer.difficulty}
                    </div>
                  </div>
                </div>

                {offer.progress > 0 && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{offer.progress}%</span>
                    </div>
                    <Progress value={offer.progress} className="h-2" />
                  </div>
                )}
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>{offer.timeLeft}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{offer.participants} joined</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-medium">Requirements:</h4>
                  <ul className="space-y-2">
                    {offer.requirements.map((req, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="h-1.5 w-1.5 rounded-full bg-orange-500" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>

                <Button
                  className={`w-full ${
                    offer.status === "active"
                      ? "bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                      : "bg-gray-500 cursor-not-allowed"
                  }`}
                  disabled={offer.status !== "active"}
                >
                  {offer.status === "active"
                    ? "Participate Now"
                    : offer.status === "locked"
                      ? "Unlock Required"
                      : "Completed"}
                  {offer.status === "active" && <Zap className="ml-2 h-4 w-4" />}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="border-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 backdrop-blur-sm">
            <CardContent className="py-12">
              <TrendingUp className="h-16 w-16 mx-auto mb-6 text-orange-500" />
              <h2 className="text-3xl font-bold mb-4">Ready to Start Earning?</h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of traders who are already maximizing their profits with our exclusive offers and rewards
                program.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
                >
                  Start Trading Now
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
