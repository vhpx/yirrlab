import { Select } from "@mantine/core";
import PostCard from "../../components/culture/PostCard";
import Sidebar from "../../components/layout/Sidebar";
import culturePosts from "../../components/data/CulturePosts";
import Layout from "../../components/layout/Layout";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";

export const getServerSideProps = async (ctx) => {
  const supabase = createServerSupabaseClient(ctx);

  const {
    data: { session },
  } = await supabase.auth.getSession();

  const isDev = process.env.NODE_ENV === "development";

  if (!session && !isDev)
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };

  return {
    props: {
      initialSession: session,
      user: session.user,
    },
  };
};

export default function CulturePage() {
  const posts = culturePosts?.map((post, idx) => (
    <PostCard
      key={post.id}
      id={post.id}
      title={post.title}
      summary={post.summary}
      author={post.author}
      date={post.date}
      tags={post.tags}
      imageUrl={post.image}
      disableBorder={idx === culturePosts.length - 1}
    />
  ));

  return (
    <Layout>
      <div className="flex h-full max-h-full">
        <Sidebar page="culture" />
        <div className="overflow-y-auto border-l border-zinc-300 w-full p-8">
          <div className="justify-end items-center mb-12 flex">
            <span>
              <Select
                placeholder="Sort by"
                data={["Date (oldest)", "Date (latest)", "Highest rated"]}
              />
            </span>
          </div>
          <div className="flex flex-col gap-4 pb-32">{posts}</div>
        </div>
      </div>
    </Layout>
  );
}
