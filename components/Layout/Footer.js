import React from "react";
import LogoVPN from "../../public/assets/logo.png";
import Facebook from "../../public/assets/Icon/facebook.svg";
import Twitter from "../../public/assets/Icon/twitter.svg";
import Instagram from "../../public/assets/Icon/instagram.svg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className="bg-white py-36">
      <div className="max-w-screen-xl w-full mx-auto px-6 sm:px-8 lg:px-16 grid grid-rows-6 sm:grid-rows-1 grid-flow-row sm:grid-flow-col grid-cols-3 sm:grid-cols-12 gap-4">
        <div className="row-span-2 sm:col-span-4 col-start-1 col-end-4 sm:col-end-5 flex flex-col items-start ">
          <div className="flex justify-center items-center w-full">
            <Image src={LogoVPN} width={150} height={150} />
          </div>
          <p className="mb-4">
          ResQ-Mate 
          </p>
          <div className="flex w-full mt-2 mb-8 -mx-2">
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <Facebook className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <Twitter className="h-6 w-6" />
            </div>
            <div className="mx-2 bg-white rounded-full items-center justify-center flex p-2 shadow-md">
              <Instagram className="h-6 w-6" />
            </div>
          </div>
          <p className="text-gray-400">
            ©{new Date().getFullYear()} - ResQ.vercel.app
          </p>
        </div>
        <div className=" row-span-2 sm:col-span-2 sm:col-start-7 sm:col-end-9 flex flex-col">
          <p className="text-black mb-4 font-medium text-lg">Protect</p>
          <ul className="text-black ">
            <li className="my-2 hover:text-red-500 cursor-pointer transition-all">
              Download PWA{" "}
            </li>
            <li className="my-2 hover:text-red-500 cursor-pointer transition-all">
              Community Bulletin{" "}
            </li>
            <li className="my-2 hover:text-red-500 cursor-pointer transition-all">
              Previous Disasters{" "}
            </li>
            <li className="my-2 hover:text-red-500 cursor-pointer transition-all">
              Sign In{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-9 sm:col-end-11 flex flex-col">
          <p className="text-black mb-4 font-medium text-lg">Engage</p>
          <ul className="text-black">
            <li className="my-2 hover:text-red-500 cursor-pointer transition-all">
              ResQ-Mate{" "}
            </li>
            <li className="my-2 hover:text-red-500 cursor-pointer transition-all">
              FAQ{" "}
            </li>
            <li className="my-2 hover:text-red-500 cursor-pointer transition-all">
              About Us{" "}
            </li>
            <li className="my-2 hover:text-red-500 cursor-pointer transition-all">
              Privacy Policy{" "}
            </li>
            <li className="my-2 hover:text-red-500 cursor-pointer transition-all">
              Terms of Service{" "}
            </li>
          </ul>
        </div>
        <div className="row-span-2 sm:col-span-2 sm:col-start-11 sm:col-end-13 flex flex-col">
          <p className="text-black mb-4 font-medium text-lg">Social Cause</p>
          <ul className="text-black">
            <li className="my-2 hover:text-red-500 cursor-pointer transition-all">
              Donation{" "}
            </li>
            <li className="my-2 hover:text-red-500 cursor-pointer transition-all">
              Become Partner{" "}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
