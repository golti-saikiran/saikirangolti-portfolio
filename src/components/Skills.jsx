import React, { useState } from 'react';
import 'aos/dist/aos.css';

const skills = [
  { id: 1, skill: 'HTML', level: 3 },
  { id: 2, skill: 'CSS', level: 3 },
  { id: 3, skill: 'JavaScript', level: 3 },
  { id: 4, skill: 'TypeScript', level: 2 },
  { id: 5, skill: 'React', level: 3 },
  { id: 6, skill: 'Redux (RTK)', level: 2 },
  { id: 7, skill: 'GraphQL', level: 2 },
  { id: 8, skill: 'Express.js', level: 2 },
  { id: 9, skill: 'Node.js', level: 2 },
  { id: 10, skill: 'MongoDB', level: 2 },
  { id: 11, skill: 'Jest', level: 2 },
  { id: 12, skill: 'React Storybook', level: 1 },
  { id: 13, skill: 'React Testing Library', level: 1 },
  { id: 14, skill: 'Responsive Design', level: 3 },
  { id: 15, skill: 'CSS in JS', level: 3 },
  { id: 16, skill: 'Tailwind CSS', level: 2 },
  { id: 17, skill: 'Git', level: 3 },
  { id: 18, skill: 'Axios', level: 3 },
  { id: 19, skill: 'CI/CD', level: 2 },
  { id: 20, skill: 'REST APIs', level: 2 },
  { id: 21, skill: 'Agile Methodologies', level: 2 },
  { id: 22, skill: 'Playwright', level: 3 },
  { id: 23, skill: 'Communication', level: 3 },
  { id: 24, skill: 'Team Collaboration', level: 3 },
  { id: 25, skill: 'Time Management', level: 3 },
  { id: 26, skill: 'UI/UX Design Principles', level: 2 },
  { id: 27, skill: 'Performance Optimization', level: 2 },
];

const Skills = () => {
  const [showAll, setShowAll] = useState(false);

  const visibleSkills = showAll ? skills : skills.slice(0, 6);

  return (
    <section className="w-full bg-black text-white py-16 px-4 scroll-mt-15" id="skills">
      <h2 className="text-4xl font-extrabold text-center mb-12" data-aos="fade-down">
        My{' '}
        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-900 bg-clip-text text-transparent">
          Skills
        </span>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {visibleSkills.map(({ id, skill, level }) => (
          <div
            key={id}
            className="border border-white rounded-lg p-6 hover:border-pink-500 transition"
            data-aos="fade-up"
            data-aos-delay={id * 30}
          >
            <h3 className="text-xl font-bold mb-2">
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                {skill}
              </span>
            </h3>
            <p className="text-gray-300 mb-4">Proficiency Level: {level} / 3</p>
            <div className="flex gap-1">
              {[1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`h-2 w-2 rounded-full ${i <= level ? 'bg-orange-400' : 'bg-gray-600'}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Show More / Less Button */}
      <div className="text-center mt-12">
        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 py-3 border-2 border-white rounded-full font-semibold hover:border-pink-500 transition text-lg flex items-center gap-2 mx-auto"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {showAll ? 'Show Less' : 'Show More'} →
        </button>
      </div>
    </section>
  );
};

export default Skills;
