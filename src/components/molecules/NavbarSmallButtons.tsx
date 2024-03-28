import SmallButton from '../atoms/SmallButton';
import { FiMenu, FiX } from "react-icons/fi";
import { MdTranslate } from "react-icons/md";

type Props = {
    toggleLanguage: () => void;
    toggleMenu: () => void;
    isMenuOpen: boolean;
};

function NavbarSmallButtons({ toggleLanguage, toggleMenu, isMenuOpen }: Props) {
    return (
        <div className='flex gap-2 mr-3 max-sm:mr-0'>
            <SmallButton onClick={toggleLanguage} icon={MdTranslate} />
            <div className='hamburger-button'>
                <SmallButton onClick={toggleMenu} icon={isMenuOpen ? FiX : FiMenu} />
            </div>
        </div>
    )
}

export default NavbarSmallButtons