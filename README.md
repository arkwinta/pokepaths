# Welcome to Pokepaths!

Given a starting position, mark any number of blocks as "obstructed" and an endpoint, generates and displays a viable path if available.

To get started, ensure you have the most recent version of node - then run `npm install` . Once that has completed, get the app going by running `npm start` and the app is served at [http://localhost:3000](http://localhost:3000)

## Notes
I'd like to address somethings I didn't have the opportunity to incorporate directly into the project at this point, but lots of considerations were made and I'd like to call some out: 

### Testing

I've added a cypress directory where I would plan on adding some tests.
I'd set up a board preloaded with a special `mockState` . This would be a board configuration, that when submitted to the find-path endpoint, would return directions that would be parsed for every valid state (thinking specifically of the changing direction tiles). I would use that response body as a mock response, and we'd have a self-contained test suite to kick the tires of our app without any external interference. If our test suite passed, but there is a production issue,the problem diagnosis time can be greatly reduced by knowing the front-end is uncompromised. Our tests _wont_ fail if the API changes - but we can leverage pact testing for that if it is a concern :)

### Accessibility 

We took some accessibility considerations here for visually impaired Pokemon, but there would be plenty more validation required before we can feel adequately ADA/WCAG compliant. However, it is a start and is usable by them in it's current state, and we want to start helping all Pokemon as soon as we can, as opposed to holding back the product until it is perfect. 

##############

Generic CRA content:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
