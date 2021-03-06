<img src="/render-jsx-logo.svg" width="300"/>

# [`render-jsx`](https://loreanvictor.github.io/render-jsx/) JS starter project

1. use this template
2. clone your repo and `cd` to it
3. `npm i`
4. `npm start` for development 
  - entry file is in `src/index.jsx`
  - dev version is served on `localhost:3000` by default
5. `npm run build` for building your web app / bundle and ship it
  - built files are in `dist/`

👉 Don't forget to checkout [the docs](https://loreanvictor.github.io/render-jsx/).

<br>

## Stack

- [`Babel`](https://babeljs.io) is used for transpilation.
  - [`@babel/plugin-transform-react-jsx`](https://babeljs.io/docs/en/babel-plugin-transform-react-jsx) is used for custom JSX syntax.
  - can be configured in `.babelrc`
- [`webpack`](https://webpack.js.org) is used for building & dev.
  - configuration in `webpack.common.js`
  - dev specific config in `webpack.dev.js`
  - prod specific config in `webpack.prod.js`
