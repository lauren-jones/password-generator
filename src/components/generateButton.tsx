interface GenerateButtonProps {
  handleGeneratePassword: () => void;
}

export const GenerateButton: React.FC<GenerateButtonProps> = ({
  handleGeneratePassword,
}) => {
  return (
    <button
      className="bg-green-300 flex justify-center items-center text-slate-950 py-5 mb-3"
      onClick={(e) => {
        e.preventDefault();
        handleGeneratePassword();
      }}
    >
      <p className="mr-3 font-bold tracking-wider">GENERATE</p>
      <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="#24232C"
          d="m5.106 12 6-6-6-6-1.265 1.265 3.841 3.84H.001v1.79h7.681l-3.841 3.84z"
        />
      </svg>
    </button>
  );
};
