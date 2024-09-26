"use client";

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link';
import Button from '@/app/Elements/Button/page';
import Image from 'next/image';
import Mobilebg from '../../../public/mobile.png';

const Page = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="text-black">
          <div className="mt-12 lg:mt-12">
            <motion.h1
              className="font-bold text-xl md:text-2xl text-gray-600 mb-4"
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
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-2"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Real Time Vulnerability
            </motion.p>

            <motion.p
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-blue-600 mb-2"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Reporting System with
            </motion.p>

            <motion.p
              className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Cutting Edge Technology
            </motion.p>
          </div>

          <Link href="https://rvrs.teamqubit.in/SignUp">
            <motion.div
              className="mt-8"
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <Button />
            </motion.div>
          </Link>
        </div>
        <motion.div
          className="mt-8 lg:mt-0"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Image src={Mobilebg} alt="mobilebg" className="w-full h-auto" />
        </motion.div>
      </div>
    </div>
  )
}

export default Page