import '../../styles/waves.css'

function Wave({ number }: { number: number }) {
    return (
        <div className={`spacer wave${number}`} />
    )
}

export default Wave;