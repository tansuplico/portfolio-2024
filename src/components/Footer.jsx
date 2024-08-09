import React from "react";
import icon from "../assets/icon.png";

const Footer = ({ skillsRef, projectsRef, contactRef }) => {
  function showInView(ref) {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  return (
    <footer className="w-full px-10 md:w-[65%] py-[4rem] flex flex-col gap-10 border-t border border-t-slate-400">
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 md:gap-0">
        <div className="flex gap-2 md:gap-4 items-center">
          <img src={icon} alt="icon" className="w-10 h-10" />
          <h1 className="font-bold ">
            <span className="text-[#D12727] text-[1.2rem]">Tristan</span>.dev
          </h1>
        </div>

        <div>
          <ul className="text-[.85rem] md:text-auto flex items-center gap-[2rem] md:gap-[3rem] font-bold">
            <li
              className="text-[#D12727] hover:underline cursor-pointer transition-all"
              onClick={() => showInView(skillsRef)}
            >
              Skills
            </li>
            <li
              className="text-[#D12727] hover:underline cursor-pointer transition-all"
              onClick={() => showInView(projectsRef)}
            >
              Projects
            </li>
            <li
              className="text-[#D12727] hover:underline cursor-pointer transition-all"
              onClick={() => showInView(contactRef)}
            >
              Contact Me
            </li>
          </ul>
        </div>
      </div>

      <div className="w-full text-[.65rem] md:text-auto text-center">
        <h1> Tristan Suplico © 2024</h1>
      </div>
    </footer>
  );
};

export default Footer;
