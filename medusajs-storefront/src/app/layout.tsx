import { Metadata } from "next"
import "styles/globals.css"
// import { dm_sans } from "./fonts"
import { Tilt_Warp, DM_Sans } from "next/font/google"
import { dm_sans } from "./fonts"

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:8000"

const tiltWarp = Tilt_Warp({
  subsets: ["latin"], // Puedes agregar más según tus necesidades
  weight: ["400"], // Ajusta según el peso que necesites
  variable: "--font-tilt-warp",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Agrega los pesos necesarios
  variable: "--font-dm-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-mode="light"
      className={`${tiltWarp.variable} ${dmSans.variable}`}
    >
      <body className="bg-background-950">
        <main className="relative">{props.children}</main>
      </body>
    </html>
  )
}
