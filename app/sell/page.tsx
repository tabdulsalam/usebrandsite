import React from "react";
import Listing from "@/components/ui/listing";
import DropdownSelect from "@/components/ui/dropdown-select";
import IncrementSelect from "@/components/ui/increment-select";
import { ListingData } from "@/lib/data";
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
                  placeholder="Colour"
                  className="bg-white  border-[1px] border-inputBorder w-[200px] rounded-2xl opacity-90 text-lg outline-none p-2  placeholder:text-darkGrey"
                />
              </div>
              <div>
                <div className="text-lg text-darkGrey pb-[6px]">Size</div>
                <input
                  type="text"
                  placeholder="Size"
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
