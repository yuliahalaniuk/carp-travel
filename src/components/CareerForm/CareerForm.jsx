"use client";
import { FormProvider, useForm } from "react-hook-form";
import React from "react";
import FormField from "../FormField/FormField";
import { careerFormInputProps } from "@/data/careerFormInputProps";
import CheckboxField from "../CheckboxField/CheckbozField";
import TextAreaField from "../TextAreaField/TextAreaField";
import { toast } from "react-toastify";

const CareerForm = () => {
  const form = useForm();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = form;

  const onSubmit = (data) => {
    sessionStorage.setItem("formData", JSON.stringify(data));

    toast.success("Your information was submitted successfully");

    form.reset();
  };

  return (
    <FormProvider {...form}>
      <form
        className="flex flex-col gap-4 md:gap-0 md:gap-x-5 md:row-start-4 md:row-end-5 md:col-start-2 md:col-end-4 md:grid md:grid-cols-2 "
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="flex flex-col gap-4  md:row-start-1 md:col-start-1 md:mb-2 lg:gap-6 lg:mb-6">
          {careerFormInputProps.map((inputsProps) => (
            <FormField {...inputsProps} key={inputsProps.id} />
          ))}
        </div>

        <TextAreaField
          register={register("message", { required: false })}
          className="md:row-start-1 md:col-start-2"
          height="h-[196px] md:h-[228px] lg:h-[268px]"
        />

        <CheckboxField register={register} error={errors.agreed} />

        <button
          className="text-3xl uppercase font-medium w-max ml-auto md:row-start-2 md:col-start-2 md:self-start"
          type="submit"
        >
          Send
        </button>
      </form>
    </FormProvider>
  );
};

export default CareerForm;
