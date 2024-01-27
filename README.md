# Caesar-Cipher

Implementation of the Caesar Cipher encryption algorithm in JavaScript. The Caesar Cipher is a classic substitution cipher technique where each letter in the plaintext is shifted a certain number of places down or up the alphabet.

## Features

- TypeScript and JSDoc support
- User-defined alphabets
- Support of array inputs and returns
- Encryption and decryption

## Installation

```sh
npm install @dunkelhaiser/caesar-cipher
```

```sh
yarn add @dunkelhaiser/caesar-cipher
```

```sh
pnpm add @dunkelhaiser/caesar-cipher
```

```sh
bun add @dunkelhaiser/caesar-cipher
```

## Basic usage

### Importing the Library

#### Using ESM

With named import

```ts
import { CaesarCipher } from "@dunkelhaiser/caesar-cipher";
```

With named imports

```ts
import { encrypt, decrypt } from "@dunkelhaiser/caesar-cipher";
```

With default import

```ts
import CaesarCipher from "@dunkelhaiser/caesar-cipher";
```

#### Using CommonJS

With default import

```ts
const CaesarCipher = require("@dunkelhaiser/caesar-cipher");
```

With named imports

```ts
const { encrypt, decrypt } = require("@dunkelhaiser/caesar-cipher");
```

### Encrypt a string

```ts
CaesarCipher.encrypt("Hello My Beautiful World!", 7); // => "Olssv Tf Ilhbapmbs Dvysk!"
```

### Decrypt a string

```ts
CaesarCipher.decrypt("Olssv Tf Ilhbapmbs Dvysk!", 7); // => "Hello My Beautiful World!"
```

### Provide an array as a parameter

```ts
CaesarCipher.encrypt(["Hello", "My", "Beautiful", "World!"], 7); // => ["Olssv", "Tf", "Ilhbapmbs", "Dvysk!"]
```

### Use own alphabet

If you wish to use a custom alphabet for encryption and decryption, you can provide it as the third parameter:

```ts
CaesarCipher.encrypt("Привіт мій прекрасний диво-світ!", 7, "абвгґдеєжзиіїйклмнопрстуфхцчшщьюя"); // => "Цчнзощ уор цчйсчєшфнр їнзх-шзощ!"
```

### Numeric Support

If numbers are provided in the alphabet they also will be shifted, otherwise they stay untouched.

```ts
CaesarCipher.encrypt("12345", 5); // => "12345"
CaesarCipher.encrypt("12345", 5, "0123456789"); // => "67890"
```

## API

### encrypt(input, shift, alphabet) | decrypt(input, shift, alphabet)

| Name     | Type                 | Argument     | Default                      | Description                        |
| -------- | -------------------- | ------------ | ---------------------------- | ---------------------------------- |
| input    | `string \| string[]` | `<required>` |                              | text to be encrypted               |
| shift    | `number`             | `<required>` |                              | amount to shift each character by  |
| alphabet | `string`             | `<optional>` | `abcdefghijklmnopqrstuvwxyz` | alphabet to be used for the cipher |

## Contributing

### Bug Reporting

If you come across a bug or unexpected behavior, please take the time to report it. To file a bug report:

1. Check if the issue has already been reported by searching the [issues](https://github.com/Dunkelhaiser/Caesar-Cipher/issues).
2. If the issue hasn't been reported yet, open a new issue, providing as much detail as possible, including:

- A clear and concise title.
- A detailed description of the issue.
- Steps to reproduce the problem.
- Expected and actual behavior.

### Feature Proposals

To propose a new feature:

1. Check the [issues](https://github.com/Dunkelhaiser/Caesar-Cipher/issues) to ensure it hasn't been proposed before.
2. Open a new issue, clearly describing the new feature or enhancement you would like to see.
3. Provide any relevant details or use cases that will help understand the use of the proposed feature.

### Code Contributions

To contribute code:

1. Fork the repository.
2. Create a new branch for your changes with a specific prefix: `git checkout -b feat/your-feature`. Accepted prefixes: feat, fix, refactor, docs.
3. Make your changes, following the coding style.
4. Write unit tests for your changes.
5. Update the README or documentation if necessary.
6. Submit a pull request to the dev branch of the original repository.
7. Provide a detailed description in the pull request, explaining the purpose of your changes.

## License

Copyright (c) 2024 [Kyrylo Tymchyshyn](https://github.com/Dunkelhaiser)  
Licensed under the MIT license.

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W7LIYO1)
