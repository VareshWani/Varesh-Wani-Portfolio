import React from "react";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-14 px-[6vw] md:px-[8vw] lg:px-[10vw] font-sans bg-skills-gradient clip-path-custom mt-6"
    >
      {/* Section Heading */}
      <div className="text-center mb-12 max-w-3xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-wide">
          SKILLS
        </h2>
        <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3 rounded-full" />
        <p className="text-gray-400 mt-3 text-base sm:text-lg font-medium">
          A distinguished blend of technical dexterity and applied knowledge,
          honed through comprehensive projects and experiential learning.
        </p>
      </div>

      {/* Skills Categories */}
      <div className="flex flex-wrap gap-6 justify-center max-w-6xl mx-auto">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-gray-900/80 backdrop-blur-lg px-6 py-6 rounded-2xl border border-gray-700 
                       shadow-[0_0_15px_1px_rgba(130,69,236,0.25)] w-full sm:w-[46%] 
                       hover:shadow-[0_0_25px_3px_rgba(130,69,236,0.35)] transition-shadow"
          >
            {/* Category Title */}
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-5 text-center tracking-wide">
              {category.title}
            </h3>

            {/* Skills */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center gap-2 border border-gray-700 
                             rounded-xl py-3 px-2 bg-gray-800/40 hover:bg-gray-800/70 
                             hover:border-[#8245ec] transition-all shadow-sm hover:shadow-[#8245ec]/40"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-8 h-8 sm:w-10 sm:h-10"
                  />
                  <span className="text-sm sm:text-base text-gray-300 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
