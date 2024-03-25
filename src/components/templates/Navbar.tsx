import { useState } from 'react';
import "../../styles/navbar.css"
import Header from '../organisms/Header';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const clickLink = (link: string) => {
        setIsMenuOpen(false);
        window.location.href = link;
    }

    return (
        <nav className={isMenuOpen ? "navbar-style navbar-settings" : "navbar-style navbar-settings backdrop-blur-md"}>
            <Header isMenuOpen={isMenuOpen} clickLink={clickLink} toggleMenu={toggleMenu} />
        </nav>
    );
}

export default Navbar;
