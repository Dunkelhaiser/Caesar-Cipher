import { it, expect, describe } from "vitest";
import { CaesarCipher } from "./index";

describe("caesar cipher", () => {
    describe("latin support", () => {
        it("returns crypted string in latin alphabet", () => {
            const text = "Hello My Beautiful World!";
            const result = CaesarCipher.encrypt(text, 7);
            expect(result).toBe("Olssv Tf Ilhbapmbs Dvysk!");
        });
        it("returns decrypted string in latin alphabet", () => {
            const text = "Olssv Tf Ilhbapmbs Dvysk!";
            const result = CaesarCipher.decrypt(text, 7);
            expect(result).toBe("Hello My Beautiful World!");
        });
    });

    describe("cyryllic support", () => {
        it("returns crypted string in cyrylic alphabet", () => {
            const text = "Привіт мій прекрасний диво-світ!";
            const result = CaesarCipher.encrypt(text, 7, "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя");
            expect(result).toBe("Цчнзощ уор цчйсчєшфнр їнзх-шзощ!");
        });
        it("returns decrypted string in cyrylic alphabet", () => {
            const text = "Цчнзощ уор цчйсчєшфнр їнзх-шзощ!";
            const result = CaesarCipher.decrypt(text, 7, "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя");
            expect(result).toBe("Привіт мій прекрасний диво-світ!");
        });
    });

    describe("japanese support", () => {
        it("returns crypted string in hiragana", () => {
            const text = "ハロー・マイ・ビューティフル・ワールド!";
            const result = CaesarCipher.encrypt(
                text,
                7,
                "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴ"
            );
            expect(result).toBe("ブヴー・ュカ・ペレーネオボヲ・アーヲバ!");
        });
        it("returns decrypted string in hiragana", () => {
            const text = "ブヴー・ュカ・ペレーネオボヲ・アーヲバ!";
            const result = CaesarCipher.decrypt(
                text,
                7,
                "ァアィイゥウェエォオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッツヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモャヤュユョヨラリルレロヮワヰヱヲンヴ"
            );
            expect(result).toBe("ハロー・マイ・ビューティフル・ワールド!");
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
});
