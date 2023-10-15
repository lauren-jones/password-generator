import { getRandomInt } from "./getRandomInt";

export const createPassword = (includeUppercase: boolean, includeNumbers: boolean, includeSymbols: boolean, passwordLength: number): string => {
    const uppercaseLetters: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers: string = "0123456789";
    const symbols: string = "@$%&*!.#";

    let availableCharacters: string = "abcdefghijklmnopqrstuvwxyz";
    let password: string = "";

    if (includeUppercase) {
      availableCharacters += uppercaseLetters;
    }
    if (includeNumbers) {
      availableCharacters += numbers;
    }
    if (includeSymbols) {
      availableCharacters += symbols;
    }

    const availableCharactersLength = availableCharacters.length;

    for (let i = passwordLength; i > 0; i--) {
      let selectedCharacter =
        availableCharacters[getRandomInt(availableCharactersLength)];
      password += selectedCharacter;
    }

    return password;
  }