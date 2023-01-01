export default function PostCard({
  title,
  summary,
  author,
  date,
  tags,
  //   image,
}) {
  return (
    <>
      <div className="flex flex-col-reverse lg:flex-row h-72 px-4">
        <div className="lg:w-[65%] pr-8 h-full flex flex-col justify-between">
          <div>
            <div className="text-4xl font-semibold mb-3">{title}</div>
            <div className="text-zinc-500 text-base italic">{summary}</div>
          </div>
          <div className="text-zinc-500 text-sm">
            <div>{`Author: ${author}`}</div>
            <div>{`Date: ${date}`}</div>
            <div className="text-[#0da955] italic">{`Tags: ${tags}`}</div>
          </div>
        </div>
        <div className="lg:grow border h-full">image</div>
      </div>
    </>
  );
}
