import React from "react";

const TextAreaField = ({ register, height, className }) => {
  return (
    <label className={`career-label ${className}`}>
      Message
      <textarea
        className={`w-full bg-input-clr pl-2 pr-2 resize-none focus:outline-none focus:border-none text-wides lg:text-widess ${height}`}
        {...register}
      />
    </label>
  );
};

export default TextAreaField;
