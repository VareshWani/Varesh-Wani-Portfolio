// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';

// Experience Section Logo's
import nerdtech from './assets/company_logo/nerdtech.png';
import cravita from './assets/company_logo/cravita.png';

// Education Section Logo's
import ryan from './assets/education_logo/ryanlogo.png'; 
import junior from './assets/education_logo/juniorlogo.png';
import sitrc from './assets/education_logo/collegelogo.png';

// Project Section Logo's
import Emotion from './assets/work_logo/EmotionDetection.png';
import Hospital from './assets/work_logo/HospitalManagement.png';
import Campus from './assets/work_logo/Campus.png';
import Two from './assets/work_logo/Twogood.png';
import Weather from './assets/work_logo/Weather.png';
import Vibenest from './assets/work_logo/Vibenest.jpeg';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      // { name: 'Redux', logo: reduxLogo },
      // { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      // { name: 'Springboot', logo: springbootLogo },
      // { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      // { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Python', logo: pythonLogo  },
      
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      // { name: 'Postman', logo: postmanLogo },
      // { name: 'Compass', logo: mcLogo },
      // { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img:cravita,
      role: "FullStack Developer",
      company: "Cravita Technologies",
      date: "Jan 2025 - Present",
      desc: "Intern at Cravita Technologies, Developed dynamic and scalable web applications using JAVA, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "Node JS",
        "Tailwind CSS",
        "MongoDb",
        "C",
        "SQL",
        // "Redux",
        // "SpringBoot",
        // "Servelets",
        // "Microservices"
      ],
    },
    {
      id: 1,
      img: nerdtech,
      role: "Web Developer",
      company: "Nerdtech",
      date: "Jan 2024 - Feb 2024",
      desc: "Contributed to innovative projects as a Web Developer Intern, Learned how to create frontend development using technologies such as HTML, CSS, JavaScript, Bootstrap, and ReactJS. Worked closely with the team to deliver responsive, high-performance web applications and improve user experience through seamless integration of various technologies.",
      skills: [
        "ReactJS",
        "Redux",
        "JavaScript",
        "Tailwind CSS",
        "HTML",
        "CSS",

      ],
    },
    
  ];
  
  export const education = [
  
    {
      id: 0,
      img: sitrc,
      school: "Sandip Instite of Technology and Research Centre (SITRC), Nashik",
      date: " December 2021 - June 2025",
      grade: "7.41 CGPA",
      desc: "I earned my Bachelor of Engineering in Information Technology from Sandip Institute of Technology and Research Centre, Nashik. My academic journey enhanced my technical expertise and problem-solving skills, with a strong focus on Data Structures, Algorithms, Web Development, Database Management Systems, and Emerging Technologies, building a solid foundation in modern software engineering",
      degree: "Bachelor of Engineering in Information Technology",
    },
    {
      id: 1,
      img: junior,
      school: "Shri Pramod Patil Junior College (SPPAC), Nashik",
      date: "June 2020 - June 2021",
      grade: "76%",
      desc: "I pursued my Class 12 education at Shri Pramod Patil College (SPPAC) under the Maharashtra State Board, with a focused curriculum in Physics, Chemistry, Mathematics (PCM), and Computer as major subject.",
      degree: "Maharashtra State Board HSC(XII) - PCM with Computer",
    },
    {
      id: 2,
      img: ryan,
      school: "Ryan International School (ICSE), Nashik",
      date: "Apr 2018 - March 2019",
      grade: "72%",
      desc: "I completed my Class 10 education at Ryan International School under the ICSE board.",
      degree: "ICSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Vibenest Find your Dream Stay",
      description:
        "VibeNest is a modern web application inspired by Airbnb, designed to help users seamlessly discover and book their perfect stay. Built with Express.js, Node.js, MongoDB, and Passport.js for secure authentication, the project follows a clean MVC architecture ensuring scalability and maintainability. With a sleek, user-friendly interface and modern design, VibeNest provides a smooth booking experience, robust authentication, and efficient data management. This project highlights my ability to build full-stack applications with real-world functionality, combining backend logic with a polished frontend to deliver a professional, production-ready platform.",
      image: Vibenest,
      tags: ["Express JS", "CSS", "Javascript", "MongoDB", "API", "Node Js"],
      github: "",
      webapp: "",
    },
    {
      id: 1,
      title: "Campus Career Hub",
      description:
        "As the Team Leader, I spearheaded the development of Campus Career Hub, an innovative full-stack platform built with the MERN stack. Designed as a comprehensive bridge between students and recruiters, the portal empowers students to seamlessly apply to companies, undertake aptitude assessments, participate in live online interviews, and receive digitally generated offer letters—all in a unified ecosystem. With its modern interface, secure architecture, and end-to-end recruitment workflow, this project showcases my ability to orchestrate team collaboration, architect scalable solutions, and deliver impactful real-world applications.",
      image: Campus,
      tags: ["React JS", "Node.js", "MongoDB", "Express", "HTML", "CSS", "JavaScript", "API"],
      github: "",
      webapp: "",
    },
    {
      id: 2,
      title: "Emotion Sense",
      description:
        "Emotion Sense is an interactive web application built using HTML, CSS, JavaScript, and Emotion Detection APIs. By leveraging the user’s camera, the system intelligently recognizes facial expressions, analyzes emotional states in real-time, and delivers personalized recommendations tailored to the detected mood. Designed with a sleek front-end and seamless API integration, the project demonstrates my ability to blend modern UI with AI-driven insights, creating an engaging and human-centric digital experience.",
      image: Emotion,
      tags: ["API", "HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "",
    },
    {
      id: 3,
      title: "Two Good Website Frontend",
      description:
        "I developed a pixel-perfect frontend clone of Two Good Co using HTML, CSS, and JavaScript, enhanced with Locomotive.js for smooth scrolling and fluid animations. This project highlights my eye for modern UI/UX design, motion-driven interfaces, and attention to detail, recreating a sleek, professional brand experience that feels dynamic and immersive. It showcases my ability to translate design aesthetics into responsive, interactive code that delivers both performance and visual elegance.",
      image: Two,
      tags: ["Locomotive Js", "HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "",
    },
    {
      id: 4,
      title: "World Weather",
      description:
        "World Weather is a lightweight web application built with HTML, CSS, and JavaScript, integrated with a Weather API to provide real-time climate updates. By simply entering a city name, users can instantly access accurate weather details from anywhere in the world. This project demonstrates my skills in API integration, dynamic data rendering, and building responsive user-friendly interfaces that deliver practical, real-world utility.",
      image: Weather,
      tags: ["API", "HTML", "CSS", "JavaScript"],
      github: "",
      webapp: "",
    },
    {
      id: 5,
      title: "Hospital Management System",
      description:
        "The Hospital Management System is a robust application developed using Java, JDBC, and MySQL, designed to digitally manage and streamline hospital operations. It maintains comprehensive records of doctors, patients, and appointments, ensuring accuracy, security, and efficiency in healthcare data handling. This project showcases my expertise in database-driven application development, backend logic implementation, and real-world problem solving, creating a scalable solution that simplifies hospital administration",
      image: Hospital,
      tags: ["Java", "JDBC", "SQL"],
      github: "",
      webapp: "",
    },
  

  ];  

