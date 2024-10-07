import { Metadata } from "next"
import "styles/globals.css"
import { dm_sans } from "./fonts"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" data-mode="light" className={dm_sans.className}>
      <body className="bg-background">
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
