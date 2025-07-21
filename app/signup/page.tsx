import type { Metadata } from "next"
import SignupClientPage from "./SignupClientPage"

export const metadata: Metadata = {
  title: "Sign Up - CryptoBull",
  description: "Create your CryptoBull account",
}

export default function SignupPage() {
  return <SignupClientPage />
}
