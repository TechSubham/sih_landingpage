"use client";
import React from "react";
import AboutUs from "./Elements/AboutUs/page";
import Navbar from "./Components/Navbar/Page";
import Timeline from "./Components/Timeline/page";
import Card from "./Components/Card/Page";
import Intro from "./Components/Intro/Page";

const Page = () => {
  return (
    <>
      <div className="relative min-h-scree overflow-hidden  ">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-black"></div>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#90caf9_1px,transparent_1px),linear-gradient(to_bottom,#09baf3_1px,transparent_1px)] bg-[size:8rem_8rem] opacity-80"></div>
          <div className="absolute inset-0 bg-[linear-gradient(circle_at_top,#ffffff10,transparent_90%)]"></div>
          <div className="absolute inset-0  bg-[radial-gradient(1500px_2500px_ellipse_at_center,_var(--tw-gradient-stops))] from-blue-800 via-black to-black opacity-90"></div>
        </div>

        <div className="relative z-10">
          <Navbar />
          <Intro />
          <Timeline />
          <Card />
        </div>
      </div>
      <AboutUs />
    </>
  );
};

export default Page;
