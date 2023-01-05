const GreenButton = ({ label, onClick, className, children, disabled }) => {
  return (
    <button
      className={`${
        disabled
          ? "bg-zinc-300 text-zinc-400 cursor-not-allowed"
          : "bg-[#0da955] hover:bg-[#0da955]/90 text-white"
      } transition duration-300 py-0.5 px-4 rounded font-semibold text-sm ${
        className || ""
      }`}
      onClick={disabled ? null : onClick}
    >
      {label || children}
    </button>
  );
};

export default GreenButton;
