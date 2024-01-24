/**
 * Class implementing a Caesar Cipher for encryption and decryption of text.
 */
export class CaesarCipher {
    /**
     * Shifts a given character by a specified amount within the provided alphabet.
     *
     * @param {string} char - character to be shifted
     * @param {number} shift - amount to shift the character by, cannot be negative
     * @param {string=} alphabet - alphabet to be used for the cipher (defaults to English alphabet)
     * @param {boolean} decrypt - if true, performs decryption by shifting in the opposite direction
     * @returns {string} shifted character
     */
    private static shiftChar(
        char: string,
        shift: number,
        alphabet: string = "abcdefghijklmnopqrstuvwxyz",
        decrypt: boolean = false
    ): string {
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
    }

    /**
     * Processes a given string.
     *
     * @param {(string|Array.<string>)} input - text to be encrypted
     * @param {number} shift - amount to shift each character by, cannot be negative (will be converted to positive)
     * @param {string=} alphabet - alphabet to be used for the cipher (defaults to English alphabet)
     * @param {boolean} decrypt - if true, performs decryption by shifting in the opposite direction
     * @returns {(string|Array.<string>)} encrypted string
     */
    private static processString = (input: string, shift: number, alphabet?: string, decrypt?: boolean): string =>
        input
            .split("")
            .map((char) => this.shiftChar(char, shift, alphabet, decrypt))
            .join("");

    /**
     * Encrypts a given input string.
     *
     * @param {(string|Array.<string>)} input - text to be encrypted
     * @param {number} shift - amount to shift each character by, cannot be negative (will be converted to positive)
     * @param {string=} alphabet - alphabet to be used for the cipher (defaults to English alphabet)
     * @returns {(string|Array.<string>)} encrypted string
     */
    static encrypt<T extends string | string[]>(input: T, shift: number, alphabet?: string): T {
        if (Array.isArray(input)) {
            return input.map((str) => this.processString(str, shift, alphabet, false)) as T;
        }
        return this.processString(input, shift, alphabet, false) as T;
    }

    /**
     * Decrypts a given input string.
     *
     * @param {(string|Array.<string>)} input - text to be decrypted
     * @param {number} shift - amount to shift each character by, cannot be negative (will be converted to positive)
     * @param {string=} alphabet - alphabet to be used for the cipher (defaults to English alphabet)
     * @returns {(string|Array.<string>)} decrypted string
     */
    static decrypt<T extends string | string[]>(input: T, shift: number, alphabet?: string): T {
        if (Array.isArray(input)) {
            return input.map((str) => this.processString(str, shift, alphabet, true)) as T;
        }
        return this.processString(input, shift, alphabet, true) as T;
    }
}
