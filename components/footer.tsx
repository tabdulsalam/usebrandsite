import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/assets/Icons/logo.svg";
import Facebook from "@/public/assets/Icons/facebook.svg";
import Twitter from "@/public/assets/Icons/twitter.svg";
import Instagram from "@/public/assets/Icons/instagram.svg";
import Youtube from "@/public/assets/Icons/youtube.svg";

export default function Footer() {
  return (
    <footer className=" grid grid-cols-[1fr_2fr] bg-wine w-full h-[280px] px-12 py-12">
      <div className="flex flex-col h-full justify-between">
        <Link href="/" className="flex ">
          <Image src={Logo} height={30} width={30} alt="Reflant logo" />
          <div className="text-white font-georgiaRegular uppercase text-2xl tracking-wide pl-3">
            Refluant
          </div>
        </Link>
        <div className="font-sourceSansProRegular text-white text-sm">
          © 2023 Refluant
        </div>
      </div>

      <div className="grid grid-cols-4">
        <div className="flex flex-col justify-between font-sourceSansProRegular text-white text-lg">
          <Link href="/">Home</Link>
          <Link href="/sell">Sell</Link>
          <Link href="/cart-and-transaction">Cart</Link>
          <Link href="/profile">Profile</Link>
        </div>

        <div className="flex flex-col justify-between font-sourceSansProRegular text-white text-lg">
          <Link href="">Location</Link>
          <Link href="/sign-up">Sign-Up</Link>
          <Link href="/sign-in">Sign-In</Link>
          <Link href="">Notification</Link>
        </div>

        <div className=" flex flex-col justify-between font-sourceSansProRegular text-white text-lg">
          <Link href="">Reviews</Link>
          <Link href="">Customer Service</Link>
          <Link href="">Privacy and Policy</Link>
          <Link href=""></Link>
        </div>

        <div className=" flex flex-col justify-between">
          <Link href="">
            <Image src={Facebook} alt="" />
          </Link>
          <Link href="">
            <Image src={Twitter} alt="" />
          </Link>
          <Link href="">
            <Image src={Instagram} alt="" />
          </Link>
          <Link href="">
            <Image src={Youtube} alt="" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
