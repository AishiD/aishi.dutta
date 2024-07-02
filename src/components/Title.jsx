/* eslint-disable no-unused-vars */
import React from "react";
import { SocialIcon } from "react-social-icons/component";
import "react-social-icons/linkedin";
import "react-social-icons/github";
import "react-social-icons/leetcode";
import "../../public/name.png";
import "../../public/scroll_img.png";
import { Marquee } from "@devnomic/marquee";
import "@devnomic/marquee/dist/index.css";

function Title() {
  return (
    <div className="flex flex-col sm:flex-row justify-evenly px-4 h-dvh font-regular text-2xl">
      {/* this is the name and links section */}
      <div className=" flex flex-col justify-center h-dvh px-5 ">
        <div className="text-xl sm:text-2xl">My name is</div>
        <div>
          <img
            src="name.png"
            className="w-96 h-32 sm:h-48 md:h-40 md:w-96 sm:w-96 lg:w-96"
          />
        </div>
        <div className="text-xl sm:text-2xl">
          I am passionate about Tech and{" "}
          <span className="font-bold">Everything Creative.</span>
        </div>
        {/* links */}
        <div className="flex gap-4 py-4">
          <SocialIcon
            url="https://www.linkedin.com/in/aishi-dutta/"
            bgColor="#7E22CE"
          />
          <SocialIcon url="https://github.com/AishiD" bgColor="#7E22CE" />
          <SocialIcon url="https://leetcode.com/u/aishi_D/" bgColor="#7E22CE" />
        </div>
        <button className="h-fit w-fit px-10 py-2 relative inline-flex items-center justify-start overflow-hidden transition-all bg-white rounded-xl hover:bg-white group border-solid border-2 border-purple-700">
          {/* <button className="w-fit h-fit px-10 py-2 bg-purple-600 border-none text-xl z-10 relative transition-all duration-300 ease-in-out rounded-lg  hover:h-fit hover:rounded-l-md  hover:scale-110 hover:text-indigo-600 hover:border-2 hover:border-indigo-600"> */}
          <span className="w-0 h-0 rounded-lg bg-purple-600 absolute top-0 left-0 ease-out duration-300 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
          <span className="w-full text-purple-700 transition-colors duration-300 ease-in-out group-hover:text-white z-10">
            <a href="https://drive.google.com/file/d/1EZj-o9FjA8IPzFjUgS6J7a6LlMn1iRM3/view?usp=sharing">
              Resume
            </a>
          </span>
        </button>
      </div>
      {/* this is the infinite scrolling section */}
      <div className="hidden sm:block md:block h-dvh px-10 overflow-y-hidden">
        <Marquee
          fade={true}
          direction="up"
          reverse={false}
          pauseOnHover={false}
          className="h-dvh overflow-y-clip"
          innerClassName="repeat"
        >
          <img src="scroll_img.png" className="" />
        </Marquee>
      </div>
    </div>
  );
}

export default Title;
