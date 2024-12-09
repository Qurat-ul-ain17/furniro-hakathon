import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";
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
          <Link href={"/"}>
            <h1>Home</h1>
          </Link>
          <Link href={"/shop"}>
            <h1>Shop</h1>
          </Link>
          <Link href={"/about"}>About</Link>
          <Link href={"/contact"}>Contact</Link>
        </div>
        {/* right section */}
        <div className="hidden md:flex space-x-8">
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
        <Sheet>
          <SheetTrigger className="flex">
            <Button variant={"outline"} size={"icon"} className="rounded-full">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>
                <div>
                  <Image
                    src="/assets/logo.png"
                    alt="Furniro Logo"
                    width={185}
                    height={41}
                  />
                </div>
              </SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-6 mt-6">
              <Link href={"/"}>
                <h1>Home</h1>
              </Link>
              <Link href={"/shop"}>
                <h1>Shop</h1>
              </Link>
              <Link href={"/about"}>About</Link>
              <Link href={"/contact"}>Contact</Link>
            </div>
            <div className="flex space-x-8 mt-6">
              <Image
                src="/assets/account.png"
                alt="account"
                width={23}
                height={18}
              />
              <Image
                src="/assets/search.png"
                alt="search"
                width={22}
                height={22}
              />

              <Image
                src="/assets/heart.png"
                alt="heart"
                width={23}
                height={20}
              />

              <Image src="/assets/cart.png" alt="" width={24} height={22} />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
