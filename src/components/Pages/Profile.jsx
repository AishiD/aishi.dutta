/* eslint-disable no-unused-vars */
import React from "react";
import ppPhoto from "../../../public/pp_photo.png";
import {
  MapPinIcon,
  LanguageIcon,
  GlobeAltIcon,
} from "@heroicons/react/16/solid";
import { motion } from "framer-motion";

const sleep = async (ms) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

function Img({ delay }) {
  return (
    <motion.div
      initial="initial"
      animate="upDown"  // Example: animate to "rotate" on mount
      whileHover="grow"
      variants={{
        grow: {
          scale: 1.1,
        },
        upDown: {
          y: [-12, 12], // Move up and down
          transition: {
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }},
        initial: {
          y: [-20, 20],
          rotate: 0,
          transition: {
            delay,
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          },
        },
      }}
      >
      <img src={ppPhoto} alt="Profile" className="w-fit h-fit sm:w-96 sm:h-96 md:w-96 md:h-96" />
    </motion.div>
  );
}

function Profile() {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex justify-center gap-10 py-10 px-10 h-screen align-top">
      {/* this is profile image */}
      <div className="">
      <Img delay={0.5} />
      </div>
      {/* this is profile text */}
      <div className="flex flex-col w-full md:w-1/2 sm:w-1/2 overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <h1 className="text-3xl sm:text-5xl md:text-5xl pb-6 md:pb-10 lg:pb-10">
          I am a <span className="text-purple-700">final-year CSE </span>student
          at <span className="text-purple-700">IEM, Kolkata</span>
        </h1>
        <div className="flex flex-col md:flex-row lg:flex-row gap-8">
          {/* location */}
          <div className="flex flex-row gap-0 items-center">
            <MapPinIcon className="w-10 h-10" color="red" />
            <span className="font-bold text-lg  lg:text-xl">Kolkata</span>
          </div>
          {/* language */}
          <div className="flex flex-row gap-0 items-center">
            <LanguageIcon className="w-10 h-10" color="black" />
            <span className="font-bold text-lg  lg:text-xl">English</span>
          </div>
          {/* gender */}
          <div className="flex flex-row gap-0 items-center">
            <GlobeAltIcon className="w-8 h-8" color="black" />
            <span className="font-bold text-lg  lg:text-xl">Indian</span>
          </div>
        </div>
        <p className="text-lg lg:text-xl leading-normal lg:leading-relaxed font-medium py-10">
          A CSE Undergrad Who Is Curious About{" "}
          <span className="text-purple-700 font-bold">Tech </span>And
          <span className="text-yellow-500 font-bold">
            {" "}
            Everything Creative.
          </span>{" "}
          Being a{" "}
          <span className="text-purple-700 font-bold">
            front-end developer and UI/UX Designer
          </span>{" "}
          I Am Constantly Seeking Opportunities To Learn And Grow. I am a{" "}
          <span className="text-yellow-500">
            three-time gold medal winner in art
          </span>
          . I a driven individual ans can use my creative pursuits to bring out
          the most in my workplace. Right Now I Am Pursuing My Undergraduate
          Degree From In Computer Science And Engineering (Artificial
          Intelligence).
        </p>
      </div>
    </div>
  );
}

export default Profile;
