
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { logo } from "../../public/assets";

const Navbar = () => {
  return (
    <div className="w-full shadow-navbarShadow h-20 lg:h-[12vh] sticky top-0 z-50 bg-bodyColor px-4">
      <div className="max-w-container h-full mx-auto py-1 font-inter flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <Image className="w-16" src={logo} alt="logo" />
        </motion.div>
        <div className="hidden mdl:inline-flex items-center gap-7">
          <ul className="flex text-[16px] gap-7">
            <Link
              href="#home"
              className="flex items-center gap-1 font-medium text-textLight
            hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                Home
              </motion.li>
            </Link>
            <Link
              href="#about"
              className="flex items-center gap-1 font-medium text-textLight
            hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-textGreen"></span> About
              </motion.li>
            </Link>
            <Link
              href="#projects"
              className="flex items-center gap-1 font-medium text-textLight
            hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-textGreen"></span> Projects
              </motion.li>
            </Link>
            <Link
              href="#resume"
              className="flex items-center gap-1 font-medium text-textLight
            hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-textGreen"></span> Resume
              </motion.li>
            </Link>
            <Link
              href="#contact"
              className="flex items-center gap-1 font-medium text-textLight
            hover:text-textGreen cursor-pointer duration-300 nav-link"
            >
              <motion.li
                initial={{ y: -10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <span className="text-textGreen"></span> Contact
              </motion.li>
            </Link>
          </ul>
          
          
        </div>
        {/* Small Icon section */}
        <div className="w-6 h-5 flex flex-col justify-between items-center mdl:hidden text-4x1 text-textGreen cursor-pointer overflow-hidden group">
          <span className="w-full h-[2px] bg-textGreen inline-flex transform group-hover:translate-x-2
           transition-all ease-in-out duration-300" >
          </span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-0 group-hover:translate-x-0 transition-all ease-in-out duration-300" >
          </span>
          <span className="w-full h-[2px] bg-textGreen inline-flex transform translate-x-0 group-hover:translate-x-2 transition-all ease-in-out duration-300" >
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
