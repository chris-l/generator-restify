# generator-restify [![Build Status](https://secure.travis-ci.org/chris-l/generator-restify.png?branch=master)](https://travis-ci.org/chris-l/generator-restify)

A yeoman generator that will create the boilerplate for creating a [restify](http://mcavage.me/node-restify/) based RESTful API.

It uses [grunt](http://gruntjs.com) as the task runner. It also allows to use [jslint](http://www.jslint.com) or [jshint](http://jshint.com).

## About the folder structure

One of the most relevant parts of this generator is the auto-inclusion of files.

To create a new route, is only necessary to create a file in the `routes/` directory that looks like this:

```
module.exports = function (server) {
  server.get('/info/:param', function (req, res, next) {
  };

  server.put('/info/', function (req, res, next) {
  };
};
```

Just for being in the `routes` directory, the file will be automatically included. Is not necessary to do any other step.

## Installation

Install: `npm install -g generator-restify`

Create a new directory and enter inside of it:
```
mkdir some-app && cd some-app
```

Run the generator: 
```
yo restify
```


## License

MIT
