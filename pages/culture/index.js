import { Select } from "@mantine/core";
import PostCard from "../../components/culture/PostCard";
import Sidebar from "../../components/layout/Sidebar";
import { culturePosts } from "../../components/data/CulturePosts";

export default function CulturePage() {
  const posts = culturePosts?.map((post) => (
    <PostCard
      key={post.id}
      title={post.title}
      summary={post.summary}
      author={post.author}
      date={post.date}
      tags={post.tags}
      image={post.image}
    />
  ));
  return (
    <div className="h-screen">
      <div className="flex h-full">
        <Sidebar page="culture" />
        <div className="grow px-8 py-8">
          <div className="justify-end items-center mb-12 flex">
            <span>
              <Select
                placeholder="Sort by"
                data={["Date (oldest)", "Date (latest)", "Highest rated"]}
              />
            </span>
          </div>

          <div className="flex overflow-y-scroll flex-col gap-5">
            <PostCard
              title="Egestas congue quisque egestas diam in arcu cursus euismod"
              summary="pellentesque massa placerat duis ultricies lacus sed turpis
                    tincidunt id aliquet risus feugiat in ante metus dictum at
                    tempor commodo ullamcorper a lacus vestibulum aliquet risus
                    feugiat in ante metus dictum at tempor commodo ullamcorper a
                    lacus vestibulum sed arcu non odio euismod lacinia"
              author="John Cena"
              date="dd/mm/yyyy"
              tags="History, Religion, Cuisine"
              image="./peacock.jpeg"
            />

            <div className="w-full border"></div>

            <PostCard
              title="Egestas congue quisque egestas diam in arcu cursus euismod"
              summary="pellentesque massa placerat duis ultricies lacus sed turpis
                    tincidunt id aliquet risus feugiat in ante metus dictum at
                    tempor commodo ullamcorper a lacus vestibulum aliquet risus
                    feugiat in ante metus dictum at tempor commodo ullamcorper a
                    lacus vestibulum sed arcu non odio euismod lacinia"
              author="John Cena"
              date="dd/mm/yyyy"
              image="./peacock.jpeg"
              tags="History, Religion, Cuisine"
            />

            <div className="w-full border"></div>

            <PostCard
              title="Egestas congue quisque egestas diam in arcu cursus euismod"
              summary="pellentesque massa placerat duis ultricies lacus sed turpis
                    tincidunt id aliquet risus feugiat in ante metus dictum at
                    tempor commodo ullamcorper a lacus vestibulum aliquet risus
                    feugiat in ante metus dictum at tempor commodo ullamcorper a
                    lacus vestibulum sed arcu non odio euismod lacinia"
              author="John Cena"
              date="dd/mm/yyyy"
              tags="History, Religion, Cuisine"
              image="./featured-img.png"
            />

            {posts}
          </div>
        </div>
      </div>
    </div>
  );
}
