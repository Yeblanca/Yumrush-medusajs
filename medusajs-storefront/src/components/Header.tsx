import React, { useState } from "react"
import Drawer from "./ui/Drawer"
import BurgerMenu from "./ui/BurgerMenu"
import Navbar from "./ui/Navbar"
import ImageHero from "./ImageHero"
import Image from "next/image"
import Link from "next/link"
import { Hero } from "./Hero"
import headerImage from "../../public/header.png"
import bagIcon from "../../public/bag-icon.svg"
import hearthIcon from "../../public/hearth-icon.svg"
import searchIcon from "../../public/search-icon.svg"
import userIcon from "../../public/user-icon.svg"
import logo from "../../public/logo.png"

const HeaderMain = () => {
  return (
    <div
      className="text-white mb-10 xl:mb-24 h-[757px] md:h-[584px] xl:h-[647px] bg-no-repeat bg-cover md:bg-bottom bg-center font-poppins w-full"
      style={{ backgroundImage: `url(${headerImage.src})` }} // Asignamos el background-image con Next.js
    >
      <div className="px-3 md:px-7 w-100 mx-auto xl:w-4/6">
        <div className="flex justify-between md:py-7 bg-custom-red-2">
          <div className="flex justify-center align-middle">
            {/* <BurgerMenu setActive={() => {}} active={false} /> */}
            {/* <Drawer setActive={() => {}} active={false} /> */}
            <div className="hidden md:block justify-center align-middle">
              <div className="flex space-x-4">
                <Link className="font-bold text-xl flex space-x-2" href="">
                  <div className="align-middle flex flex-col justify-center">
                    <Image
                      src={userIcon}
                      width={14}
                      height={18}
                      alt="user icon"
                      priority
                    />
                  </div>
                  <div>Login</div>
                </Link>
                <Link className="font-bold text-xl flex space-x-2" href="">
                  Rewards
                </Link>
              </div>
            </div>
          </div>
          <div>
            <Link href="">
              <Image src={logo} alt="logo" height={38} width={98} priority />
            </Link>
          </div>
          <div className="flex space-x-3 align-middle">
            <div className="flex space-x-3 align middle">
              <span className="hidden xl:inline text-xl">Search</span>
              <span className="mt-1">
                <Image
                  src={searchIcon}
                  alt="search"
                  width={18}
                  height={18}
                  priority
                />
              </span>
              <span className="mt-1">
                <Image
                  src={hearthIcon}
                  alt="heart"
                  width={18}
                  height={18}
                  priority
                />
              </span>
              <span className="mt-1">
                <div className="relative">
                  <div className="absolute top-[-10px] left-3 rounded-full h-5 w-5 bg-color-orange">
                    <span className="flex justify-center item-center text-custom-purple font-poppins">
                      2
                    </span>
                  </div>
                </div>
                <Link href="/cart">
                  <Image
                    src={bagIcon}
                    alt="bag icon"
                    width={18}
                    height={18}
                    priority
                  />
                </Link>
              </span>
            </div>
          </div>
        </div>
        <Navbar />
        <ImageHero />
      </div>
    </div>
  )
}

export default HeaderMain
