import { Rating } from "@mantine/core";

const UserComment = ({ name, date = "dd/mm/yyyy", content, rating = 0 }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row md:gap-2 md:items-center">
        <div className="font-bold">{name}</div>
        <div className="flex gap-2 items-center">
          <Rating value={rating} readOnly />
          <div className="text-zinc-500">{date}</div>
        </div>
      </div>
      <div className="text-zinc-500">{content}</div>
      <button className="text-zinc-600 underline text-sm">Reply</button>
    </div>
  );
};

export default UserComment;
