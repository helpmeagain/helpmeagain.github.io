const SkillsCard = ({ icon, title, text }: { icon: React.ReactNode, title: string, text: string }) => {
    return (
        <article className="border rounded-xl p-5 border-violet-400/10">
            <span className="flex justify-center">{icon}</span>
            <h4 className="mt-2 font-bold text-xs text-violet-200/60 jost-semi-bold flex justify-center">{title.toUpperCase()}</h4>
            <p className="mt-2 text-violet-200 atkinson-hyperlegible-regular text-justify h-32">{text}</p>
        </article>
    )
}
export default SkillsCard