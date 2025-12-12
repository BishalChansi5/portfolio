import React, { useState } from "react";
import Modal from "./Modal";
import { projects } from "./WorkExperirence";

const Projects = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [project, setProject] = useState({});
  return (
    <>
      <section>
        <h2 className="text-3xl font-bold mt-16 text-center uppercase">
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 px-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="flex gap-6 items-start p-6 rounded-xl border-t-4 border-purple-600 shadow-xl 
            bg-linear-to-r from-[#130428] via-[#38126d] to-[#190634]"
            >
              <div>
                <img
                  src={project.img}
                  alt="img"
                  className="w-40 h-40 object-contain"
                />
              </div>

              <div className="text-white">
                <p className="text-lg font-semibold">{project.title}</p>
                <p className="opacity-90 text-xs">{project.same_description}</p>

                <button
                  onClick={() => {
                    setIsOpen(true);
                    setProject(project);
                  }}
                  className=" cursor-pointer mt-4 px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-900 transition"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
          <Modal
            title={project.title}
            isOpen={isOpen}
            onClose={() => {
              setIsOpen(false);
              setProject({});
            }}
          >
            <p>{project.description}</p>
            {project.link && (
              <button className=" cursor-pointer mt-4 px-4 py-2 rounded-lg bg-purple-700 hover:bg-purple-900 transition">
                <a href={project.link} target="_blank">
                  Visit
                </a>
              </button>
            )}
          </Modal>
        </div>
      </section>
    </>
  );
};

export default Projects;
