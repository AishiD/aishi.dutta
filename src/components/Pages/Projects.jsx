/* eslint-disable no-unused-vars */
import React from "react";
import pblog_img from "../../assets/pblog_img.png";
import aqualynk_img from "../../assets/aqualynk_img.png";

function Projects() {
  return (
    <div className="flex flex-col justify-start gap-10 py-10 px-10 h-fit align-top">
      {/* heading */}
      <div className="text-purple-700 font-bold text-2xl  lg:text-3xl">
        {" "}
        Projects
      </div>
      {/* tech */}
      <div className="font-mono text-yellow-600 md:text-xl lg:text-xl">
        Tech
      </div>
      <div className="flex flex-col justify-center md:flex-row lg:flex-row gap-3 md:gap-5 lg:gap-8 ">
        {/* personal blog */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <a href="https://aishi-dutta-personal-blog.vercel.app/">
            <img className="rounded-t-lg object-cover" src={pblog_img} alt="" />
          </a>
          <div className="p-5">
            <a href="https://aishi-dutta-personal-blog.vercel.app/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-700 ">
                Personal Blog Website
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex flex-row gap-2">
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                HTML5
              </div>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                CSS3
              </div>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Javascript
              </div>
            </div>
          </div>
        </div>
        {/* Aqualynk */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <a href="https://astounding-fox-b995e8.netlify.app/">
            <img
              className="rounded-t-lg object-cover"
              src={aqualynk_img}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://astounding-fox-b995e8.netlify.app/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-700 ">
                Aqualynk
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex flex-row gap-2">
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                HTML5
              </div>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Tailwind
              </div>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                React
              </div>
            </div>
          </div>
        </div>
        {/* Threads app */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
          <a href="https://astounding-fox-b995e8.netlify.app/">
            <img
              className="rounded-t-lg object-cover"
              src={aqualynk_img}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://astounding-fox-b995e8.netlify.app/">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-700 ">
                Stringz : Threads App Clone
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <div className="flex flex-row gap-2">
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                NextJS
              </div>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Clerk
              </div>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Tailwind
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* graphic design */}
      <div className="font-mono text-yellow-600 md:text-xl lg:text-xl">
          Graphic Design
      </div>
    </div>
  );
}

export default Projects;
