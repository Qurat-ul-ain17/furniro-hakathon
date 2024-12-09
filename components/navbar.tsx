import React from "react";
import Image from "next/image";
import Link from "next/link"
const Navbar = () => {
  return (
    <nav className=" w-full px-4 py-2">
      <div className="w-[1286px] mx-auto flex items-center justify-between px-4">
        {/* Logo Section */}
        <div>
          <Image
            src="/assets/logo.png"
            alt="Furniro Logo"
            width={185}
            height={41}
          />
        </div>

        <div className="hidden md:flex items-center space-x-14">
        <Link href={'/'}><h1>Home</h1></Link>
          <Link href={'/shop'}><h1>Shop</h1></Link>
          <Link href={'/about'}>About</Link>
          <Link href={'/contact'}>Contact</Link>
        </div>
        {/* right section */}
        <div className="flex space-x-8">
          <Image
            src="/assets/account.png"
            alt="account"
            width={23}
            height={18}
          />
          <Image src="/assets/search.png" alt="search" width={22} height={22} />

          <Image src="/assets/heart.png" alt="heart" width={23} height={20} />

          <Image src="/assets/cart.png" alt="" width={24} height={22} />
        </div>

        {/* <div className="flex items-center space-x-6">
          <a href="/search" className="text-gray-700 hover:text-gray-500">
            <TbUserExclamation size={24}/>
          </a>
          <a href="/favorites" className="text-gray-700 hover:text-gray-500">
            <IoIosSearch size={24}/>
          </a>
          <a href="/cart" className="text-gray-700 hover:text-gray-500">
            <IoCartOutline size={24}/>
          </a>
          <a href="/profile" className="text-gray-700 hover:text-gray-500">
            <HiOutlineUser size={24}/>
          </a>
        </div> */}

        {/* <div className="md:hidden flex items-center">
          <button className="text-gray-700 hover:text-gray-500 focus:outline-none">
      
            <IoIosSearch size={24} />
          </button>
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
