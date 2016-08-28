Simon’s React Course
====================

Prerequisites
-------------

* Atom
* Node (homebrew)
* Linters
* devtool
* rethinkdb (homebrew)
* React chrome extension
* Standard - forget semi-colons
* Destructuring


Installation and Hello World (Part 1)
-------------------------------------
`git checkout part1`
```
npm init -y
npm install —-save react react-dom
npm install -g webpack
npm install --save-dev babel-core babel-loader babel-preset-es2015 babel-preset-react
```

This allows us to transpile es2015 / es6 javascript and JSX

```
mkdir public
```

* create index.html
* .gitignore
* webpack.config.js
* ./app/components/Main.jsx

```
webpack -w
cd public
open index.html
```


ES2015 classes and components (Part 2)
--------------------------------------
`git checkout part2`
```
npm install --save react-bootstrap
```

* Convert Main.jsx to ES2015 class
* Create Home.jsx
* Discuss parent / child layout
* className
* lower case components vs Camel case


Routing (Part 3)
----------------
`git checkout part3`
```
npm install --save react-router history
```

* move render out of main.jsx into new app.jsx
* create routes
* define index route
* wrap children with navbar
* Add <Link> component

### Topics to discuss ###

* React - write the full render only
* Virtual DOM
* Components - reuseable


Server component (express) (Part 4)
-----------------------------------
`git checkout part4`

```
npm install —-save express socket.io
```

Create server.js

```
npm install --save react-router-bootstrap
```

* clean up errors / warnings
* add source maps

* discuss webpack-dev-server and hot module replacement.


Database and socket.io server (Part 5)
--------------------------------------
`git checkout part5`

```
brew install rethinkdb
npm install --save rethinkdbdash
```

* create schema.js and execute
* create socket server
* add socket.io to index.html
* handle incoming messages


Sending messages (Part 6)
-------------------------
`git checkout part6`
* input box
* state
* pure functions


React Native init (Part 7)
--------------------------
`git checkout part7`
```
brew install watchman
npm install -g react-native-cli
react-native init mobile
cd mobile
react-native run-ios
```


State (Part 8)
--------------
`git checkout part8`
* Redux
* mobX


Separate state (Part 9)
-----------------------
`git checkout part9`
* Move all state logic into store
* Tidy up application
* Create separate React components
* standard
* standard --fix


React native client (Part 10)
-----------------------------
`git checkout part10`

```
npm install --save mobx mobx-react
npm install --save socket.io-client
npm install babel-plugin-transform-decorators-legacy babel-preset-react-native-stage-0 --save-dev
```

* Flex
* style
* CooePush
