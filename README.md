
# CSS garden

A demonstration of what can be accomplished through CSS-based design. You can also to find the [online version here](http://geoom.github.io/css-garden/). 

![Cover site](/assets/img/cover.png)

If you want to bring this project to production environment, make sure to use the minified version of stylesheets that is inside of css folder (use `styles.min.css` intead of `styles.css` for production environment).

## Installation

### Platform & tools

You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.

* [Install node.js](http://nodejs.org/download/) (requires node.js version >= 0.8.4 and <= 0.10.33)
* Install Gulp as global npm module:

    ```
    npm install -g gulp
    ```
* Install Bower as global npm module:

    ```
    npm install -g bower
    ```

* [A polyfill for ES6-style Promises](https://github.com/jakearchibald/es6-promise): this is because PostCSS 5.0 does not support node 0.10, but you can polyfill the Promise API yourself (you don't need to upgrade to node to 4.1.1)

    ```
    npm install es6-promise
    ```
*Note: If you have problems like `Error: EACCES` make sure to execute command above as superuser.*

### Get the Code

Either clone this repository or fork it on GitHub and clone your fork:

```
git clone https://github.com/geoom/css-garden.git
cd css-garden
```

### Install local dependencies

```
npm install
bower install
```

## Building

The app made up of a number of css files that need to be merged into a final distribution for running. We use the Gulp tool to do this.

```
gulp build
```

## Running

### Start the Server

Run the server

```
gulp serve
```

## Browser Support

We only regularly test against Chrome 47 and occasionally against Firefox and Safari. The application should run on most modern browsers (including IE +9).

## Folders structure

Within the top-level folder you have the following structure (I only highlight relevant resources):

* `node_modules` contains build tasks for Gulp along with others, user-installed, Node packages
* `assets` contains most important resources such css files, scss files, img.
* `vendor` contains third-party libraries, most of cases are managed by bower
* `bower.json` configuracion file for bower packages
* `package.json` configuration file for node packages
* `index.html` what you have to execute.





