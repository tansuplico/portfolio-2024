import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="w-full px-10 pt-[5rem]  sm:pb-[3rem] flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h3 className="font-bold text-[.9rem] xmd:text-[1.1rem] md:text-[1.5rem]">
          Hi, I'm <span className="text-[#D12727]">Tristan Suplico</span>
        </h3>
      </motion.div>
      <motion.div
        className="w-full md:w-[85%] lg:w-[60%]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.75,
          ease: [0, 0.71, 0.2, 1.01],
        }}
      >
        <h1 className="w-full font-bold text-[2.1rem] xmd:text-[3rem] xl:text-[4rem] text-center">
          A <span className="text-[#D12727]">full-stack developer</span> with
          <br /> a focus on 
          <span className="text-[#D12727]"> front-end development</span>.
        </h1>
      </motion.div>

      <div className="flex mt-5 gap-3 md:gap-[3rem] font-bold">
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.75,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#D12727] w-[2.5rem] h-[2.5rem] md:w-[3.5rem] md:h-[3rem] flex justify-center items-center rounded-lg text-white">
            <h1 className="text-[1.2rem]"> 2 </h1>
          </div>
          <h1 className="text-[.7rem]">
            Years of <br /> experience
          </h1>
        </motion.div>

        <motion.div
          className="w-[1px] h-[3rem] bg-black"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.75,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        ></motion.div>

        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.75,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <div className="bg-[#D12727] w-[2.5rem] h-[2.5rem] md:w-[3.5rem] md:h-[3rem] flex justify-center items-center rounded-lg text-white ">
            <h1 className="text-[.9rem] md:text-[1.2rem]"> 70k </h1>
          </div>
          <h1 className="text-[.7rem]">
            Lines of <br /> code written
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
