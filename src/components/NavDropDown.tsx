import { motion } from "framer-motion";
import { Dispatch, FC, SetStateAction } from "react";
import { Link } from "react-router-dom";

interface Props {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export const NavDropDown: FC<Props> = ({ isOpen, setIsOpen }) => {
  const links = [
    { title: "Home", link: "/" },
    { title: "About", link: "/" },
    { title: "Departments", link: "/" },
    { title: "Contact", link: "/" },
  ];

  const variants = {
    open: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.2,
        delay: 0.15,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
    closed: {
      opacity: 0,
      scale: 0.5,
      transition: {
        duration: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };

  return (
    <motion.div
      initial="closed"
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      className="h-screen w-screen md:h-44 md:w-48 absolute top-20 right-0 z-30 bg-navyBlue shadow-outline p-4 py-8 md:py-0 text-gold md:text-white"
    >
      <div>
        <ul className="center flex-col gap-12 md:gap-4 font-bold text-5xl md:text-lg md:justify-center md:items-start">
          {links.map((link, ind) => (
            <li key={ind}>
              <Link to={link.link}>
                <button
                onClick={() => setIsOpen(false)}
                >{link.title}</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};
