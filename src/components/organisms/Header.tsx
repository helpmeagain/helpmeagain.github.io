import { useTranslation } from 'react-i18next';
import Logo from '../atoms/Logo';
import NavigationList from '../molecules/NavigationList';
import NavbarSmallButtons from '../molecules/NavbarSmallButtons';

type Props = {
    isMenuOpen: boolean
    clickLink: (link: string) => void;
    toggleMenu: () => void;
};

function Header({ isMenuOpen, clickLink, toggleMenu }: Props) {
    const { i18n } = useTranslation();

    const changeLanguage = () => {
        const language = i18n.language === 'en' ? 'pt' : 'en';
        i18n.changeLanguage(language);
    };

    return (
        <>
            <div className='flex'>
                <Logo name={"Felipe Marques"} />
                <NavigationList isMenuOpen={isMenuOpen} clickLink={clickLink} />
            </div>
            <NavbarSmallButtons changeLanguage={changeLanguage} toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
        </>
    );
}

export default Header;