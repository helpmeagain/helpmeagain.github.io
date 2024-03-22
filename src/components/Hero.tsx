import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import waifu from '../assets/waifu.jpg'

const Hero = () => {
    return (
        <>
            <div className="h-28 bg-violet-700/5" />
            <section className="bg-violet-700/5 py-24" id="home">
                <div className="align-element grid grid-cols-2 items-center lg:gap-48 select-none">
                    <article>
                        <h1 className="text-6xl font-semibold tracking-wider text-violet-100">
                            Bem-vindo, sou Felipe Marques!
                        </h1>

                        <p className="mt-4 text-2xl text-violet-100 capitalize tracking-wide">
                            Back-End Dev & Game Dev
                        </p>

                        <div className="flex gap-x-3 mt-4">
                            <a href="https://github.com/felipecomarques" target="_blank" rel="noopener noreferrer">
                                <FaGithubSquare className="h-8 w-8 hoover-settings" />
                            </a>

                            <a href="https://www.linkedin.com/in/felipe-marques-a4b73a241" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="h-8 w-8 hoover-settings" />
                            </a>
                        </div>

                    </article>
                    <article className="hidden md:block">
                        <img src={waifu} className="h-80 lg:h-96 rounded-full border-2 border-violet-400/50" />
                    </article>
                </div>
            </section>
        </>
    )
}
export default Hero