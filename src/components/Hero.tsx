import { FaGithubSquare, FaLinkedin } from 'react-icons/fa';
// import waifu from '../assets/waifu.jpg'

const Hero = () => {
    return (
        <>
            <section className="bg-violet-700/5 h-screen py-60" id="home">
                <div className="flex items-center justify-start max-[900px]:justify-center ml-7 select-none">
                    <article>
                        <h1 className="text-5xl min-[600px]:text-6xl font-semibold text-violet-100">
                            Welcome, I'm <br className='min-[900px]:hidden' />Felipe Marques!
                        </h1>

                        <img src="https://readme-typing-svg.herokuapp.com?font=Fira+Mono&size=25&duration=3000&pause=5000&color=EDE9FE&random=false&width=435&lines=Backend+dev+%26+game+dev"
                            alt="Typing SVG"
                            className='mt-4'
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