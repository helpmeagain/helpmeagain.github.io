function Logo({ name }: { name: string }) {
    return (
        <h2 className='fira-mono-bold flex items-center text-xl max-sm:text-lg font-mono font-bold whitespace-nowrap text-violet-100'>
            &lt;<span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-400 text-transparent bg-clip-text">{name}</span>/&gt;
        </h2>
    )
}

export default Logo