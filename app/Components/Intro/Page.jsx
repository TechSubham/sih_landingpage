"use client";

import React from 'react'
import {motion} from 'framer-motion'
import Link from 'next/link';
import Button from '@/app/Elements/Button/page';
import Image from 'next/image';
import Mobilebg from '../../../public/mobile.png';

const paje = () => {
  return (
    <div>
      <div className="grid lg:grid-cols-2 sm:grid-cols-1">
            <div className="text-black">
              <div className=" ml-9 mt-20 lg:mt-64 lg:ml-32 sm:ml-12">
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
                  className="text-5xl sm:text-4xl md:text-5xl font-extrabold text-white lg:h-14 sm:h-10"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Real Time Vulnerability
                </motion.p>

                <motion.p
                  className="text-5xl sm:text-4xl md:text-5xl font-extrabold text-blue-600 lg:h-14 sm:h-10"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Reporting System with
                </motion.p>

                <motion.p
                  className="text-5xl sm:text-4xl md:text-5xl font-extrabold text-white lg:h-14 sm:h-10"
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                >
                  Cutting Edge Technology
                </motion.p>
              </div>

              <Link href="https://rvrs.teamqubit.in/SignUp">
                <motion.div
                  className="mt-5 ml-10 lg:ml-72"
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
    </div>
  )
}

export default paje
