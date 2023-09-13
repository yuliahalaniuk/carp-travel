import React from "react";
import { Button } from "react-scroll";

import BorderMobLeft from "../../images/svg/border-mob-l.svg";
import BorderMobRight from "../../images/svg/border-mob-r.svg";

import BorderTabRight from "../../images/svg/border-tab-r.svg";
import BorderTabLeft from "../../images/svg/border-tab-l.svg";

import BorderDeskRight from "../../images/svg/border-desk-r.svg";
import BorderDeskLeft from "../../images/svg/border-desk-l.svg";
import useMediaQuery from "@/hook/hook";

const JoinBtn = () => {
  const isTabBreakpoint = useMediaQuery(768);
  const isDeskBreakpoint = useMediaQuery(1280);

  let borderSvg;
  if (isTabBreakpoint && isDeskBreakpoint) {
    borderSvg = (
      <>
        <BorderMobLeft className="absolute top-0 right-0  pointer-events-none z-0" />
        <BorderMobRight className="absolute top-0 left-0  pointer-events-none z-0" />
      </>
    );
  } else if (!isTabBreakpoint && isDeskBreakpoint) {
    borderSvg = (
      <>
        <BorderTabLeft className="absolute top-0 left-0-0  pointer-events-none z-0" />
        <BorderTabRight className="absolute top-0 right-0  pointer-events-none z-0" />
      </>
    );
  } else {
    borderSvg = (
      <>
        <BorderDeskLeft className="absolute top-0 right-0  pointer-events-none z-0" />
        <BorderDeskRight className="absolute top-0 left-0  pointer-events-none z-0" />
      </>
    );
  }

  return (
    <div className="relative h-[53px] w-full md:row-start-3 md:col-start-2 md:h-[50px] lg:h-[71px]">
      <Button
        className="text-bt font-bold text-center w-full h-full bg-button px-16 button hover:bg-btn-hover transition-colors lg:text-btnlg"
        type="button"
        value="JOIN NOW"
        to="contacts"
        spy={true}
        smooth={"easeInOutQuint"}
        duration={2000}
        aria-label="Scroll to Contacts section"
      />
      {borderSvg}
    </div>
  );
};

export default JoinBtn;
