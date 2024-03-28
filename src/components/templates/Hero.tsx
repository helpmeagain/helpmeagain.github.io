import HeroCard from "../organisms/HeroCard"

function Hero() {
    return (
        <section className="bg-gradient-to-b from-violet-700/5 via-violet-700/25 to-[#080414] h-screen" id="home">
            <div className="flex items-center justify-center md:ml-6 select-none">
                <article className='h-screen flex flex-col justify-center'>
                    <HeroCard name="Felipe Marques" />
                </article>
            </div>
        </section>
    )
}

export default Hero