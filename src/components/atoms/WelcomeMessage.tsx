type Props = {
    message: string;
    name: string;
}

function WelcomeMessage({ message, name }: Props) {
    return (
        <div className="flex flex-col items-center font-semibold text-violet-200">
            <h3 className="text-2xl min-[600px]:text-4xl">{message}</h3>
            <h1 className="text-5xl min-[600px]:text-8xl mb-2">{name}</h1>
        </div>
    )
}

export default WelcomeMessage;