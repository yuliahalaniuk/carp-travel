import React from "react";
import CareerForm from "@/components/CareerForm/CareerForm";
import CareerInfo from "@/components/CareerInfo/CareerInfo";

const Career = () => {
  return (
    <>
      <section
        id="career"
        className="section background-сhoose md:bg-base bg-repeat-y bg-[length:100%_820px]  "
      >
        <div className="container md:grid md:grid-cols-[221px,221px,221px] md:gap-x-5 lg:md:grid-cols-[601px,290px,293px] lg:gap-x-6 lg:justify-start">
          <CareerInfo />

          <CareerForm />
        </div>
      </section>
    </>
  );
};

export default Career;
