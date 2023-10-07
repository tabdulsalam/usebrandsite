import React from "react";
import Image from "next/image";
import ItemImage from "@/public/assets/images/item1.png";
import ProfileImage from "@/public/assets/images/profile1.png";
import CommentImg from "@/public/assets/Icons/comment.svg";
import LikeImg from "@/public/assets/Icons/like.svg";
import CloseBtn from "@/public/assets/Icons/closebtn.svg";
import DropdownSelect from "@/components/ui/dropdown-select";
import IncrementSelect from "@/components/ui/increment-select";
import {
  Locations,
  Brands,
  Category,
  Sex,
  Delivery,
  Condition,
} from "@/lib/data";

export default function sell() {
  return (
    <section className="  bg-white">
      <div className="flex justify-center items-center mt-14 mb-7">
        <div className="py-[10px] font-sourceSansProRegular text-lg bg-wine opacity-90 w-[325px] text-white text-center rounded-2xl ">
          Listings
        </div>
        <div className="py-[9px] font-sourceSansProRegular text-lg text-center -translate-x-7 bg-transparent w-[325px] border-[1px] border-wine rounded-2xl text-ligthBlack">
          Add Items
        </div>
      </div>
      <div className="grid grid-cols-[1.6fr_1fr] items-start border-t-[1px] border-veryLigthBlack">
        <div className=" grid grid-cols-[1.2fr_1.7fr] items-center py-5  pr-6 pl-12 border-b-[1px] border-veryLigthBlack  ">
          <div className="relative">
            <Image
              className="rounded-md object-cover"
              src={ItemImage}
              width={280}
              height={320}
              alt=""
            />
            <Image
              className="absolute bottom-2 left-2"
              src={ProfileImage}
              width={50}
              height={50}
              alt=""
            />
          </div>

          <div className=" flex justify-between">
            <div className="flex flex-col gap-3 ">
              <div className="font-sourceSansProRegular text-2xl  text-darkGrey ">
                Nike Blazer 2021
              </div>
              <div className="font-sourceSansProBold text-3xl text-darkGrey ">
                N20,000.00
              </div>
              <div className=" font-sourceSansProRegular text-2xl text-lightdarkGrey  ">
                Condition: <span>Good</span>
              </div>
              <div className=" font-sourceSansProRegular text-2xl text-lightdarkGrey  ">
                Colour: <span>Brown</span>
              </div>
              <div className=" font-sourceSansProRegular text-2xl text-lightdarkGrey  ">
                Size: <span>42 small</span>
              </div>
              <div className=" font-sourceSansProRegular text-2xl text-lightdarkGrey  ">
                Location: <span>Lagos</span>
              </div>
              <div className=" font-sourceSansProRegular text-2xl text-lightdarkGrey  ">
                Category: <span>Sneakers </span>
              </div>
              <div className=" font-sourceSansProRegular text-2xl text-lightdarkGrey  ">
                Sex: <span>Male </span>
              </div>
            </div>
            <div className="flex flex-col justify-between items-end">
              <Image src={CloseBtn} alt="" />
              <div className="flex gap-2">
                <div className="flex">
                  <Image src={CommentImg} alt="" />
                  <div className="font-sourceSansProRegular text-base mx-1">
                    7
                  </div>
                </div>
                <div className="flex">
                  <Image src={LikeImg} alt="" />
                  <div className="font-sourceSansProRegular text-base mx-1">
                    25
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-bgGrey h-[904px] py-8 pl-8 pr-12">
          <h3 className=" font-sourceSansProRegular text-[32px] pb-5">
            New item details
          </h3>
          <div className="flex flex-col gap-6">
            <div className="">
              <div className="text-lg text-darkGrey pb-[6px]">
                Item description
              </div>
              <input
                type="text"
                className="bg-white  border-[1px] border-inputBorder w-full rounded-2xl opacity-90 text-lg outline-none p-2"
              />
            </div>
            <div className="flex justify-between">
              <div className="">
                <div className="text-lg text-darkGrey pb-[6px]">Location</div>
                <DropdownSelect options={Locations} />
              </div>
              <div className="">
                <div className="text-lg text-darkGrey pb-[6px]">Brand Name</div>
                <DropdownSelect options={Brands} />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-lg text-darkGrey pb-[6px]">Colour</div>
                <input
                  type="text"
                  placeholder="Brown"
                  className="bg-white  border-[1px] border-inputBorder w-[200px] rounded-2xl opacity-90 text-lg outline-none p-2  placeholder:text-darkGrey"
                />
              </div>
              <div>
                <div className="text-lg text-darkGrey pb-[6px]">Size</div>
                <input
                  type="text"
                  placeholder="42 Small"
                  className="bg-white  border-[1px] border-inputBorder w-[200px] rounded-2xl opacity-90 text-lg outline-none p-2
                placeholder:text-darkGrey"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-lg text-darkGrey pb-[6px]">Quantity</div>
                <IncrementSelect />
              </div>
              <div>
                <div className="text-lg text-darkGrey pb-[6px]">Category</div>
                <DropdownSelect options={Category} />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-lg text-darkGrey pb-[6px]">
                  Delivery Plan
                </div>
                <DropdownSelect options={Delivery} />
              </div>
              <div>
                <div className="text-lg text-darkGrey pb-[6px]">Price</div>
                <input
                  type="text"
                  placeholder="NGN"
                  className="bg-white  border-[1px] border-inputBorder w-[200px] rounded-2xl opacity-90 text-lg outline-none p-2  placeholder:text-darkGrey"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div>
                <div className="text-lg text-darkGrey pb-[6px]">Sex</div>
                <DropdownSelect options={Sex} />
              </div>
              <div>
                <div className="text-lg text-darkGrey pb-[6px]">Condition</div>
                <DropdownSelect options={Condition} />
              </div>
            </div>
            <button className=" bg-white  border border-inputBorder w-full rounded-2xl opacity-90 text-lg outline-none mt-4 p-2">
              Upload photos
            </button>
            <button className=" bg-Green border-none text-center  w-[200px] rounded-2xl opacity-90 text-lg outline-none mt-4 mx-auto p-2">
              List Item
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
