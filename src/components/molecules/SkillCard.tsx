import SkillsData from "../../assets/data/SkillsData";
import SkillTag from '../atoms/SkillTag';

type Props = {
    title?: string
}

function SkillCard({ title }: Props) {
    return (
        <div className="inline-grid justify-center flex-col gap-y-4 rounded-xl p-4">
            <h1 className="flex justify-center text-violet-200 jost-regular text-2xl"> {title} </h1>
            <ul className="grid grid-cols-6 max-lg:grid-cols-4 gap-2">
                {
                    SkillsData().map((skill) => (
                        <SkillTag key={skill.id} name={skill.title} description={skill.text} icon={skill.icon} />
                    ))
                }
            </ul>
        </div>
    );
}

export default SkillCard;