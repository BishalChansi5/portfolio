import React from "react";

const Bottom = () => {
  return (
    <section className="w-full mt-8">
      <div className="text-center">
        <p className="mb-2 text-2xl md:text-3xl font-semibold">
          I am looking to contribute to a{" "}
          <span className="text-purple-500 font-bold">
            cross-functional team
          </span>{" "}
          focused on building efficient, scalable, and reliable digital
          products.
        </p>

        <p className="opacity-90 text-lg md:text-xl">
          Skilled in frontend development (React.js, Angular, TypeScript), API
          integration, and state management, I am currently expanding my backend
          skills (Express.js, MySQL, MongoDB) to become a full-stack developer.
          My goal is to deliver practical solutions that optimize workflows and
          improve application performance.
        </p>

        {/* Decorative Center Graphic */}
        <div className="mt-12 flex justify-center">
          <img
            src="/images/Group 1899.png"
            className="w-40 opacity-80 animate-pulse"
            alt=""
          />
        </div>

        {/* Ellipse Decorative Section */}
        <div className="relative flex justify-center mt-16">
          <img
            src="/images/Group 1897.png"
            alt=""
            className="relative z-10 w-52 md:w-72"
          />

          {/* Rings behind center */}
          <span className="absolute inset-0 flex justify-center">
            <img
              src="/images/Ellipse 21.png"
              className="absolute w-[350px] opacity-30"
              alt=""
            />
            <img
              src="/images/Ellipse 22.png"
              className="absolute w-[300px] opacity-30"
              alt=""
            />
            <img
              src="/images/Ellipse 23.png"
              className="absolute w-[250px] opacity-30"
              alt=""
            />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Bottom;
