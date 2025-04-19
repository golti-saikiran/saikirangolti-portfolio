import React from 'react';
import 'aos/dist/aos.css';

const About = () => {
    return (
        <section className="w-full bg-black text-white py-20 px-4" id="about">
            <div className="max-w-5xl mx-auto">
                {/* Heading */}
                <h2
                    className="text-4xl font-extrabold text-center mb-12"
                    data-aos="fade-down"
                >
                    About{' '}
                    <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-900 bg-clip-text text-transparent">
                        Me
                    </span>
                </h2>

                {/* Content Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* Left: Text */}
                    <div data-aos="fade-right">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            Hello! I'm <span className="text-white font-semibold">SaiKiran Golti</span>, a passionate and detail-oriented{' '}
                            <span className="text-pink-400 font-semibold">Frontend Developer</span> based in Hyderabad, India.
                            I have over <span className="text-orange-400 font-semibold"> 3years of experience</span> crafting user-friendly,
                            scalable, and modern web interfaces using technologies like{' '}
                            <span className="text-purple-400">React</span>,{' '}
                            <span className="text-purple-400">CSS</span>, and{' '}
                            <span className="text-purple-400">JavaScript</span>.
                        </p>

                        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                            I'm currently deepening my skills in the{' '}
                            <span className="text-cyan-400 font-semibold">MERN stack</span>, working on full-stack
                            apps using <span className="text-green-400">MongoDB</span>,{' '}
                            <span className="text-green-400">Express.js</span>,{' '}
                            <span className="text-green-400">Node.js</span>, and enhancing frontend experiences with{' '}
                            <span className="text-purple-400">Next.js</span>.
                        </p>

                        <p className="text-lg text-gray-300 mt-4 leading-relaxed">
                            When I'm not coding, you’ll find me exploring new tech trends, fine-tuning personal projects,
                            or collaborating on GitHub.
                        </p>
                    </div>

                    {/* Right: Key Info */}
                    <div
                        className="text-gray-300 text-md space-y-4"
                        data-aos="fade-left"
                    >
                        <p><span className="font-bold text-white">Location:</span> Hyderabad, India</p>
                        <p><span className="font-bold text-white">Experience:</span> 3+ Years</p>
                        <p><span className="font-bold text-white">Specialization:</span> Frontend Development</p>
                        <p><span className="font-bold text-white">Stack:</span> HTML, CSS, JavaScript, React, Tailwind, TypeScript, Redux, Node.js, MongoDB</p>
                        <p><span className="font-bold text-white">Currently Learning:</span> Next.js & MERN Stack</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
