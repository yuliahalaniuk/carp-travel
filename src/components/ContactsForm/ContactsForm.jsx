import React from "react";
import ErrorInput from "@/components/ErrorInput/ErrorInput";
import { useForm } from "react-hook-form";

const ContactsForm = () => {
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
    <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4 lg:mb-6 flex flex-col gap-6 lg:gap-10 md:flex-row  md:gap-5 lg:flex-col ">
        <div className="flex flex-col gap-[25px]  md:w-[221px] md:mb-0 lg:flex-row lg:w-full  lg:gap-5">
          {/* ---------------- Name --------------------------- */}
          <div className="lg:w-[292px] relative">
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
                  pattern: /^[a-zA-Z]+ [a-zA-Z]+$/i,
                })}
                aria-describedby="name"
              />
            </label>

            <ErrorInput type={errors.name?.type} name="name" />
          </div>

          {/* ---------------- Email --------------------------- */}

          <div className="lg:w-[292px] relative">
            <label
              className={
                errors.email
                  ? "career-label text-error-clr  "
                  : "career-label  "
              }
            >
              E-mail
              <input
                className="input"
                type="email"
                placeholder="johnsmith@email.com"
                {...register("email", {
                  required: true,
                  minLength: 3,
                  pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                })}
              />
            </label>
            <ErrorInput type={errors.email?.type} name="email" />
          </div>
        </div>

        {/* ---------------- text --------------------------- */}

        <label className="career-label md:w-[463px] lg:w-[607px] ">
          Message
          <textarea
            className="w-full h-[196px] md:h-[221px] lg:h-[174px] bg-input-clr pl-2 pr-2 resize-none focus:outline-none focus:border-none text-wides lg:text-widess"
            type="text"
            {...register("message")}
          />
        </label>
      </div>

      <button
        className="text-3xl uppercase font-medium w-max ml-auto"
        type="submit"
      >
        Send
      </button>
    </form>
  );
};

export default ContactsForm;
