import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { IconMenu, IconArrowRight } from "@tabler/icons-react";

const Nav = () => {
  return (
    <div className="flex absolute justify-between top-0 left-0 w-full border-b border-white pr-8 z-50 text-white px-8">
      <div className="w-1/3 flex justify-start items-center ">
        <button className="flex justify-center items-center gap-4 border border-white px-4 py-2 text-xl hover:bg-gradient-custom ">
          SIGN UP <span className="hover:translate-x-2 transition-transform duration-300 transform-gpu"><IconArrowRight /></span>
        </button>
      </div>
      <div className="w-1/3 flex justify-center items-center font-bold">
        <Link to="/">
          <img src={logo} alt="Sky Tracker logo" className="h-20 hover:-rotate-90 transition-transform duration-300 transform-gpu" />
        </Link>
        <p className="-ml-10 montserrat font-thin text-2xl">SKY TRACKER</p>
      </div>
      <div className="w-1/3 flex justify-end items-center font-bold ">
        <button className="hover:rotate-90 transition-transform duration-300 transform-gpu">
          <IconMenu />
        </button>
      </div>
    </div>
  );
};

export default Nav;
