import React from "react";

const SlideLink = ({ label, isActive, onClick }) => (
  <li
    className={isActive ? "slider-link-active" : "slider-link"}
    onClick={onClick}
  >
    {label}
  </li>
);

export default SlideLink;
