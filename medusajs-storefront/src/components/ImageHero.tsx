import Image from "next/image"
import lollipop from "../../public/lollipop.png"
import feastables from "../../public/FEASTABLES.png"

const ImageHero = () => {
  return (
    <div className="flex flex-col md:flex-row md:mb-12 pt-12">
      <div className="md:w-1/2">
        <div className="text-4xl xl:text-5xl leading normal font-semibold py-8 font-heading">
          Welcome to <br />
          The <span className="text-orange-300"> Candy </span> Shop
        </div>
        <div className="text-xl">
          Shop artisan candy, gourmet dark chocolates, milk chocolates and white
          chocolates, and candy gifts
        </div>
        <div>
          <a>
            <div className="text-black mt-9 inline-flex bg-white p-4 rounded-full font-bold px-7">
              Shop now
            </div>
          </a>
        </div>
      </div>
      <div className="flex md:w-1/2 align-middle justify-center pt-10">
        <Image
          className="w-56 md:w-72 xl:w-80"
          src={feastables}
          alt="lollipop"
          width={200}
          height={96}
          unoptimized
        />
      </div>
    </div>
  )
}

export default ImageHero
