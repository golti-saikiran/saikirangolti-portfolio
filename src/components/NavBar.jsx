import React from 'react'

const NavBar = () => {
    const menuOptions = [
        { id: 1, title: 'Home', link: '#home' },
        { id: 2, title: 'Skills', link: '#skills' },
        { id: 3, title: 'Experience', link: '#experience' },
        { id: 4, title: 'About Me', link: '#about' },
        { id: 5, title: 'Contact', link: '#contact' },
    ];
    return (
        <nav className="w-full h-20 flex justify-around items-center px-6 py-4 bg-black text-white fixed top-0 left-0 z-50 shadow-md">
            {/* Logo */}

            <div className=" flex items-center justify-center bg-black">
                <h1 className="text-5xl font-bold cursor-pointer" >
                    <a href='#home'>
                        <span className="text-white">Sai</span>
                        <span className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-900 bg-clip-text text-transparent">
                            Kiran
                        </span>
                    </a>
                </h1>
            </div>

            {/* Nav Links */}
            <ul className="hidden md:flex gap-6 text-xl bg-black">
                {menuOptions.map((item) => (
                    <li key={item.id} className="hover:text-pink-400 cursor-pointer transition-colors duration-300">
                        <a href={item.link} className=''>{item.title}</a>
                    </li>
                ))}
            </ul>

            {/* Connect Button */}
            <a className="ml-6 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-900 text-white px-5 py-2 rounded-full font-semibold hover:opacity-90 hover:border-2 border-green-300 transition-opacity duration-300"
                href='#contact'
            >
                Connect With Me
            </a>
        </nav>
    )
}

export default NavBar
