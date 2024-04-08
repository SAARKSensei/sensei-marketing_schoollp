"use client";
// import { GlobalContext } from "@/context";
import React, {  useState,useEffect,useCallback} from "react";
import ReactPlayer from "react-player";
import Pause from "../Images/pause.svg";
import Mute from "../Images/mute.svg";
import fulls from "../Images/fulls.svg";
import Image from "next/image";
const VideoPlay = () => {
//   const { theme, video, setVideo } = useContext(GlobalContext);
const [video, setVideo] = useState(true);
const [mute, setMute] = useState(true);
const [pause, setPause] = useState(false);
const [fullScreen, setFullScreen] = useState(false);
const [show,setShow] = useState(false);
const [y, setY] = useState(window.scrollY);
const [hasWindow, setHasWindow] = useState(false);

const handleNavigation = useCallback(
  e => {
    const window = e.currentTarget;
    if (window.scrollY>window.innerWidth*9/16) {
      setShow(true)
    } else {
      setShow(false);
      setFullScreen(false);
    }
    setY(window.scrollY);
  }, [y]
);
useEffect(() => {
  if (typeof window !== "undefined") {
    setHasWindow(true);
  }
  setY(window.scrollY);
  window.addEventListener("scroll", handleNavigation);

  return () => {
    window.removeEventListener("scroll", handleNavigation);
  };
}, [handleNavigation]);

  if (!video||! hasWindow) return <></>;
  return (
    <div className={`${show?"":"relative "} h-[calc(100vw*9/16)]`}>
      {show&&fullScreen&&<div className="fixed z-20 top-0 left-0 w-full h-full backdrop-blur-[2px] bg-black bg-opacity-20"></div>}
      <div className={`${show&&fullScreen?"fixed z-40  sm:rounded-2xl  ":!show?"relative":""} flex w-full items-center justify-center  ssm:w-[70vw] ssm:h-[39.4vw] overflow-y-auto group/vd `}>
        <ReactPlayer
        url={"https://static.videezy.com/system/resources/previews/000/012/899/original/Pocket_Watch_a41_-_65s_-_4k_res.mp4"}
        //   controls
        playing={!pause}
        muted={mute}
        height="100%"
        width="100%"
        />
      <div className={`${show? fullScreen?"absolute right-5":"fixed right-5 z-40 ":"absolute  "}  right-0 bottom-5 md:right-5 backdrop-blur-[1px] bg-black bg-opacity-20  flex rounded-full gap-4 w-fit  p-2 px-4`}>
        <Image
        onClick={() => setMute(!mute)}
        src={Mute}
        alt="mute"
        sizes="auto"
        />
        <Image 
        src={Pause}
        alt="pause"
        sizes="auto"
        onClick={() => setPause(!pause)}
        />
        <Image
        src={fulls}
        alt="fulls"
        sizes="auto"
        onClick={() => setFullScreen(!fullScreen)}
        />
      </div>
      </div>
    </div>
  );
};

export default VideoPlay;