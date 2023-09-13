"use client";
import { useForm } from "react-hook-form";
import React from "react";
import ErrorInput from "../ErrorInput/ErrorInput";

const CareerForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  return (
    <form
      className="flex flex-col gap-4 md:gap-0 md:gap-x-5 md:row-start-4 md:row-end-5 md:col-start-2 md:col-end-4 md:grid md:grid-cols-2 "
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col gap-4  md:row-start-1 md:col-start-1 md:mb-2 lg:gap-6 lg:mb-6">
        {/* ---------------- Name --------------------------- */}
        <div className="md:row-start-4 md:col-start-2 relative">
          <label
            className={
              errors.name ? "career-label text-error-clr  " : "career-label  "
            }
          >
            Full name
            <input
              className="input"
              type="text"
              placeholder="John Smith"
              {...register("name", {
                required: true,
                minLength: 3,
                pattern: /^[a-zA-Z]+ [a-zA-Z]+$/i,
              })}
            />
          </label>
          <ErrorInput type={errors.name?.type} name="name" />
        </div>

        {/* ---------------- Email --------------------------- */}

        <div className="relative">
          <label
            className={
              errors.email ? "career-label text-error-clr  " : "career-label  "
            }
          >
            E-mail
            <input
              className="input"
              type="email"
              placeholder="johnsmith@email.com"
              {...register("email", {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
              })}
            />
          </label>
          <ErrorInput type={errors.email?.type} name="email" />
        </div>

        {/* ---------------- position --------------------------- */}

        <div className="relative">
          <label className="career-label  ">
            Position
            <input
              className="input"
              type="text"
              placeholder="Movie maker"
              {...register("position", { required: true })}
            />
          </label>
          <ErrorInput type={errors.position?.type} name="position" />
        </div>

        {/* ---------------- Phone --------------------------- */}

        <div className="relative">
          <label
            className={
              errors.phone ? "career-label text-error-clr  " : "career-label  "
            }
          >
            Phone
            <input
              className="input"
              type="tel"
              placeholder="+ 38 (097) 12 34 567"
              {...register("number", {
                required: true,
                pattern: /^\+380\d{9}$/,
              })}
            />
          </label>
          <ErrorInput type={errors.number?.type} name="number" />
        </div>
      </div>

      {/* ---------------- Text --------------------------- */}

      <label className="career-label md:row-start-1 md:col-start-2 ">
        Message
        <textarea
          className="w-full h-[196px] bg-input-clr pl-2 pr-2 resize-none focus:outline-none focus:border-none md:h-[228px] lg:h-[268px] text-wides lg:text-widess"
          type="number"
          {...register("message", { required: false })}
        />
      </label>

      {/* ---------------- Checkbox --------------------------- */}
      <div className="md:row-start-2 md:col-start-1 md:pt-2 lg:pt-3 relative">
        <label
          className={`text-xxs font-extralight flex items-start gap-2   checkbox-label text- lg:text-widexxxs ${
            errors.agreed && "text-error-clr"
          }`}
        >
          <input
            className="checkbox absolute  whitespace-nowrap w-px h-px overflow-hidden border-0 p-0 clip-input m-[-1px] cursor-pointer "
            type="checkbox"
            {...register("agreed", { required: true })}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22px"
            height="22px"
            viewBox="0 0 22 22"
            fill="none"
          >
            <rect x="0.5" y="0.5" width="21" height="21" stroke="white" />
            <rect
              x="4"
              y="4"
              width="14px"
              height="14px"
              fill="rgba(255, 255, 255, 0.1)"
              className="checkbox-icon-small transition-colors"
            />
          </svg>
          I confirm my consent to the processing of personal data.
        </label>
      </div>

      <button
        className="text-3xl uppercase font-medium w-max ml-auto md:row-start-2 md:col-start-2 md:self-start"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default CareerForm;
