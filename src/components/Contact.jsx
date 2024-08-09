import React from "react";
import { motion } from "framer-motion";

import gmail from "../assets/gmail.png";
import fb from "../assets/fb.png";
import github from "../assets/github.png";

const Contact = ({ contactRef }) => {
  return (
    <div
      className="w-full px-10 md:w-[65%] lg:w-[70%] py-[5rem]"
      ref={contactRef}
    >
      <h1 className="text-[#D12727] font-black text-[2rem] mb-5">Contact Me</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src={gmail} alt="gmail" className="w-[3rem] md:w-[5rem]" />
          <div>
            <span className="text-[.7rem] md:text-auto">Send me an email:</span>
            <h1 className="text-[#D12727] text-[.85rem] md:text-[1.2rem] font-black underline">
              tsuplico772@gmail.com
            </h1>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src={github} alt="github" className="w-[3rem] md:w-[5rem]" />
          <div>
            <span className="text-[.7rem] md:text-auto">
              My Github account:
            </span>
            <a href="https://github.com/tansuplico" target="_blank">
              <h1 className="text-[#D12727] text-[.85rem] md:text-[1.2rem] font-black underline">
                Tristan Suplico
              </h1>
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex items-center gap-5"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <img src={fb} alt="fb" className="w-[3rem] md:w-[5rem]" />
          <div>
            <span className="text-[.7rem] md:text-auto">
              My Facebook account:
            </span>
            <a
              href="https://www.facebook.com/tristan.bautistasuplico/"
              target="_blank"
            >
              <h1 className="text-[#D12727] text-[.85rem] md:text-[1.2rem] font-black underline">
                Tristan Suplico
              </h1>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
