import { SignIn } from "@clerk/nextjs";
import React from "react";
import Image from "next/image";
import Logo from "../../../public/logo.svg";

function LoginPage() {
  return (
    <div className="flex py-10 md:py-10 flex-col flex-1 justify-center items-center bg-[#00a6ca]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="flex flex-col items-center justify-center space-y-5 text-white">
          <div className="rounded-full bg-white p-5">
            <Image
              src={Logo}
              alt="Company Logo"
              width={100}
              height={100}
              className="h-60 w-60"
            />
          </div>
          <div className="text-center">
            <h1 className="text-4xl italic font-mono font-bold">FormStack</h1>
            <h2 className="text-base font-light mt-1">
              Your Customisable Feedback Form Creator
            </h2>
            <h3 className="my-4 font-bold">Sign in to get started</h3>
          </div>
        </div>

        <SignIn routing="hash" fallbackRedirectUrl="/" />
      </div>
    </div>
  );
}

export default LoginPage;
