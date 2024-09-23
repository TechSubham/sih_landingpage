"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Mobilebg from "../public/mobile.png";
import Button from "./Elements/button";
import { CarouselCard } from "@/components/StyleComponents/Carousel";
import AboutUs from "./Elements/AboutUs";
import Link from "next/link";

const Page = () => {
  const timelineRef = useRef(null);
  const pieChartRef = useRef(null);
  const [timelineVisible, setTimelineVisible] = useState(false);
  const [pieChartVisible, setPieChartVisible] = useState(false);
  const timelineControls = useAnimation();
  const pieChartControls = useAnimation();

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

    const pieChartObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setPieChartVisible(true);
          pieChartControls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (timelineRef.current) {
      timelineObserver.observe(timelineRef.current);
    }

    if (pieChartRef.current) {
      pieChartObserver.observe(pieChartRef.current);
    }

    return () => {
      if (timelineRef.current) {
        timelineObserver.unobserve(timelineRef.current);
      }
      if (pieChartRef.current) {
        pieChartObserver.unobserve(pieChartRef.current);
      }
    };
  }, [timelineControls, pieChartControls]);

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

  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const slideIn = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

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
          <nav className="p-4 bg-black  shadow-2xl shadow-black">
            <motion.div
              className="container mx-auto flex justify-between h-10 mt-2"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="text-3xl flex font-bold text-white">QUBIT</div>
              <div className=" space-x-4 hidden lg:block md:block">
                <motion.span
                  className="text-gray-500 hover:text-white hover:cursor-pointer text-xl transition font-semibold"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Scraping
                </motion.span>
                <motion.span
                  className="text-gray-500 hover:text-white hover:cursor-pointer text-xl transition font-semibold"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  Services
                </motion.span>
                <motion.span
                  className="text-gray-500 hover:text-white hover:cursor-pointer text-xl transition font-semibold"
                  whileHover={{ scale: 1.1, color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                >
                  About Us
                </motion.span>
              </div>
            </motion.div>
          </nav>

          <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            <div className="text-black">
              <div className="mt-20 sm:mt-32 lg:mt-64 lg:ml-32 sm:ml-12 ml-4">
                <motion.h1
                  className="font-bold text-lg sm:text-2xl text-gray-600 h-10"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  {"Keep Your device Safe".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.2 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.h1>

                <motion.p
                  className="text-2xl sm:text-2xl md:text-5xl font-extrabold text-white lg:h-14 sm:h-10"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Real Time Vulnerability
                </motion.p>

                <motion.p
                  className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 lg:h-14 sm:h-10"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Reporting System with
                </motion.p>

                <motion.p
                  className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white lg:h-14 sm:h-10"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Cutting Edge Technology
                </motion.p>
              </div>

              <Link href="https://rvrs.teamqubit.in/SignUp">
                <motion.div
                  className="mt-5  sm:ml-10 lg:ml-2"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  <Button />
                </motion.div>
              </Link>
            </div>
            <motion.div
              className="text-black"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Image src={Mobilebg} alt="mobilebg" className="mt-8" />
            </motion.div>
          </div>

          <div className="lg:mt-20 sm:mt-10 mt-6">
            <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-center">
              <span className="font-bold text-2xl sm:text-3xl lg:text-5xl text-white">
                Team
              </span>
              <span className="font-bold text-2xl sm:text-3xl lg:text-5xl text-blue-600">
                Qubit
              </span>
              <span className="font-bold text-2xl sm:text-3xl lg:text-5xl text-white">
                Revolutionizing Web Scraping
              </span>
            </div>
          </div>

          <div
            ref={timelineRef}
            className="mt-14 sm:mt-20 px-2 sm:px-4 relative"
          >
           <motion.div
      initial={{ height: 0, opacity: 0 }}
      variants={timelineVariants}
      animate={{ height: ["530px", "530px"], opacity: 1 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="absolute left-1/2 bottom-[70px] sm:bottom-[90px] w-[2px] sm:w-[4px] bg-gray-500 transform -translate-x-1/2"
    
    />

            <motion.div
              className="space-y-12 sm:space-y-24 relative"
              variants={timelineVariants}
              initial="hidden"
              animate={timelineControls}
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="w-full sm:w-[30%] sm:pr-8 text-center sm:text-right relative sm:left-44 transition-transform transform hover:scale-105 z-10">
                  <motion.div
                    className="bg-white p-4 sm:p-6 rounded-lg shadow-lg inline-block transition-shadow duration-300 hover:shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                      Efficient Data Extraction
                    </h3>
                    <p className="text-gray-600 text-center sm:text-right">
                      Efficient data extraction employs methods like throttling
                      and IP rotation to gather data quickly while minimizing
                      risks of website blocking.
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute left-1/2 w-[100px] sm:w-[138px] h-[2px] sm:h-[4px] bg-gray-500 transform -translate-x-full"
                  initial={{ width: 0 }}
                  animate={{ width: "200px", sm: "138px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>

                <motion.div
                  className="w-3 sm:w-4 h-3 sm:h-4 bg-gray-500 rounded-full absolute left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>

                <div className="hidden sm:block w-1/2 pl-8"></div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="hidden sm:block w-1/2 pr-8"></div>

                <motion.div
                  className="w-3 sm:w-4 h-3 sm:h-4 bg-gray-500 rounded-full absolute left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>

                <motion.div
                  className="absolute left-1/2 w-[100px] sm:w-[144px] h-[2px] sm:h-[4px] bg-gray-500"
                  initial={{ width: 0 }}
                  animate={{ width: "200px", sm: "144px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>

                <div className="w-full sm:w-[30%] sm:pl-8 text-center sm:text-left relative sm:left-28 transition-transform transform hover:scale-105">
                  <motion.div
                    className="bg-white p-4 sm:p-6 rounded-lg shadow-lg inline-block transition-shadow duration-300 hover:shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                      Advanced Analytics
                    </h3>
                    <p className="text-gray-600">
                      Advanced analytics utilizes sophisticated techniques to
                      analyze data, providing valuable insights from web
                      scraping for informed business decisions and trend
                      analysis.
                    </p>
                  </motion.div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex flex-col sm:flex-row items-center"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="w-full sm:w-[30%] sm:pr-8 text-center sm:text-right relative sm:left-44 transition-transform transform hover:scale-105 z-10">
                  <motion.div
                    className="bg-white p-4 sm:p-6 rounded-lg shadow-lg inline-block transition-shadow duration-300 hover:shadow-xl"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 text-black">
                      Scalable Infrastructure
                    </h3>
                    <p className="text-gray-600">
                      Scalable infrastructure allows seamless growth,
                      efficiently managing increased workloads in web scraping
                      to ensure optimal performance and resource allocation.
                    </p>
                  </motion.div>
                </div>

                <motion.div
                  className="absolute left-1/2 w-[100px] sm:w-[138px] h-[2px] sm:h-[4px] bg-gray-500 -translate-x-full"
                  initial={{ width: 0 }}
                  animate={{ width: "200px", sm: "138px" }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>

                <motion.div
                  className="w-3 sm:w-4 h-3 sm:h-4 bg-gray-500 rounded-full absolute left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                ></motion.div>

                <div className="hidden sm:block w-1/2 pl-8"></div>
              </motion.div>
            </motion.div>
          </div>

          <div ref={pieChartRef} className="mt-24 pb-20">
            <motion.div
              className="text-5xl font-bold text-center mb-10"
              initial={{ opacity: 0, y: 50 }}
              animate={pieChartVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-white font-bold text-2xl sm:text-4xl lg:text-5xl">Services Provided by </span>
              <span className="text-blue-600 font-bold text-2xl sm:text-4xl lg:text-5xl">Qubit </span>
            </motion.div>
            <motion.div
              className="flex justify-center"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                className="mb-20 mt-20 w-full max-w-4xl"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <CarouselCard />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
      <AboutUs />
    </>
  );
};

export default Page;
