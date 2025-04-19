import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Branding / Intro */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-900 bg-clip-text text-transparent">
              SaiKiran Golti
            </span>
          </h2>
          <p className="text-gray-400">Frontend Developer | MERN Stack Enthusiast</p>
          <p className="text-sm mt-2 text-gray-500">Hyderabad, India</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            <li><a href="#home" className="hover:text-pink-500 transition">Home</a></li>
            <li><a href="#about" className="hover:text-pink-500 transition">About</a></li>
            <li><a href="#skills" className="hover:text-pink-500 transition">Skills</a></li>
            <li><a href="#experience" className="hover:text-pink-500 transition">Experience</a></li>
            <li><a href="#projects" className="hover:text-pink-500 transition">Projects</a></li>
            <li><a href="#contact" className="hover:text-pink-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact + Social */}
        <div>
          <h3 className="text-xl font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-pink-500" /> saikiran.golti@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-pink-500" /> +91 83281 21983
            </li>
          </ul>

          <div className="flex gap-4 mt-4">
            <a
              href="https://github.com/golti-saikiran"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 text-xl transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/sai-kiran-golti/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 text-xl transition"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-600 text-sm mt-10">
        © {new Date().getFullYear()} SaiKiran Golti. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
