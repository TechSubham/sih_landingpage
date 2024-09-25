"use client";
import { motion , useAnimation} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";


const page = () => {
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
    <div>
      <div className="lg:mt-20 sm:mt-10 mt-6">
        <div className="flex flex-wrap justify-center space-x-2 sm:space-x-4 text-center">
          <span className="font-bold text-5xl  lg:text-5xl text-white">
            Why Choose
          </span>
          <span className="font-bold text-5xl sm:text-3xl lg:text-5xl text-blue-600">
            QUBIT !
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
              animate={{ height: ["545px"], opacity: 1 }}
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
                  className=" hidden lg:block absolute left-1/2 w-[100px] sm:w-[138px] h-[2px] sm:h-[4px] bg-gray-500 transform -translate-x-full"
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
                  className="absolute hidden lg:block left-1/2 w-[100px] sm:w-[144px] h-[2px] sm:h-[4px] bg-gray-500"
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
                  className="absolute left-1/2 w-[100px] hidden lg:block sm:w-[138px] h-[2px] sm:h-[4px] bg-gray-500 -translate-x-full"
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
    </div>
  );
};

export default page;
