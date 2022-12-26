# Unit testing with Mocha and Chai

Simple example to demonstrate unit testing with Mocha (test library) and Chai (assertion library). Intended to be used for a tutorial on my channel.

## Documentation

-   Mocha: https://mochajs.org/
-   Chai: https://www.chaijs.com
-   Node.js' assert module: https://nodejs.org/api/assert.html

## Recommended extensions for VS Code

-   [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
-   [Material Icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
-   [Mocha Test Explorer](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-mocha-test-adapter) + [Test Explorer UI](https://marketplace.visualstudio.com/items?itemName=hbenl.vscode-test-explorer)
    -   Make sure to add the test folder in `.vscode/settings.json`

## Benefits of writing unit tests (briefly)

-   Prevent bugs
-   Specify features
-   Automated tests on git push
-   Verify code correctness, in particular within a team
-   Better code structure, e.g. modularization
-   Develop code step by step
-   Verify refactorings

## Limitations

-   Only finitely many tests, whereas functions may have infinitely many allowed inputs
-   No complete security
-   Cannot substitute TypeScript (use [TypeScript](https://www.typescriptlang.org/)!)
-   For UI frameworks other testing frameworks (e.g. [Jest](https://jestjs.io/)) are required

## How to change the test folder

-   Use `.mocharc.json` and `.vscode/settings.json` as in the repo

## Usage of ES modules

-   Add `"type": "module"` in `package.json`
-   Add `--parallel` to the `test:watch` script in `package.json`
-   See also [this Mocha issue](https://github.com/mochajs/mocha/issues/4374)
