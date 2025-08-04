"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Building2 } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

const countries = [
  "Andorra",
  "United Arab Emirates",
  "Afghanistan",
  "Antigua and Barbuda",
  "Anguilla",
  "Albania",
  "Armenia",
  "Angola",
  "Antarctica",
  "Argentina",
  "American Samoa",
  "Austria",
  "Australia",
  "Aruba",
  "Åland",
  "Azerbaijan",
  "Bosnia and Herzegovina",
  "Barbados",
  "Bangladesh",
  "Belgium",
  "Burkina Faso",
  "Bulgaria",
  "Bahrain",
  "Burundi",
  "Benin",
  "Saint Barthélemy",
  "Bermuda",
  "Brunei",
  "Bolivia",
  "Bonaire",
  "Brazil",
  "Bahamas",
  "Bhutan",
  "Bouvet Island",
  "Botswana",
  "Belarus",
  "Belize",
  "Canada",
  "Cocos [Keeling] Islands",
  "Democratic Republic of the Congo",
  "Central African Republic",
  "Republic of the Congo",
  "Switzerland",
  "Ivory Coast",
  "Cook Islands",
  "Chile",
  "Cameroon",
  "China",
  "Colombia",
  "Costa Rica",
  "Cuba",
  "Cape Verde",
  "Curacao",
  "Christmas Island",
  "Cyprus",
  "Czech Republic",
  "Germany",
  "Djibouti",
  "Denmark",
  "Dominica",
  "Dominican Republic",
  "Algeria",
  "Ecuador",
  "Estonia",
  "Egypt",
  "Western Sahara",
  "Eritrea",
  "Spain",
  "Ethiopia",
  "Finland",
  "Fiji",
  "Falkland Islands",
  "Micronesia",
  "Faroe Islands",
  "France",
  "Gabon",
  "United Kingdom",
  "Grenada",
  "Georgia",
  "French Guiana",
  "Guernsey",
  "Ghana",
  "Gibraltar",
  "Greenland",
  "Gambia",
  "Guinea",
  "Guadeloupe",
  "Equatorial Guinea",
  "Greece",
  "South Georgia and the South Sandwich Islands",
  "Guatemala",
  "Guam",
  "Guinea-Bissau",
  "Guyana",
  "Hong Kong",
  "Heard Island and McDonald Islands",
  "Honduras",
  "Croatia",
  "Haiti",
  "Hungary",
  "Indonesia",
  "Ireland",
  "Israel",
  "Isle of Man",
  "India",
  "British Indian Ocean Territory",
  "Iraq",
  "Iran",
  "Iceland",
  "Italy",
  "Jersey",
  "Jamaica",
  "Jordan",
  "Japan",
  "Kenya",
  "Kyrgyzstan",
  "Cambodia",
  "Kiribati",
  "Comoros",
  "Saint Kitts and Nevis",
  "North Korea",
  "South Korea",
  "Kuwait",
  "Cayman Islands",
  "Kazakhstan",
  "Laos",
  "Lebanon",
  "Saint Lucia",
  "Liechtenstein",
  "Sri Lanka",
  "Liberia",
  "Lesotho",
  "Lithuania",
  "Luxembourg",
  "Latvia",
  "Libya",
  "Morocco",
  "Monaco",
  "Moldova",
  "Montenegro",
  "Saint Martin",
  "Madagascar",
  "Marshall Islands",
  "Macedonia",
  "Mali",
  "Myanmar [Burma]",
  "Mongolia",
  "Macao",
  "Northern Mariana Islands",
  "Martinique",
  "Mauritania",
  "Montserrat",
  "Malta",
  "Mauritius",
  "Maldives",
  "Malawi",
  "Mexico",
  "Malaysia",
  "Mozambique",
  "Namibia",
  "New Caledonia",
  "Niger",
  "Norfolk Island",
  "Nigeria",
  "Nicaragua",
  "Netherlands",
  "Norway",
  "Nepal",
  "Nauru",
  "Niue",
  "New Zealand",
  "Oman",
  "Panama",
  "Peru",
  "French Polynesia",
  "Papua New Guinea",
  "Philippines",
  "Pakistan",
  "Poland",
  "Saint Pierre and Miquelon",
  "Pitcairn Islands",
  "Puerto Rico",
  "Palestine",
  "Portugal",
  "Palau",
  "Paraguay",
  "Qatar",
  "Réunion",
  "Romania",
  "Serbia",
  "Russia",
  "Rwanda",
  "Saudi Arabia",
  "Solomon Islands",
  "Seychelles",
  "Sudan",
  "Sweden",
  "Singapore",
  "Saint Helena",
  "Slovenia",
  "Svalbard and Jan Mayen",
  "Slovakia",
  "Sierra Leone",
  "San Marino",
  "Senegal",
  "Somalia",
  "Suriname",
  "South Sudan",
  "São Tomé and Príncipe",
  "El Salvador",
  "Sint Maarten",
  "Syria",
  "Swaziland",
  "Turks and Caicos Islands",
  "Chad",
  "French Southern Territories",
  "Togo",
  "Thailand",
  "Tajikistan",
  "Tokelau",
  "East Timor",
  "Turkmenistan",
  "Tunisia",
  "Tonga",
  "Turkey",
  "Trinidad and Tobago",
  "Tuvalu",
  "Taiwan",
  "Tanzania",
  "Ukraine",
  "Uganda",
  "U.S. Minor Outlying Islands",
  "United States",
  "Uruguay",
  "Uzbekistan",
  "Vatican City",
  "Saint Vincent and the Grenadines",
  "Venezuela",
  "British Virgin Islands",
  "U.S. Virgin Islands",
  "Vietnam",
  "Vanuatu",
  "Wallis and Futuna",
  "Samoa",
  "Kosovo",
  "Yemen",
  "Mayotte",
  "South Africa",
  "Zambia",
  "Zimbabwe",
]

