import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import helo1 from "../assets/helo1.jpg";
import helo2 from "../assets/helo2.jpg";
import helo3 from "../assets/helo3.webp";
import helo4 from "../assets/helo4.webp";
import logo from "../assets/wolfPack.png";
import pilots from "../assets/pilots.jpg"
import maintenance from "../assets/maintenance.jpg"
import aircrew from "../assets/aircrew.jpg"
import { useScroll, useTransform } from "framer-motion";
import { motion } from "framer-motion";


type Pictures = {
  title: string;
  photo: JSX.Element | string;
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

  const team: Pictures[] = [
    { title: "Pilots", photo: `${pilots}` },
    { title: "Aircrew", photo: `${aircrew}` },
    { title: "Maintenance", photo: `${maintenance}` },
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
    return (
      team.map((who, ind) => (
        <div 
        key={ind}
        className="min-h-96 bg-black shadow-outline transform transition-transform duration-300 hover:scale-105 hover:cursor-pointer ">
          <p className="text-white text-2xl text-center black-ops-one-regular">{who.title}</p>
          <img src={`${who.photo}`} className="h-[500px] w-[400px] object-cover"/>
        </div>
      ))
    )
  }

  return (
    <section className="">
      <section className="min-h-screen w-full p-16 flex justify-center items-center">
        <div className="min-h-screen w-full flex flex-col gap-16 justify-start items-center ">
          <motion.div style={{ y }}>
            <img src={logo} className="max-h-[600px] opacity-20 z-0" />
          </motion.div>
          <h1 className="-mt-96 flex justify-center items-center text-9xl text-white font-bold w-full black-ops-one-regular text-center z-10">
            HSM-75 <br /> WOLF PACK
          </h1>
        </div>
      </section>

      <section className="flex flex-col w-full">
        <h1 className="text-7xl text-white font-bold black-ops-one-regular text-center -mb-96 z-10">
          The strength of the Pack is the Wolf, and the strength of the Wolf is
          the Pack.
        </h1>
        <motion.div
          style={{ y }}
          className="flex justiy-center items-center opacity-20 z-0"
        >
          {handleSkills()}
        </motion.div>
      </section>



      <section className="flex flex-col gap-8 justify-start items-center h-screen w-full">
        <h1 className="text-7xl text-white font-bold black-ops-one-regular text-center z-10">
          Meet the Team
        </h1>
        <motion.div
          className="w-full flex gap-8 justify-center items-center z-0"
        >
          {getTeam()}
        </motion.div>
      </section>
    </section>
  );
};

export default Home;
