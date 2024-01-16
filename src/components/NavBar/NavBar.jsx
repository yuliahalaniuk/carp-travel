import { navLinksProps } from "@/data/navLinksProps";
import React from "react";
import { Link } from "react-scroll";

const NavBar = ({ className, handleClick }) => {
  return (
    <ul className={className}>
      {navLinksProps.map(({ to, label }) => (
        <li key={to}>
          <Link
            onClick={handleClick}
            className="text-lg font-normal tracking-mobmenu  cursor-pointer"
            to={to}
            spy={true}
            smooth={"easeInOutQuint"}
            duration={1500}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavBar;
