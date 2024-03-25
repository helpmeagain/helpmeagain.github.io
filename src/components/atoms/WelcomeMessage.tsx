type Props = {
    message: string;
    name: string;
}

function WelcomeMessage({ message, name }: Props) {
    return (
        <h1 className="text-4xl/10 min-[600px]:text-6xl font-semibold text-violet-200">
            {message} <br className='min-[900px]:hidden' /> {name}!
        </h1>
    )
}

export default WelcomeMessage;