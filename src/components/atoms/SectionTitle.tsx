const SectionTitle = ({ text }: { text: string }) => {
  return (
    <div className="border-b border-violet-400/0 pb-5 mb-3 w-full">
      <h2 className="text-3xl jost-semi-bold font-medium tracking-wider capitalize text-violet-100 text-center">
        {text}
      </h2>
    </div>
  );
};
export default SectionTitle;
