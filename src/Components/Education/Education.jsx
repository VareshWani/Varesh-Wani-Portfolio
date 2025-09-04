import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 px-[6vw] md:px-[10vw] font-sans bg-skills-gradient clip-path-custom-3 relative"
    >
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="h-1 w-32 bg-purple-500 mx-auto mt-3"></div>
        <p className="text-gray-400 mt-3 text-lg font-semibold">
          I have built a strong academic foundation in technology and
          problem-solving through my educational journey.
        </p>
      </div>

      {/* Stacked Cards */}
      <div className="space-y-8">
        {education.map((edu) => (
          <div
            key={edu.id}
            className="w-full p-4 sm:p-6 rounded-xl border border-gray-700 
                       bg-gray-900/70 backdrop-blur-md 
                       shadow-[0_0_18px_1px_rgba(130,69,236,0.2)]
                       hover:scale-[1.01] hover:shadow-[0_0_25px_2px_rgba(130,69,236,0.3)]
                       transition-transform duration-300"
          >
            {/* Header with Logo + Info */}
            <div className="flex items-center space-x-3 sm:space-x-5">
              {/* Logo Box */}
              <div className="w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full overflow-hidden shadow-md flex-shrink-0">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="h-full w-full object-contain p-1"
                />
              </div>

              <div>
                <h3 className="text-base sm:text-xl font-semibold text-white">
                  {edu.degree}
                </h3>
                <h4 className="text-xs sm:text-sm text-gray-300">
                  {edu.school}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
              </div>
            </div>

            {/* Score */}
            <p className="text-white mt-2 font-bold text-xs sm:text-sm">
              Score: {edu.grade}
            </p>

            {/* Description */}
            <p className="mt-2 text-gray-400 leading-relaxed text-xs sm:text-sm">
              {edu.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
