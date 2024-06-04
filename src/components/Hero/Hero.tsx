import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="flex items-center justify-center flex-col text-center">
      <h1 className="text-2xl md:text-4xl xl:text-6xl font-bold leading-[80px] mb-8">
        Streamline Your <span className="text-[#005A9B]">Event</span> Management
        with <br />
        Our <span className="text-[#005A9B]">Easy</span>-to-Use Booking System
      </h1>

      <p className="text-xl font-bold leading-10 mb-8">
        Simplify your event planning process with our <br /> comprehensive
        platform for scheduling, managing, and <br />
        tracking all your reservations.
      </p>

      <div>
        <Link href="/bookanevent">
          <Button variant="myeventoutline">Book an Event</Button>
        </Link>
        <Link href="/rsvp">
          <Button variant="myevent">R.S.V.P</Button>
        </Link>
      </div>
    </section>
  );
};

export default Hero;