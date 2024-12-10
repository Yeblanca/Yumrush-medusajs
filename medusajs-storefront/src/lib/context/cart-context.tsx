"use client" // include with Next.js 13+

import { createContext, useContext, useEffect, useState } from "react"
import { HttpTypes } from "@medusajs/types"
import { useRegion } from "./region-context"
import { retrieveCart } from "@modules/cart/actions"

type CartContextType = {
  cart?: HttpTypes.StoreCart
  setCart: React.Dispatch<React.SetStateAction<HttpTypes.StoreCart | undefined>>
  refreshCart: () => void
}

const CartContext = createContext<CartContextType | null>(null)

type CartProviderProps = {
  children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<HttpTypes.StoreCart>()
  const { region } = useRegion()
  const cartFetch = async () => {
    const cart = await retrieveCart()
    setCart(cart)
  }

  useEffect(() => {
    if (cart || !region) {
      return
    }

    const cartId = localStorage.getItem("cart_id")

    cartFetch()
  }, [cart, region])

  const refreshCart = () => {
    localStorage.removeItem("cart_id")
    setCart(undefined)
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
