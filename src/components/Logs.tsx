import { IconArrowBigLeft } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Dispatch, FC, SetStateAction } from "react";

const Logs: FC = () => {
  const fligts = Array.from({ length: 30 }, (_, i) => i + 1);

  const variants = {
    open: {
      opacity: 1,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 100,
      },
    },
    closed: {
      opacity: 0,
      transition: {
        duration: 2,
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const getFlights = () => {
    return fligts.map((flight, ind) => (
      <div
        key={ind}
        className="min-h-32 shadow-outline text-black hover:opacity-80 hover:cursor-pointer bg-white"
      >
        {flight}
      </div>
    ));
  };

  return (
    <motion.div
      key="logForm"
      //   animate={open ? "open" : "closed"}
      variants={variants}
      className="p-44 "
    >
      <div className="flex flex-col gap-8 max-h-[600px] overflow-auto p-8 bg-white bg-opacity-50">
        {getFlights()}
      </div>
    </motion.div>
  );
};

export default Logs;
