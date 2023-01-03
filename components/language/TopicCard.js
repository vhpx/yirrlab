export default function TopicCard({ status, topicName, children }) {
  const completeCss = "bg-[#deeee5] text-[#31a364]";
  const inProgressCss = "bg-[#e7eef7] text-[#2f88fd]";
  const notStartedCss = "bg-zinc-300 text-black";

  const completeBar = (
    <div className="text-white font-semibold rounded-md text-xs p-1 px-2 bg-[#31a364]">
      Complete
    </div>
  );

  const inProgressBar = (
    <div className="text-white font-semibold rounded-md text-xs p-1 px-2 bg-[#2f88fd]">
      In progress
    </div>
  );

  const notStartedBar = (
    <div className="text-white font-semibold rounded-md text-xs p-1 px-2 bg-[#33363f]">
      Not started
    </div>
  );

  let statusBar = "";
  let css = "";
  switch (status) {
    case "complete":
      css = completeCss;
      statusBar = completeBar;
      break;
    case "inProgress":
      css = inProgressCss;
      statusBar = inProgressBar;
      break;
    default:
      css = notStartedCss;
      statusBar = notStartedBar;
  }

  return (
    <>
      <div className="bg-[#f7f7f7] h-fit drop-shadow-lg text-zinc-500">
        <div
          className={`flex justify-between items-center border-b-4 p-4 px-5 border-white ${css}`}
        >
          <div className="text-4xl font-semibold">{`Topic: ${topicName}`}</div>
          {statusBar}
        </div>
        {children}
      </div>
    </>
  );
}