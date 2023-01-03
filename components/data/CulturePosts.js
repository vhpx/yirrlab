const posts = [
  {
    title: "Yirrgay Dialects",
    summary:
      "Yirrgay is a dialect of the Yolngu language spoken by the Yirrganydji people of northeast Arnhem Land, Australia.",
    author: "Yirrganydji",
    date: "2021-08-01",
    tags: "History, Religion, Cuisine",
    image: "/peacock.jpeg",
  },
  {
    title: "Egestas congue quisque egestas diam in arcu cursus euismod",
    summary:
      "pellentesque massa placerat duis ultricies lacus sed turpistincidunt id aliquet risus feugiat in ante metus dictum attempor commodo ullamcorper a lacus vestibulum aliquet risusfeugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia",
    author: "John Cena",
    date: "2021-08-01",
    tags: "History, Religion, Cuisine",
    image: "/peacock.jpeg",
  },
  {
    title: "Yirrgay Dialects",
    summary:
      "Yirrgay is a dialect of the Yolngu language spoken by the Yirrganydji people of northeast Arnhem Land, Australia.",
    author: "Yirrganydji",
    date: "2021-08-01",
    tags: "History, Religion, Cuisine",
    image: "/peacock.jpeg",
  },
  {
    title: "Egestas congue quisque egestas diam in arcu cursus euismod",
    summary:
      "pellentesque massa placerat duis ultricies lacus sed turpistincidunt id aliquet risus feugiat in ante metus dictum attempor commodo ullamcorper a lacus vestibulum aliquet risusfeugiat in ante metus dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu non odio euismod lacinia",
    author: "John Cena",
    date: "2021-08-01",
    tags: "History, Religion, Cuisine",
    image: "/peacock.jpeg",
  },
].map((post, idx) => ({
  id: idx.toString(),
  ...post,
}));

export default posts;
