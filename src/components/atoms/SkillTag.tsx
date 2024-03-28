type Props = {
    name: string;
    description: string;
    icon: React.ReactNode
};

function SkillTag({ icon }: Props) {
    return (
        <li className="flex justify-center items-center border bg-inherit border-violet-400/5 rounded-full w-16 h-9">
            {icon}
        </li>
    );
}

export default SkillTag;