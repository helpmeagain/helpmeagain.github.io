import HeroCard from "../organisms/HeroCard"

function Hero() {
    return (
        <section className="bg-gradient-to-b from-violet-700/5 via-violet-700/15 to-background h-screen select-none" id="home">
            <div className="flex items-center justify-center md:ml-6">
                <article className='h-screen flex flex-col justify-center'>
                    <HeroCard name="Felipe Marques" />
                </article>
            </div>
        </section>
    )
}

export default Hero