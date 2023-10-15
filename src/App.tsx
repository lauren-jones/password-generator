import { useState } from "react";
import { Checkbox } from "./components/checkbox";
import { PasswordLength } from "./components/passwordLength";
import { Password } from "./components/password";
import { PasswordStrength } from "./components/passwordStrength";
import { GenerateButton } from "./components/generateButton";
import { createPassword } from "./functions/createPassword";
import { StrengthRating } from "./types/strengthRating";
import { getPasswordStrength } from "./functions/getPasswordStrength";

function App() {
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(true);
  const [passwordLength, setPasswordLength] = useState(10);
  const [password, setPassword] = useState(
    createPassword(
      includeUppercase,
      includeNumbers,
      includeSymbols,
      passwordLength
    )
  );
  const [passwordStrength, setPasswordStrength] = useState<StrengthRating>(
    getPasswordStrength(
      includeUppercase,
      includeNumbers,
      includeSymbols,
      passwordLength
    )
  );

  const handleGeneratePassword = () => {
    const newPassword = createPassword(
      includeUppercase,
      includeNumbers,
      includeSymbols,
      passwordLength
    );
    setPassword(newPassword);
    const newPasswordStrength = getPasswordStrength(
      includeUppercase,
      includeNumbers,
      includeSymbols,
      passwordLength
    );
    setPasswordStrength(newPasswordStrength);
  };

  return (
    <div className="h-screen w-screen bg-slate-950 flex justify-center items-center font-mono">
      <div className="flex flex-col justify-center items-center w-full mx-8 md:mx-0 md:w-[540px]">
        <h1 className="text-slate-400 text-2xl mb-8">Password Generator</h1>
        <Password password={password} />
        <div className="text-white bg-slate-800 py-5 px-7 flex flex-col w-full">
          <PasswordLength
            value={passwordLength}
            onPasswordLengthChange={setPasswordLength}
          />
          <div className="flex flex-col mb-5">
            <Checkbox
              text="Include Lowercase Letters"
              isChecked={true}
              name="lowercase"
              isDisabled={true}
            />
            <Checkbox
              text="Include Uppercase Letters"
              isChecked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
              name="uppercase"
            />
            <Checkbox
              text="Include Numbers"
              isChecked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
              name="numbers"
            />
            <Checkbox
              text="Include Symbols"
              isChecked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
              name="symbols"
            />
          </div>
          <PasswordStrength rating={passwordStrength} />
          <GenerateButton handleGeneratePassword={handleGeneratePassword} />
        </div>
      </div>
    </div>
  );
}

export default App;
