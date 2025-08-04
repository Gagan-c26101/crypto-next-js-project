import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import {
  Wallet,
  TrendingUp,
  TrendingDown,
  DollarSign,
  Activity,
  Users,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">Welcome back! Here's an overview of your account.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$45,231.89</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +20.1% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Portfolio Value</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,234.56</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +15.3% from last month
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-red-600 flex items-center">
                <ArrowDownRight className="h-3 w-3 mr-1" />
                -2 from yesterday
              </span>
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Trades</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600 flex items-center">
                <ArrowUpRight className="h-3 w-3 mr-1" />
                +12 from yesterday
              </span>
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Portfolio Overview */}
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Overview</CardTitle>
            <CardDescription>Your current holdings and performance</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                  <span className="text-sm font-medium">Bitcoin (BTC)</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">2.5 BTC</div>
                  <div className="text-xs text-muted-foreground">$125,000</div>
                </div>
              </div>
              <Progress value={45} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                  <span className="text-sm font-medium">Ethereum (ETH)</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">15.2 ETH</div>
                  <div className="text-xs text-muted-foreground">$45,600</div>
                </div>
              </div>
              <Progress value={30} className="h-2" />
            </div>

            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">Others</span>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium">Various</div>
                  <div className="text-xs text-muted-foreground">$25,000</div>
                </div>
              </div>
              <Progress value={25} className="h-2" />
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Your latest transactions and trades</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Bought 0.5 BTC</p>
                  <p className="text-xs text-muted-foreground">2 hours ago</p>
                </div>
                <Badge variant="secondary">+$25,000</Badge>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center">
                  <TrendingDown className="h-4 w-4 text-red-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Sold 2.1 ETH</p>
                  <p className="text-xs text-muted-foreground">5 hours ago</p>
                </div>
                <Badge variant="secondary">-$6,300</Badge>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                  <Wallet className="h-4 w-4 text-blue-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Deposited USD</p>
                  <p className="text-xs text-muted-foreground">1 day ago</p>
                </div>
                <Badge variant="secondary">+$10,000</Badge>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center">
                  <CreditCard className="h-4 w-4 text-purple-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Staking Reward</p>
                  <p className="text-xs text-muted-foreground">2 days ago</p>
                </div>
                <Badge variant="secondary">+$125</Badge>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Bought 1.2 ETH</p>
                  <p className="text-xs text-muted-foreground">3 days ago</p>
                </div>
                <Badge variant="secondary">+$3,600</Badge>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-8 h-8 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center">
                  <Activity className="h-4 w-4 text-orange-600" />
                </div>
                <div className="flex-1 space-y-1">
                  <p className="text-sm font-medium">Limit Order Filled</p>
                  <p className="text-xs text-muted-foreground">4 days ago</p>
                </div>
                <Badge variant="secondary">+$2,100</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Frequently used features</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <Button className="h-20 flex-col space-y-2">
              <Wallet className="h-6 w-6" />
              <span>Deposit</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <TrendingUp className="h-6 w-6" />
              <span>Trade</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <Activity className="h-6 w-6" />
              <span>Staking</span>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent">
              <CreditCard className="h-6 w-6" />
              <span>Buy Crypto</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
