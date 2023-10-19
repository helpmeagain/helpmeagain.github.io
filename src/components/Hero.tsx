import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import waifu from '../assets/waifu.jpg'

const Hero = () => {
    return (
        <div className="bg-violet-700/5 py-24">
            <div className="mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8">
                <article>
                    <h1 className="text-6xl font-bold tracking-wider text-violet-200">
                        <span className="">Welcome! I'm Felipe Marques</span>
                    </h1>
                    <p className="mt-4 text-3xl text-violet-200 capitalize tracking-wide">
                        Back-End Developer & Game Developer
                    </p>
                    <div className="flex gap-x-3 mt-4">
                        <a href="https://github.com/felipecomarques" target="_blank" rel="noopener noreferrer">
                            <FaGithubSquare className="h-8 w-8 text-violet-200 hover:text-violet-300" />
                        </a>

                        <a href="https://www.linkedin.com/in/felipe-marques-a4b73a241" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="h-8 w-8 text-violet-200 hover:text-violet-300" />
                        </a>
                    </div>
                </article>
                <article className="hidden md:block">
                    <img src={waifu} className="h-80 lg:h-96" />
                </article>
            </div>
        </div>
    )
}
export default Hero