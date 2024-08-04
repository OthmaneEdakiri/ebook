import React from "react";
import { ContactForm, ContactLinks } from ".";
import { UseNavbarContext } from "../context/NavbarContext";

const Contact = () => {

  const {sectionsRefs:{contact}} = UseNavbarContext()

  return (
    <div ref={contact} className="contact overflow-hidden relative m:py-[100px] py-[30px] bg-[#F4A261]">
      <div className="container">
        <div className="contact-content grid lg:grid-cols-2 grid-cols-1 z-10 relative">
          <ContactForm />
          <ContactLinks />
        </div>
      </div>
    </div>
  );
};

export default Contact;
