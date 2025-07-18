import type { Metadata } from "next"
import ClientLoginPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Login - CryptoBull",
  description: "Sign in to your CryptoBull account",
}

export default function LoginPage() {
  return <ClientLoginPage />
}
