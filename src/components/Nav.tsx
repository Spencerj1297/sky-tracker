import { Link } from "react-router-dom";
import navyLogo from "../assets/navyLogo.png";
import { IconArrowRight, IconX } from "@tabler/icons-react";
import { useState } from "react";
import { NavDropDown } from "./NavDropDown";

const Nav = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);

  console.log("drop down", dropDown);
  return (
    <>
      <div className="flex absolute justify-between top-0 left-0 w-full pr-8 z-50 text-white px-8 min-h-20 bg-gradient-custom">
        <div className="w-1/2 lg:w-1/3 flex justify-start items-center ">
          <button className="center gap-4 border border-white px-4 py-2 text-xl hover:bg-black hover:text-gold font-bold hover:border-gold group">
            SIGN UP{" "}
            <span className="group-hover:translate-x-2 transition-transform duration-300 transform-gpu">
              <IconArrowRight />
            </span>
          </button>
        </div>
        <div className="hidden lg:center w-1/3 font-bold">
          <img src={navyLogo} className="h-20" />
        </div>
        <div className="w-1/2 lg:w-1/3 flex justify-end items-center font-bold">
          {dropDown ? (
            <button
              className="text-gold"
              onClick={() => setDropDown(!dropDown)}
            >
              <IconX />
            </button>
          ) : (
            <div
              onClick={() => setDropDown(!dropDown)}
              className="flex flex-col h-3 w-6 border-y-2 hover:w-8 transition-all duration-400 ease-in-out hover:cursor-pointer hover:border-gold"
            ></div>
          )}
        </div>
      </div>
      {dropDown && <NavDropDown isOpen={dropDown} setIsOpen={setDropDown} />}
    </>
  );
};

export default Nav;
