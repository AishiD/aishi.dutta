/* eslint-disable no-unused-vars */
import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/github";
import "react-social-icons/discord";
import "../../public/name.png";
import "../../public/scroll_img.png";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

function Title() {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly gap-5 p-4 h-screen font-regular text-2xl">
      {/* this is the name and links section */}
      <div className=" flex flex-col justify-center px-10 ">
        <div className="text-xl sm:text-2xl">My name is</div>
        <div>
          <img src="name.png" className="w-fit h-32 sm:h-48 md:h-40 md:w-fit sm:w-fit" />
        </div>
        <div className="text-xl sm:text-2xl">
          I am passionate about Tech and{" "}
          <span className="font-bold">Every Creative.</span>
        </div>
        {/* links */}
        <div className="flex gap-4 py-4">
          <SocialIcon
            url="https://www.linkedin.com/in/aishi-dutta/"
            bgColor="#7E22CE"
          />
          <SocialIcon url="https://github.com/AishiD" bgColor="#7E22CE" />
          <SocialIcon url="https://www.discord.com" bgColor="#7E22CE" />
        </div>
      </div>
      {/* this is the infinite scrolling section */}
      <div className="hidden sm:block md:block h-screen px-10 overflow-y-hidden">
      <Marquee
    fade={true}
    direction='up'
    reverse={false}
    pauseOnHover={false}
    className="h-fit"
    innerClassName="repeat"
  ><img src="scroll_img.png" className=""/></Marquee>
      </div>
    </div>
  );
}

export default Title;
