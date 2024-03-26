import HeroCard from "../organisms/HeroCard"

function Hero() {
    return (
        <section className="bg-gradient-to-t from-violet-700/5 via-violet-700/25 to-violet-700/5 h-screen" id="home">
            <div className="flex items-center justify-start max-[900px]:justify-center md:ml-6 select-none">
                <article className='h-screen flex flex-col justify-center'>
                    <HeroCard name="Felipe Marques" />
                </article>
            </div>
        </section>
    )
}

export default Hero