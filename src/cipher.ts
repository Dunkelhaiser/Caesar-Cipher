/**
 * Shifts a given character by a specified amount within the provided alphabet.
 *
 * @param char - character to be shifted
 * @param shift - amount to shift the character by, cannot be negative
 * @param alphabet - alphabet to be used for the cipher (defaults to English alphabet)
 * @param decrypt - if true, performs decryption by shifting in the opposite direction
 * @returns shifted character
 */
const shiftChar = (char: string, shift: number, alphabet: string = "abcdefghijklmnopqrstuvwxyz", decrypt: boolean = false): string => {
    const alphabetLength = alphabet.length;
    const alphabetLower = alphabet.toLowerCase();
    // Check if the character is in the provided alphabet (both uppercase and lowercase)
    const charIndex = alphabetLower.indexOf(char.toLowerCase());

    // Check if the character is in the alphabet
    if (charIndex !== -1) {
        // Apply the shift with case maintained
        const isUpperCase = char === char.toUpperCase();
        const effectiveShift = decrypt ? -Math.abs(shift) : Math.abs(shift);
        const shiftIndex = (charIndex + effectiveShift) % alphabetLength;
        const shiftedChar = isUpperCase
            ? alphabetLower.charAt(shiftIndex < 0 ? shiftIndex + alphabetLength : shiftIndex).toUpperCase()
            : alphabetLower.charAt(shiftIndex < 0 ? shiftIndex + alphabetLength : shiftIndex);

        return shiftedChar;
    }

    return char;
};

/**
 * Processes a given string.
 *
 * @param input - text to be encrypted
 * @param shift - amount to shift each character by, cannot be negative (will be converted to positive)
 * @param alphabet - alphabet to be used for the cipher (defaults to English alphabet)
 * @param decrypt - if true, performs decryption by shifting in the opposite direction
 * @returns encrypted string
 */
const processString = (input: string, shift: number, alphabet?: string, decrypt?: boolean): string =>
    input
        .split("")
        .map((char) => shiftChar(char, shift, alphabet, decrypt))
        .join("");

/**
 * Encrypts a given input string.
 *
 * @param input - text to be encrypted
 * @param shift - amount to shift each character by, cannot be negative (will be converted to positive)
 * @param alphabet - alphabet to be used for the cipher (defaults to English alphabet)
 * @returns encrypted string
 */
export const encrypt = <T extends string | string[]>(input: T, shift: number, alphabet?: string): T => {
    if (Array.isArray(input)) {
        return input.map((str) => processString(str, shift, alphabet, false)) as T;
    }
    return processString(input, shift, alphabet, false) as T;
};

/**
 * Decrypts a given input string.
 *
 * @param input - text to be decrypted
 * @param shift - amount to shift each character by, cannot be negative (will be converted to positive)
 * @param alphabet - alphabet to be used for the cipher (defaults to English alphabet)
 * @returns decrypted string
 */
export const decrypt = <T extends string | string[]>(input: T, shift: number, alphabet?: string): T => {
    if (Array.isArray(input)) {
        return input.map((str) => processString(str, shift, alphabet, true)) as T;
    }
    return processString(input, shift, alphabet, true) as T;
};
