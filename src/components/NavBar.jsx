import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 575) {
                setIsOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup on unmount
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const menuOptions = [
        { id: 1, title: 'Home', link: '#home' },
        { id: 2, title: 'Skills', link: '#skills' },
        { id: 3, title: 'Experience', link: '#experience' },
        { id: 4, title: 'About Me', link: '#about' },
        { id: 5, title: 'Contact', link: '#contact' },
    ];

    return (
        <nav className="w-full h-20 flex justify-between items-center px-6 py-4 bg-black text-white fixed top-0 left-0 z-50 shadow-md">
            {/* Logo */}
            <div className="flex items-center justify-center bg-black">
                <h1 className="text-4xl font-bold cursor-pointer">
                    <a href="#home">
                        <span className="text-white">Sai</span>
                        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-900 bg-clip-text text-transparent">
                            Kiran
                        </span>
                    </a>
                </h1>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden md:flex gap-6 text-xl bg-black">
                {menuOptions.map((item) => (
                    <li key={item.id} className="hover:text-pink-400 cursor-pointer transition-colors duration-300">
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
            </ul>

            {/* Connect Button - Hidden on small screens */}
            <a
                href="#contact"
                className="hidden md:inline ml-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-900 text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 hover:border-2 border-green-300 transition-opacity duration-300"
            >
                Connect With Me
            </a>

            {/* Mobile Menu Icon */}
            <div className="md:hidden z-50 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
            </div>

            {/* Mobile Side Menu */}
            <div className={`fixed top-0 right-0 h-full w-2/3 sm:w-1/2 bg-black shadow-lg transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'} z-40`}>
                <ul className="flex flex-col items-start gap-6 text-2xl p-6">
                    {menuOptions.map((item) => (
                        <li key={item.id} className="w-full">
                            <a
                                href={item.link}
                                className="block w-full hover:text-pink-400"
                                onClick={() => setIsOpen(false)}
                            >
                                {item.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
