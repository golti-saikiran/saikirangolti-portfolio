import React, { useEffect } from 'react';
import { FaMicrosoft, FaProjectDiagram } from 'react-icons/fa';
import { SiInfosys } from 'react-icons/si';
import 'aos/dist/aos.css';

const experiences = [
  {
    company: 'Infosys',
    icon: <SiInfosys className="text-blue-500 text-3xl" />,
    title: 'Senior Systems Engineer',
    location: 'Hyderabad, Telangana',
    duration: 'April 2022 – Present',
    description:
      'Frontend React Developer with 3+ years of experience in building scalable and responsive user interfaces with a focus on performance, testing, and maintainability.',
    responsibilities: [
      'Built responsive UIs using React, HTML5, and CSS3.',
      'Managed application state with Redux and Context API.',
      'Handled data fetching with Axios/Fetch.',
      'Implemented unit and automation testing using Jest and Playwright.',
      'Collaborated via Git and conducted code reviews.'
    ],
    projects: [
      {
        name: 'Microsoft China 21V L2O App',
        icon: <FaMicrosoft className="text-blue-300" />,
        tech: 'ReactJS, Typescript, Redux, GraphQL, Node, FluentUI',
        tasks: [
          'Built Upload Agreement and Review Sections.',
          'Ensured accessibility compliance.',
          'Maintained Jest unit tests.'
        ]
      },
      {
        name: 'Approval Management App',
        icon: <FaMicrosoft className="text-blue-300" />,
        tech: 'ReactJS, Typescript, Node, Redux, Harmony UI',
        tasks: [
          'Developed Rule Creation and Test Cases.',
          'Wrote Playwright automation tests.'
        ]
      },
      {
        name: 'Quote Center Microfrontend',
        icon: <FaMicrosoft className="text-blue-300" />,
        tech: 'ReactJS, Typescript, GraphQL, Node',
        tasks: [
          'Helped migrate monolith to micro-frontend.',
          'Created technical docs for GQL APIs and component hierarchy.'
        ]
      }
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="w-full bg-black text-white py-20 px-6" id="experience">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-14" data-aos="fade-down">
          My <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-900 bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="space-y-14">
          {experiences.map((exp, index) => (
            <div key={index} data-aos="fade-up" className="space-y-6">
              <div className="flex items-center gap-8">
                {exp.icon}
                <h3 className="text-2xl md:text-3xl font-bold">
                  {exp.title} <span className="text-pink-500 font-semibold">@ {exp.company}</span>
                </h3>
              </div>
              <p className="text-sm text-gray-400">{exp.location} — {exp.duration}</p>
              <p className="text-base text-gray-300 leading-relaxed">{exp.description}</p>

              <div>
                <h4 className="text-lg font-semibold text-white mb-2">Key Responsibilities:</h4>
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {exp.responsibilities.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {exp.projects.map((proj, projIdx) => (
                  <div
                    key={projIdx}
                    data-aos="fade-up"
                    className="border border-gray-700 rounded-2xl p-6 hover:border-pink-500 transition duration-300 shadow-sm"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      {proj.icon || <FaProjectDiagram />}
                      <h5 className="text-xl font-semibold text-white">{proj.name}</h5>
                    </div>
                    <p className="text-sm text-orange-400 mb-2">Tech Stack: {proj.tech}</p>
                    <ul className="list-disc list-inside text-gray-400 space-y-1 text-sm">
                      {proj.tasks.map((task, tIdx) => (
                        <li key={tIdx}>{task}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
