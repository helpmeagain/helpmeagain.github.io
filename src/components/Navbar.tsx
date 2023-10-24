import { links } from '../data';

const Navbar = () => {
    return (
        <nav className="bg-violet-700/10 backdrop-blur-md w-full border-b border-violet-400/50 shadow-md fixed z-50">
            <div className="align-element py-4 md:flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
                <h2 className='text-2xl font-mono font-bold text-violet-100'>
                    &lt;<span className="text-violet-500">Felipe Marques</span>/&gt;
                </h2>
                <div className="flex gap-x-6">
                    {links.map((link) => {
                        const { id, href, text } = link;
                        return (
                            <a
                                key={id}
                                href={href}
                                className="hoover-settings capitalize text-lg tracking-wide font-semibold"
                            >
                                {text}
                            </a>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
