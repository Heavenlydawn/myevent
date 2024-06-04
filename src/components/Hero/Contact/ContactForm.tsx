import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ContactForm = () => {
  return (
    <div>
      <form action="" className=" flex flex-col">
        <label htmlFor="name" className="text-[#005A9B] text-xl font-bold mb-4">
          Name
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter Your Name"
            className="outline-none border-none bg-gray-100 mb-6 px-4 py-8 rounded w-full"
          />
        </label>
        <label
          htmlFor="email"
          className="text-[#005A9B] text-xl font-bold mb-4"
        >
          Email
          <br />
          <br />
          <input
            type="text"
            placeholder="Enter Your Email"
            className="outline-none border-none bg-gray-100 mb-6 px-4 py-8 rounded w-full"
          />
        </label>
        <label
          htmlFor="message"
          className="text-[#005A9B] text-xl font-bold mb-4"
        >
          Message
          <br />
          <br />
          <textarea
            name="message"
            id="message"
            cols={30}
            rows={10}
            className="w-[280px] md:w-[600px] outline-none border-none bg-gray-100 mb-6 px-4 py-8 rounded gp-text-h5"
          >
            Message
          </textarea>
        </label>

        <Link href="/" className="text-center">
          <Button variant="myevent">Send Message</Button>
        </Link>
      </form>
    </div>
  );
};

export default ContactForm;
