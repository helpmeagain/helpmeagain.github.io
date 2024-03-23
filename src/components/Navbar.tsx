import { useState } from 'react';
import { links } from '../data';
import { FiMenu, FiX } from "react-icons/fi";
import "../styles/navbar.css"

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar-style navbar-settings">
            <h2 className='fira-mono-bold flex items-center text-2xl font-mono font-bold text-violet-100'>
                &lt;<span className="text-violet-500">Felipe Marques</span>/&gt;
            </h2>
            <div className="flex items-center justify-center">
                <div className="navbar-menu-mobile" onClick={toggleMenu}>
                    {isMenuOpen ? <FiX /> : <FiMenu />}
                </div>
            </div>

            <ul className={isMenuOpen ? "navbar-list active" : "navbar-list"}>
                {links.map((link, id) => (
                    <li key={id}>
                        <a href={link.href} className="jost-semi-bold navbar-links">
                            {link.icon} {link.text}
                        </a>
                    </li>
                ))}
            </ul>

        </nav>
    );
};

export default Navbar;
