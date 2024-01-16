import React from "react";

const About = () => {
  return (
    <section id="about" className="section background-about bg-base">
      <div className="pl-5 pr-5 md:container md:grid md:grid-cols-3 md:gap-x-5 lg:grid-cols-4 lg:gap-x-[14px]">
        <h2 className="title mb-2 md:row-start-1 md:col-start-1 md:col-end-3 lg:row-start-1 lg:col-start-1 lg:col-end-3 md:mb-0">
          WHO <span className="font-medium">WE ARE</span>
        </h2>
        <div className="w-textcont mb-10 md:row-start-1 md:col-start-3 md:mb-16 md:w-[221px] lg:w-[296px] lg:mb-[72px]">
          <p className="text  mb-5 md:mb-4 lg:mb-6">
            <span className="font-normal">a team of enthusiasts</span> who are
            fully committed to the mission of creating unforgettable and
            extraordinary trips to the most beautiful parts of the Carpathians.
            Our goal is not just to show you the natural wonders of the
            mountains, but to provide you with a deep immersion in their magical
            atmosphere.
          </p>
          <p className="text">
            <span className="font-normal">We believe</span> that nature has the
            power to inspire, strengthen character and provide new perspectives.
            Therefore, each of our tours is aimed at unlocking your potential,
            enriching your spiritual world and creating unforgettable memories.
          </p>
        </div>
        <div className="mb-10 w-textcont ml-auto md:row-start-1 md:col-start-1 md:self-end md:justify-self-start md:w-[221px] md:mb-16   lg:w-[297px] lg:row-start-2 lg:col-start-4 lg:mb-0">
          <p className="text-sm font-normal uppercase md:text-textms lg:text-textlg text-left">
            From vacationers
          </p>
          <p className="text-sm font-normal uppercase md:text-textms lg:text-textlg text-right">
            to active travelers
          </p>
          <p className="text-sm font-extralight tracking-thesml md:text-textms  md:tracking-thesmlmd lg:text-textlg lg:tracking-thesmllg">
            we have a tour for everyone.
          </p>
        </div>
        <p className="text md:row-start-2 md:col-start-2 md:col-end-4 lg:row-start-2 lg:col-start-1 lg:col-end-3">
          <span className="font-normal">We use methods</span> that are
          time-tested and proven. Our expert guides with in-depth knowledge of
          the Carpathian landscapes lead you safely through the mysteries of
          these mountains.
        </p>
      </div>
    </section>
  );
};

export default About;
