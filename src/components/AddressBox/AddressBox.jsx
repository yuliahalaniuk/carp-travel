import React from "react";

const AddressBox = () => {
  return (
    <address className="flex gap-6 flex-col mb-3 md:mb-16 md:flex-row md:gap-[90px] md:ml-[34px] lg:flex-col lg:gap-[124px] lg:ml-[83px]  lg:mb-0">
      <div className="flex flex-col gap-6  lg:gap-16">
        <div className="flex gap-5 items-start justify-end ">
          <ul>
            <li>
              <a
                href="tel:+380981234567"
                className="contact-link"
                target="_blank"
                rel="noreferrer noopener"
              >
                +38 (098) 12 34 567
              </a>
            </li>
            <li>
              <a
                href="tel:+380731234567"
                className="contact-link"
                target="_blank"
                rel="noreferrer noopener"
              >
                +38 (073) 12 34 567
              </a>
            </li>
          </ul>
          <p className="text-xs font-extralight not-italic lg:text-widexxxs">
            Phone number
          </p>
        </div>
        <div className="flex gap-5 items-start justify-end mr-[46px] ">
          <a
            href="mailto:support@carptravel.com"
            className="contact-link"
            target="_blank"
            rel="noreferrer noopener"
          >
            support@carptravel.com
          </a>
          <p className="text-xs font-extralight not-italic lg:text-widexxxs">
            E-mail
          </p>
        </div>
      </div>
      <div className="flex gap-5 items-start justify-end mr-[15px] md:mr-0 lg:flex-row-reverse lg:justify-start lg:mr-[30px]">
        <p className="text-xs font-extralight not-italic lg:text-widexxxs">
          Follow us
        </p>
        <ul>
          <li>
            <a
              href="https://uk-ua.facebook.com/"
              className="contact-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/"
              className="contact-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              instagram
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/"
              className="contact-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              youtube
            </a>
          </li>
          <li>
            <a
              href="https://www.tiktok.com/"
              className="contact-link"
              target="_blank"
              rel="noreferrer noopener"
            >
              tiktok
            </a>
          </li>
        </ul>
      </div>
    </address>
  );
};

export default AddressBox;
