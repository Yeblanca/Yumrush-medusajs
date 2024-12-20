import { Facebook, Instagram, Twitter } from "lucide-react"
import logo from "../../../public/logo.png"
import Link from "next/link"
import React from "react"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-50 py-12 rounded-lg mr-4 ml-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <Image src={logo} alt="logo" height={38} priority />
            <h3 className="text-lg font-bold mb-4">
              Delighting taste buds worldwide
            </h3>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary-500 transition-colors"
                >
                  Our Story
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary-500 transition-colors"
                >
                  Candy Collections
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary-500 transition-colors"
                >
                  Gift Ideas
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary-500 transition-colors"
                >
                  Recipes
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4 mb-8 md:mb-0">
            <h4 className="text-lg font-semibold mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary-500 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary-500 transition-colors"
                >
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary-500 transition-colors"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-secondary-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full md:w-1/4">
            <h4 className="text-lg font-semibold mb-4">Stay Sweet</h4>
            <p className="text-sm mb-4">
              Subscribe to our newsletter for sweet deals!
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-4 py-2 w-full rounded-l-full text-text"
              />
              <button className="bg-accent-500 px-4 py-2 rounded-r-full hover:bg-opacity-80 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-t border-black border-opacity-20 mt-8 pt-8 flex justify-between items-center">
          <p className="text-sm">© 2023 Yum Rush. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link
              href="#"
              className="hover:text-secondary-500 transition-colors"
            >
              <Facebook />
            </Link>
            <Link
              href="#"
              className="hover:text-secondary-500 transition-colors"
            >
              <Twitter />
            </Link>
            <Link
              href="#"
              className="hover:text-secondary-500 transition-colors"
            >
              <Instagram />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
