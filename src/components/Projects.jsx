import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import 'aos/dist/aos.css';
import SKKartImage from '../assets/SK-kart.png';
import TicTacToeImage from '../assets/TicTacToe.png';
import SKMobilesImage from '../assets/SK-mobiles.png';


const projects = [
  {
    title: "SK-kart E-commerce App",
    description: "A MERN stack e-commerce site with product listing, cart, checkout, otp based authentication, order and address management and admin dashboard.",
    tech: ["React", "Node.js","TypeScript", "MongoDB", "Express"],
    demo: "https://sk-kart.vercel.app",
    code: "https://github.com/golti-saikiran/SK-kart",
    image: SKKartImage, // Place this in public/assets/
    video: "" // Optional: "/assets/sk-mobiles-demo.mp4"
  },
  {
    title: "Tic Tac Toe Game",
    description: "A simple Tic Tac Toe game built with React, featuring a clean UI and basic game logic.",
    tech: ["React", "CSS", "JavaScript"],
    demo: "https://skgolti-tic-tac-toe.netlify.app",
    code: "https://github.com/golti-saikiran/TicTacToe",
    image: TicTacToeImage,
    video: "" // Optional
  },
    {
    title: "SK Mobiles  Application",
    description: "A e-commerce application for mobiles, built with React and GraphQL, featuring product listings, and cart functionality.",
    tech: ["React", "CSS", "TypeScript", "GraphQL", "Redux"],
    demo: "https://sk-mobiles.netlify.app/products",
    code: "https://github.com/golti-saikiran/skmobiles",
    image: SKMobilesImage,
    video: "" // Optional
  }

];

const Projects = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-4" id="projects">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12" data-aos="fade-down">
          My <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-900 bg-clip-text text-transparent">Projects</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj, index) => (
            <div
              key={index}
              className="border border-gray-700 rounded-xl p-4 hover:border-pink-500 transition duration-300 shadow-md"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Project Media */}
              {proj.video ? (
                <video
                  src={proj.video}
                  controls
                  className="w-full h-48 object-cover rounded-md mb-4 border border-gray-700"
                />
              ) : (
                proj.image && (
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-48 object-cover rounded-md mb-4 border border-gray-700 hover:scale-105 transition-transform duration-300"
                  />
                )
              )}

              {/* Project Content */}
              <h3 className="text-xl font-semibold text-orange-300 mb-2">{proj.title}</h3>
              <p className="text-gray-300 text-sm mb-2">{proj.description}</p>
              <p className="text-xs text-purple-400 mb-3">Tech Stack: {proj.tech.join(', ')}</p>

              {/* Links */}
              <div className="flex gap-4 mt-2">
                {proj.demo && (
                  <a
                    href={proj.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-600 text-sm flex items-center gap-1"
                  >
                    <FaExternalLinkAlt /> Demo
                  </a>
                )}
                {proj.code && (
                  <a
                    href={proj.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-400 hover:text-green-600 text-sm flex items-center gap-1"
                  >
                    <FaGithub /> Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
