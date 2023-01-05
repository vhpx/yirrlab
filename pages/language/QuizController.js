import CircleIcon from "../../components/language/CircleIcon";

export default function QuizController() {
  return (
    <>
      <div className="p-2 gap-3 flex items-center flex-row-reverse">
        <div className="bg-[#26b266] text-white hover:cursor-pointer px-2 py-1">
          Check
        </div>
        <div className="flex gap-1">
          <CircleIcon className="h-3 w-3 hover:cursor-pointer" />
          <CircleIcon
            className="h-3 w-3 hover:cursor-pointer"
            status="correct"
          />
          <CircleIcon
            className="h-3 w-3 hover:cursor-pointer"
            status="incorrect"
          />
          <CircleIcon
            className="h-3 w-3 hover:cursor-pointer"
            status="selected"
          />
          <CircleIcon className="h-3 w-3 hover:cursor-pointer" />
          <CircleIcon
            className="h-3 w-3 hover:cursor-pointer"
            status="correct"
          />
          <CircleIcon
            className="h-3 w-3 hover:cursor-pointer"
            status="incorrect"
          />
        </div>
      </div>
    </>
  );
}
