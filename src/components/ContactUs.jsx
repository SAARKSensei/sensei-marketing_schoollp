import React from "react";
import contact from "../Images/contactus.svg";
import Image from "next/image";
const ContactUs = () => {
  return (
    <div className="relative flex flex-wrap md:flex-nowrap w-full p-6 gap-5 md:p-10 min-[1300px]:p-20 md:gap-10 min-[1300px]:gap-20">
      <div className=" flex flex-col gap-10 md:w-[50%] ">
        <div>
          <h1 className=" bg-gradient-to-l from-[#EF5F3D] to-[#F8BF3B] inline-block text-transparent bg-clip-text font-Nunito text-4xl lg:text-6xl lg:font-extrabold font-bold  text-left ">
            We&rsquo;re just a call away.{" "}
          </h1>
          <p className="text-[#2C3D68] md:text-xl md:font-medium">
            Make our modules your USP
          </p>
        </div>
        <Image
          src={contact}
          alt="contact"
          className=" border -order-1 md:order-none border-white py-4 md:py-10"
          sizes="auto"
        />
      </div>
      <form action="" className=" max-w-[600px] flex flex-col grow  gap-4 md:gap-8 ">
        <div className="grad-bg-2 rounded-lg p-[1px] w-full  ">
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 md:p-4 outline-none w-full  rounded-lg"
          />
        </div>
        <div className="grad-bg-2 rounded-lg p-[1px] w-full  ">
          <input
            required
            type="email"
            placeholder="Email*"
            className="p-2 md:p-4 outline-none w-full rounded-lg"
          />
        </div>
        <div className="grad-bg-2 rounded-lg p-[1px] w-full  ">
          <input
            type="text"
            required
            placeholder="Phone Number*"
            className="p-2 md:p-4 outline-none w-full rounded-lg"
          />
        </div>
        <div className="grad-bg-2 rounded-lg p-[1px] pb-0 w-full  ">
          <textarea
            name="messege"
            id="messege"
            cols="30"
            rows="5"
            placeholder="Message"
            className="p-2 md:p-4 outline-none w-full h-min rounded-lg"
          ></textarea>
        </div>
        <button className="grad-bg-2 text-white p-2 md:p-4 rounded-full">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
