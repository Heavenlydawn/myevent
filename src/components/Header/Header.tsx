import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className=" w-full mx-auto flex items-center justify-around p-8 bg-white shadow-custom-shadow">
      <h1 className="text-3xl font-bold">BookMyEvent</h1>

      <div className="flex gap-4 text-base font-bold">
        <Link href="/">Home</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/contact">Contact Us</Link>
        <Link href="/about">About Us</Link>
      </div>

      <div className="flex items-center gap-2">
        <Link
          href="/login"
          className="text-[#005A9B] font-bold text-base p-4 bg-slate-50 rounded "
        >
          Login
        </Link>
        <Link href="/signup">
          <Button variant="myevent">Button</Button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
