import HeroCard from "../organisms/HeroCard"

function Hero() {
    return (
        <section className="h-screen" id="home">
            <div className="flex items-center justify-center md:ml-6 select-none">
                <article className='h-screen flex flex-col justify-center'>
                    <HeroCard name="Felipe Marques" />
                </article>
            </div>
        </section>
    )
}

export default Hero