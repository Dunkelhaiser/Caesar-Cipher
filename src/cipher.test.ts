import { it, expect, describe } from "vitest";
import DefaultCipher, { CaesarCipher, encrypt } from "./index";

describe("caesar cipher", () => {
    describe("latin support", () => {
        const decryptedText = "Hello My Beautiful World!";
        const encryptedText = "Olssv Tf Ilhbapmbs Dvysk!";
        it("returns crypted string in latin alphabet", () => {
            const result = CaesarCipher.encrypt(decryptedText, 7);
            expect(result).toBe(encryptedText);
        });
        it("returns decrypted string in latin alphabet", () => {
            const result = CaesarCipher.decrypt(encryptedText, 7);
            expect(result).toBe(decryptedText);
        });
    });

    describe("cyryllic support", () => {
        const decryptedText = "Привіт мій прекрасний диво-світ!";
        const encryptedText = "Цчнзощ уор цчйсчєшфнр їнзх-шзощ!";
        it("returns crypted string in cyrylic alphabet", () => {
            const result = CaesarCipher.encrypt(decryptedText, 7, "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя");
            expect(result).toBe(encryptedText);
        });
        it("returns decrypted string in cyrylic alphabet", () => {
            const result = CaesarCipher.decrypt(encryptedText, 7, "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя");
            expect(result).toBe(decryptedText);
        });
    });

    describe("japanese support", () => {
        const decryptedText = "ハロー・マイ・ビューティフル・ワールド!";
        const encryptedText = "ブヴー・ュカ・ペレーネオボヲ・アーヲバ!";
        it("returns crypted string in hiragana", () => {
            const result = CaesarCipher.encrypt(
                decryptedText,
                7,
                "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴ"
            );
            expect(result).toBe(encryptedText);
        });
        it("returns decrypted string in hiragana", () => {
            const result = CaesarCipher.decrypt(
                encryptedText,
                7,
                "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴ"
            );
            expect(result).toBe(decryptedText);
        });
    });

    describe("numeric support", () => {
        const decryptedText = "12345";
        const encryptedText = "67890";
        it("does not shift numbers if they are not provided in alphabet", () => {
            const result = CaesarCipher.encrypt(decryptedText, 5);
            expect(result).toBe(decryptedText);
        });
        it("does shift numbers if they are provided in alphabet", () => {
            const result = CaesarCipher.encrypt(decryptedText, 5, "0123456789");
            expect(result).toBe(encryptedText);
        });
    });

    it("if provided shift is negative convert it to positive", () => {
        const text = "Hello My Beautiful World!";
        const result = CaesarCipher.encrypt(text, -7);
        expect(result).toBe("Olssv Tf Ilhbapmbs Dvysk!");
    });

    it("ignores alphabet case", () => {
        const text = "Hello My Beautiful World!";
        const result = CaesarCipher.encrypt(text, 7, "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
        expect(result).toBe("Olssv Tf Ilhbapmbs Dvysk!");
    });

    it("can work with arrays of strings", () => {
        const strArr = ["Hello", "My", "Beautiful", "World!"];
        const result = CaesarCipher.encrypt(strArr, 7);
        expect(result).toStrictEqual(["Olssv", "Tf", "Ilhbapmbs", "Dvysk!"]);
    });

    describe("import types", () => {
        it("supports named method imports", () => {
            const decryptedText = "Hello My Beautiful World!";
            const encryptedText = "Olssv Tf Ilhbapmbs Dvysk!";
            const result = encrypt(decryptedText, 7);
            expect(result).toBe(encryptedText);
        });
        it("supports default object import", () => {
            const decryptedText = "Hello My Beautiful World!";
            const encryptedText = "Olssv Tf Ilhbapmbs Dvysk!";
            const result = DefaultCipher.encrypt(decryptedText, 7);
            expect(result).toBe(encryptedText);
        });
        it("supports named object import", () => {
            const decryptedText = "Hello My Beautiful World!";
            const encryptedText = "Olssv Tf Ilhbapmbs Dvysk!";
            const result = CaesarCipher.encrypt(decryptedText, 7);
            expect(result).toBe(encryptedText);
        });
    });
});
