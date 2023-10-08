import React from "react";
import Image from "next/image";
import ProfileImage from "@/public/assets/images/profile2.png";

export default function profile() {
  return (
    <section className="bg-white ">
      <div className=" bg-bgLightGrey py-4 px-12">
        <Image src={ProfileImage} alt="" />
      </div>
    </section>
  );
}
