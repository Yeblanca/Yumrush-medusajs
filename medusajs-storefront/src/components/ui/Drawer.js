import Image from "next/image"
import { useState, useEffect } from "react"
import Link from "next/link"

const Drawer = ({ setActive, active }) => {
  useEffect(() => {
    if (active) {
      document.body.classList.add("overflow-y-hidden")
    } else {
      document.body.classList.remove("overflow-y-hidden")
    }
    window.addEventListener("resize", () => {
      if (window.innerWidth > 728) {
        setActive(false)
      }
    })
  }, [active, setActive])

  return (
    <>
      <div
        className={
          active
            ? `md:hidden fixed z-50 h-screen p-3 w-1/2 bg-white transition-all ease-in-out duration-300 top-0 left-0`
            : `md:hidden fixed z-50 h-screen p-3 w-1/2 bg-white transition-all ease-in-out duration-300 top-0 -left-full`
        }
      >
        <div className="flex flex-col h-full">
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
            onClick={() => setActive(false)}
          >
            <Image src="/cross.svg" alt="cross" width={18} height={18} />
            <span className="sr-only">Close menu</span>
          </button>
          <div className="text-black h-auto flex flex-col gap-6 pt-5 font-bold">
            <Link href="/collection" className="text-black font-semibold">
              Collection
            </Link>
            <Link href="/chocolate" className="text-black font-semibold ">
              Chocolate
            </Link>
            <Link href="/gifts" className="text-black font-semibold ">
              Gifts
            </Link>
            <Link href="/sales" className="text-black font-semibold ">
              Sales & Deals
            </Link>
            <Link href="/experience" className="text-black font-semibold ">
              Experience
            </Link>
            <Link href="/grocery" className="text-black font-semibold">
              Grocery Aisle
            </Link>
          </div>
          <div className="mt-auto text-black mb-1">
            <div className="flex justify-start">
              <a className="font-bold text-sm mr-3 flex space-x-2" href="">
                <div className="align-middle flex flex-col justify-center">
                  <Image
                    src="/user-icon-bl.svg"
                    alt="user icon"
                    width={14}
                    height={18}
                  />
                </div>
                <div>Login</div>
              </a>
              <a className="font-bold text-sm flex space-x-2" href="">
                <span>Rewards</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Drawer
