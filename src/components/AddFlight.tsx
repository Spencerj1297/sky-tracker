import { IconArrowBigLeft } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Dispatch, FC, SetStateAction } from "react";


interface Props {
    setOpen:  Dispatch<SetStateAction<boolean>>,
    open: boolean
}
const AddFlight: FC<Props> = ({setOpen, open}) => {
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

  return (
    <motion.form
      key="logForm"
      animate={open ? "open" : "closed"}
      variants={variants}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="w-full max-w-lg bg-white shadow-outline rounded-lg px-8 pt-6 pb-8 mb-4">
        <button
          onClick={() => setOpen(false)}
          className="w-full flex justify-start"
        >
          <IconArrowBigLeft />
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center">
          Pilot Logbook Entry
        </h2>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="flightNumber"
          >
            Flight Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="flightNumber"
            type="text"
            placeholder="Enter flight number"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="departure"
          >
            Departure Airport
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="departure"
            type="text"
            placeholder="Enter departure airport"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="arrival"
          >
            Arrival Airport
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="arrival"
            type="text"
            placeholder="Enter arrival airport"
          />
        </div>

        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="date"
          >
            Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="date"
            type="date"
          />
        </div>

        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Submit
          </button>
        </div>
      </div>
    </motion.form>
  );
};

export default AddFlight;
