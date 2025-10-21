type Props = {
  name: string;
};

function WelcomeMessage({ name }: Props) {
  return (
    <div className="flex items-center font-semibold text-violet-100 text-6xl fira-mono-bold">
      {/* <h3 className="text-2xl min-[600px]:text-4xl">{message}</h3> */}
      <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-400 text-transparent bg-clip-text">
        &lt;{" "}
      </span>
      <span>{name}</span>
      <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-violet-400 text-transparent bg-clip-text">
        /&gt;
      </span>
    </div>
  );
}

export default WelcomeMessage;
