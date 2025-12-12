import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="text-white py-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
        About Me
      </h2>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/images/profile_1.jpg"
            alt="Profile"
            className="h-48 w-48 md:h-56 md:w-56 object-cover rounded-full border-4 border-white shadow-xl hover:scale-105 transition"
          />
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left space-y-4">
          <p className="opacity-90">
            Hi, I'm <span className="font-semibold">Bishal Chansi</span>, a
            Frontend Developer at <strong>The Big Solutions</strong>.
          </p>

          <p>
            I specialize in{" "}
            <strong>React, Angular, and UI/UX development</strong>.
          </p>

          <p className="opacity-90">
            I’m also developing my backend skills, currently learning:
          </p>

          <ul className="list-disc pl-5 opacity-90">
            <li>Express.js</li>
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>

          <p className="opacity-90">
            I enjoy building clean, fast, and user-friendly interfaces — turning
            ideas into beautiful digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