export default function AddBankPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    currency: "INR",
    bankName: "",
    accountType: "",
    branchName: "",
    accountNumber: "",
    accountHolderName: "",
    ifscCode: "",
    bankCountry: "",
    bankCity: "",
    bankAddress: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Navigate back to bank info page
    router.push("/dashboard/bank-info")
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="sm" onClick={() => router.back()} className="flex items-center space-x-2">
          <ArrowLeft className="h-4 w-4" />
          <span>Back</span>
        </Button>
        <div>
          <h1 className="text-3xl font-bold">Bank Details</h1>
          <p className="text-muted-foreground">Enter the following Bank Details</p>
        </div>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-orange-100 dark:bg-orange-900 rounded-lg">
              <Building2 className="h-6 w-6 text-orange-600 dark:text-orange-400" />
            </div>
            <div>
              <CardTitle>Add New Bank Account</CardTitle>
              <CardDescription>Fill in all the required information to add your bank account</CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Currency */}
            <div className="grid gap-2">
              <Label htmlFor="currency">Currency</Label>
              <Select value={formData.currency} onValueChange={(value) => handleInputChange("currency", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Currency" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="INR">INR</SelectItem>
                  <SelectItem value="USD">USD</SelectItem>
                  <SelectItem value="EUR">EUR</SelectItem>
                  <SelectItem value="GBP">GBP</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Bank Name */}
            <div className="grid gap-2">
              <Label htmlFor="bankName">Bank Name</Label>
              <Input
                id="bankName"
                value={formData.bankName}
                onChange={(e) => handleInputChange("bankName", e.target.value)}
                placeholder="Enter bank name"
                required
              />
            </div>

            {/* Account Type */}
            <div className="grid gap-2">
              <Label htmlFor="accountType">Account Type</Label>
              <Select value={formData.accountType} onValueChange={(value) => handleInputChange("accountType", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Account Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="current">Current</SelectItem>
                  <SelectItem value="savings">Savings</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Branch Name */}
            <div className="grid gap-2">
              <Label htmlFor="branchName">Branch Name</Label>
              <Input
                id="branchName"
                value={formData.branchName}
                onChange={(e) => handleInputChange("branchName", e.target.value)}
                placeholder="Enter branch name"
                required
              />
            </div>

            {/* Account Number */}
            <div className="grid gap-2">
              <Label htmlFor="accountNumber">Account Number</Label>
              <Input
                id="accountNumber"
                value={formData.accountNumber}
                onChange={(e) => handleInputChange("accountNumber", e.target.value)}
                placeholder="Enter account number"
                required
              />
            </div>

            {/* Account Holder Name */}
            <div className="grid gap-2">
              <Label htmlFor="accountHolderName">
                Account Holder Name
                <span className="text-red-500 ml-1">*</span>
              </Label>
              <Input
                id="accountHolderName"
                value={formData.accountHolderName}
                onChange={(e) => handleInputChange("accountHolderName", e.target.value)}
                placeholder="Enter account holder name"
                required
              />
              <Alert>
                <AlertDescription className="text-sm">
                  Name should be as per Bank passbook (It should be same as in profile also)
                </AlertDescription>
              </Alert>
            </div>

            {/* IFSC/IBAN/Swift Code */}
            <div className="grid gap-2">
              <Label htmlFor="ifscCode">IFSC/IBAN/Swift Code</Label>
              <Input
                id="ifscCode"
                value={formData.ifscCode}
                onChange={(e) => handleInputChange("ifscCode", e.target.value)}
                placeholder="Enter IFSC/IBAN/Swift code"
                required
              />
            </div>

            {/* Bank Country */}
            <div className="grid gap-2">
              <Label htmlFor="bankCountry">Bank Country</Label>
              <Select value={formData.bankCountry} onValueChange={(value) => handleInputChange("bankCountry", value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose Country" />
                </SelectTrigger>
                <SelectContent className="max-h-60">
                  {countries.map((country) => (
                    <SelectItem key={country} value={country}>
                      {country}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Bank City */}
            <div className="grid gap-2">
              <Label htmlFor="bankCity">Bank City</Label>
              <Input
                id="bankCity"
                value={formData.bankCity}
                onChange={(e) => handleInputChange("bankCity", e.target.value)}
                placeholder="Enter bank city"
                required
              />
            </div>

            {/* Bank Address */}
            <div className="grid gap-2">
              <Label htmlFor="bankAddress">Bank Address</Label>
              <Input
                id="bankAddress"
                value={formData.bankAddress}
                onChange={(e) => handleInputChange("bankAddress", e.target.value)}
                placeholder="Enter bank address"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end space-x-4 pt-6">
              <Button type="button" variant="outline" onClick={() => router.back()}>
                Cancel
              </Button>
              <Button
                type="submit"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600"
              >
                Submit
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
