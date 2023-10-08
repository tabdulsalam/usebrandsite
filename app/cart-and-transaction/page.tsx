import React from "react";
import Listing from "@/components/ui/listing";
import { ListingData } from "@/lib/data";

export default function page() {
  return (
    <section className="  bg-white">
      <div className="flex justify-center items-center mt-14 mb-7">
        <div className="py-[10px] font-sourceSansProRegular text-lg bg-wine opacity-90 w-[325px] text-white text-center rounded-2xl ">
          Buy now
        </div>
        <div className="py-[9px] font-sourceSansProRegular text-lg text-center -translate-x-7 bg-transparent w-[325px] border-[1px] border-wine rounded-2xl text-ligthBlack">
          Favourite
        </div>
      </div>

      <div className="grid grid-cols-[1.6fr_1fr] items-start border-t-[1px] border-veryLigthBlack">
        <div>
          {ListingData.map((listing) => (
            <Listing
              key={listing.id}
              id={listing.id}
              itemImage={listing.itemImage}
              profileImage={listing.profileImage}
              price={listing.price}
              nameOfItem={listing.nameOfItem}
              condition={listing.condition}
              colour={listing.colour}
              size={listing.size}
              location={listing.location}
              category={listing.category}
              sex={listing.sex}
              noOfComment={listing.noOfComment}
              noOfLikes={listing.noOfLikes}
            />
          ))}
        </div>

        <div className="bg-bgGrey h-[904px] py-8 ">
          <h3 className="text-darkGrey font-sourceSansProRegular text-[32px] pb-5 pl-8 pr-12 ">
            4 items
          </h3>
          <div className="pl-8 pr-12">
            <div className="grid grid-cols-[3fr_1fr_1fr]">
              <div className="">
                <h4 className="heading  text-darkGrey font-sourceSansProBold text-2xl pb-4">
                  Description
                </h4>
                <div className=" font-sourceSansProRegular text-darkGrey text-2xl pb-4">
                  Nike Blazers 2021
                </div>
                <div className=" font-sourceSansProRegular text-darkGrey text-2xl pb-4">
                  Valentino Garanani
                </div>
                <div className=" font-sourceSansProRegular text-darkGrey text-2xl pb-4">
                  Gray Loewe Gown
                </div>
              </div>
              <div className="">
                <h4 className="heading  text-darkGrey font-sourceSansProBold   text-2xl pb-4">
                  Qty
                </h4>
                <div className=" font-sourceSansProRegular text-darkGrey  text-2xl pb-4">
                  1
                </div>
                <div className=" font-sourceSansProRegular text-darkGrey  text-2xl pb-4">
                  1
                </div>
                <div className=" font-sourceSansProRegular text-darkGrey  text-2xl pb-4">
                  1
                </div>
              </div>
              <div className="">
                <h4 className="heading  text-darkGrey font-sourceSansProBold text-2xl pb-4">
                  Price
                </h4>
                <div className=" font-sourceSansProRegular text-darkGrey text-2xl pb-4">
                  20,000.00
                </div>
                <div className=" font-sourceSansProRegular text-darkGrey text-2xl pb-4">
                  40,000.00
                </div>
                <div className=" font-sourceSansProRegular text-darkGrey text-2xl pb-4">
                  60,000.00
                </div>
              </div>
            </div>
            <div className=" flex justify-between font-sourceSansProRegular text-darkGrey text-2xl pb-4 pt-6">
              <div className="">Subtotal</div>
              <div className=" ">125,000.00</div>
            </div>
            <div className=" flex justify-between font-sourceSansProRegular text-darkGrey text-2xl pb-4">
              <div className="">Delivery</div>
              <div className=" ">5,000.00</div>
            </div>
            <div className=" flex justify-between font-sourceSansProRegular text-darkGrey text-2xl pb-4">
              <div className="">VAT</div>
              <div className=" ">9,375.00</div>
            </div>
          </div>

          <div className=" border-y-2 border-inputBorder font-sourceSansProSemiBold text-darkGrey text-2xl py-4">
            <div className="flex justify-between  pl-8 pr-12">
              <div className="">Total</div>
              <div className=" ">
                <span>N</span>139,375.00
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button className=" bg-Green border-none text-center  w-[200px] rounded-2xl opacity-90 text-lg outline-none mt-20 p-2">
              Check Out
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
