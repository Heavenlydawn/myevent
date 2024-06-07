import React from "react";
import Image from "next/image";
import Logo from "../../../public/images/Logo.svg";
import LeftArrow from "../../../public/images/left-arrow.svg";
import { Button } from "../ui/button";
import Link from "next/link";

const Login = () => {
  return (
    <section className="p-24">
      <div>
        <Image src={Logo} alt="Logo" />
        <br />
        <Link href="/">
          <Image src={LeftArrow} alt="LeftArrow" />
        </Link>
      </div>

      <div className="max-w-[700px] mx-auto">
        <h1 className="text-center text-3xl my-24 font-bold">Login</h1>

        <form action="">
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

          <p className="text-right text-lg my-4">Forgot Password?</p>
          <Button variant="myeventblue" className="w-full p-8 text-lg" >Login</Button>

          <div className="flex items-center gap-4 my-8 text-lg ">
            <p>Don't have any account?</p>
            <Link href="/signup">
              <span className="text-[#005A9B]">Sign up</span>
            </Link>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
