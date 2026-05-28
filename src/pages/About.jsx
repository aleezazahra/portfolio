import { FaJs, FaPython, FaReact, FaNode } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiPostgresql, SiMongodb } from "react-icons/si";
import React, { useState } from "react";

function About() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="bg-zinc-50 dark:bg-gray-950 min-h-screen py-28 px-6 md:px-12 transition-colors duration-300">
      
      <div className="max-w-3xl mx-auto -mt-4 text-center px-2">
        <h2
          style={{ fontFamily: "Gwendolyn" }}
          className="text-5xl sm:text-6xl text-center text-zinc-700 dark:text-[#D291BC] mb-14"
        >
          Hobbies
        </h2>

        <div className="space-y-10 text-left max-w-2xl mx-auto mb-20">
          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            Apart from coding, I like to <span className="text-zinc-900 dark:text-white font-medium">rice Linux</span> and get lost in aesthetic setups that take way too long but feel worth it.
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            I read philosophy when I feel like slowing down reality a bit. My favorites feel less like books and more like emotional damage:
            <span className="block mt-3 italic text-zinc-800 dark:text-zinc-200">
              Bell Jar — Sylvia Plath <br />
              The Trial — Franz Kafka <br />
              White Nights — Fyodor Dostoevsky <br />
              The Forty Rules of Love — Elif Shafak <br />
              Crime and Punishment — Fyodor Dostoevsky
            </span>
          </p>

          <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
            When I’m not overthinking life, I watch anime or movies — usually something that either destroys me emotionally or makes me question reality :3
          </p>

          <div className="text-center pt-6">
            <span className="text-sm text-gray-400 block mb-3">
              if you want my taste in movies:
            </span>
            <a
              className="inline-block text-pink-600 dark:text-pink-400 font-semibold hover:tracking-wider transition-all duration-200"
              href="https://boxd.it/j5DsP"
              target="_blank"
              rel="noopener noreferrer"
            >
              → Aleeza’s Letterboxd
            </a>
          </div>
        </div>

        {/* Tech Stack section moved outside the text spacing container for proper layout */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10">
            <div className="flex flex-col items-center justify-center group">
              <FaJs size={66} className="text-yellow-400 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col items-center justify-center group">
              <SiTypescript size={64} className="text-blue-500 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col items-center justify-center group">
              <FaReact size={64} className="text-cyan-400 animate-[spin_20s_linear_infinite] group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col items-center justify-center group">
              <FaNode size={64} className="text-green-500 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col items-center justify-center group">
              <SiTailwindcss size={64} className="text-sky-400 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col items-center justify-center group">
              <SiMongodb size={64} className="text-green-500 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col items-center justify-center group">
              <SiPostgresql size={64} className="text-blue-600 transition-transform group-hover:scale-110" />
            </div>
            <div className="flex flex-col items-center justify-center group">
              <FaPython size={64} className="text-yellow-500 transition-transform group-hover:scale-110" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
