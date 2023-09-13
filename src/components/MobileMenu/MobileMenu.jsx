import React from "react";
import { Link } from "react-scroll";

const MobileMenu = ({ setIsOpen }) => {
  return (
    <div
      id="mobile-menu"
      className="fixed top-0 bottom-0 left-0 right-0 bg-backdrop backdrop-blur z-10"
    >
      <div className=" w-full h-full pt-[43px] pl-5 pr-5 pb-[43px] flex flex-col gap-[110px]">
        <button
          aria-label="Close mobile menu"
          onClick={() => {
            setIsOpen((state) => !state);
          }}
          className="text-sm uppercase font-normal tracking-menu w-max ml-auto"
          aria-expanded={setIsOpen ? "true" : "false"}
          aria-controls="mobile-menu"
        >
          Close
        </button>
        <ul className="text-center flex flex-col gap-12">
          <li>
            <Link
              onClick={() => {
                setIsOpen((state) => !state);
              }}
              className="text-lg font-normal tracking-mobmenu  cursor-pointer"
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
              onClick={() => {
                setIsOpen((state) => !state);
              }}
              className="text-lg font-normal tracking-mobmenu  cursor-pointer"
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
              onClick={() => {
                setIsOpen((state) => !state);
              }}
              className="text-lg font-normal tracking-mobmenu  cursor-pointer"
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
              onClick={() => {
                setIsOpen((state) => !state);
              }}
              className="text-lg font-normal tracking-mobmenu  cursor-pointer"
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
              onClick={() => {
                setIsOpen((state) => !state);
              }}
              className="text-lg font-normal tracking-mobmenu  cursor-pointer"
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
    </div>
  );
};

export default MobileMenu;
