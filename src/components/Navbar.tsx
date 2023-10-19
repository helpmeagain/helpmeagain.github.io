import { links } from '../data';
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="bg-violet-700/10 h-16 flex items-center border-b border-violet-300">
            <div className="mx-auto max-w-8xl px-5 flex items-center justify-between w-full">
                <div className="flex pl-14 gap-x-6">
                    {links.map((link) => {
                        <span>Felipe Marques</span>
                        const { id, href, text } = link;
                        return (
                            <a
                                key={id}
                                href={href}
                                className="text-violet-50 capitalize text-lg tracking-wide hover:text-violet-300 duration-300 font-semibold"
                            >
                                {text}
                            </a>
                        );
                    })}
                </div>
                <div className="flex gap-x-3 ">
                    {/* <button className="border border-violet-300 rounded-lg py-2 px-3 hover:bg-violet-600/10">
                        <span className="text-white">Português</span>
                    </button> */}
                    <button className="border border-violet-300 rounded-lg py-2 px-2 hover:bg-violet-600/10 hidden md:block">
                        <a href="https://github.com/felipecomarques" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="h-6 w-6 text-violet-200" />
                        </a>
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
