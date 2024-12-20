import { Metadata } from "next"
import { Navbar } from "components/ui/Navbar"
import { RegionProvider } from "@lib/context/region-context"
import { CartProvider } from "@lib/context/cart-context"
import { Footer } from "components/ui/Footer"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default async function PageLayout(props: { children: React.ReactNode }) {
  return (
    <>
      <RegionProvider>
        <CartProvider>
          <Navbar />
          <main className="pt-[64px]">{props.children}</main>
          <Footer />
        </CartProvider>
      </RegionProvider>
    </>
  )
}
