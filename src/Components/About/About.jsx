import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import Tilt from "react-parallax-tilt"
import ProfileImage from "../../assets/VareshCropped.png"

const About = () => {
  return (
    <section
      id='about'
      className='w-full py-16 px-[8vw] font-sans mt-10'
    >
      <div className='flex flex-col md:flex-row items-center justify-between gap-12 w-full'>

        {/* Left side - Image */}
        <div className='md:w-1/2 flex justify-center'>
          <Tilt
            className='w-60 h-60 sm:w-72 sm:h-72 md:w-96 md:h-96 lg:w-[25rem] lg:h-[25rem] rounded-full overflow-hidden border-2 border-purple-500 shadow-[0_0_25px_rgba(130,69,236,0.6)]'
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1200}
            scale={1.05}
            transitionSpeed={1000}
          >
            <img
              src={ProfileImage}
              alt="Varesh Wani"
              className='w-full h-full object-cover rounded-full'
            />
          </Tilt>
        </div>

        {/* Right side - Content */}
        <div className='md:w-1/2 text-center md:text-left'>

          {/* Greeting */}
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2'>
            Hi, I am
          </h1>

          <h2 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4'>
            Varesh M Wani
          </h2>

          {/* Skills with typing effect */}
          <h3 className='text-lg sm:text-xl md:text-2xl font-semibold mb-6'>
            <span className='text-gray-200'>I am a </span>
            <TypeAnimation
              sequence={[
                'FullStack Developer',
                2000,
                'MERN Stack Developer',
                2000,
                'Java Developer',
                2000,
                'Problem Solver',
                2000,
                'React Js Developer',
                2000
              ]}
              wrapper="span"
              speed={50}
              cursor={true}
              repeat={Infinity}
              className="text-purple-400"
            />
          </h3>

          {/* About Me Paragraph */}
          <p className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 leading-relaxed">
            I am a Passionate IT engineer skilled in Full-Stack Development (MERN), Java, and Database Management (SQL, MongoDB). Experienced with HTML, CSS, JavaScript, Express.js, React.js, and Tailwind CSS, and have built various projects. Enthusiastic about problem-solving, learning new technologies, and building scalable, user-friendly solutions.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-10 justify-center md:justify-start">
            {/* Download CV */}
            <a
              href="https://drive.google.com/file/d/10WebhdKau0Gy-PqaBjasLwR6TIswGV4L/view"
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 hover:scale-105 backdrop-blur-md bg-purple-500/20 border border-purple-400/30"
            >
              <span className="relative z-10">DOWNLOAD CV</span>
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></span>
            </a>

            {/* Contact Me */}
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="relative overflow-hidden inline-block text-white py-3 px-8 rounded-full text-lg font-bold transition duration-300 hover:scale-105 backdrop-blur-md bg-purple-500/20 border border-purple-400/30"
            >
              <span className="relative z-10">CONTACT ME</span>
              {/* Shimmer effect */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full animate-shimmer"></span>
            </button>
          </div>


        </div>
      </div>
    </section>
  )
}

export default About

