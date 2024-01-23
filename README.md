# Caesar-Cipher

Implementation of the Caesar Cipher encryption algorithm in JavaScript. The Caesar Cipher is a classic substitution cipher technique where each letter in the plaintext is shifted a certain number of places down or up the alphabet.

## Info

This library has TypeScript and JSDoc support.

## Installation

```sh
npm install @dunkelhaiser/caesar-cipher       # npm
yarn add @dunkelhaiser/caesar-cipher          # yarn
pnpm add @dunkelhaiser/caesar-cipher          # pnpm
bun add @dunkelhaiser/caesar-cipher           # bun
```

## Basic usage

### Import

```ts
import { CaesarCipher } from "@dunkelhaiser/caesar-cipher";
```

### Encrypt a string

```ts
CaesarCipher.encrypt("Hello My Beautiful World!", 7); // => "Olssv Tf Ilhbapmbs Dvysk!"
```

### Decrypt a string

```ts
CaesarCipher.decrypt("Olssv Tf Ilhbapmbs Dvysk!", 7); // => "Hello My Beautiful World!"
```

### Use own alphabet

```ts
CaesarCipher.encrypt("Привіт мій прекрасний диво-світ!", 7, "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя"); // => "Цчнзощ уор цчйсчєшфнр їнзх-шзощ!"
```

## API

### encrypt(input, shift, alphabet) | decrypt(input, shift, alphabet)

| Name     | Type     | Argument     | Default                      | Description                        |
| -------- | -------- | ------------ | ---------------------------- | ---------------------------------- |
| input    | `string` | `<required>` |                              | text to be encrypted               |
| shift    | `number` | `<required>` |                              | amount to shift each character by  |
| alphabet | `string` | `<optional>` | `abcdefghijklmnopqrstuvwxyz` | alphabet to be used for the cipher |

## Contributing

When contributing, please follow the coding style, add unit tests for everything you change and either add changes to README and CHANGELOG( with changeset ) yourself or write a detailed description of your changes in the pull request.

## License

Copyright (c) 2024 [Kyrylo Tymchyshyn](https://github.com/Dunkelhaiser)  
Licensed under the MIT license.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W7LIYO1)
