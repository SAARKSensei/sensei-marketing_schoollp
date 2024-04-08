import Image from "next/image";
import React from "react";
import SenseiLogo from "../Images/Main logo.svg";
import Link from "next/link";
import Scrollnav from "./Scrollnav";

const Navbar = () => {
  return (
    <>
    <Scrollnav>
      <Link href={"https://sensei.org.in/"}>
        <Image
          src={SenseiLogo}
          alt="Sensei logo"
          className="w-28 h-14 cursor-pointer"
        />
      </Link>
      <label
        htmlFor="dropmenu"
        className="py-3 peer min-[900px]:hidden min-[900px]:order-none order-1 sm:mx-4"
      >
        <svg
          width="43"
          height="31"
          viewBox="0 0 43 31"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.5 7.5H32.5"
            stroke="#FF8B13"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M10.5 15.5H32.5"
            stroke="#FF8B13"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M10.5 23.5H32.5"
            stroke="#FF8B13"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </label>
      <div
        id="dropmenu"
        className="right-0 hidden top-12 md:top-16 p-4 rounded-xl min-[900px]:p-0 peer-hover:flex hover:flex absolute bg-[#2C3D68] md:bg-transparent  min-[900px]:static flex-col text-white  min-[900px]:flex min-[900px]:flex-row min-[900px]:gap-10 font-Nunito text-lg"
      >
        <Link href={"https://sensei.org.in/about-us/"}>
          <p className="">About Us</p>
        </Link>
        <p className="">Parent</p>
        <p className="">Why Us</p>
        {/* <p className="">Curriculum</p> */}
      </div>
      <div className="flex min-[900px]:ml-0   ml-auto gap-3 h-[59px] items-center font-Nunito">
        <button className=" rounded-[40px] md:px-8 md:py-4 sm:p-2 sm:px-4 p-1 px-2 outline outline-2 outline-[#F8BF3B] text-[#F8BF3B] sm:text-xl text-md font-bold">
          Login
        </button>
        <button
          className={`font-Nunito rounded-[40px] md:px-8 md:py-4 sm:p-2 sm:px-4 p-1 px-2 sm:text-lg text-md  bg-[#F8BF3B] text-[#2C3D68] font-bold`}
        >
          Demo
        </button>
      </div>
    </Scrollnav>
    <span className="block md:h-6  lg:h-10 w-full"/>
    </>
  );
};

export default Navbar;
