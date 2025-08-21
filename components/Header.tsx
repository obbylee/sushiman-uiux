"use client";

import { useState } from "react";
import { menu, search } from "@/assets";
import Image from "next/image";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <header>
      <nav className="header__nav max-md:bg-primary-color">
        <div className="header__logo max-sm:pl-0">
          <h4 data-aos="fade-down">sushiman</h4>
          <div className="header__logo-overlay"></div>
        </div>

        <ul className="header-menu" data-aos="fade-down">
          <li className="hidden md:block">
            <a href="#menu">Menu</a>
          </li>
          <li className="hidden md:block">
            <a href="#food">Food</a>
          </li>
          <li className="hidden md:block">
            <a href="#services">Services</a>
          </li>
          <li className="hidden md:block">
            <a href="#about-us">About Us</a>
          </li>
          <li className="hidden md:block">
            <Image
              src={search}
              alt="search"
              className="w-[50px] h-[50px] object-contain"
            />
          </li>
          <li className="md:hidden" onClick={() => setToggle((prev) => !prev)}>
            <Image
              src={menu}
              alt="menu"
              className="w-[24px] h-[24px] object-contain"
            />
          </li>
        </ul>

        <div
          className={
            toggle
              ? "absolute w-full bg-color-creamson z-20 rounded-b-full"
              : "hidden absolute w-full bg-color-creamson z-20"
          }
        >
          <div className="flex">
            <div className="relative flex flex-1 p-[20px]">
              <h4
                className="pl-[30px] font-bold text-[24px] uppercase font-playfair-display text-primary-color opacity-800"
                data-aos="fade-down"
              >
                sushiman
              </h4>
              <div className="absolute inset-0 w-full"></div>
            </div>

            <ul className="header-menu" data-aos="fade-down">
              <li
                className="md:hidden"
                onClick={() => setToggle((prev) => !prev)}
              >
                <Image
                  src={menu}
                  alt="menu"
                  className="w-[24px] h-[24px] object-contain bg-primary-color rounded-md"
                />
              </li>
            </ul>
          </div>

          <ul className="flex-center flex-col gap-5 pt-5 pb-10">
            <li
              onClick={() => setToggle((prev) => !prev)}
              className="w-full text-center p-5 text-xl font-medium font-plus-jakarta-sans text-secondary-color uppercase cursor-pointer hover:bg-primary-color hover:bg-opacity-80 hover:text-white"
            >
              <a href="#menu">Menu</a>
            </li>
            <li
              onClick={() => setToggle((prev) => !prev)}
              className="w-full text-center p-5 text-xl font-medium font-plus-jakarta-sans text-secondary-color uppercase cursor-pointer hover:bg-primary-color hover:bg-opacity-80 hover:text-white"
            >
              <a href="#food">Food</a>
            </li>
            <li
              onClick={() => setToggle((prev) => !prev)}
              className="w-full text-center p-5 text-xl font-medium font-plus-jakarta-sans text-secondary-color uppercase cursor-pointer hover:bg-primary-color hover:bg-opacity-80 hover:text-white"
            >
              <a href="#services">Services</a>
            </li>
            <li
              onClick={() => setToggle((prev) => !prev)}
              className="w-full text-center p-5 text-xl font-medium font-plus-jakarta-sans text-secondary-color uppercase cursor-pointer hover:bg-primary-color hover:bg-opacity-80 hover:text-white"
            >
              <a href="#about-us">About Us</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
