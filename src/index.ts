/**
 * Class implementing a Caesar Cipher for encryption and decryption of text.
 */
export class CaesarCipher {
    /**
     * Shifts a given character by a specified amount within the provided alphabet.
     *
     * @param char - character to be shifted
     * @param shift - amount to shift the character by, cannot be negative
     * @param alphabet - alphabet to be used for the cipher (defaults to English alphabet)
     * @param decrypt - if true, performs decryption by shifting in the opposite direction
     * @returns shifted character
     */
    private static shiftChar(
        char: string,
        shift: number,
        alphabet: string = "abcdefghijklmnopqrstuvwxyz",
        decrypt: boolean = false
    ): string {
        const alphabetLength = alphabet.length;
        // Check if the character is in the provided alphabet (both uppercase and lowercase)
        const charIndex = alphabet.indexOf(char.toLowerCase());

        // Check if the character is in the alphabet
        if (charIndex !== -1) {
            // Apply the shift with case maintained
            const isUpperCase = char === char.toUpperCase();
            const effectiveShift = decrypt ? -Math.abs(shift) : Math.abs(shift);
            const shiftIndex = (charIndex + effectiveShift) % alphabetLength;
            const shiftedChar = isUpperCase
                ? alphabet.charAt(shiftIndex < 0 ? shiftIndex + alphabetLength : shiftIndex).toUpperCase()
                : alphabet.charAt(shiftIndex < 0 ? shiftIndex + alphabetLength : shiftIndex);

            return shiftedChar;
        }

        return char;
    }

    /**
     * Encrypts a given input string.
     *
     * @param input - text to be encrypted
     * @param shift - amount to shift each character by, cannot be negative (will be converted to positive)
     * @param alphabet - alphabet to be used for the cipher (defaults to English alphabet)
     * @returns encrypted string
     */
    static encrypt(input: string, shift: number, alphabet?: string): string {
        return input
            .split("")
            .map((char) => this.shiftChar(char, shift, alphabet, false))
            .join("");
    }

    /**
     * Decrypts a given input string.
     *
     * @param input - text to be decrypted
     * @param shift - amount to shift each character by, cannot be negative (will be converted to positive)
     * @param alphabet - alphabet to be used for the cipher (defaults to English alphabet)
     * @returns decrypted string
     */
    static decrypt(input: string, shift: number, alphabet?: string): string {
        return input
            .split("")
            .map((char) => this.shiftChar(char, shift, alphabet, true))
            .join("");
    }
}
