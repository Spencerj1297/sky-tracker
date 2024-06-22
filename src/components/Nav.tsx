import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  return (
    <div className="flex fixed justify-between top-0 left-0 w-full bg-white pr-8">
      <div className="flex justify-start items-center ">
        <Link to="/log-book">
          <img src={logo} alt="Sky Tracker logo" className="h-16 " />
        </Link>
        <p className="font-bold -ml-8">SKY TRACKER</p>
      </div>
      <div className="flex justify-end items-center font-bold gap-8">
        <Link to="/logs">
          <button>Logs</button>
        </Link>
        <Link to="/log-book">
          <button>Log Book</button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
