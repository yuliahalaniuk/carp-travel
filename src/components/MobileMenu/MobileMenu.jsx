import React from "react";
import NavBar from "../NavBar/NavBar";

const MobileMenu = ({ handleClick }) => {
  return (
    <div
      id="mobile-menu"
      className="fixed top-0 bottom-0 left-0 right-0 bg-backdrop backdrop-blur z-10"
    >
      <div className=" w-full h-full pt-[43px] pl-5 pr-5 pb-[43px] flex flex-col gap-[110px]">
        <button
          aria-label="Close mobile menu"
          onClick={handleClick}
          className="text-sm uppercase font-normal tracking-menu w-max ml-auto"
          aria-controls="mobile-menu"
        >
          Close
        </button>
        <NavBar
          className={"text-center flex flex-col gap-12"}
          handleClick={handleClick}
        />
      </div>
    </div>
  );
};

export default MobileMenu;
