import { Rating, Textarea } from "@mantine/core";
import UserComment from "./UserComment";
import { useState } from "react";
import { useUserData } from "../../hooks/useUserData";
import GreenButton from "../buttons/GreenButton";

const CommentTab = () => {
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);

  const mockComments = [
    {
      name: "John Cena",
      date: "dd/mm/yyyy",
      content: "This post is great! I love it!",
      rating: 5,
    },
    {
      name: "Tom Cruise",
      date: "dd/mm/yyyy",
      content: "Not bad, but I think it could be better",
      rating: 3,
    },
    {
      name: "Will Smith",
      date: "dd/mm/yyyy",
      content: "I love this post! I love it!",
      rating: 5,
    },
    {
      name: "Tom Hanks",
      date: "dd/mm/yyyy",
      content: "Bad post, I hate it!",
      rating: 1,
    },
  ];

  const [comments, setComments] = useState(mockComments);

  const { data: user } = useUserData();

  const submitComment = () => {
    setComments((prev) => [
      {
        name: user.name || user.email,
        date: new Date().toLocaleDateString(),
        content: comment,
        rating,
      },
      ...prev,
    ]);

    setComment("");
    setRating(0);
  };

  return (
    <div>
      <div className="flex flex-col mb-4 gap-2">
        <div className="flex gap-4 items-center">
          <div>How do you want to rate this content?</div>
          <Rating value={rating} onChange={setRating} />
        </div>
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your comment here"
          rows={5}
          // Change focus color to green
          styles={{
            input: {
              "&:focus": {
                borderColor: "#0da955",
                boxShadow: "0 0 0 1px #0da955",
              },
            },
          }}
        />

        <GreenButton className="self-end" onClick={submitComment}>
          Comment
        </GreenButton>
      </div>

      <div className="grid gap-6">
        {comments.map((comment) => (
          <UserComment
            key={comment.name}
            name={comment.name}
            date={comment.date}
            content={comment.content}
            rating={comment.rating}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentTab;
