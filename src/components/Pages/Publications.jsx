/* eslint-disable no-unused-vars */
import React from "react";
import PubCard from "../pubCard";

const Publications = () => {
  return (
    <div className="flex flex-col sm:flex-row md:flex-row justify-center items-center min-h-screen px-10 md:px-40 lg:px-80">
      <PubCard
        title="Nanotechnology Solutions To Mitigate Covid-19 Challenges" description="The COVID-19 pandemic has fuelled a global demand for effective diagnosis. Millions have lost lives in the face of this current health threat. The first case of COVID-19 was reportedly found in December 2019 in Wuhan, China. Since then, effective strategies for early detection and plausible treatment of COVID-19 to reduce the viral load and contain its global transmission have been under rigorous research..."
        linkText="Read me"
      />
    </div>
  );
};

export default Publications;
