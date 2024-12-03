import Link from "next/link";

const Navbar = () => {
  return (
    <div className="max-w-7xl mx-auto p-4 flex-row justify-around hidden rounded-full md:flex bg-orange-300">
      <Link href="/collection" className="text-custom-purple font-semibold ml-3">
        Collection
      </Link>
      <Link href="/chocolate" className="text-custom-purple font-semibold ">
        Chocolate
      </Link>
      <Link href="/gifts" className="text-custom-purple font-semibold ">
        Gifts
      </Link>
      <Link href="/sales" className="text-custom-purple font-semibold ">
        Sales & Deals
      </Link>
      <Link href="/experience" className="text-custom-purple font-semibold ">
        Experience
      </Link>
      <Link href="/grocery" className="text-custom-purple font-semibold mr-3">
        Grocery Aisle
      </Link>
    </div>
  );
};

export default Navbar;

