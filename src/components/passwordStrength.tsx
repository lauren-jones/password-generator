import { StrengthRating } from "../types/strengthRating";

interface PasswordStrengthProps {
  rating: StrengthRating;
}

const displayValues = {
  1: { colorClass: "bg-red-500", text: "TOO WEAK!" },
  2: { colorClass: "bg-orange-500", text: "WEAK" },
  3: { colorClass: "bg-yellow-500", text: "MEDIUM" },
  4: { colorClass: "bg-green-300", text: "STRONG" },
};

export const PasswordStrength: React.FC<PasswordStrengthProps> = ({
  rating,
}) => {
  return (
    <div className="w-full flex items-center justify-between bg-slate-900 px-6 py-4 mb-8">
      <p className="text-slate-400">STRENGTH</p>
      <div className="flex items-center">
        <p className="text-2xl mr-3 ">{displayValues[rating].text}</p>
        <div className="flex">
          {new Array<number>(rating).fill(0).map(() => {
            return (
              <div
                className={
                  "h-[28px] w-[10px] mr-2 " + displayValues[rating].colorClass
                }
              ></div>
            );
          })}
          {new Array<number>(4 - rating).fill(0).map(() => {
            return (
              <div className="h-[28px] w-[10px] border-2 border-white mr-2"></div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
