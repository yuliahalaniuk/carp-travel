import React from "react";

const ItemLink = ({ href, label, className }) => {
  return (
    <li>
      <a
        href={href}
        className={className}
        target="_blank"
        rel="noreferrer noopener"
      >
        {label}
      </a>
    </li>
  );
};

export default ItemLink;
