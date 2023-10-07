"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ArrowDown from "@/public/assets/Icons/arrow-down.svg";

export default function DropdownSelect({ options }: { options: string[] }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    closeDropdown();
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        closeDropdown();
      }
    };

    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className=" flex justify-between w-[200px] items-center bg-white  border border-inputBorder text-darkGrey rounded-2xl opacity-90 text-lg outline-none py-2 px-3"
      >
        {selectedOption || "Select an option"}
        <span
          className={`transform transition-transform ${
            isDropdownOpen ? "rotate-180" : ""
          }`}
        >
          <Image src={ArrowDown} alt="" />
        </span>
      </button>
      {isDropdownOpen && (
        <ul className="dropdown-menu absolute z-10 left-0 w-full bg-white border  rounded-2xl text-lg shadow-lg max-h-[110px] overflow-y-auto">
          {options.map((option) => (
            <li
              key={option}
              onClick={() => handleOptionClick(option)}
              className="dropdown-item px-3 py-1 hover:bg-gray-100 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
