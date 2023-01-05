import CircleIcon from "./CircleIcon";

export default function AnswerTab({
  status,
  answer,
  onClick,
  disabled,
  isLast,
}) {
  return (
    <button
      className={`flex gap-2 w-full text-xl border p-4 items-center ${
        status === "correct"
          ? "text-green-700"
          : status === "incorrect" && "text-red-700"
      } ${isLast && "rounded-b-lg"}`}
      onClick={disabled ? null : onClick}
    >
      <CircleIcon className="h-6 w-6" status={status} />
      <div>{answer}</div>
    </button>
  );
}
