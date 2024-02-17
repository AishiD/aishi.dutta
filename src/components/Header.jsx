/* eslint-disable no-unused-vars */
import React from "react";
import { HomeIcon, UserIcon, WrenchScrewdriverIcon, AcademicCapIcon, BookOpenIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <div className="flex justify-center mt-10" >
      <nav className=" relative flex flex-row items-center gap-6 border-2 border-purple-700 rounded-full px-4 py-2 m-2 w-fit ">
        <HomeIcon color="#7E22CE" className="h-8 w-8" />
        <UserIcon color="#7E22CE" className="h-8 w-8" />
        <WrenchScrewdriverIcon color="#7E22CE" className="h-8 w-8" />
        <CodeBracketIcon color="#7E22CE" className="h-8 w-8"/>
        <BookOpenIcon color="#7E22CE" className="h-8 w-8"/>
        <AcademicCapIcon color="#7E22CE" className="h-8 w-8"/>
      </nav>
    </div>
  );
}
