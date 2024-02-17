/* eslint-disable no-unused-vars */
import React from "react";
import { HomeIcon, UserIcon, WrenchScrewdriverIcon, AcademicCapIcon, BookOpenIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

export default function Header() {
  return (
    <div >
      <nav className="flex flex-row justify-center items-center gap-2 border-2 border-purple-700 rounded-full p-2 m-2 w-fit">
        <HomeIcon className="h-8 w-8" />
        <UserIcon className="h-8 w-8" />
        <WrenchScrewdriverIcon className="h-8 w-8" />
        <CodeBracketIcon className="h-8 w-8"/>
        <BookOpenIcon className="h-8 w-8"/>
        <AcademicCapIcon className="h-8 w-8"/>
      </nav>
    </div>
  );
}
