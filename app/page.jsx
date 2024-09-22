"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Mobilebg from "../public/mobile.png";
import Button from "./Elements/button";
import Profile2 from "../public/profile2.jpg";
import Profile4 from "../public/profile4.jpg";
import { Plus_Jakarta_Sans } from "next/font/google";
import Logos from "../public/Qubit.png";
import { CarouselCard } from "@/components/StyleComponents/Carousel";
import AboutUs from "./Elements/AboutUs";
import Link from "next/link";



// const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ['latin'] });

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
            <div className="text-3xl flex font-bold text-white">  
              QUBIT
            </div>
            <div className="flex space-x-4">
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

        <div className="grid grid-cols-2">

          <div className="text-black">
            <div className="mt-52 ml-32">

              {/* Animated Header */}
              <motion.h1
                className="font-bold text-2xl text-gray-600 h-10"
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

              {/* Animated Text Blocks */}
              <motion.p
                className="text-5xl font-extrabold text-white h-14"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Real Time Vulnerability
              </motion.p>

              <motion.p
                className="text-5xl font-extrabold text-blue-600 h-14"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Reporting System with
              </motion.p>

              <motion.p
                className="text-5xl font-extrabold text-white h-14"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                Cutting Edge Technology
              </motion.p>
            </div>
            {/* <motion.div
              className="h-[1px] w-[80%] mt-5 ml-32 bg-gray-300"
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
              transition={{ duration: 1 }}
            /> */}
            {/* <div className="flex items-center space-x-2 ml-32 mt-3">
              <motion.div
                className="flex -space-x-5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                <motion.div variants={slideIn} transition={{ duration: 0.5 }}>
                  <Image
                    className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                    src={Profile4}
                    alt="User 2"
                  />
                </motion.div>

                <motion.div variants={slideIn} transition={{ duration: 0.5 }}>
                  <Image
                    className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                    src={Profile2}
                    alt="User 2"
                  />
                </motion.div>

                <motion.div variants={slideIn} transition={{ duration: 0.5 }}>
                  <Image
                    className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                    src={Profile4}
                    alt="User 3"
                  />
                </motion.div>

                <motion.div variants={slideIn} transition={{ duration: 0.5 }}>
                  <Image
                    className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                    src={Profile2}
                    alt="User 4"
                  />
                </motion.div>

                <motion.div variants={slideIn} transition={{ duration: 0.5 }}>
                  <Image
                    className="w-16 h-16 rounded-full border-2 border-white shadow-lg"
                    src={Profile2}
                    alt="User 2"
                  />
                </motion.div>
              </motion.div>

              <motion.div
                className="text-white"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
              >
                <div className="text-2xl font-bold text-gray-600">100+</div>
                <div className="text-sm font-bold text-gray-600">
                  Registered Users
                </div>
              </motion.div>
            </div> */}
            {/* <motion.div
              className="h-[1px] w-[80%] mt-5 ml-32 bg-gray-400"
              initial={{ width: "0%" }}
              animate={{ width: "80%" }}
              transition={{ duration: 1 }}
            /> */}
            <Link href="https://rvrs.teamqubit.in/SignUp">
            <motion.div
              className="mt-5 ml-24"
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

        <div className="mt-20">
          <div className="space-x-4 text-center">
            <span className="font-bold text-5xl text-white">Team</span>
            <span className="font-bold text-5xl text-blue-600">Qubit</span>
            <span className="font-bold text-5xl text-white">
              Revolutionizing Web Scraping
            </span>
          </div>
        </div>

        <div ref={timelineRef} className="mt-20 px-4 relative">
          <div className="absolute left-1/2 h-[680px] bottom-[90px] w-[4px] bg-gray-500 transform -translate-x-1/2"></div>
          <motion.div
            className="space-y-24 relative"
            variants={timelineVariants}
            initial="hidden"
            animate={timelineControls}
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-[30%] pr-8 text-right relative left-44 transition-transform transform hover:scale-105 z-10">
                <motion.div
                  className="bg-gradient-to-r bg-white p-6 rounded-lg shadow-lg inline-block transition-shadow duration-300 hover:shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-black text-center">
                    Efficient Data Extraction
                  </h3>
                  <p className="text-gray-600 text-right">
                    Efficient data extraction employs methods like throttling
                    and IP rotation to gather data quickly while minimizing
                    risks of website blocking.
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="absolute left-1/2 w-[138px] h-[4px] bg-gray-500 transform -translate-x-full"
                initial={{ width: 0 }}
                animate={{ width: "138px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              ></motion.div>

              <motion.div
                className="w-4 h-4 bg-gray-500 rounded-full absolute left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              ></motion.div>

              <div className="w-1/2 pl-8"></div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-1/2 pr-8"></div>

              <motion.div
                className="w-4 h-4 bg-gray-500 rounded-full absolute left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              ></motion.div>

              <motion.div
                className="absolute left-1/2 w-[144px] h-[4px] bg-gray-500"
                initial={{ width: 0 }}
                animate={{ width: "144px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              ></motion.div>

              <div className="w-[30%] pl-8 text-left relative left-28 transition-transform transform hover:scale-105">
                <motion.div
                  className="bg-gradient-to-r bg-white p-6 rounded-lg shadow-lg inline-block transition-shadow duration-300 hover:shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-black text-center">
                    Advanced Analytics
                  </h3>
                  <p className="text-gray-600">
                    Advanced analytics utilizes sophisticated techniques to
                    analyze data, providing valuable insights from web scraping
                    for informed business decisions and trend analysis.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="flex items-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="w-[30%] pr-8 z-10 text-right relative left-44 transition-transform transform hover:scale-105">
                <motion.div
                  className="bg-gradient-to-r bg-white p-6 rounded-lg shadow-lg inline-block transition-shadow duration-300 hover:shadow-xl"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  <h3 className="text-xl font-semibold mb-2 text-black text-center">
                    Scalable Infrastructure
                  </h3>
                  <p className="text-gray-600">
                    Scalable infrastructure allows seamless growth, efficiently
                    managing increased workloads in web scraping to ensure
                    optimal performance and resource allocation.
                  </p>
                </motion.div>
              </div>

              <motion.div
                className="absolute left-1/2 w-[138px] h-[4px] bg-gray-500 -translate-x-full"
                initial={{ width: 0 }}
                animate={{ width: "138px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              ></motion.div>

              <motion.div
                className="w-4 h-4 bg-gray-500 rounded-full absolute left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              ></motion.div>

              <div className="w-1/2 pl-8"></div>
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
            <span className="text-white">Services Provided by </span>
            <span className="text-blue-600">Qubit </span>
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
