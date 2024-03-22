import { links } from '../data';
import { MdOutlineTranslate } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className="navbar-style navbar-settings">
            <h2 className='.fira-mono-bold flex items-center text-2xl font-mono font-bold text-violet-100'>
                &lt;<span className="text-violet-500">Felipe Marques</span>/&gt;
            </h2>
            <div className="flex gap-x-3 items-center">
                {links.map((link) => {
                    const { id, href, text, icon } = link;
                    return (
                        <a
                            key={id}
                            href={href}
                            className="jost-semi-bold shadow-md border-violet-400/30 hover:bg-violet-500/10 hover:text-violet-300 border p-2 px-3 rounded-xl hoover-settings capitalize text-lg flex items-center justify-center tracking-wide gap-1"
                        >
                            {icon} {text}
                        </a>
                    );
                })}
                <div className="h-10 border-l border-violet-400/30 rounded-xl"></div>
                <button className='cursor-not-allowed border shadow-md border-violet-400/30 hover:bg-violet-500/10 hover:text-violet-300 text-xl hoover-settings h-11 w-11 rounded-xl flex items-center justify-center pl-1'>
                    <MdOutlineTranslate />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
