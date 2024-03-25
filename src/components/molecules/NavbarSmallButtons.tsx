import SmallButton from '../atoms/SmallButton';
import { FiMenu, FiX } from "react-icons/fi";
import { MdTranslate } from "react-icons/md";

type Props = {
    changeLanguage: () => void;
    toggleMenu: () => void;
    isMenuOpen: boolean;
};

function NavbarSmallButtons({ changeLanguage, toggleMenu, isMenuOpen }: Props) {
    return (
        <div className='flex gap-2'>
            <SmallButton onClick={changeLanguage} icon={MdTranslate} />
            <div className='hamburger-button'>
                <SmallButton onClick={toggleMenu} icon={isMenuOpen ? FiX : FiMenu} />
            </div>
        </div>
    )
}

export default NavbarSmallButtons