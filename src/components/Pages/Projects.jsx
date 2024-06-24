/* eslint-disable no-unused-vars */
import React from "react";
import pblog_img from "../../assets/pblog_img.png";
import aqualynk_img from "../../assets/aqualynk_img.png";
import GDwork from "../GDwork.tsx";
import app_img from "../../assets/app_img.png"
import medsy from "../../assets/medsy.png"
import classy from "../../assets/classy.png"

function Projects() {
  return (
    <div className="flex flex-col justify-start gap-10 py-10 px-10 h-fit w-screen align-top">
      {/* heading */}
      <div className="text-purple-700 font-bold text-2xl  lg:text-3xl">
        {" "}
        Projects
      </div>
      {/* tech */}
      <div></div><div className="font-mono text-yellow-600 md:text-xl lg:text-xl">
        Tech
      </div>
      <div className="flex flex-col justify-center md:flex-row lg:flex-row gap-3 md:gap-5 lg:gap-8 ">
        {/* personal blog */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110 ">
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
            A personal blog website sharing my experiences and insights through various written blogs.
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
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110 ">
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
            An IoT pond water monitoring system ensures optimal conditions for effective fish breeding management.
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
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110 ">
          <a href="https://github.com/AishiD/BeeBot">
            <img
              className="rounded-t-lg object-cover"
              src="https://res.cloudinary.com/dhz0jxyc8/image/upload/f_auto,q_auto/lz5nxbp0yovdpizuzyyw"
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://github.com/AishiD/BeeBot">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-700 ">
                BeeBot
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">
            A Test Discord chatbot that you can add to your server to add some element of fun.
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
      <div className="flex flex-col justify-evenly md:flex-row lg:flex-row py-40">
        <div className="hidden md:block lg:block text-red-500 font-bold text-3xl font-mono"> Swipe!</div>
        <GDwork className="flex flex-end"/>
      </div>
      {/* ui works */}
      <div></div><div className="font-mono text-yellow-600 md:text-xl lg:text-xl">
        UI/UX
      </div>
      <div className="flex flex-col justify-center md:flex-row lg:flex-row gap-3 md:gap-5 lg:gap-8 ">
        {/* Language Learning App */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110 ">
          <a href="https://www.figma.com/design/2LKTQNax37GO1zSxHd03Jc/Language-App?node-id=0-1&t=caVhc54TBq23HDNt-1">
            <img className="rounded-t-lg object-cover" src={app_img} alt="" />
          </a>
          <div className="p-5">
            <a href="https://www.figma.com/design/2LKTQNax37GO1zSxHd03Jc/Language-App?node-id=0-1&t=caVhc54TBq23HDNt-1">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-700 ">
                Language Learning App
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">
            Interactive platform facilitating language acquisition through immersive exercises and cultural insights worldwide.
            </p>
            <div className="flex flex-row gap-2">
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Figma
              </div>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                App
              </div>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                UI
              </div>
            </div>
          </div>
        </div>
        {/* Classy */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110 ">
          <a href="https://www.figma.com/design/Xmq9JzsmaCVDBWsRDxrMj3/Untitled?node-id=0-1&t=vhuLFvgllftbVnZm-1">
            <img
              className="rounded-t-lg object-cover"
              src={classy}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://www.figma.com/design/Xmq9JzsmaCVDBWsRDxrMj3/Untitled?node-id=0-1&t=vhuLFvgllftbVnZm-1">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-700 ">
                EdVerse
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">
            Interactive digital platform enhances learning, engagement, and collaboration among students and educators.
            </p>
            <div className="flex flex-row gap-2">
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Figma
              </div>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                WebApp
              </div>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Education
              </div>
            </div>
          </div>
        </div>
        {/* Medsy */}
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md transform transition-transform duration-300 ease-in-out hover:scale-110">
          <a href="https://www.figma.com/community/file/1266436091567606897/medsy">
            <img
              className="rounded-t-lg object-cover"
              src={medsy}
              alt=""
            />
          </a>
          <div className="p-5">
            <a href="https://www.figma.com/community/file/1266436091567606897/medsy">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-purple-700 ">
                Medsy
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 ">
            Integrated healthcare system prioritizing patient needs through personalized care and efficient medical services.
            </p>
            <div className="flex flex-row gap-2">
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Figma
              </div>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Medicine
              </div>
              <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                WebApp
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
