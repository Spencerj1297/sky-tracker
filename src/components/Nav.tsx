import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { IconMenu, IconArrowRight } from "@tabler/icons-react";

const Nav = () => {
  return (
    <div className="flex absolute justify-between top-0 left-0 w-full border-b border-white pr-8 z-50 text-white px-8 min-h-20">
      <div className="w-1/3 flex justify-start items-center ">
        <button className="flex justify-center items-center gap-4 border border-white px-4 py-2 text-xl hover:bg-gradient-custom font-bold">
          SIGN UP <span className="hover:translate-x-2 transition-transform duration-300 transform-gpu"><IconArrowRight /></span>
        </button>
      </div>
      <div className="w-1/3 flex justify-center items-center font-bold">
        <p className="-ml-10 montserrat font-bold text-2xl">HSM-75</p>
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
