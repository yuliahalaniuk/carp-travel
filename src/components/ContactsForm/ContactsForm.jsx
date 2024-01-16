import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormField from "../FormField/FormField";
import { contactsFormInputsProps } from "@/data/contactsFormInputsProps";

const ContactsForm = () => {
  const form = useForm();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  const onSubmit = (data, e) => {
    console.log(data);
    e.target.reset();
  };

  return (
    <FormProvider {...form}>
      <form className="flex flex-col " onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4 lg:mb-6 flex flex-col gap-6 lg:gap-10 md:flex-row  md:gap-5 lg:flex-col ">
          <div className="flex flex-col gap-[25px]  md:w-[221px] md:mb-0 lg:flex-row lg:w-full  lg:gap-5">
            {contactsFormInputsProps.map((inputsProps) => (
              <FormField {...inputsProps} key={inputsProps.id} />
            ))}
          </div>

          {/* ---------------- textArea --------------------------- */}

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
    </FormProvider>
  );
};

export default ContactsForm;
