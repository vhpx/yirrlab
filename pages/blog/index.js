import BlogTab from "../../components/blog/BlogTab";

export default function BlogPage() {
  return (
    <div className="bg-zinc-700 h-screen p-12">
      <div className="text-center text-white/70 text-3xl font-bold">
        Blog Category
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 p-8 gap-7">
        <BlogTab title="Title" desp="Desp" image="Image" />
        <BlogTab title="Title" desp="Desp" image="Image" />
        <BlogTab title="Title" desp="Desp" image="Image" />
        <BlogTab title="Title" desp="Desp" image="Image" />
        <BlogTab title="Title" desp="Desp" image="Image" />
        <BlogTab title="Title" desp="Desp" image="Image" />
        <BlogTab title="Title" desp="Desp" image="Image" />
        <BlogTab title="Title" desp="Desp" image="Image" />
        <BlogTab title="Title" desp="Desp" image="Image" />
      </div>
    </div>
  );
}
