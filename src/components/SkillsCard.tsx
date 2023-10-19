const SkillsCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => {
    return (
        <article>
            <span>{icon}</span>
            <h4 className="mt-6 font-bold text-violet-200">{title}</h4>
            <p className="mt-2 text-violet-200">{text}</p>
        </article>
    )
}
export default SkillsCard