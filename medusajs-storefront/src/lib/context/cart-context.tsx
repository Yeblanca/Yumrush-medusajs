"use client" // include with Next.js 13+

import { createContext, useContext, useEffect, useState } from "react"
import { HttpTypes } from "@medusajs/types"
import { useRegion } from "./region-context"
import { retrieveCart } from "@modules/cart/actions"
import { Cart } from "@medusajs/medusa"

type CartContextType = {
  cart?: Omit<Cart, "beforeInsert" | "afterLoad"> | null
  setCart: React.Dispatch<
    React.SetStateAction<Omit<Cart, "beforeInsert" | "afterLoad"> | null>
  > // Aquí
  refreshCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

type CartProviderProps = {
  children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<Omit<
    Cart,
    "beforeInsert" | "afterLoad"
  > | null>(null)
  const { region } = useRegion()
  const cartFetch = async () => {
    const cart = await retrieveCart()
    setCart(cart)
  }

  useEffect(() => {
    if (cart !== null || !region) {
      return
    }

    const cartId = localStorage.getItem("cart_id")

    cartFetch()
  }, [cart, region])

  const refreshCart = () => {
    localStorage.removeItem("cart_id")
    setCart(null)
    cartFetch()
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        refreshCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }

  return context
}
