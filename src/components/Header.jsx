/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  UserIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
  CodeBracketIcon,
  EnvelopeIcon
} from "@heroicons/react/24/outline";

export default function Header() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const iconStyle = (active) => ({
    color: active ? "#fff" : "#7E22CE",
    backgroundColor: active ? "#7E22CE" : "transparent",
    borderRadius: active ? "20%" : "0",
    padding: active ? "2px" : "0",
  });

  return (
    <div className="flex justify-center mt-10">
      <nav className="relative flex flex-row items-center gap-6 border-2 border-purple-700 rounded-full px-4 py-2 m-2 hover:scale-105 transition-transform">
        <Link to="/">
          <HomeIcon
            style={iconStyle(isActive("/"))}
            title="Home"
            className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform"
          />
        </Link>
        <Link to='/profile'>
          <UserIcon
            style={iconStyle(isActive("/profile"))}
            title="Profile"
            className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform"
          />
        </Link>
        <Link to='/skills'>
          <WrenchScrewdriverIcon
            style={iconStyle(isActive("/skills"))}
            title="Skills"
            className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform"
          />
        </Link>
        <Link to='/projects'>
          <CodeBracketIcon
            style={iconStyle(isActive("/projects"))}
            title="Projects"
            className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform"
          />
        </Link>
        <Link to='/academics'>
          <AcademicCapIcon
            style={iconStyle(isActive("/academics"))}
            title="Academics"
            className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform"
          />
        </Link>
        <Link to='/contact'>
          <EnvelopeIcon
            style={iconStyle(isActive("/contact"))}
            title="Contact"
            className="h-6 w-6 hover:bg-purple-100 hover:rounded-lg hover:scale-105 transition-transform"
          />
        </Link>
      </nav>
    </div>
  );
}
