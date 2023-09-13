import React from "react";

const ErrorInput = ({ type, name }) => {
  if (type === "required") {
    return (
      <div className="absolute right-0 bottom-[-14px]">
        <p className="error-text">This field is required</p>
      </div>
    );
  }

  if (type === "pattern" || type === "minLength") {
    return (
      <div className="absolute right-0 bottom-[-18px]">
        <div className="flex gap-1 justify-end items-center ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
          >
            <path
              d="M4.375 4.375L13.625 13.625M13.625 4.375L4.375 13.625"
              stroke="#FF5757"
              stroke-width="0.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <p className="error-text ">Incorrect {name}</p>
        </div>
      </div>
    );
  }
};

export default ErrorInput;
