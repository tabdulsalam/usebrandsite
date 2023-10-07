import React from "react";
import Image from "next/image";
import Link from "next/link";
import CartIcon from "@/public/assets/Icons/cart-icon.svg";
import EarthIcon from "@/public/assets/Icons/earth-icon.svg";
import Logo from "@/public/assets/Icons/logo.svg";
import ProfileIcon from "@/public/assets/Icons/profile-icon.svg";
import SearchIcon from "@/public/assets/Icons/search-icon.svg";

export default function NavBar() {
  return (
    <nav className="bg-wine h-[200px] w-full px-12 text-white ">
      <div className="flex justify-between items-center pt-[60px] pb-10 ">
        <div className="flex justify-center items-center ">
          <Link
            href="/sign-in"
            className="font-sourceSansProRegular text-lg pr-8"
          >
            Sign In
          </Link>
          <Link href="/profile" className="pr-8">
            <Image src={ProfileIcon} alt="profile" />
          </Link>
          <Link href="/earth">
            <Image src={EarthIcon} alt="" />
          </Link>
        </div>

        <Link href="/" className="flex justify-center items-center">
          <Image src={Logo} alt="Reflant logo" />
          <div className="text-white font-georgiaRegular uppercase font-light text-[44px] leading-tight tracking-wide pl-7 ">
            Refluant
          </div>
        </Link>

        <div className="flex justify-center items-center">
          <div>
            <Image src={SearchIcon} alt="search icon" />
          </div>
          <Link href="/cart-and-transaction" className="pl-8">
            <Image src={CartIcon} alt="cart" />
          </Link>
          <Link href="/sell" className="font-sourceSansProRegular text-lg pl-8">
            Sell
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center text-lg">
        <Link href="" className="px-8">
          Shirts
        </Link>
        <Link href="" className="px-8">
          Trousers
        </Link>
        <Link href="" className="px-8">
          Shoes
        </Link>
        <Link href="" className="px-8">
          Bags
        </Link>
        <Link href="" className="px-8">
          Sport Wears
        </Link>
        <Link href="" className="px-8">
          Sneakers
        </Link>
        <Link href="" className="px-8">
          Category
        </Link>
      </div>
    </nav>
  );
}
