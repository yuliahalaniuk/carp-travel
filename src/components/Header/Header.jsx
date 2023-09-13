"use client";
import { Link } from "react-scroll";
import Image from "next/image";
import React, { useState } from "react";
import MobileMenu from "@/components/MobileMenu/MobileMenu";
import Logo from "@/images/svg/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 block pt-9 pb-9 md:pt-10 md:pb-10 lg:pt-6 lg:pb-6">
      <nav className="pl-5 pr-5 max-w-mobct ml-auto mr-auto flex justify-between items-center md:max-w-tablct  lg:max-w-deskct ">
        <Link to="#">
          <Logo width={61} height={33} className="z-0 cursor-pointer" />
        </Link>

        <div className="hidden md:block ">
          <ul className="flex gap-6 lg:gap-14">
            <li>
              <Link
                className="text-sm font-normal tracking-menu  cursor-pointer"
                to="about"
                spy={true}
                smooth={"easeInOutQuint"}
                duration={1500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-normal tracking-menu  cursor-pointer"
                to="services"
                spy={true}
                smooth={"easeInOutQuint"}
                duration={1500}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-normal tracking-menu  cursor-pointer"
                to="career"
                spy={true}
                smooth={"easeInOutQuint"}
                duration={1500}
              >
                Career
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-normal tracking-menu  cursor-pointer"
                to="gallery"
                spy={true}
                smooth={"easeInOutQuint"}
                duration={1500}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                className="text-sm font-normal tracking-menu  cursor-pointer"
                to="contacts"
                spy={true}
                smooth={"easeInOutQuint"}
                duration={1500}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
        <button
          onClick={() => {
            setIsOpen((state) => !state);
          }}
          type="button"
          className="text-sm uppercase font-normal w-max tracking-menu md:hidden"
          aria-expanded={setIsOpen ? "true" : "false"}
          aria-controls="mobile-menu"
        >
          Menu
        </button>
      </nav>
      {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
    </header>
  );
};

export default Header;
