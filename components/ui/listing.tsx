import React from "react";
import Image from "next/image";
import CommentImg from "@/public/assets/Icons/comment.svg";
import LikeImg from "@/public/assets/Icons/like.svg";
import CloseBtn from "@/public/assets/Icons/closebtn.svg";

interface ListingProps {
  id: number;
  itemImage: any;
  profileImage: any;
  price: string;
  nameOfItem: string;
  noOfComment: number;
  noOfLikes: number;
  condition: string;
  colour: string;
  size: string;
  location: string;
  category: string;
  sex: string;
}

export default function Listing({
  itemImage,
  profileImage,
  price,
  nameOfItem,
  noOfComment,
  noOfLikes,
  condition,
  colour,
  size,
  location,
  category,
  sex,
}: ListingProps) {
  return (
    <div className=" grid grid-cols-[1.2fr_1.7fr] items-center py-5  pr-6 pl-12 border-b-[1px] border-veryLigthBlack  ">
      <div className="relative">
        <Image
          className="rounded-md object-cover"
          src={itemImage}
          width={280}
          height={320}
          alt=""
        />
        <Image
          className="absolute bottom-2 left-2"
          src={profileImage}
          width={50}
          height={50}
          alt=""
        />
      </div>

      <div className=" flex justify-between">
        <div className="flex flex-col gap-3 ">
          <div className="font-sourceSansProRegular text-2xl  text-darkGrey ">
            {nameOfItem}
          </div>
          <div className="font-sourceSansProBold text-3xl text-darkGrey ">
            {price}
          </div>
          <div className=" font-sourceSansProRegular text-2xl text-lightdarkGrey  ">
            Condition: <span>{condition}</span>
          </div>
          <div className=" font-sourceSansProRegular text-2xl text-lightdarkGrey  ">
            Colour: <span>{colour}</span>
          </div>
          <div className=" font-sourceSansProRegular text-2xl text-lightdarkGrey  ">
            Size: <span>{size}</span>
          </div>
          <div className=" font-sourceSansProRegular text-2xl text-lightdarkGrey  ">
            Location: <span>{location}</span>
          </div>
          <div className=" font-sourceSansProRegular text-2xl text-lightdarkGrey  ">
            Category: <span>{category} </span>
          </div>
          <div className=" font-sourceSansProRegular text-2xl text-lightdarkGrey  ">
            Sex: <span>{sex} </span>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <Image src={CloseBtn} alt="" />
          <div className="flex gap-2">
            <div className="flex">
              <Image src={CommentImg} alt="" />
              <div className="font-sourceSansProRegular text-base mx-1">
                {noOfComment}
              </div>
            </div>
            <div className="flex">
              <Image src={LikeImg} alt="" />
              <div className="font-sourceSansProRegular text-base mx-1">
                {noOfLikes}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
