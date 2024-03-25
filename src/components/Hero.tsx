import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <>
            <section className="bg-gradient-to-t from-violet-700/5 via-violet-700/25 to-violet-700/5 h-screen" id="home">
                <div className="flex items-center justify-start max-[900px]:justify-center ml-6 select-none">
                    <article className='h-screen flex flex-col justify-center'>
                        <h1 className="text-4xl min-[600px]:text-6xl font-semibold text-violet-200">
                            {t('hero.welcome')} <br className='min-[900px]:hidden' />Felipe Marques!
                        </h1>

                        <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Mono&size=25&duration=3000&pause=5000&color=EDE9FE&random=false&width=435&lines=Backend+dev+%26+game+dev"
                            alt="Typing SVG"
                            className='mt-4 w-7/12'
                        />

                        <div className="flex gap-x-3 ">
                            <a href="https://github.com/felipecomarques" target="_blank" rel="noopener noreferrer">
                                <FaGithubSquare className="h-8 w-8 hoover-settings" />
                            </a>

                            <a href="https://www.linkedin.com/in/felipe-marques-a4b73a241" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="h-8 w-8 hoover-settings" />
                            </a>
                        </div>

                    </article>
                </div>
            </section>
        </>
    )
}
export default Hero