/* eslint-disable no-unused-vars */
import React from "react";
import { HomeIcon, UserIcon, WrenchScrewdriverIcon, AcademicCapIcon, BookOpenIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import Home from '../components/Pages/Home';

export default function Header() {
  return (
    <div className="flex justify-center mt-5" >
      <nav className=" relative flex flex-row items-center gap-6 border-2 border-purple-700 rounded-full px-4 py-2 m-2 w-fit hover:scale-105 transition-transform ">
        <HomeIcon color="#7E22CE" className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform" ><a href={Home} className="flex items-center hover:text-black transition-colors">
          Pages
        </a></HomeIcon>
        <UserIcon color="#7E22CE" className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform" />
        <WrenchScrewdriverIcon color="#7E22CE" className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform" />
        <CodeBracketIcon color="#7E22CE" className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform"/>
        <BookOpenIcon color="#7E22CE" className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform"/>
        <AcademicCapIcon color="#7E22CE" className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform"/>
      </nav>
    </div>
  );
}
