import Link from "next/link";
import { IoSearchSharp } from "react-icons/io5";
import { FaHamburger } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
  return (
    <header className=" bg-slate-50 sticky top-0 z-10 shadow-md">
      <div className="flex justify-between items-center py-5 mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
        <div className="flex justify-start">
          <Link
            href="/"
            className="cursor-pointer"
          >
            <Image
              src="/logodark.png"
              width={100}
              height={50}
            />
          </Link>
        </div>
        <nav className="justify-center lg:gap-4 items-center lg:text-lg gap-2 hidden md:flex">
          <Link
            href="/"
            className="hover:text-slate-700 duration-300"
          >
            Home
          </Link>
          <Link
            href="/"
            className="hover:text-slate-700 duration-300"
          >
            Recipes
          </Link>
          <Link
            href="/"
            className="hover:text-slate-700 duration-300"
          >
            Categories
          </Link>
          <Link
            href="/"
            className="hover:text-slate-700 duration-300"
          >
            About Us
          </Link>
          <Link
            href="/"
            className="hover:text-slate-700 duration-300"
          >
            Contact
          </Link>
          <button className="w-10 h-10 rounded-full bg-primary-color flex justify-center items-center shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-[1.02] text-secondary-color">
            <IoSearchSharp className="h-6 w-6" />
          </button>
        </nav>
        <div className="flex gap-4 justify-end">
          <button className="custom-btn">Login/Signup</button>
          <button className="md:hidden">
            <FaHamburger className="h-6 w-6" />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
