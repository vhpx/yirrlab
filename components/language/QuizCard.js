export default function QuizCard({ index, question, status, children }) {
  return (
    <>
      <div
        className={`border-2 rounded-lg ${
          status === "correct"
            ? "border-green-500"
            : status === "incorrect"
            ? "border-red-500"
            : "border-zinc-500"
        }`}
      >
        <div
          className={`${
            status === "correct"
              ? "bg-green-300/30 text-green-700"
              : status === "incorrect"
              ? "bg-red-300/30 text-red-700"
              : "bg-zinc-500/20 text-zinc-500"
          } font-semibold text-2xl p-4 rounded-t-lg`}
        >
          Question {index + 1}: {question}
        </div>
        <div className="bg-[#fcfcfa] drop-shadow-lg rounded-b-lg">
          {children}
        </div>
      </div>
    </>
  );
}
