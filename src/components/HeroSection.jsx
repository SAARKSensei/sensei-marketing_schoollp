import React from "react";
import school from "../Images/school.svg";
import sky from "../Images/sky.svg";
import sarklogo from "../Images/sarklogo.svg";
import first from "../Images/1st.svg";
import Image from "next/image";
import grass from "../Images/grass.svg";
import students from "../Images/students.svg";
import paperplane from "../Images/paperplane.svg";
const HeroSection = () => {
  return (
    <div className="w-screen relative overflow-hidden min-[1200px]:h-[calc(.4*100vw)] min-[900px]:h-[calc(.7*100vw)] h-[620px] rounded-b-[calc(4vw)]">
      <div className="">
        <Image
          alt="sky"
          className="sm:bottom-60 bottom-[calc(.3*100vw)] absolute -z-10 min-w-full"
          src={sky}
          objectfit="auto"
        />
        <Image
          alt="school"
          className=" -bottom-[calc(.11*100vw)] lg:bottom-0 md:-bottom-24 z-[-1]  lg:z-[-2] min-w-[calc(1.5*100vw)] md:min-w-max lg:max-w-[calc(100vw-500px)] overflow-auto right-0 w-[calc(100vw+100px)] absolute  "
          src={school}
          sizes="auto"
        />
        <Image
          alt="students"
          className="bottom-0    min-[1480px]:min-w-[calc(.4*100vw)]  sm:max-w-[calc(100vw-180px)] max-w-[calc(100vw-100px)] md:max-w-auto left-0 absolute z-[-2] "
          src={students}
          sizes="auto"
        />
        <Image
          alt="grass"
          className="-bottom-4 lg:min-w-[calc(.2*100vw)] left-[calc(.2*100vw)] hidden lg:block absolute z-[-1] "
          src={grass}
          sizes="auto"
        />
      </div>
      <div className="p-4 text-xs flex flex-wrap items-end md:justify-center justify-end">
        A product by &nbsp;
        <Image
          alt="sarklogo"
          className="relative bottom-[2.81px] "
          src={sarklogo}
          sizes="auto"
        />
        <span className=" basis-full  md:basis-auto flex justify-end">
          &nbsp;Edu. Pvt. Ltd.
        </span>
      </div>
      <div className="w-fit flex-wrap ml-4 md:mx-auto flex relative items-end md:items-center md:justify-center">
        <h1 className="right-44 font-Montserrat md:absolute font-black text-[41px] md:text-[75px]  text-[#2D3E69]">
          {"INDIA'S"}
        </h1>
        <Image
          alt="first"
          className="h-24 w-fit md:h-auto md:ml-28  "
          src={first}
          sizes="auto"
        />
        <Image
          alt="paperplane"
          className="bottom-20 md:bottom-32 md:left-44 md:absolute"
          src={paperplane}
          sizes="auto"
        />
        <h1 className="basis-full font-Montserrat  md:basis-auto left-52 w-[350px] md:absolute bottom-10 leading-8 font-medium text-[31px] text-[#2D3E69]">
          Life-skills Modules forTraceable Growth
        </h1>
      </div>
    </div>
  );
};

export default HeroSection;
