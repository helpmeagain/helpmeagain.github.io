import { useState } from "react";
import { useTranslation } from "react-i18next";
import Logo from "../atoms/Logo";
import NavigationList from "../molecules/NavigationList";
import NavbarSmallButtons from "../molecules/NavbarSmallButtons";
import LanguageList from "../molecules/LanguageList";
import "../../assets/styles/navbar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const { i18n } = useTranslation();

  // Menu link functions
  const toggleMenu = () => {
    setIsLanguageOpen(false);
    setIsMenuOpen(!isMenuOpen);
  };

  const clickLink = (link: string) => {
    setIsMenuOpen(false);
    window.location.href = link;
  };

  // Menu language functions
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    document.documentElement.setAttribute("lang", lang);
  };

  const toggleLanguage = () => {
    setIsMenuOpen(false);
    setIsLanguageOpen(!isLanguageOpen);
  };

  const clickLanguage = (lang: string) => {
    setIsLanguageOpen(false);
    changeLanguage(lang);
  };

  return (
    <nav className="navbar">
      <div className="flex gap-3">
        <Logo name={"Felipe Marques"} />
        <NavigationList isMenuOpen={isMenuOpen} clickLink={clickLink} />
      </div>
      <NavbarSmallButtons
        toggleLanguage={toggleLanguage}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
      <LanguageList
        isLanguageOpen={isLanguageOpen}
        clickLanguage={clickLanguage}
      />
    </nav>
  );
}

export default Navbar;
