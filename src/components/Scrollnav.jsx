"use client";

import React from "react";
import { useEffect, useState,useCallback ,createContext} from "react";
const EventContext = createContext();

const Scrollnav = ({children}) => {
  const [show,setShow] = useState(false);
  const [y, setY] = useState(typeof window !== "undefined"?window.scrollY:0);

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget;
      if (y > window.scrollY&&window.scrollY>100) {
        setShow(true)
      } else setShow(false);
      setY(window.scrollY);
    }, [y]
  );
  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
  
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <EventContext.Provider value={{y}}>
    <div className={`${show?"sticky backdrop-blur-[2px] bg-black bg-opacity-30 ":""}flex min-w-fit max-w-[1500px] relative items-center justify-between md:top-5 lg:top-10 min-[1100px]:w-3/4 md:w-[90%]  left-0 right-0 mx-auto bg-[#2C3D68] md:rounded-[40px] pl-6 md:p-2 z-50`}>
        {children}
    </div>
    </EventContext.Provider>
  );
};

export default Scrollnav;
