type Props = {
    message: string;
    name: string;
}

function WelcomeMessage({ message, name }: Props) {
    return (
        <h1 className="text-4xl/10 min-[600px]:text-6xl font-semibold text-violet-200">
            <span className="max-[940px]:flex max-[940px]:justify-center">{message}</span>
            <span className="max-[940px]:flex max-[940px]:justify-center"> {name}! </span>
        </h1>
    )
}

export default WelcomeMessage;