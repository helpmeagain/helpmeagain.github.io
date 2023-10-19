import SectionTitle from "./SectionTitle";
import waifu from '../assets/waifu.jpg'

const About = () => {
    return (
        <section className="bg-violet-700/5 py-20" id="about">
            <div className="align-element grid md:grid-cols-2 items-center gap-16">
                <img src={waifu} className="mx-auto m-0 h-72 rounded-full border-2 border-violet-400/50" />
                <article>
                    <SectionTitle text="About me" />
                    <p className="text-violet-100 mt-8 leading-loose">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam perferendis, placeat voluptate, assumenda ratione dolores distinctio quam corrupti quas pariatur, repudiandae aliquam recusandae consectetur consequatur! Illum ad labore beatae numquam?
                    </p>
                </article>
            </div>
        </section>
    )
}
export default About