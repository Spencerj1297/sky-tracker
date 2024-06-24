import { IconBrandFacebook } from "@tabler/icons-react";
import navyLogo from "../assets/navyLogo.png";

export const Footer = () => {
  return (
    <>
<div className="relative border-t-2 border-white h-64 bg-gradient-custom text-white flex justify-center items-center">
  <div className="z-10">
    <ul className="flex gap-8 text-2xl">
      <li>Home</li>
      <li>About</li>
      <li>Departments</li>
      <li>Contact</li>
      <li>
        <IconBrandFacebook />
      </li>
    </ul>
  </div>
  <div className="absolute inset-0 flex justify-center items-center z-0 opacity-50">
    <img src={navyLogo} alt="US Navy Logo" className="h-32" />
  </div>
</div>

    </>
  );
};
