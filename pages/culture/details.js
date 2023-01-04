import Image from "next/image";
import Layout from "../../components/layout/Layout";
import { Tabs } from "@mantine/core";
import { useState } from "react";
import CommentTab from "../../components/culture/CommentTab";
import { createServerSupabaseClient } from "@supabase/auth-helpers-nextjs";
import culturePosts from "../../components/data/CulturePosts";
import { useRouter } from "next/router";

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

const PostDetailsPage = () => {
  const availableTabs = ["comments"];
  const [selectedTab, setSelectedTab] = useState(availableTabs[0]);

  const router = useRouter();
  const { id } = router.query;

  const post = culturePosts.find((post) => post.id === id);

  const author = post?.author || "Unknown author";
  const date = post?.date || "dd/mm/yyyy";

  const title = post?.title || "Title";
  const summary = post?.summary || "Content";
  const tags = post?.tags || ["Tag1", "Tag2", "Tag3"];
  const imageUrl = post?.image || "/peacock.jpeg";

  return (
    <Layout>
      <div className="h-full max-h-full overflow-y-auto">
        <div className="p-4 md:px-8 lg:pt-8 lg:px-16 font-semibold text-zinc-500 overflow-y-auto">
          <div>Author: {author}</div>
          <div>Date: {date}</div>
          <div className="text-black text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-bold my-8">
            {title}
          </div>
          <div className="text-[#0da955] text-sm md:text-base">
            Tags: <span className="italic">{tags}</span>
          </div>
        </div>

        <Image
          src="/peacock.jpeg"
          alt="Picture of the author"
          width={1152}
          height={746}
          className="object-cover h-[50vh] w-full"
        />

        <div className="p-4 md:px-8 lg:py-8 lg:px-16 text-zinc-600 font-semibold mb-32">
          <div className="border-b-2 border-zinc-400 pb-1 mb-4">Summary</div>
          <div className="min-h-[16rem]">{summary}</div>

          <Tabs
            value={selectedTab}
            onChange={setSelectedTab}
            color="green"
            className="mb-4"
          >
            <Tabs.List>
              {availableTabs.map((str) => (
                <Tabs.Tab
                  key={str}
                  value={str}
                  onClick={() => setSelectedTab(str)}
                >
                  <div
                    className={`capitalize font-bold ${
                      selectedTab === str ? "text-[#0da955]" : "text-zinc-500"
                    }`}
                  >
                    {str}
                  </div>
                </Tabs.Tab>
              ))}
            </Tabs.List>
          </Tabs>

          {selectedTab === "comments" && <CommentTab />}
        </div>
      </div>
    </Layout>
  );
};

export default PostDetailsPage;
