type Props = {
    name: string;
    description: string;
    icon: React.ReactNode
};

function SkillTag({ icon }: Props) {
    return (
        <li className="flex justify-center items-center border bg-[#080414] border-violet-400/10 rounded-full w-16 h-9">
            {icon}
        </li>
    );
}

export default SkillTag;