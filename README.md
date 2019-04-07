This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

I've added enzyme, ajv, jest-enzyme, enzyme-adapter-react-16, check-prop-types.

This is an effort to TDD the entire app. The effort is to write the tests first, then write the code.  I did this without chai-enzyme, but may consider using it next time since the enzyme documentation uses it.

I set up travis for pull requests.