import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import helo1 from "../assets/helo1.jpg";
import helo2 from "../assets/helo2.jpg";
import helo3 from "../assets/helo3.webp";
import helo4 from "../assets/helo4.webp";


type Pictures = {
  title: string;
  photo: JSX.Element | string;
};

const Home = () => {
  const options = {
    type: "loop",
    gap: "1rem",
    autoplay: true,
    wheelMinThreshold: 30,
    pauseOnHover: false,
    resetProgress: false,
    arrows: false,
    wheel: true,
    height: "50rem",
  };

  const pictures: Pictures[] = [
    { title: "Helo", photo: `${helo1}` },
    { title: "Helo", photo: `${helo2}` },
    { title: "Helo", photo: `${helo3}` },
    { title: "Helo", photo: `${helo4}` },
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

  return (
    <>
      <section className="home-image h-screen -mt-32 w-full">
        <div className="min-h-screen flex justify-start items-center px-16">
          <h1 className="text-8xl text-white font">
            AVIATORS <br />
            BEST FRIEND
          </h1>
        </div>
      </section>
      <section className="flex h-screen w-full bg-white p-16">
        <div className="w-1/2">
          <video src="src\assets\windyVid.mp4" autoPlay loop muted className="w-full h-full object-cover">
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="flex justiy-center items-center w-1/2 p-8">
          <h1 className="text-8xl text-logBlue font">
            Quick <br />
            Access to <br />
            Windy.com
          </h1>
        </div>
      </section>
    </>
  );
};

export default Home;
