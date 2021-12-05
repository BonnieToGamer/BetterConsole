# even-better-console 
[![NPM version](https://img.shields.io/npm/v/even-better-console.svg?style=flat)](https://www.npmjs.com/package/even-better-console) [![NPM monthly downloads](https://img.shields.io/npm/dm/even-better-console.svg?style=flat)](https://www.npmjs.com/package/even-better-console) [![NPM total downloads](https://img.shields.io/npm/dt/even-better-console.svg?style=flat)](https://www.npmjs.com/package/even-better-console)
> An even better Node.js console.
------

## Installation 
Install with [npm](https://www.npmjs.com/):
```sh
$ npm install even-better-console
```

## Usage
When writing to the console this project will add the project name as a prefix to the console.
By default both the prefix and the paramaters are colored.

```js
const console = require('even-better-console');

console.log('test');
console.options.logWithColor = false;
console.log('test');
```
### Output:

![Example 1](https://github.com/BonnieToGamer/even-better-console/blob/main/screenshots/1.png)

![Example 2](https://github.com/BonnieToGamer/even-better-console/blob/main/screenshots/2.png)

### Example 2:

```js
const console = require('even-better-console');

console.log('log');
console.options.logWithColor = false;
console.log('log');
console.error('error');
console.options.errorWithColor = false;
console.error('error');
console.info('info');
console.options.infoWithColor = false;
console.info('info');
console.warn('warn');
console.options.warnWithColor = false;
console.warn('warn');
```

### Output:

![Example 3](https://github.com/BonnieToGamer/even-better-console/blob/main/screenshots/3.png)

## About
<details>
<summary><strong>Contributing</strong></summary>

Pull requests are always welcome. For bugs and feature requests, [please create an issue](../../issues/new).

</details>
<details>
<summary><strong>Running Tests</strong></summary>

Running and reviewing unit tests is a great way to get familiarized with a library and its API. You can install dependencies and run tests with the following command:

```sh
$ npm install && npm test
```

</details>

## License

Copyright © 2021, [BonnieToGamer](https://github.com/BonnieToGamer).
Released under the [MIT License](LICENSE).

***
