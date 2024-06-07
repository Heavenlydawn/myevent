import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.svg";
import LeftArrow from "../../../public/images/left-arrow.svg";
import { Button } from "../ui/button";
import Link from "next/link";

const Login = () => {
  return (
    <section className="px-24 py-12">
      <div>
        <Image src={Logo} alt="Logo" />
        <br />
        <Link href="/">
          <Image src={LeftArrow} alt="LeftArrow" />
        </Link>
      </div>

      <div className="max-w-[546px] mx-auto">
        <h1 className="text-center text-3xl my-12 font-bold">Sign Up</h1>

        <form action="">
          <input
            type="text"
            placeholder="First Name"
            className="outline-none border-none bg-gray-100 mb-6 px-4 py-8 rounded w-full"
          />
          <input
            type="text"
            placeholder="Last Name"
            className="outline-none border-none bg-gray-100 mb-6 px-4 py-8 rounded w-full"
          />
          <input
            type="text"
            placeholder="Enter Email Address"
            className="outline-none border-none bg-gray-100 mb-6 px-4 py-8 rounded w-full"
          />
          <input
            type="password"
            placeholder="Password"
            className="outline-none border-none bg-gray-100 mb-6 px-4 py-8 rounded w-full"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="outline-none border-none bg-gray-100 mb-6 px-4 py-8 rounded w-full"
          />

          <p className="text-lg my-4">
            By selecting "Agree and Sign up" I agree to the{" "}
            <span className="text-[#005A9B]">BookMyEvent Terms</span>. Learn
            about how we use and protect your data in our{" "}
            <span className="text-[#005A9B]">Privacy Policy</span>
          </p>
          <Button variant="myeventblue" className="w-full p-8 text-lg">
            Agree and Sign up
          </Button>

          <div className="flex items-center gap-4 my-8 text-lg ">
            <p>Already have an account?</p>
            <Link href="/login">
              <span className="text-[#005A9B]">Login</span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
