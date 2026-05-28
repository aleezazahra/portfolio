import { useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";


import Project1Img from "../assets/Project1Img.png";
import Project3Img from "../assets/fireworks.png";
import Project2Img from "../assets/Project2Img.png";
import Project4Img from "../assets/pomoro.png";

function Projects() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleTheme = () => setDarkMode(!darkMode);

  const projects = [
    {
      title: "Linux ricing",
      desc: "Bash | Linux | Scripting",
      img: Project1Img,
      github: "https://github.com/aleezazahra01/hyprland-fedora",
    },
    {
      title: "Portfolio site",
      desc: "Reactjs | Javascript | EmailJS",
      img: Project2Img,
      github: "https://github.com/aleezazahra/portfolio",
    },
    {
      title:"Fireworks Visalizer",
      desc:"Python | Cv2 | numpy | ffmpeg",
      img:Project3Img,
      github:"https://github.com/aleezazahra/fireworks-text-visualizer"
    },
    {
      title:"Pomodoo timer",
      desc:"ReactJS | Tailwind | ReactCharts",
      img:Project4Img,
      github:"https://pomofocus-app1.vercel.app/"
    }
  ];

  return (
    <div className="bg-white dark:bg-gray-800 min-h-screen py-20 px-8">
    
      <h2
        style={{ fontFamily: "Poppins, sans-serif" }}
        className="text-4xl  text-center text-zinc-800 dark:text-white mb-12"
      >
        My Projects
      </h2>


      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="relative rounded-xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:-translate-y-3 bg-gray-100 dark:bg-gray-700"
          >
     
            <div
              className="h-56 bg-cover bg-center"
              style={{ backgroundImage: `url(${proj.img})` }}
            ></div>


            <div className="p-6 bg-white dark:bg-gray-800">
              <h3 className="text-xl font-semibold text-zinc-800 dark:text-white mb-2">
                {proj.title}
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 text-sm">{proj.desc}</p>
              <a
                href={proj.github}
                target="_blank"
                className="inline-flex items-center bg-[#B8709E] hover:bg-[#D291BC] text-white px-4 py-2 rounded font-semibold"
              >
                <FaGithub className="mr-2" /> View Code
              </a>
            </div>
          </div>
        ))}
      </div>


      <div className="flex justify-center mb-10 mt-20">
        <a
          href="https://github.com/aleezazahra"
          className="bg-[#B8709E] hover:bg-[#D291BC] px-6 py-3 rounded text-white font-bold"
        >
          View More Projects
        </a>
      </div>
    </div>
  );
}

export default Projects;
