"use client";
import { Link } from "react-scroll";
import React, { useState } from "react";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import Logo from "public/images/svg/logo.svg";
import NavBar from "@/components/NavBar/NavBar";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen((state) => !state);
  };

  return (
    <header className="absolute top-0 left-0 right-0 block pt-9 pb-9 md:pt-10 md:pb-10 lg:pt-6 lg:pb-6">
      <nav className="pl-5 pr-5 max-w-mobct ml-auto mr-auto flex justify-between items-center md:max-w-tablct  lg:max-w-deskct ">
        <Link to="#">
          <Logo width={61} height={33} className="z-0 cursor-pointer" />
        </Link>

        <div className="hidden md:block">
          <NavBar className={"flex gap-6 lg:gap-14"} />
        </div>

        <button
          onClick={handleClick}
          type="button"
          className="text-sm uppercase font-normal w-max tracking-menu md:hidden"
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </nav>
      {isOpen && <MobileMenu handleClick={handleClick} />}
    </header>
  );
};

export default Header;
