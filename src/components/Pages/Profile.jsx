/* eslint-disable no-unused-vars */
import React from "react";
import "../../../public/pp_photo.png";

function Profile() {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row lg:flex justify-center gap-10 py-10 px-10 h-screen align-top">
      {/* this is profile image */}
      <div className="">
        <img
          src="pp_photo.png"
          className="w-fit h-fit sm:w-96 sm:h-96 md:w-96 md:h-96"
        />
      </div>
      {/* this is profile text */}
      <div className="w-full md:w-1/2 sm:w-1/2 text-2xl overflow-scroll [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <h1 className="sm:text-5xl md:text-5xl text-bold">
          I am a <span className="text-purple-700">front-end web developer</span> and <span className="text-purple-700">UI/UX Designer</span> based in Kolkata
        </h1>
        <h1>
          I am a front-end web developer and UI/UX Designer based in Kolkata
        </h1>
        <h1>
          I am a front-end web developer and UI/UX Designer based in Kolkata
        </h1>
        <h1>
          I am a front-end web developer and UI/UX Designer based in Kolkata
        </h1>
        <h1>
          I am a front-end web developer and UI/UX Designer based in Kolkata
        </h1>
        <h1>
          I am a front-end web developer and UI/UX Designer based in Kolkata
        </h1>
        <h1>
          I am a front-end web developer and UI/UX Designer based in Kolkata
        </h1>
        <h1>
          I am a front-end web developer and UI/UX Designer based in Kolkata
        </h1>
        <h1>
          I am a front-end web developer and UI/UX Designer based in Kolkata
        </h1>
      </div>
    </div>
  );
}

export default Profile;
