import {
  BsLinkedin,
  BsGithub,
  BsWhatsapp,
  BsTwitter,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import React from "react";

const LeftSide = () => {
  return (
  <div className="w-full h-full flex flex-col items-center justify-end gap-4 mr-12
  text-texLight" >
    <div className="flex flex-col gap-4">
      <a href="https://www.linkedin.com/in/juan-gutierrez95/" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
        items-center justify-center hover:text-textGreen cursor-pointer
        hover:-translate-y-2 transition-all duration-300">
          <BsLinkedin/>
        </span>
      </a>
      <a href="https://www.linkedin.com/in/juan-gutierrez95/" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
        items-center justify-center hover:text-textGreen cursor-pointer
        hover:-translate-y-2 transition-all duration-300">
          <BsGithub/>
        </span>
      </a>
      <a href="https://www.linkedin.com/in/juan-gutierrez95/" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
        items-center justify-center hover:text-textGreen cursor-pointer
        hover:-translate-y-2 transition-all duration-300">
          <SiGmail/>
        </span>
      </a>
      <a href="https://www.linkedin.com/in/juan-gutierrez95/" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
        items-center justify-center hover:text-textGreen cursor-pointer
        hover:-translate-y-2 transition-all duration-300">
          <BsWhatsapp/>
        </span>
      </a>
      <a href="https://www.linkedin.com/in/juan-gutierrez95/" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
        items-center justify-center hover:text-textGreen cursor-pointer
        hover:-translate-y-2 transition-all duration-300">
          <BsTwitter/>
        </span>
      </a>
      <a href="https://www.linkedin.com/in/juan-gutierrez95/" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
        items-center justify-center hover:text-textGreen cursor-pointer
        hover:-translate-y-2 transition-all duration-300">
          <BsInstagram/>
        </span>
      </a>
      <a href="https://www.linkedin.com/in/juan-gutierrez95/" target="_blank">
        <span className="w-10 h-10 text-xl bg-hoverColor rounded-full inline-flex
        items-center justify-center hover:text-textGreen cursor-pointer
        hover:-translate-y-2 transition-all duration-300">
          <BsFacebook/>
        </span>
      </a>
    </div>
    <div className="w-[2px] h-16 bg-textDark">

    </div>
    </div>
  );
};

export default LeftSide;
