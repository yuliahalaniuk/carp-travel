import React from "react";
import CloseIcon from "public/images/svg/cross.svg";

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
          <CloseIcon width={18} height={18} />

          <p className="error-text ">Incorrect {name}</p>
        </div>
      </div>
    );
  }
};

export default ErrorInput;
