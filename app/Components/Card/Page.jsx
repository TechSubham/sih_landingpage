"use client";
import React, { useEffect, useRef, useState } from "react";
import { CarouselCard } from "@/components/StyleComponents/Carousel";
import { motion, useAnimation } from "framer-motion";
import ServiceCard from "../../Elements/ServiceCard/page"
 
const Page = () => {
  const pieChartRef = useRef(null);
  const pieChartControls = useAnimation();
  const [pieChartVisible, setPieChartVisible] = useState(false);

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

    if (pieChartRef.current) {
      pieChartObserver.observe(pieChartRef.current);
    }

    return () => {
      if (pieChartRef.current) {
        pieChartObserver.unobserve(pieChartRef.current);
      }
    };
  }, [pieChartControls]);

  return (
    <div>
      <div ref={pieChartRef} className="mt-24 pb-20">
        <motion.div
          className="text-5xl font-bold text-center mb-10"
          initial={{ opacity: 0, y: 50 }}
          animate={pieChartVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-white font-bold text-5xl sm:text-5xl lg:text-5xl">
            Services Provided by{" "}
          </span>
          <span className="text-blue-600 font-bold text-5xl sm:text-4xl lg:text-5xl">
            Qubit
          </span>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            className="mb-20 mt-20 w-full  md:hidden"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <CarouselCard />
          </motion.div>
          <motion.div
            className="mb-20 mt-20 w-full ml-16 hidden lg:block"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <ServiceCard/>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
