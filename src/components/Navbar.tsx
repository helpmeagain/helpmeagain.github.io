import { useState } from 'react';
import { links } from '../data';
import { FiMenu, FiX } from "react-icons/fi";
import { MdTranslate } from "react-icons/md";
import "../styles/navbar.css"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <nav className="navbar-style navbar-settings">
            <div className='flex'>
                <h2 className='fira-mono-bold flex items-center text-2xl font-mono font-bold whitespace-nowrap text-violet-100'>
                    &lt;<span className="text-violet-500">Felipe Marques</span>/&gt;
                </h2>
                <ul className={isMenuOpen ? "navbar-list active" : "navbar-list"}>
                    {links.map((link, id) => (
                        <li key={id}>
                            <a href={link.href} className="jost-semi-bold navbar-links" onClick={closeMenu}>
                                {link.icon} {link.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex gap-2'>
                <div className="flex items-center justify-center">
                    <button className="navbar-button ml-2 cursor-not-allowed">
                        <MdTranslate className="md:ml-1" />
                    </button>
                </div>
                <div className="items-center justify-center div-hamburger">
                    <button className="navbar-button-hamburger" onClick={toggleMenu}>
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
