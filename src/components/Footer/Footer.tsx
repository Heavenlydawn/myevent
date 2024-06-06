import React from "react";
import Link from "next/link";
import Image from "next/image";
import Facebook from "../../../public/images/facebook.svg";
import Twitter from "../../../public/images/twitter.svg";
import Snapchat from "../../../public/images/snapchat.svg";
import Telegram from "../../../public/images/telegram.svg";
import Tiktok from "../../../public/images/tiktok.svg";
import NewsletterIcon from "../../../public/images/newsletterIcon.svg";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#005A9B] px-24 py-32 text-white">
     <div className="flex justify-between text-lg mb-24 ">
     <div>
        <h5 className="font-bold  mb-8">Use BookMyEvent</h5>
        <Link href="/bookanevent">
          <p className="leading-10">Book an Event</p>
        </Link>
        <Link href="/rsvp">
          <p className="leading-10">RSVP</p>
        </Link>
        <Link href="/pricing">
          <p className="leading-10">Pricing</p>
        </Link>
      </div>

      <div>
        <h5 className="font-bold text-lg mb-8">Find Events</h5>
        <Link href="/">
          <p className="leading-10">Wedding</p>
        </Link>
        <Link href="/">
          <p className="leading-10">Lecture Event</p>
        </Link>
        <Link href="/">
          <p className="leading-10">Birthday Party</p>
        </Link>
      </div>

      <div>
        <h5 className="font-bold text-lg mb-8">Help</h5>
        <Link href="/contact">
          <p className="leading-10">Contact Us</p>
        </Link>
        <Link href="/privacypolicy">
          <p className="text-lg leading-10">Privacy Policy</p>
        </Link>
        <Link href="/termsofservice">
          <p className="text-lg leading-10">Terms Of Service</p>
        </Link>
        <Link href="/faq">
          <p className="text-lg leading-10">FAQ</p>
        </Link>
      </div>

      <div className="text-lg w-72">
        <h5 className="font-bold mb-8">Address</h5>
        <div className="">
          <h5  className="text-lg font-bold mb-8">Lagos</h5>
          <p>8502 Preston Rd. Inglewood, Maine 98380</p>
        </div>
        <div className="">
          <h5  className="text-lg font-bold my-8">Kano</h5>
          <p>3891 Ranchview Dr. Richardson, California 62639</p>
        </div>
       
      </div>
     </div>

      <div className="flex gap-52 justify-between">
        <div>
          <h4 className="text-xl mb-8">Contact Us</h4>
          <Link href="mailto:helper@bookmyevent.com">
            helper@bookmyevent.com
          </Link>
          <div className="flex items-center gap-4 mt-4">
            <Image src={Facebook} alt="Facebook"></Image>
            <Image src={Twitter} alt="Twitter"></Image>
            <Image src={Snapchat} alt="Snapchat"></Image>
            <Image src={Telegram} alt="Telegram"></Image>
            <Image src={Tiktok} alt="Tiktok"></Image>
          </div>
        </div>

        <div>
          <div className="flex items-center gap-4">
            <h4 className="mb-4 text-2xl font-bold">Subscribe to our Newsletter</h4>
            <Image src={NewsletterIcon} alt="NewsletterIcon" />
          </div>
        <div>
          <input type="text" placeholder="Enter your Email" className="text-black outline-none border-none bg-gray-100 mb-6 px-4 py-2 rounded w-[350px]"/>
        </div>
        <Button variant="secondary">Submit</Button>
      </div>
      <div className="w-72">
          <h5 className="text-lg font-bold mb-8">Abuja</h5>
          <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
        </div>
        </div>

      <p className="text-center text-lg mt-24">@2024 BookMyEvent</p>
    </footer>
  );
};

export default Footer;
