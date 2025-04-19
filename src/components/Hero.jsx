import React from 'react';
import 'aos/dist/aos.css';
import HeroImage from '../assets/HeroImage.jpg';
import { FaEnvelope, FaGithub, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';

const Hero = () => {

    return (
        <section
            className="w-full min-h-screen bg-black text-white flex flex-col justify-center items-center text-center px-4"
            id="home"
        >
            {/* Profile Image */}
            <div
                className="w-50 h-50 rounded-full overflow-hidden border-4 border-white mb-6"
                data-aos="zoom-in"
            >
                <img
                    src={HeroImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Heading */}
            <h1
                className="text-4xl md:text-5xl leading-snug mb-4"
                data-aos="fade-up"
                data-aos-delay="100"
            >
                I'm{' '}
                <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-900 bg-clip-text text-transparent font-bold">
                    SaiKiran Golti
                </span>
                , frontend web developer based in{' '}
                <span className="text-white font-bold">Hydreabad.</span>
            </h1>

            {/* Sub Text */}
            <p
                className="text-gray-300 max-w-xl mb-8 text-xl"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                I am a frontend web developer with 3+ years of experience, worked in various projects.
            </p>

            {/* Buttons */}
            <div className="flex gap-4" data-aos="fade-up" data-aos-delay="300">
                <a className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-900 text-white px-6 py-3 rounded-full font-semibold hover:opacity-90 hover:border-2 border-green-300 transition"
                    href='#contact'
                >
                    Connect with me
                </a>
                <a
                    href="/SaiKiran_Resume.pdf"
                    download="SaiKiran_Resume.pdf"
                    className="border-2 border-white px-6 py-3 rounded-full font-semibold hover:border-green-300 transition"
                >
                    Get resume
                </a>
            </div>

            {/* Social Icons */}
            <div
                className="flex gap-6 mt-8 text-4xl"
                data-aos="fade-up"
                data-aos-delay="400"
            >
                <a
                    href="mailto:saikiran.golti@gmail.com"
                    className="hover:text-pink-500 transition"
                    title="Email"
                >
                    <FaEnvelope />
                </a>
                <a
                    href="https://www.linkedin.com/in/sai-kiran-golti/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-500 transition"
                    title="LinkedIn"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://github.com/golti-saikiran"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gray-400 transition"
                    title="GitHub"
                >
                    <FaGithub />
                </a>
                <a
                    href="tel:8328121983"
                    className="hover:text-green-400 transition"
                    title="Phone"
                >
                    <FaPhoneAlt />
                </a>
            </div>
        </section>
    );
};

export default Hero;
