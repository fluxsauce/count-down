# count-down

A command-line utility for "counting down" letters & numbers, printing each iteration.

Requires [Node.js](https://nodejs.org/) 6 or higher; includes a [Node Version Manager](https://github.com/creationix/nvm) `.nvmrc` for convenience.

## Usage

```bash
./count-down.js <command> <value>
```

### Commands

* `help`: instructions
* `integer`: takes an integer & counts down to "0"
  * ex: `count-down integer 5`
* `alpha`: takes a single lowercase ASCII letter & counts down to "a"
  * ex: `count-down alpha f`
* `string`: takes a string of lowercase ASCII letters & counts down each until all characters are "a"
  * ex: `count-down string food`
* `gnirts`: same as the string command, but decreases from last character
  * ex: `count-down gnirts food`

## Development

Visit http://editorconfig.org/ for instructions on how to configure your IDE or editor to use the included `.editorconfig` file.

```bash
npm i
```

Check coding standards:

```bash
npm run lint
```
