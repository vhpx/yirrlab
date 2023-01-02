export default function LessonTab({ icon, lessonName, status }) {
  const completeCss = "hover:bg-[#deeee5] hover:text-[#31a364]";
  const inProgressCss = "hover:bg-[#e7eef7] hover:text-[#2f88fd]";
  const notStartedCss = "hover:bg-zinc-300 hover:text-black";

  let css = "";
  switch (status) {
    case "complete":
      css = completeCss;
      break;
    case "inProgress":
      css = inProgressCss;
      break;
    default:
      css = notStartedCss;
  }

  return (
    <>
      <div
        className={`flex p-2 px-4 items-center hover:cursor-pointer transition duration-500 ${css}`}
      >
        <div className="w-8 mr-5">{icon}</div>
        <div className="text-2xl">{lessonName}</div>
      </div>
    </>
  );
}
