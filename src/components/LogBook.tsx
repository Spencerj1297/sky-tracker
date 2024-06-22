import { IconPlus, IconSearch } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import AddFlight from "./AddFlight";
import Logs from "./Logs";
import { Link } from "react-router-dom";

const LogBook = () => {
  const [showForm, setShowForm] = useState(false);
  const [showLogs, setShowLogs] = useState(false);

  const handleAddFlight = () => {
    setShowForm(true);
  };

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
    <>
      <motion.section className="flex justify-center items-center min-h-screen logbook-container z-10">
        <AnimatePresence>
          {!showForm && (
            <motion.div
              key="logBook"
              animate={showForm ? "closed" : "open"}
              variants={variants}
              className="flex"
            >
              <div className="bg-logBlue h-[600px] w-8 rounded-l-lg border border-2 border-gold border-r-0 shadow-outline"></div>
              <div className="flex gap-8 flex-col bg-logBlue h-[600px] max-w-96 rounded-r-lg px-10 py-32 shadow-outline border border-2 border-gold">
                <h1 className="w-full text-4xl font-bold text-gold text-center">
                  AVIATOR FLIGHT <br />
                  LOG BOOK
                </h1>
                <div className="w-full flex justify-center items-center"></div>
                <p className="w-full text-4xl font-bold text-gold text-center">
                  Future Pilot Name
                </p>
                <div className="flex gap-8 flex-col justify-center items-center">
                  <button
                    onClick={handleAddFlight}
                    className="border border-gold border-2 text-gold px-8 py-2 flex gap-2 rounded-md hover:bg-gold hover:text-logBlue font-bold"
                  >
                    <IconPlus />
                    Add Flight
                  </button>
                  <Link to="/logs">
                    <button
                      onClick={() => setShowLogs(true)}
                      className="border border-gold border-2 text-gold px-8 py-2 flex gap-2 rounded-md hover:bg-gold hover:text-logBlue font-bold"
                    >
                      <IconSearch />
                      See Logs
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.section>
      <AnimatePresence>
        {showForm && <AddFlight setOpen={setShowForm} open={showForm} />}
      </AnimatePresence>
    </>
  );
};

export default LogBook;
