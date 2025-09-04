import React, { useState } from "react";
import { projects } from "../../constants";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="work" className="py-24 font-sans relative w-full mt-2">
      {/* Section Heading */}
      <div className="text-center mb-16 px-4">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="h-1 w-32 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold max-w-5xl mx-auto">
          A curated portfolio of impactful projects that exemplify my technical
          expertise, innovative problem-solving, and hands-on experience across
          diverse technologies.
        </p>
      </div>

      {/* Project Grid with controlled width */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="bg-gray-900/90 border border-gray-700 rounded-2xl shadow-xl 
                       overflow-hidden cursor-pointer hover:shadow-purple-600/50 
                       hover:-translate-y-2 transition-transform duration-300 p-4"
          >
            {/* Image fills card */}
            <div className="w-full h-67 md:h-80">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover overflow-hidden rounded-xl"
              />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 line-clamp-3 text-sm">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-purple-400 
                               text-xs font-semibold rounded-full px-3 py-1"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-85 p-4">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[95%] max-w-4xl overflow-hidden relative max-h-[90vh]">
            {/* Close */}
            <div className="flex justify-end p-4">
              <button
                onClick={handleCloseModal}
                className="text-purple-500 text-3xl font-bold hover:text-white"
              >
                &times;
              </button>
            </div>

            <div className="flex flex-col overflow-y-auto max-h-[80vh]">
              {/* Image */}
              <div className="w-full h-74 md:h-96 flex justify-center px-4">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover rounded-xl shadow-2xl"
                />
              </div>

              {/* Content */}
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-sm">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-[#251f38] text-purple-400 text-xs font-semibold rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-4">
                  <a
                    href="#"
                    rel="noopener noreferer"
                    onClick={(e) => e.preventDefault()}
                    className="w-1/2 bg-gray-800 hover:bg-white hover:text-black 
                               text-gray-400 px-2 py-2 rounded-xl text-center font-semibold"
                  >
                    <abbr
                      title="Code is not published yet"
                      className="no-underline cursor-help text-sm md:text-lg"
                    >
                      View Code
                    </abbr>
                  </a>
                  <a
                    href="#"
                    rel="noopener noreferer"
                    onClick={(e) => e.preventDefault()}
                    className="w-1/2 bg-gray-800 hover:bg-white hover:text-black 
                               text-gray-400 px-2 py-2 rounded-xl text-center font-semibold"
                  >
                    <abbr
                      title="Project is not hosted"
                      className="no-underline cursor-help text-sm md:text-lg"
                    >
                      View Site
                    </abbr>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Work;
