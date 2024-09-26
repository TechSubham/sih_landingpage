"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

const Page = () => {
  const timelineRef = useRef(null);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const timelineControls = useAnimation();

  useEffect(() => {
    const timelineObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimelineVisible(true);
          timelineControls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      timelineObserver.observe(timelineRef.current);
    }

    return () => {
      if (timelineRef.current) {
        timelineObserver.unobserve(timelineRef.current);
      }
    };
  }, [timelineControls]);

  const timelineVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="h-screen w-full flex flex-col justify-center items-center">
      <div className="lg:mt-0 sm:mt-10 mt-6 mb-12">
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-center">
          <span className="font-bold text-5xl lg:text-5xl text-white">
            Why Choose
          </span>
          <span className="font-bold text-5xl sm:text-3xl lg:text-5xl text-blue-600">
            QUBIT !
          </span>
        </div>
      </div>

      <motion.div
        ref={timelineRef}
        initial="hidden"
        animate={timelineControls}
        variants={timelineVariants}
        className="max-w-6xl mx-auto w-full grid grid-cols-9 px-2"
      >
        <motion.div
          variants={itemVariants}
          className="col-span-4 w-full h-full"
        >
          <div className="w-full h-full bg-white rounded-md p-2 md:pl-4">
            <h1 className="text-black text-2xl font-bold py-2">
              Efficient Data Extraction
            </h1>
            <p className="text-gray-700 sm:text-lg hidden lg:block ">
              Efficient data extraction employs methods like throttling and IP
              rotation to gather data quickly while minimizing risks of website
              blocking.
            </p>
          </div>
        </motion.div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-white"></div>
          <motion.div
            variants={itemVariants}
            className="absolute w-6 h-6 rounded-full bg-blue-600 z-10 text-white font-bold text-center "
          >
            1
          </motion.div>
        </div>
        <div className="col-span-4 w-full h-full"></div>

        <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-white"></div>
          <motion.div
            variants={itemVariants}
            className="absolute w-6 h-6 rounded-full bg-blue-600 z-10 text-white font-bold text-center"
          >
            2
          </motion.div>
        </div>
        <motion.div
          variants={itemVariants}
          className="col-span-4 w-full h-full"
        >
          <div className="w-full h-full bg-white rounded-md p-2 md:pl-4">
            <h1 className=" text-2xl  py-2 font-bold text-black">
              Advanced Analytics
            </h1>
            <p className="text-gray-700 sm:text-lg hidden md:block ">
              Advanced analytics utilizes sophisticated techniques to analyze
              data, providing valuable insights from web scraping for informed
              business decisions and trend analysis.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="col-span-4 w-full h-full"
        >
          <div className="w-full h-full bg-white rounded-md p-2 md:pl-4">
            <h1 className="text-black text-2xl font-bold py-2 ">
              Scalable Infrastructure
            </h1>
            <p className="text-gray-700 sm:text-lg hidden md:block ">
              Scalable infrastructure allows seamless growth, efficiently
              managing increased workloads in web scraping to ensure optimal
              performance and resource allocation.
            </p>
          </div>
        </motion.div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-white"></div>
          <motion.div
            variants={itemVariants}
            className="absolute w-6 h-6 rounded-full bg-blue-600 z-10 font-bold text-white text-center"
          >
            3
          </motion.div>
        </div>
        <div className="col-span-4 w-full h-full"></div>
      </motion.div>
    </div>
  );
};

export default Page;
