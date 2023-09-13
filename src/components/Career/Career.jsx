import React from "react";
import CareerForm from "@/components/CareerForm/CareerForm";

const Career = () => {
  return (
    <>
      <section
        id="career"
        className="section background-сhoose bg-base bg-repeat-x "
      >
        <div className=" container md:grid md:grid-cols-[221px,221px,221px] md:gap-x-5 lg:md:grid-cols-[601px,290px,293px] lg:gap-x-6 lg:justify-start">
          <h2 className="title mb-6 md:row-start-1 md:col-start-1 md:col-end-3 md:mb-0">
            Choose <span className="font-medium">us</span>
          </h2>
          <p className="text-sm font-extralight w-textcont ml-auto mb-9 md:w-full md:row-start-1 md:col-start-3 block  md:text-justify md:text-textslider  md:mb-1 lg:text-textlg lg:mb-8">
            Your chance to join our passionate team in Carpathian tourism.
            Seeking talented professionals to share our common mission.
          </p>
          <b className=" block text-subtitle font-extralight w-textcont ml-auto mb-9   md:w-full md:row-start-2 md:col-start-1 md:text-right md:mb-14 lg:col-start-1  lg:mb-12 lg:w-full lg:pr-[309px] ">
            Why us ?
          </b>
          <ul className="flex flex-col gap-4 md:gap-6 mb-[112px] md:mb-0 md:row-start-3 md:row-end-6  md:col-start-1  lg:grid lg:grid-cols-[293px,285px] lg:gap-x-6  ">
            <li className="w-textcont mr-auto md:w-full lg:col-start-1 lg:col-end-3  lg:grid lg:grid-cols-2 lg:gap-6 lg:row-auto">
              <h3 className="text-sm text-right font-normal mb-2 md:text-textms lg:col-start-1 lg:mb-0">
                Professional development
              </h3>
              <p className="text-xs text-right font-extralight   lg:col-start-2 lg:text-left">
                We offer growth opportunities and a creative environment to
                nurture your talents.
              </p>
            </li>
            <li className="w-textcont mr-auto md:w-full lg:col-start-1 lg:col-end-3  lg:grid lg:grid-cols-2 lg:gap-6 lg:row-auto">
              <h3 className="text-sm text-right font-normal mb-2  md:text-textms lg:col-start-1 lg:mb-0">
                Teamwork
              </h3>
              <p className="text-xs text-right font-extralight  lg:col-start-2 lg:text-left">
                Join our close-knit family, where support and inspiration
                abound.
              </p>
            </li>
            <li className="w-textcont mr-auto  md:w-full  lg:col-start-1 lg:col-end-3 lg:grid lg:grid-cols-2 lg:gap-6 lg:row-auto">
              <h3 className="text-sm text-right font-normal mb-2 md:w-[225px] md:text-textms md:mb-7  lg:col-start-1 lg:mb-0  lg:w-full">
                Stimulating work environment
              </h3>
              <p className="text-xs text-right font-extralight  lg:col-start-2 lg:text-left ">
                Flexibility and remote options for a comfortable experience.
              </p>
            </li>
            <li className="w-textcont mr-auto md:w-full lg:col-start-1 lg:col-end-3  lg:grid lg:grid-cols-2 lg:gap-6 lg:mb-0 lg:row-auto">
              <h3 className="text-sm text-right font-normal mb-2 md:text-textms ">
                Exciting challenges
              </h3>
              <p className="text-xs text-right font-extralight lg:col-start-2 lg:text-left">
                Unleash your potential through unforgettable projects showcasing
                Carpathian beauty.
              </p>
            </li>
          </ul>

          <p className="text-sm font-extralight w-textcont ml-auto mb-6 md:w-[170px] md:row-start-3 md:col-start-2  md:text-textslider md:ml-0 md:mb-8 lg:text-textlg lg:w-[234px] lg:mb-[14px]">
            Don&apos;t miss your opportunity! Fill out the form right now and
            join our team!
          </p>

          <CareerForm />
        </div>
      </section>
    </>
  );
};

export default Career;
