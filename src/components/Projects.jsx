import React, { useState } from "react";
import { motion } from "framer-motion";
import xtrack from "../assets/xtrack-desktop.svg";
import dailydo from "../assets/dailydo-desktop.svg";
import furnistore from "../assets/furnistore.png";
import vacay from "../assets/vacay.png";
import starbucks from "../assets/starbucks.svg";
import css from "../assets/css-logo.svg";
import js from "../assets/js-logo.svg";
import ts from "../assets/ts-logo.svg";
import tw from "../assets/tw-logo.svg";
import node from "../assets/node-logo.svg";
import query from "../assets/query-logo.svg";
import xp from "../assets/xp-logo.svg";
import fgma from "../assets/fgma-logo.svg";
import mdb from "../assets/mdb-logo.svg";
import fm from "../assets/fm-logo.svg";
import zs from "../assets/zs-logo.svg";
import rdx from "../assets/rdx-logo.svg";
import react from "../assets/react-logo.svg";
import link from "../assets/link.png";

const Projects = ({ projectsRef }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="w-full px-10 md:w-[70%] py-[5rem]" ref={projectsRef}>
      <h1 className="text-[#D12727] font-black text-[2rem] mb-5">Projects</h1>

      <div className="flex flex-col gap-10">
        <div className="bg-[#D12727] p-10 text-white rounded-lg flex flex-col lg:flex-row gap-10">
          <motion.div
            className="lg:w-[250%] mlg:w-[200%] xl:w-[150%] flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img src={xtrack} alt="desktop-icon" />
          </motion.div>
          <div className="flex flex-col justify-between lg:p-5 gap-5 lg:gap-0">
            <div>
              <div className="mb-2 flex justify-between items-center">
                <h1 className="font-bold text-[1.2rem]"> XTrack </h1>
                <a href="https://xtrack-main.onrender.com" target="_blank">
                  <img
                    src={link}
                    alt="link"
                    className="w-5 lg:w-[30px] cursor-pointer"
                  />
                </a>
              </div>
              <p className="text-[.8rem] lg:text-[1.1rem] lg:py-3">
                XTrack is a user-friendly budget tracker web application that
                helps individuals manage their personal finances. It allows
                users to record income and expenses, categorize transactions,
                and monitor spending habits.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-[1.2rem] mb-5"> Tech Stack </h1>
              <div className="w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <img src={ts} alt="ts" className="w-[50px]" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <img src={tw} alt="tw" className="w-[50px]" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <img src={react} alt="react" className="w-[50px]" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <img src={query} alt="zs" className="w-[50px]" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <img src={mdb} alt="mdb" className="w-[50px]" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <img src={fgma} alt="fgma" className="w-[50px]" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <img src={node} alt="node" className="w-[50px]" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <img src={xp} alt="xp" className="w-[50px]" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-[#D12727] p-10 text-white rounded-lg flex flex-col lg:flex-row gap-10">
          <motion.div
            className="lg:w-[250%] mlg:w-[200%] xl:w-[150%] flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <img src={dailydo} alt="desktop-icon" />
          </motion.div>
          <div className="flex flex-col justify-between lg:p-5 gap-5 lg:gap-0">
            <div>
              <div className="mb-2 flex justify-between items-center">
                <h1 className="font-bold text-[1.2rem]"> DailyDo </h1>
                <a href="https://dailydo-0bc4.onrender.com" target="_blank">
                  <img
                    src={link}
                    alt="link"
                    className="w-5 lg:w-[30px] cursor-pointer"
                  />
                </a>
              </div>
              <p className="text-[.8rem] lg:text-[1.1rem] lg:py-3">
                DailyDo is a straightforward note-taking application that offers
                a range of tools, including a Pomodoro timer and a task manager.
                It helps users organize their thoughts, manage tasks, and boost
                productivity.
              </p>
            </div>
            <div>
              <h1 className="font-bold text-[1.2rem] mb-5"> Tech Stack </h1>
              <div className="w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <img src={js} alt="js" className="w-[50px]" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <img src={react} alt="react" className="w-[50px]" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.3,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <img src={zs} alt="zs" className="w-[50px]" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.4,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <img src={mdb} alt="mdb" className="w-[50px]" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <img src={node} alt="node" className="w-[50px]" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    duration: 0.8,
                    delay: 0.6,
                    ease: [0, 0.71, 0.2, 1.01],
                  }}
                >
                  <img src={xp} alt="xp" className="w-[50px]" />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        {showMore && (
          <>
            <div className="bg-[#D12727] p-10 text-white rounded-lg flex flex-col lg:flex-row gap-10">
              <motion.div
                className="lg:w-[350%] mlg:w-[300%] xl:w-[240%] flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <img src={furnistore} alt="desktop-icon" />
              </motion.div>
              <div className="flex flex-col justify-between lg:p-5 gap-5 lg:gap-0">
                <div>
                  <div className="mb-2 flex justify-between items-center">
                    <h1 className="font-bold text-[1.2rem]"> Furnistore </h1>
                    <a
                      href="https://suplico-furnistore-site.netlify.app/collections"
                      target="_blank"
                    >
                      <img
                        src={link}
                        alt="link"
                        className="w-5 lg:w-[30px] cursor-pointer"
                      />
                    </a>
                  </div>
                  <p className="text-[.8rem] lg:text-[1.1rem] lg:py-3">
                    Furnistore is a simple front-end application showcasing a
                    virtual furniture store. It provides a clean and visually
                    appealing interface where users can browse various furniture
                    products. Designed for a seamless shopping experience,
                    Furnistore highlights product details and visuals to help
                    users make informed purchasing decisions.
                  </p>
                </div>
                <div>
                  <h1 className="font-bold text-[1.2rem] mb-5"> Tech Stack </h1>

                  <div className="w-full grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-5">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <img src={js} alt="js" className="w-[50px]" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <img src={react} alt="react" className="w-[50px]" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <img src={rdx} alt="rdx" className="w-[50px]" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.4,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <img src={tw} alt="tw" className="w-[50px]" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.5,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <img src={fm} alt="fm" className="w-[50px]" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#D12727] p-10 text-white rounded-lg flex flex-col lg:flex-row gap-10">
              <motion.div
                className="lg:w-[350%] mlg:w-[300%] xl:w-[240%] flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <img src={starbucks} alt="desktop-icon" />
              </motion.div>
              <div className="flex flex-col justify-between lg:p-5 gap-5 lg:gap-0">
                <div>
                  <div className="mb-2 flex justify-between items-center">
                    <h1 className="font-bold text-[1.2rem]">Starbucks Clone</h1>
                    <a
                      href="https://suplicostarbucks-clone.netlify.app/"
                      target="_blank"
                    >
                      <img
                        src={link}
                        alt="link"
                        className="w-5 lg:w-[30px] cursor-pointer"
                      />
                    </a>
                  </div>
                  <p className="text-[.8rem] lg:text-[1.1rem] lg:py-3">
                    Starbucks Clone is a simple front-end application emulating
                    the Starbucks experience. It features a clean and visually
                    appealing interface where users can explore various menu
                    items. Designed for an intuitive browsing experience, the
                    Starbucks Clone highlights product details and visuals,
                    capturing the essence of the brand.
                  </p>
                </div>

                <div>
                  <h1 className="font-bold text-[1.2rem] mb-5"> Tech Stack </h1>
                  <div className="flex gap-5 md:gap-10">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <img src={js} alt="js" className="w-[50px]" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <img src={react} alt="react" className="w-[50px]" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <img src={css} alt="css" className="w-[50px]" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#D12727] p-10 text-white rounded-lg flex flex-col lg:flex-row gap-10">
              <motion.div
                className="lg:w-[310%] mlg:w-[270%] xl:w-[210%] flex justify-center items-center"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
              >
                <img src={vacay} alt="desktop-icon" />
              </motion.div>
              <div className="flex flex-col justify-between lg:p-5 gap-5 lg:gap-0">
                <div>
                  <div className="mb-2 flex justify-between items-center">
                    <h1 className="font-bold text-[1.2rem]"> Vacay </h1>
                    <a
                      href="https://official-vacay-tbs.netlify.app/"
                      target="_blank"
                    >
                      <img
                        src={link}
                        alt="link"
                        className="w-5 lg:w-[30px] cursor-pointer"
                      />
                    </a>
                  </div>
                  <p className="text-[.8rem] lg:text-[1.1rem] lg:py-3">
                    Vacay is a user-friendly front-end application for hotel
                    booking. It offers a streamlined interface for browsing and
                    selecting hotels, allowing users to easily view details,
                    prices, and availability. Designed for convenience, Vacay
                    simplifies the process of finding and booking the perfect
                    accommodation for any trip.
                  </p>
                </div>

                <div>
                  <h1 className="font-bold text-[1.2rem] mb-5"> Tech Stack </h1>
                  <div className="flex gap-5 md:gap-10">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.1,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <img src={js} alt="js" className="w-[50px]" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <img src={react} alt="react" className="w-[50px]" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.8,
                        delay: 0.3,
                        ease: [0, 0.71, 0.2, 1.01],
                      }}
                    >
                      <img src={tw} alt="tw" className="w-[50px]" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>

      <div className="w-full flex justify-center items-center mt-5">
        <button
          className="w-[80%] sm:w-[45%] lg:w-[25%] p-4 bg-[#D12727] text-white text-[1.2rem] font-bold rounded-full cursor-pointer hover:bg-[#FF0800] transition-all"
          onClick={() => setShowMore((val) => !val)}
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default Projects;
