import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-8 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-center md:text-left opacity-80">
          &copy; {new Date().getFullYear()} Bishal Chansi. All rights reserved.
        </p>

        <div className="flex gap-6 text-2xl justify-center md:justify-end">
          <a
            href="https://github.com/BishalChansi5"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://np.linkedin.com/in/bishal-chansi-777a30309"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-purple-500 transition"
          >
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-purple-500 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
