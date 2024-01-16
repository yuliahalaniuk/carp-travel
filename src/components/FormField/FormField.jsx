import React from "react";
import ErrorInput from "../ErrorInput/ErrorInput";
import { useFormContext, useFormState } from "react-hook-form";

const FormField = ({ inputName, inputType, label, validation, className }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  // className="lg:w-[292px] relative">

  return (
    <div className={className ? className : "lg:w-[292px] relative"}>
      <label
        className={
          errors[inputName] ? "career-label text-error-clr  " : "career-label  "
        }
      >
        {label}
        <input
          className="input"
          type={inputType ? inputType : "text"}
          placeholder="John Smith"
          {...register(inputName, validation)}
          aria-describedby={inputName}
        />
      </label>

      <ErrorInput type={errors[inputName]?.type} name={inputName} />
    </div>
  );
};

export default FormField;
