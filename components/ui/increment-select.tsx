"use client";
import Image from "next/image";
import { useState } from "react";

import ArrowDown from "@/public/assets/Icons/arrow-down.svg";
import ArrowUp from "@/public/assets/Icons/arrow-up.svg";

export default function IncrementSelect() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <div className="relative flex">
      <input
        type="text"
        value={count}
        readOnly
        className="w-[200px] items-center bg-white text-darkGrey  border border-inputBorder rounded-2xl opacity-90 text-lg outline-none py-2 px-3"
      />
      <div className="flex flex-col gap-1 absolute right-4 top-3 ">
        <button onClick={incrementCount} className="">
          <Image src={ArrowUp} alt="" />
        </button>
        <button onClick={decrementCount} className="">
          <Image src={ArrowDown} alt="" />
        </button>
      </div>
    </div>
  );
}
