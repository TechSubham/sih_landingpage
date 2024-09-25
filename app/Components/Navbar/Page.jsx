"use client";
import React from 'react'
import {motion} from "framer-motion"

const Page = () => {
  return (
    <div>
       <nav className="p-4 bg-black  shadow-2xl shadow-black">
            <motion.div
              className=" mx-auto flex justify-between h-10 mt-2"
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
    </div>
  )
}

export default Page
