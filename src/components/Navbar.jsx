import React, { useEffect, useState } from "react";
import menu from "../assets/menu.svg";
import x from "../assets/x.svg";
import skills from "../assets/skills.svg";
import projects from "../assets/projects.svg";
import contact from "../assets/contact.svg";

const Navbar = ({ skillsRef, projectsRef, contactRef }) => {
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    if (showNav) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showNav]);
  function showInView(ref) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return (
    <>
      <nav className="w-full py-[2rem] px-5 xmd:px-[10%] md:px-[10%] lg:px-[17%] flex justify-between items-center text-[1.3rem]">
        <h1 className="font-bold xmd:text-[1.3rem]">
          <span className="text-[#D12727]">Tristan</span>.dev
        </h1>

        <img
          src={menu}
          alt="menu"
          className="md:hidden w-8 h-8"
          onClick={() => setShowNav(true)}
        />

        <ul className="hidden md:flex items-center gap-[3rem] font-bold">
          <li
            className="hover:text-[#D12727] cursor-pointer transition-all"
            onClick={() => showInView(skillsRef)}
          >
            Skills
          </li>
          <li
            className="hover:text-[#D12727] cursor-pointer transition-all"
            onClick={() => showInView(projectsRef)}
          >
            Projects
          </li>
          <li
            className="hover:text-[#D12727] cursor-pointer transition-all"
            onClick={() => showInView(contactRef)}
          >
            Contact Me
          </li>
        </ul>
      </nav>

      <div
        className={`w-full h-full absolute bg-[#EDEEF0] ${
          showNav ? "top-0" : "top-[-50rem]"
        } py-[2.2rem] px-5 sm:px-8 xmd:px-[3.5rem] transition-all`}
      >
        <div className="w-full flex justify-between">
          <h1 className="font-bold xmd:text-[1.3rem] mb-[2rem]">
            <span className="text-[#D12727]">Tristan</span>.dev
          </h1>
          <img
            src={x}
            alt="x"
            className="w-8 h-8"
            onClick={() => setShowNav(false)}
          />
        </div>

        <ul className="flex flex-col gap-5">
          <li
            className="flex items-center gap-3"
            onClick={() => {
              setShowNav(false);
              showInView(skillsRef);
            }}
          >
            <img src={skills} alt="skills" className="w-8 h-8" />
            <h1 className="font-bold cursor-pointer"> Skills </h1>
          </li>
          <hr className="h-[1.5px] bg-slate-300" />
          <li
            className="flex items-center gap-3"
            onClick={() => {
              setShowNav(false);
              showInView(projectsRef);
            }}
          >
            <img src={projects} alt="projects" className="w-8 h-8" />
            <h1 className="font-bold cursor-pointer"> Projects </h1>
          </li>
          <hr className="h-[1.5px] bg-slate-300" />
          <li
            className="flex items-center gap-3"
            onClick={() => {
              setShowNav(false);
              showInView(contactRef);
            }}
          >
            <img src={contact} alt="contact" className="w-8 h-8" />
            <h1 className="font-bold cursor-pointer"> Contact Me </h1>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
