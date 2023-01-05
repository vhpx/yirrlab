import GreenButton from "../../components/buttons/GreenButton";
import CircleIcon from "../../components/language/CircleIcon";

export default function QuizController({
  checked,
  finished,
  statuses,
  onCheck,
  onNext,
  disabled,
}) {
  return (
    <div className="p-2 gap-3 flex items-center self-end">
      {statuses && (
        <div className="flex gap-1">
          {statuses.map((status, index) => (
            <CircleIcon key={index} className="h-3 w-3" status={status} />
          ))}
        </div>
      )}

      <GreenButton
        label={checked ? (finished ? "Finish" : "Next") : "Check"}
        onClick={checked ? onNext : onCheck}
        disabled={disabled}
      />
    </div>
  );
}
