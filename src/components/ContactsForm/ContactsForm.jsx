import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import FormField from "../FormField/FormField";
import { contactsFormInputsProps } from "@/data/contactsFormInputsProps";
import TextAreaField from "../TextAreaField/TextAreaField";
import { toast } from "react-toastify";

const ContactsForm = () => {
  const form = useForm();

  const { register, handleSubmit } = form;

  const onSubmit = (data) => {
    sessionStorage.setItem("formData", JSON.stringify(data));

    toast.success("Your information was submitted successfully");

    form.reset();
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

          <TextAreaField
            register={register("message")}
            className="md:w-[463px] lg:w-[607px]"
            height="h-[196px] md:h-[221px] lg:h-[174px]"
          />
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
