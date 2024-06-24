import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import helo1 from "../../assets/helo1.jpg";
import helo2 from "../../assets/helo2.jpg";
import helo3 from "../../assets/helo3.webp";
import helo4 from "../../assets/helo4.webp";
import logo from "../../assets/wolfPack.png";
import pilots from "../../assets/pilots.jpg";
import maintenance from "../../assets/maintenance.jpg";
import aircrew from "../../assets/aircrew.jpg";
import fleet from "../../assets/fleet.png";
import fleetAir from "../../assets/fleetAir.png";
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Pictures = {
  title: string;
  photo: JSX.Element | string;
};

type Team = {
  title: string;
  photo: JSX.Element | string;
  link: string
};

const Home = () => {
  let { scrollYProgress } = useScroll();
  let y = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);

  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    wheelMinThreshold: 30,
    hasTrack: false,
    pauseOnHover: false,
    resetProgress: false,
    arrows: false,
    wheel: false,
    height: "45rem",
  };

  const pictures: Pictures[] = [
    { title: "Helo", photo: `${helo1}` },
    { title: "Helo", photo: `${helo2}` },
    { title: "Helo", photo: `${helo3}` },
    { title: "Helo", photo: `${helo4}` },
  ];

  const team: Team[] = [
    { title: "Pilots", photo: `${pilots}`, link:'/pilots' },
    { title: "Aircrew", photo: `${aircrew}`, link:'/aircrew'},
    { title: "Maintenance", photo: `${maintenance}`, link: '/maintenance' },
  ];

  const handleSkills = () => {
    return (
      <Splide
        className="w-full"
        options={options}
        aria-label="My Favorite Images"
      >
        {pictures.map((pic, index: number) => (
          <SplideSlide key={index}>
            <img className="oject-fill" src={`${pic.photo}`} alt={pic.title} />
          </SplideSlide>
        ))}
      </Splide>
    );
  };

  const getTeam = () => {
    return team.map((who, ind) => (
      <Link to={who.link}>
      <div
        key={ind}
        className="min-h-96 shadow-outline hover:shadow-white-outline transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer "
      >
        <img
          src={`${who.photo}`}
          className="h-[400px] w-[300px] lg:h-[500px] lg:w-[400px] object-cover z-0"
        />
        <div className="absolute bottom-0 left-4 bg-black bg-opacity-70 px-9 py-4">
          <p className="text-white text-2xl text-center black-ops-one-regular z-10 bg-opacity-50">
            {who.title}
          </p>
        </div>
      </div>
      </Link>
    ));
  };

  return (
    <section>
      <section className="min-h-screen w-full px-4 lg:px-16 center flex-col">
        <div className="min-h-screen w-full flex justify-start items-center ">
          <motion.div
            className="hidden lg:center w-1/4"
            style={{ y }}
          >
            <img src={fleet} className="max-h-[420px] opacity-20 z-0" />
          </motion.div>
          <motion.div
            className="w-full lg:w-2/4 center"
            style={{ y }}
          >
            <img src={logo} className="max-h-[600px] opacity-20 z-0" />
          </motion.div>
          <motion.div
            className="hidden lg:center w-1/4"
            style={{ y }}
          >
            <img src={fleetAir} className="max-h-[420px] opacity-20 z-0" />
          </motion.div>
        </div>
        <h1 className="-mt-96 mb-96 center text-7xl lg:text-9xl text-white font-bold w-full black-ops-one-regular text-center z-10">
          HSM-75 <br /> WOLF PACK
        </h1>
      </section>

      <section className="flex flex-col w-full">
        <h1 className="text-2xl lg:text-7xl text-white font-bold black-ops-one-regular text-center -mb-96 z-10 px-4">
          The strength of the Pack is the Wolf, and the strength of the Wolf is
          the Pack.
        </h1>
        <motion.div
          style={{ y }}
          className="flex justiy-center items-center opacity-80 lg:opacity-20 z-0"
        >
          {handleSkills()}
        </motion.div>
      </section>

      <section className="flex flex-col gap-8 justify-start items-center min-h-screen w-full px-4">
        <h1 className="text-6xl lg:text-7xl text-white font-bold black-ops-one-regular text-center z-10">
          Meet the Team
        </h1>
        <motion.div className="w-full center flex-col lg:flex-row gap-8 z-0 pb-8 lg:pb-0">
          {getTeam()}
        </motion.div>
      </section>
    </section>
  );
};

export default Home;
