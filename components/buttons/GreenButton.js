const GreenButton = ({ label, onClick, className, children }) => {
  return (
    <button
      className={`bg-[#0da955] hover:bg-[#0da955]/90 transition duration-300 py-0.5 px-4 rounded font-semibold text-sm text-white ${
        className || ""
      }`}
      onClick={onClick}
    >
      {label || children}
    </button>
  );
};

export default GreenButton;
