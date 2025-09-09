"use client";
import { useState } from "react";
import Image from "next/image";
import logo from "../../../public/transparent-logo.png";
import { Span } from "next/dist/trace";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdCancel } from "react-icons/md";
// import { Menu, X } from "lucide-react";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-center px-4">
      <div className="bg-white rounded-xl my-4 max-w-6xl drop-shadow-xl">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center justify-center bg-black rounded-xl w-20 h-6 mr-20 md:h-9 md:w-24 ">
            <Image src={logo} width={60} height={20} alt="logo" className="w-60 h-20 md:w-80 md:h-24"/>
          </div>
          {/* Desktop Nav */}
          <nav className="hidden md:flex text-black items-center gap-8 text-sm font-bold">
            <a href="#">About</a>
            <a href="#">Flow</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
          </nav>

          {/* Get Started Button */}
          <button className="hidden md:block bg-black rounded-xl px-4 py-1 text-sm ml-20 md:py-2">
            Get Started
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden px-2 rounded-md hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <MdCancel className="text-black" /> : <RxHamburgerMenu  className="text-black p-0"/>}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isOpen && (
          <div className="md:hidden flex flex-col items-center gap-4 pb-4 text-black">
            <a href="#">About</a>
            <a href="#">Flow</a>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <button className="bg-black rounded-xl px-4 py-2 text-sm text-white">
              Get Started
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
