import React from "react";
import { experiences } from "../../constants";
import Tilt from "react-parallax-tilt";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 px-[6vw] md:px-[5vw] lg:px-[6vw] font-sans bg-skills-gradient clip-path-custom-2 mt-4"
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
          EXPERIENCE
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full"></div>
        <p className="text-gray-400 mt-3 text-base sm:text-lg font-medium">
          A journey through my professional growth, highlighting impactful
          contributions, innovative projects, and technical expertise.
        </p>
      </div>

      {/* Experience Cards Grid */}
      <div className="grid lg:grid-cols-2 gap-8">
        {experiences.map((exp) => (
          <Tilt
            key={exp.id}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            scale={1.05}
          >
            <div className="p-6 md:p-8 rounded-2xl border border-gray-700 bg-gray-900/80 backdrop-blur-lg 
                            shadow-[0_0_25px_4px_rgba(130,69,236,0.25)] hover:shadow-[0_0_35px_6px_rgba(130,69,236,0.4)] 
                            transition-all duration-300 w-full h-full flex flex-col">
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-16 h-16 bg-white rounded-lg overflow-hidden shadow-md">
                  <img
                    className="w-full h-full object-cover"
                    src={exp.img}
                    alt={exp.company}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <h4 className="text-sm text-gray-300">{exp.company}</h4>
                  <p className="text-xs text-gray-500 mt-1">{exp.date}</p>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-400 mb-4 leading-snug text-sm flex-grow">
                {exp.desc}
              </p>

              {/* Skills */}
              <div className="mt-auto">
                <h5 className="font-semibold text-white mb-2 text-sm">Skills</h5>
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-[#8245ec]/80 text-gray-100 px-3 py-1 text-xs rounded-lg border border-gray-600 shadow hover:shadow-[#8245ec]/50 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Experience;
