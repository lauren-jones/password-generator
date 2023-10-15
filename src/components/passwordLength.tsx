interface PasswordLengthProps {
  value: number;
  onPasswordLengthChange: (newValue: number) => void;
}

export const PasswordLength: React.FC<PasswordLengthProps> = ({
  value,
  onPasswordLengthChange,
}) => {
  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between mb-3">
        <label htmlFor="PasswordLength" className="text-lg">
          Password Length
        </label>
        <p className="text-green-300 text-3xl">{value}</p>
      </div>
      <input
        type="range"
        className="w-full cursor-pointer appearance-none h-2 bg-slate-950 accent-green-300 border-none"
        min="5"
        value={value}
        max="20"
        step="1"
        id="PasswordLength"
        onChange={(e) => onPasswordLengthChange(+e.target.value)}
      />
    </div>
  );
};
