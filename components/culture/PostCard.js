import Image from "next/image";

export default function PostCard({
  title,
  summary,
  author,
  date,
  tags,
  imageUrl,
  disableBorder,
}) {
  return (
    <>
      <div
        className={`mb-4 flex flex-col-reverse lg:grid lg:grid-cols-2 gap-4 px-4 ${
          disableBorder || " pb-4 border-b border-zinc-300"
        }`}
      >
        <div className="h-full flex flex-col justify-between">
          <div className="mb-8 max-w-xl">
            <div className="text-4xl font-semibold mb-3">{title}</div>
            <div className="text-zinc-500 text-base italic line-clamp-3">
              {summary}
            </div>
          </div>
          <div className="text-zinc-500 text-sm">
            <div>{`Author: ${author}`}</div>
            <div>{`Date: ${date}`}</div>
            <div className="text-[#0da955] italic">{`Tags: ${tags}`}</div>
          </div>
        </div>
        <div className="flex justify-end overflow-hidden rounded-lg">
          <Image
            src={imageUrl}
            alt="Picture of the author"
            width={1152}
            height={746}
            className="object-cover h-full lg:max-w-lg rounded-lg"
          />
        </div>
      </div>
    </>
  );
}
