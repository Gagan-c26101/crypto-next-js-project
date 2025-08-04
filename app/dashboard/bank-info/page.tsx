"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AlertCircle, Building2, Plus, Trash2, Edit, CheckCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface BankAccount {
  id: string
  bankName: string
  accountNumber: string
  accountHolderName: string
  ifscCode: string
  accountType: string
  status: "verified" | "pending" | "rejected"
  isDefault: boolean
}

export default function BankInfoPage() {
  const router = useRouter()
  const [bankAccounts, setBankAccounts] = useState<BankAccount[]>([
    {
      id: "1",
      bankName: "State Bank of India",
      accountNumber: "****1234",
      accountHolderName: "John Doe",
      ifscCode: "SBIN0001234",
      accountType: "Savings",
      status: "verified",
      isDefault: true,
    },
    {
      id: "2",
      bankName: "HDFC Bank",
      accountNumber: "****5678",
      accountHolderName: "John Doe",
      ifscCode: "HDFC0001234",
      accountType: "Current",
      status: "pending",
      isDefault: false,
    },
  ])

  const handleDeleteAccount = (id: string) => {
    setBankAccounts(bankAccounts.filter((account) => account.id !== id))
  }

  const handleSetDefault = (id: string) => {
    setBankAccounts(
      bankAccounts.map((account) => ({
        ...account,
        isDefault: account.id === id,
      })),
    )
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "verified":
        return <Badge className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">Verified</Badge>
      case "pending":
        return <Badge className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">Pending</Badge>
      case "rejected":
        return <Badge className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300">Rejected</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Bank Information</h1>
          <p className="text-muted-foreground">Manage your bank accounts for deposits and withdrawals</p>
        </div>
        <Button variant="primary" onClick={() => router.push("/dashboard/add-bank")}>
          <Plus className="h-4 w-4 mr-2" />
          Add Bank Account
        </Button>
      </div>

      <Alert>
        <AlertCircle className="h-4 w-4" />
        <AlertDescription>
          Bank account verification may take 1-2 business days. You can only withdraw to verified accounts.
        </AlertDescription>
      </Alert>

      <div className="grid gap-6">
        {bankAccounts.length === 0 ? (
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Building2 className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">No Bank Accounts</h3>
              <p className="text-muted-foreground text-center mb-4">
                Add your first bank account to start making deposits and withdrawals.
              </p>
              <Button variant="primary" onClick={() => router.push("/dashboard/add-bank")}>
                <Plus className="h-4 w-4 mr-2" />
                Add Bank Account
              </Button>
            </CardContent>
          </Card>
        ) : (
          bankAccounts.map((account) => (
            <Card key={account.id} className={account.isDefault ? "ring-2 ring-orange-500" : ""}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
                      <Building2 className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{account.bankName}</CardTitle>
                      <CardDescription>{account.accountHolderName}</CardDescription>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {account.isDefault && (
                      <Badge className="bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300">
                        Default
                      </Badge>
                    )}
                    {getStatusBadge(account.status)}
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="text-sm text-muted-foreground">Account Number</label>
                    <p className="font-mono">{account.accountNumber}</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">IFSC Code</label>
                    <p className="font-mono">{account.ifscCode}</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Account Type</label>
                    <p className="capitalize">{account.accountType}</p>
                  </div>
                  <div>
                    <label className="text-sm text-muted-foreground">Status</label>
                    <div className="flex items-center space-x-2 mt-1">
                      {account.status === "verified" && <CheckCircle className="h-4 w-4 text-green-600" />}
                      <span className="capitalize">{account.status}</span>
                    </div>
                  </div>
                </div>

                <Separator className="my-4" />

                <div className="flex flex-wrap gap-2">
                  {!account.isDefault && account.status === "verified" && (
                    <Button variant="outline" size="sm" onClick={() => handleSetDefault(account.id)}>
                      Set as Default
                    </Button>
                  )}
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDeleteAccount(account.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    <Trash2 className="h-4 w-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))
        )}
      </div>
    </div>
  )
}
