# How to run typescript Project 


## Creating file tsconfig.json and package.json
- npm init -y
- npx tsc --init

## Compiling our TypeScript
- npx tsc 

## Activate watch mode
Setting the compiler to watch mode means that your TypeScript file will be recompiled every time changes are made
- npx tsc -w


## Scripts overview

### npm run start:dev
Starts the application in development using nodemon and ts-node to do cold reloading.

### npm run build
Builds the app at build, cleaning the folder first.

### npm run start
Starts the app in production by first building the project with npm run build, and then executing the compiled JavaScript at build/index.js.


#### Cold reloading
ts-node for running TypeScript code directly without having to wait for it be compiled, 
and nodemon, to watch for changes to our code and automatically restart when a file is changed.

- npx ts-node .\src\index.ts

### Creating production builds
Install rimraf, a cross-platform tool that acts like the rm -rf command (just obliterates whatever you tell it to).

"build": "rimraf ./dist && tsc",


## ESLint defines the code conventions
- npm install eslint --save-dev
- npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

 - Ignoring files we don't want to lint
Create an .eslintignore in order to prevent ESLint from linting stuff we don't want it to.

- Rules : 
There are three modes for a rule in eslint: off, warn, and error.

  - "off" means 0 (turns the rule off completely)
  - "warn" means 1 (turns the rule on but won't make the linter fail)
  - "error" means 2 (turns the rule on and will make the linter fail)


#### [Prettier](https://prettier.io/docs/en/configuration.html) performs the auto-formatting based on the ESLint rules 
- npm install --save-dev prettier
