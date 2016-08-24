# react_course
Accompanying source files for my React course
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
* input box
* state
* pure functions


Redux (Part 7)
--------------



Channels (Part 7)
-----------------
TBD

React native client (Part 8)
----------------------------
```
brew install watchman
npm install -g react-native-cli
react-native init mobile
cd mobile
react-native run-ios
```
