import { FC } from "react";

interface Props {
  title: string;
  picture: string;
  emblem: string;
  description: string;
}

const TeamPage: FC<Props> = ({ title, picture, emblem, description }) => {
  return (
    <>
      <section className="min-h-screen w-full center flex-col p-4 lg:p-32 gap-4">
        <div className="center flex-col w-full">
          <div className="flex flex-col your-element">
            <img
              src={picture}
              className="opacity-90 z-0 max-h-screen min-h-96 object-cover"
            />

          </div>
          <div className="text-midBlue">
              <h1 className="w-full text-4xl lg:text-9xl black-ops-one-regular z-10">
                {title}
              </h1>
            </div>
        </div>
      </section>
      <div className="center flex-col lg:flex-row gap-8 text-center text-white text-2xl p-4 lg:p-32 border-t">
        <div className="w-full lg:w-1/2">
          <img src={emblem} className="lg:h-64 opacity-50 z-0" />
        </div>
        <div className="w-full lg:w-1/2 text-left">
          <p>{description}</p>
        </div>
      </div>
    </>
  );
};

export default TeamPage;
