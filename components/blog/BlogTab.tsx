interface BlogTabProps {
  title: string;
  desp: string;
  image: string;
}

export default function BlogTab({ title, desp, image }: BlogTabProps) {
  return (
    <div className="bg-zinc-800 h-52 xl:h-60 rounded-lg">
      <div className="border-b h-[70%] border-zinc-500">{image}</div>
      <div className="p-2">
        <div className="text-white/70 text-xl font-bold">{title}</div>
        <div className="text-white/70 text-sm">{desp}</div>
      </div>
    </div>
  );
}
