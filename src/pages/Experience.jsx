import React from "react";

const experienceData = [
  {
    title: "Front-End Developer (ReactJs and Angular)",
    company: "Big Solutions Private Limited",
    period: "Contract / Probation",
    description: [
      "Developed responsive, user-friendly interfaces using React.js, Angular, TypeScript, and JavaScript.",
      "Collaborated with backend teams to integrate REST APIs and improve overall application performance.",
      "Implemented reusable UI components, state management (Redux, Context API, Angular Signals/NGRX), and optimized code for scalability.",
      "Worked with Tailwind CSS, Material UI, and component-driven development to maintain clean and consistent UI.",
      "Participated in daily standups, code reviews, and Agile development processes.",
      "Resolved UI bugs, improved load times, and ensured cross-browser/device compatibility.",
      "Contributed to deploying and testing features while meeting project deadlines.",
    ],
  },
  {
    title: "Hackathon Participant",
    company: "Inter-College Hackathon",
    period: "2023",
    description: [
      "Built an e-commerce web application under guidance from mentors.",
      "Achieved 1st Runner-Up position.",
      "Technologies: PHP, HTML, CSS, JavaScript, Laravel.",
    ],
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="text-white py-16 px-6 md:px-12 lg:px-20 max-w-6xl mx-auto"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
        Work Experience
      </h2>

      <div className="flex flex-col gap-10">
        {experienceData.map((exp, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-[#130428] via-[#38126d] to-[#190634] p-6 rounded-xl shadow-xl border-t-4 border-purple-600 hover:scale-[1.02] transition transform"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
              <h3 className="text-xl md:text-2xl font-semibold">{exp.title}</h3>
              <span className="text-purple-400 font-medium">{exp.company}</span>
            </div>
            <p className="italic opacity-80 mb-3">{exp.period}</p>

            <ul className="list-disc pl-5 space-y-1 opacity-90">
              {exp.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
