function Logo({ name }: { name: string }) {
    return (
        <h2 className='fira-mono-bold flex items-center text-xl max-sm:text-lg font-mono font-bold whitespace-nowrap text-violet-100'>
            &lt;<span className="text-violet-500">{name}</span>/&gt;
        </h2>
    )
}

export default Logo