interface CheckboxProps {
  text: string;
  isChecked: boolean;
  onChange?: () => void;
  name: string;
  isDisabled?: boolean;
}

export const Checkbox: React.FC<CheckboxProps> = ({
  text,
  isChecked,
  onChange,
  name,
  isDisabled = false,
}) => {
  return (
    <div className="mb-4 flex items-center">
      <input
        type="checkbox"
        id={name}
        className="accent-green-300 mr-6 w-5 h-5"
        checked={isChecked}
        onChange={onChange}
        disabled={isDisabled}
      />
      <label htmlFor={name} className="text-white text-lg">
        {text}
      </label>
    </div>
  );
};
