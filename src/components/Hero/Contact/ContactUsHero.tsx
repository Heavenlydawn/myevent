import React from "react";
import Image from "next/image";
import ContactUsHeroImage from "../../../../public/images/homeContact.svg";
import ContactUs from "./ContactUs";
import ContactForm from "./ContactForm";
const ContactUsHero = () => {
  return (
    <div>
      <div>
        <h1 className="text-4xl text-center font-bold my-8">Contact Us</h1>
      </div>
      <Image src={ContactUsHeroImage} alt="contact" className="mx-auto" />

      <div className="flex items-center justify-around my-12">
        <ContactUs />
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactUsHero;
