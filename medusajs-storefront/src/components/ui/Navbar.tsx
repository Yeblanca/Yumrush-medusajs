"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, Search, ShoppingCart, X } from "lucide-react"
import { Button, Input } from "@medusajs/ui"
import logo from "../../../public/logo.png"
import Image from "next/image"
import SideMenu from "@modules/layout/components/side-menu"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import { Cart, LineItem, Region } from "@medusajs/medusa"
import { enrichLineItems, retrieveCart } from "@modules/cart/actions"
import { useCart } from "@lib/context/cart-context"
import { useRegion } from "@lib/context/region-context"
import { listRegions } from "@lib/data"
import region from "@medusajs/medusa/dist/repositories/region"
// import CartButton from "@modules/layout/components/cart-button"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Store", href: "/store" },
  { name: "Search", href: "/search" },
  { name: "Account", href: "/account" },
  { name: "Cart", href: "/cart" },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [cartItems, setCartItems] = useState(0) // This would be managed by your cart state
  const [prevScrollPos, setPrevScrollPos] = useState(0)
  const [visible, setVisible] = useState(true)
  const { cart } = useCart()
  const [regions, setRegions] = useState<Region[] | null>([])

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset

      setVisible(
        (prevScrollPos > currentScrollPos && currentScrollPos > 0) ||
          currentScrollPos < 10
      )
      setPrevScrollPos(currentScrollPos)
    }

    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [prevScrollPos, visible])

  useEffect(() => {
    const fetchRegions = async () => {
      const fetchedregions = await listRegions().then((regions) => regions)
      setRegions(fetchedregions)
    }
    fetchRegions()
  }, [])

  return (
    <nav
      className={`z-50 bg-primary-900  fixed w-full transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            🍭
            <Link href="/">
              <Image src={logo} alt="logo" height={38} width={98} priority />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-pink-800 hover:bg-pink-200 px-3 py-2 rounded-md text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search candies..."
                  className="w-64 pr-10"
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              <CartDropdown cart={cart} />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <SideMenu regions={regions} />
          </div>
        </div>
      </div>
    </nav>
  )
}
