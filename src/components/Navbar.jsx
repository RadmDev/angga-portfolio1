"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [color, setColor] = useState("bg-color-black");
  const [textColor, setTextColor] = useState("text-color-white");
  const [blurLevel, setBlurLevel] = useState("blur-none");

  const handleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setBlurLevel("blur-lg");
      } else {
        setBlurLevel("blur-none");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, [color, textColor]);

  return (
    <div
      className={`fixed left-0 top-0 w-full z-10 ease-in duration-300 ${color}`}
    >
      <div className="m-auto px-[5%] lg:px-[15%] flex justify-between items-center p-4 text-color-white">
        <Link href="/">
          <div className="flex gap-4 items-center z-[2]">
            <div className="w-9 h-9 rounded-full border-2 border-color-white overflow-hidden">
              <Image
                src="/images/avatar.png"
                alt="personal avatar"
                width="100"
                height="100"
              />
            </div>
            <p className="text-xl font-bold text-color-white">radm.</p>
          </div>
        </Link>
        <ul className={`sm:flex hidden ${textColor}`}>
          <li className="p-4">
            <Link href="/">Home</Link>
          </li>
          <li className="p-4">
            <Link href="#gallery">About</Link>
          </li>
          <li className="p-4">
            <Link href="/work">Portfolio</Link>
          </li>
          <li className="p-4">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>

        {/* mobile-button */}
        <div
          onClick={handleNavbar}
          className={`sm:hidden block z-10 ${textColor}`}
        >
          {isNavbarOpen ? (
            <AiOutlineClose size={20} className="text-color-white" />
          ) : (
            <AiOutlineMenu size={20} />
          )}
        </div>

        {/* mobile-menu */}
        <div
          className={
            isNavbarOpen
              ? "sm:hidden absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 right-0 -left-full bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNavbar}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={handleNavbar}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="#gallery">About</Link>
            </li>
            <li
              onClick={handleNavbar}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/work">Portfolio</Link>
            </li>
            <li
              onClick={handleNavbar}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
