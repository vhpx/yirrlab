import AnswerTab from "./AnswerTab";

export default function QuizCard({ status, question, children }) {
  let bgColor = "";
  switch (status) {
    case "correct":
      bgColor = "bg-[#9cdab9]";
      break;
    case "incorrect":
      bgColor = "bg-[#f1a6a7]";
      break;
    default:
      bgColor = "bg-[#d1d6da]";
  }

  return (
    <>
      <div className="">
        <div className={`${bgColor} font-semibold text-2xl p-4`}>
          {question}
        </div>
        <div className="bg-[#fcfcfa] drop-shadow-lg">{children}</div>
      </div>
    </>
  );
}
