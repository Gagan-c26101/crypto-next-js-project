"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { TrendingUp, DollarSign, Gift, Trophy, Target, Clock, Star, ArrowRight, Coins, Zap } from "lucide-react"

export default function EarnPage() {
  const [activeTab, setActiveTab] = useState("commission")

  const stakingPools = [
    {
      asset: "BTC",
      apy: "5.2%",
      minAmount: "0.01",
      lockPeriod: "30 days",
      totalStaked: "1,234.56",
      userStaked: "2.5",
      rewards: "0.0125",
      status: "active",
    },
    {
      asset: "ETH",
      apy: "7.8%",
      minAmount: "0.1",
      lockPeriod: "60 days",
      totalStaked: "5,678.90",
      userStaked: "10.2",
      rewards: "0.456",
      status: "active",
    },
    {
      asset: "USDT",
      apy: "12.5%",
      minAmount: "100",
      lockPeriod: "90 days",
      totalStaked: "2,345,678",
      userStaked: "5000",
      rewards: "125.50",
      status: "active",
    },
  ]

  const earnOpportunities = [
    {
      title: "Referral Program",
      description: "Earn 20% commission on your referrals' trading fees",
      reward: "Up to $500/month",
      type: "referral",
      difficulty: "Easy",
      timeRequired: "Ongoing",
    },
    {
      title: "Trading Competition",
      description: "Compete with other traders for prize pool",
      reward: "$50,000 Prize Pool",
      type: "competition",
      difficulty: "Hard",
      timeRequired: "30 days",
    },
    {
      title: "Daily Check-in",
      description: "Login daily to earn bonus rewards",
      reward: "Up to 100 USDT",
      type: "daily",
      difficulty: "Easy",
      timeRequired: "1 min/day",
    },
    {
      title: "Social Media Tasks",
      description: "Complete social media tasks for rewards",
      reward: "5-50 USDT",
      type: "social",
      difficulty: "Easy",
      timeRequired: "5-10 mins",
    },
  ]

  const achievements = [
    {
      title: "First Trade",
      description: "Complete your first trade",
      reward: "10 USDT",
      completed: true,
      progress: 100,
    },
    {
      title: "Volume Trader",
      description: "Trade $10,000 in volume",
      reward: "50 USDT",
      completed: true,
      progress: 100,
    },
    {
      title: "Staking Master",
      description: "Stake for 30 consecutive days",
      reward: "100 USDT",
      completed: false,
      progress: 75,
    },
    {
      title: "Referral Champion",
      description: "Refer 10 active users",
      reward: "200 USDT",
      completed: false,
      progress: 40,
    },
  ]

  // Commission Transaction Data (empty for "No Records Found")
  const commissionTransactions = []

  // Earn Track Transaction Data (empty for "No Records Found")
  const earnTrackTransactions = []

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Earn</h1>
        <p className="text-muted-foreground">Maximize your crypto earnings with staking, competitions, and rewards.</p>
      </div>

      {/* Earning Summary */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <DollarSign className="h-4 w-4 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">$1,247.83</p>
                <p className="text-sm text-muted-foreground">Total Earned</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <Coins className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">$17,500</p>
                <p className="text-sm text-muted-foreground">Total Staked</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-purple-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">8.7%</p>
                <p className="text-sm text-muted-foreground">Avg APY</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                <Gift className="h-4 w-4 text-orange-600" />
              </div>
              <div>
                <p className="text-2xl font-bold">12</p>
                <p className="text-sm text-muted-foreground">Active Rewards</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Transaction Tables */}
      <Card>
        <CardHeader>
          <CardTitle>Transaction History</CardTitle>
          <CardDescription>View your commission and earn track transactions</CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="commission">Commission Transaction</TabsTrigger>
              <TabsTrigger value="earn-track">Earn Track Transaction</TabsTrigger>
            </TabsList>

            <TabsContent value="commission" className="space-y-4">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date / Time</TableHead>
                      <TableHead>Coin</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Staked Coins</TableHead>
                      <TableHead>Reward</TableHead>
                      <TableHead>Total Coin</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {commissionTransactions.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={9} className="text-center py-8">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                              <DollarSign className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <p className="text-muted-foreground font-medium">No Records Found !</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    ) : (
                      commissionTransactions.map((transaction, index) => (
                        <TableRow key={index}>
                          <TableCell>{transaction.dateTime}</TableCell>
                          <TableCell>{transaction.coin}</TableCell>
                          <TableCell>{transaction.type}</TableCell>
                          <TableCell>{transaction.amount}</TableCell>
                          <TableCell>{transaction.stakedCoins}</TableCell>
                          <TableCell>{transaction.reward}</TableCell>
                          <TableCell>{transaction.totalCoin}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{transaction.status}</Badge>
                          </TableCell>
                          <TableCell>
                            <Button size="sm" variant="outline">
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>

            <TabsContent value="earn-track" className="space-y-4">
              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Date / Time</TableHead>
                      <TableHead>Coin</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Remaining Days</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {earnTrackTransactions.length === 0 ? (
                      <TableRow>
                        <TableCell colSpan={7} className="text-center py-8">
                          <div className="flex flex-col items-center space-y-2">
                            <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center">
                              <Trophy className="h-6 w-6 text-muted-foreground" />
                            </div>
                            <p className="text-muted-foreground font-medium">No Records Found !</p>
                          </div>
                        </TableCell>
                      </TableRow>
                    ) : (
                      earnTrackTransactions.map((transaction, index) => (
                        <TableRow key={index}>
                          <TableCell>{transaction.dateTime}</TableCell>
                          <TableCell>{transaction.coin}</TableCell>
                          <TableCell>{transaction.type}</TableCell>
                          <TableCell>{transaction.amount}</TableCell>
                          <TableCell>{transaction.duration}</TableCell>
                          <TableCell>{transaction.remainingDays}</TableCell>
                          <TableCell>
                            <Badge variant="secondary">{transaction.status}</Badge>
                          </TableCell>
                        </TableRow>
                      ))
                    )}
                  </TableBody>
                </Table>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Staking Pools */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Coins className="h-5 w-5" />
            <span>Staking Pools</span>
          </CardTitle>
          <CardDescription>Stake your crypto assets to earn passive income</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {stakingPools.map((pool) => (
              <div key={pool.asset} className="p-4 border rounded-lg">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                      <span className="font-bold text-orange-600">{pool.asset}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold">{pool.asset} Staking</h3>
                      <p className="text-sm text-muted-foreground">
                        APY: <span className="text-green-600 font-medium">{pool.apy}</span>
                      </p>
                    </div>
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                  >
                    {pool.status}
                  </Badge>
                </div>

                <div className="grid gap-4 md:grid-cols-4 mb-4">
                  <div>
                    <p className="text-sm text-muted-foreground">Your Stake</p>
                    <p className="font-medium">
                      {pool.userStaked} {pool.asset}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Rewards Earned</p>
                    <p className="font-medium text-green-600">
                      {pool.rewards} {pool.asset}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Lock Period</p>
                    <p className="font-medium">{pool.lockPeriod}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Min Amount</p>
                    <p className="font-medium">
                      {pool.minAmount} {pool.asset}
                    </p>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <Button size="sm">Stake More</Button>
                  <Button variant="outline" size="sm">
                    Claim Rewards
                  </Button>
                  <Button variant="ghost" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Earn Opportunities */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Earn Opportunities</span>
            </CardTitle>
            <CardDescription>Various ways to earn additional rewards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {earnOpportunities.map((opportunity, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-medium">{opportunity.title}</h3>
                      <p className="text-sm text-muted-foreground">{opportunity.description}</p>
                    </div>
                    <Badge
                      variant="outline"
                      className={
                        opportunity.difficulty === "Easy"
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : opportunity.difficulty === "Medium"
                            ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                            : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                      }
                    >
                      {opportunity.difficulty}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <DollarSign className="h-3 w-3" />
                        <span>{opportunity.reward}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{opportunity.timeRequired}</span>
                      </div>
                    </div>
                    <Button size="sm" variant="outline">
                      <ArrowRight className="h-3 w-3 mr-1" />
                      Start
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Achievements */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trophy className="h-5 w-5" />
              <span>Achievements</span>
            </CardTitle>
            <CardDescription>Complete challenges to earn bonus rewards</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="p-4 border rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-start space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          achievement.completed ? "bg-green-100 dark:bg-green-900" : "bg-gray-100 dark:bg-gray-800"
                        }`}
                      >
                        {achievement.completed ? (
                          <Trophy className="h-4 w-4 text-green-600" />
                        ) : (
                          <Target className="h-4 w-4 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="font-medium">{achievement.title}</h3>
                        <p className="text-sm text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-green-600">{achievement.reward}</p>
                      {achievement.completed && (
                        <Badge
                          variant="secondary"
                          className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 text-xs"
                        >
                          Completed
                        </Badge>
                      )}
                    </div>
                  </div>
                  {!achievement.completed && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{achievement.progress}%</span>
                      </div>
                      <Progress value={achievement.progress} className="h-2" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Fast access to popular earning features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <Button className="h-20 flex-col space-y-2">
              <Coins className="h-6 w-6" />
              <span>Start Staking</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Gift className="h-6 w-6" />
              <span>Claim Rewards</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Trophy className="h-6 w-6" />
              <span>Join Contest</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Star className="h-6 w-6" />
              <span>Refer Friends</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
