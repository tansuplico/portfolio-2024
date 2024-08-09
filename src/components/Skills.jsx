import React from "react";
import { motion } from "framer-motion";

import html from "../assets/html-logo.svg";
import css from "../assets/css-logo.svg";
import js from "../assets/js-logo.svg";
import ts from "../assets/ts-logo.svg";
import tw from "../assets/tw-logo.svg";
import node from "../assets/node-logo.svg";
import py from "../assets/py-logo.svg";
import query from "../assets/query-logo.svg";
import xp from "../assets/xp-logo.svg";
import git from "../assets/git-logo.svg";
import fgma from "../assets/fgma-logo.svg";
import mdb from "../assets/mdb-logo.svg";
import fm from "../assets/fm-logo.svg";
import post from "../assets/post-logo.svg";
import zs from "../assets/zs-logo.svg";
import rdx from "../assets/rdx-logo.svg";
import react from "../assets/react-logo.svg";

const Skills = ({ skillsRef }) => {
  return (
    <div
      className="w-full px-10 md:px-0 md:w-[65%]  h-[40rem] xsm:h-[45rem] md:h-[50rem] pt-[5rem] mt-[10rem] "
      ref={skillsRef}
    >
      <h1 className="text-[#D12727] font-black text-[1.5rem] md:text-[2rem] mb-5">
        Skills
      </h1>
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-5">
        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg ">
            <img src={html} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg ">
            <img src={css} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg">
            <img src={js} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg ">
            <img src={ts} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg ">
            <img src={tw} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg ">
            <img src={react} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg ">
            <img src={node} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg">
            <img src={py} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.9,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg ">
            <img src={query} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg ">
            <img src={xp} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.1,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg ">
            <img src={git} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.2,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg ">
            <img src={fgma} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>

        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg ">
            <img src={mdb} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg ">
            <img src={fm} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg ">
            <img src={post} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.6,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg ">
            <img src={zs} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>
        <motion.div
          className="col-span-1 flex justify-start items-center"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 1.7,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#E8E8E8] p-2 rounded-lg ">
            <img src={rdx} alt="icon" className="w-[90px]" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
