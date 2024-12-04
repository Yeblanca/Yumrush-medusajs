import React, { useState } from "react"
import Drawer from "./ui/Drawer"
import BurgerMenu from "./ui/BurgerMenu"
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
      <div className="pt-12 relative px-3 md:px-7 w-100 mx-auto xl:w-4/6">
        <ImageHero />
      </div>
    </div>
  )
}

export default HeaderMain
