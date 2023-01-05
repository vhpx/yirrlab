import CircleIcon from "./CircleIcon";

export default function AnswerTab({ status, answer }) {
  return (
    <>
      <div className="flex gap-2 text-xl hover:cursor-pointer border p-4 items-center">
        <CircleIcon className="h-6 w-6" status={status} />
        <div>{answer}</div>
      </div>
    </>
  );
}
