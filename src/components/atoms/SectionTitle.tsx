const SectionTitle = ({ text }: { text: string }) => {
    return (
        <div className="border-b border-violet-400/30 pb-5">
            <h2 className="text-3xl jost-semi-bold font-medium tracking-wider capitalize text-violet-100 ">{text}</h2>
        </div>
    )
}
export default SectionTitle