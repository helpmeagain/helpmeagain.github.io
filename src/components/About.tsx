import SectionTitle from "./SectionTitle";
import waifu from '../assets/waifu.jpg'

const About = () => {
    return (
        <section className="bg-violet-700/5 py-20" id="about">
            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img src={waifu} className="mx-auto m-0 h-72 rounded-full border-2 border-violet-400/50" />
                <article>
                    <SectionTitle text="Sobre mim" />
                    <p className="text-violet-100 mt-8 leading-loose">
                        Meu nome é Felipe da Costa Marques. Possuo técnico em informática e curso Sistemas de Informação, ambos pelo IFCE - Campus Cedro. Tenho paixão por tecnologia, principalmente por desenvolvimento Back-end e Game Dev. Estou sempre disposto a treinar e adquirir novas habilidades e experiências.
                    </p>
                </article>
            </div>
        </section>
    )
}
export default About