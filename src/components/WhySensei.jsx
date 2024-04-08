import React from "react";
import news from "../Images/news.png";
import readmore from "../Images/Union.svg";
import Image from "next/image";
const WhySensei = () => {
  return (
    <div className="flex flex-wrap lg:flex-nowrap lg:w-fit text-white text-lg grad-bg min-h-max rounded-[calc(4vw)]">
      <Image
        src={news}
        alt="news"
        className="w-[100%] py-2 pb-6 md:pb-3 min-[1300px]:p-[70px] min-[1300px]:pr-0 order-1 lg:order-none "
        sizes=""
      />
      <div className="p-4  md:p-10 md:pb-7 lg:p-3 lg:pl-0 min-[1300px]:p-20 grow ">
        <div className="">
          <h1 className="py-4 font-Nunito text-4xl lg:text-6xl lg:font-extrabold font-bold">
            Why Sensei?
          </h1>
          <p>
            We provide a comprehensive educational ecosystem, integrating
            interactive learning modules, expert(Psychologist) guidance, and
            parental involvement. Our goal is to equip abilities, and a moral
            compass for success in today&rsquo;s complex world.
          </p>
        </div>
        <div className="pt-4 md:pt-10 lg:py-3">
          <h1 className="py-4 font-Nunito text-4xl lg:text-6xl lg:font-extrabold font-bold">
            What is Sensei?
          </h1>
          <p>
            Today&rsquo;s students confront substantial mental health challenges
            such as anxiety, depression, and suicidal tendencies, exacerbated by
            the pervasive influence of the digital age. As India endeavours to
            become the world&rsquo;s largest workforce by 2040-2055, addressing
            these issues becomes imperative for our nation&rsquo;s progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhySensei;
