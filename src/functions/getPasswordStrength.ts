import { StrengthRating } from "../types/strengthRating";

const strongThreshold = 15;
const mediumThreshold = 10;
const weakThreshold = 5;

const uppercaseScore = 4;
const numbersScore = 3;
const symbolsScore = 2;

const lengthPenalty = 5;

export const getPasswordStrength = (includeUppercase: boolean, includeNumbers: boolean, includeSymbols: boolean, passwordLength: number): StrengthRating => {
    let score = 0;

    if (includeUppercase) score += uppercaseScore;
    if (includeNumbers) score += numbersScore;
    if (includeSymbols) score += symbolsScore;

    score += passwordLength - lengthPenalty;

    if (score > strongThreshold) return 4;
    if (score > mediumThreshold) return 3;
    if (score > weakThreshold) return 2;
    return 1;
}