
# CSS garden

A demonstration of what can be accomplished through CSS-based design

## Installation

### Platform & tools

You need to install Node.js and then the development tools. Node.js comes with a package manager called [npm](http://npmjs.org) for installing NodeJS applications and libraries.

* [Install node.js](http://nodejs.org/download/) (requires node.js version >= 0.8.4 and <= 0.10.33)
* Install Gulp as global npm module:

    ```
    npm install -g gulp
    ```

* [A polyfill for ES6-style Promises](https://github.com/jakearchibald/es6-promise): this is because PostCSS 5.0 does not support node 0.10, but you can polyfill the Promise API yourself (you don't need to upgrade to node to 4.1.1)

    ```
    npm install es6-promise
    ```

### Get the Code

Either clone this repository or fork it on GitHub and clone your fork:

	```
	git clone https://github.com/geoom/css-garden.git
	cd css-garden
	```

### Install local dependencies

    ```
    npm install
    ```

## Building

The app made up of a number of css files that need to be merged into a final distribution for running. We use the Gulp tool to do this.

    ```
    gulp build
    ```

## Running

### Start the Server

* Run the server

    ```
    gulp serve
    ```



