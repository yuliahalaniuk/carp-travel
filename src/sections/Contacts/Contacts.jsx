"use client";

import React from "react";

import AddressBox from "../../components/AddressBox/AddressBox";
import ContactsForm from "../../components/ContactsForm/ContactsForm";
const Contacts = () => {
  return (
    <section id="contacts" className="section background-contacts bg-base">
      <div className="container ">
        <h2 className="title mb-9 lg:mb-[74px]">
          Contact <span className="font-medium">Us</span>
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-between">
          <AddressBox />
          <ContactsForm />
        </div>
      </div>
    </section>
  );
};

export default Contacts;
