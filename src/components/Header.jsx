/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  BookOpenIcon,
  CodeBracketIcon, EnvelopeIcon
} from "@heroicons/react/24/outline";
import Home from "../components/Pages/Home";

export default function Header() {
  return (
    <div className="flex justify-center mt-10">
      <nav className=" relative flex flex-row items-center gap-6 border-2 border-purple-700 rounded-full px-4 py-2 m-2 hover:scale-105 transition-transform ">
        <Link to="/">
          <HomeIcon
            color="#7E22CE"
            className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform"
          ></HomeIcon>
        </Link>
        <Link to='/profile'><UserIcon
          color="#7E22CE"
          className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform"
        /></Link>
        <Link to='/skills'><WrenchScrewdriverIcon
          color="#7E22CE"
          className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform"
        /></Link>
        <Link to='/projects'><CodeBracketIcon
          color="#7E22CE"
          className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform"
        /></Link>
        <Link to='/publications'><BookOpenIcon
          color="#7E22CE"
          className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform"
        /></Link>
        <Link to='/academics'><AcademicCapIcon
          color="#7E22CE"
          className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform"
        /></Link>
         <Link to='/contact'><EnvelopeIcon
          color="#7E22CE"
          className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform"
        /></Link>
      </nav>
    </div>
  );
}
