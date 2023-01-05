export default function CircleIcon({ status, className }) {
  let bgColor = "";
  switch (status) {
    case "correct":
      bgColor = "bg-[#25b166]";
      break;
    case "incorrect":
      bgColor = "bg-[#e73c3d]";
      break;
    case "selected":
      bgColor = "bg-[#d9d9d9]";
      break;
    default:
      bgColor = "bg-white border border-zinc-600/70";
  }

  return <div className={`${bgColor} ${className} rounded-full`}></div>;
}
