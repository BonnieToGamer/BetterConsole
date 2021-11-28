# BetterConsole [![NPM version](https://img.shields.io/npm/v/@bonnietogamer/better-console.svg?style=flat)](https://www.npmjs.com/package/@bonnietogamer/better-console) [![NPM monthly downloads](https://img.shields.io/npm/dm/@bonnietogamer/better-console.svg?style=flat)](https://www.npmjs.com/package/@bonnietogamer/better-console) [![NPM total downloads](https://img.shields.io/npm/dt/@bonnietogamer/better-console.svg?style=flat)](https://www.npmjs.com/package/@bonnietogamer/better-console)
> A better Javascript console.

## Installation 
Install with [npm](https://www.npmjs.com/):
```sh
$ npm install @bonnietogamer/better-console
```

## Usage
When writing to the console this project will add the project name as a prefix to the console.
By default both the prefix and the paramaters are colored.

```js
require('@bonnietogamer/better-console');

console.log('test');
console.log('test', false);
```
### Output:

![Example 1](https://github.com/BonnieToGamer/BetterConsole/blob/main/screenshots/1.png)

![Example 2](https://github.com/BonnieToGamer/BetterConsole/blob/main/screenshots/2.png)

### Example 2:

```js
require('@bonnietogamer/better-console');

console.log('log');
console.log('log', false);
console.error('error');
console.error('error', false);
console.info('info');
console.info('info', false);
console.warn('warn');
console.warn('warn', false);
```

### Output:

![Example 3](https://github.com/BonnieToGamer/BetterConsole/blob/main/screenshots/3.png)

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
