# verb [![NPM version](https://img.shields.io/npm/v/verb.svg)](https://www.npmjs.com/package/verb) [![Build Status](https://img.shields.io/travis/jonschlinkert/verb.svg)](https://travis-ci.org/jonschlinkert/verb)

> Powerful, highly pluggable and easy-to-use documentation generator with an expressive API. Use any docs parser or template engine, supports gulp plugins, middleware...

- [Install](#install)
- [Usage](#usage)
- [CLI](#cli)
  * [Commands](#commands)
    + [help](#help)
    + [init](#init)
    + [diff](#diff)
  * [Run tasks](#run-tasks)
- [API](#api)
- [Apps](#apps)
- [TODO](#todo)
- [License](#license)

_(TOC generated by [verb](https://github.com/verbose/verb) using [markdown-toc](https://github.com/jonschlinkert/markdown-toc))_

## Install

To get started, you'll first need to install `verb` globally using [npm][]:

Install globally with [npm](https://www.npmjs.com/)

```sh
$ npm i -g verb
```

***

## Usage

```sh
$ verb <command> [args]
```

## CLI

_(WIP)_

### Commands

#### help

_(TODO)_

Get started with Verb.

```js
$ verb help
```

#### init

_(TODO)_

Get started with Verb.

```js
$ verb init
```

Upon running `init`, verb will prompt you for answers to the following questions:

#### diff

Show a diff of a file's contents, pre- and post-render.

```js
$ verb --diff
```

**Example diff**

<img width="440" alt="screen shot 2015-12-14 at 1 50 55 am" src="https://cloud.githubusercontent.com/assets/383994/11774633/395439a0-a205-11e5-880b-cf5d84acf991.png">

_(gray is unchanged, red is deleted, green is new)_

### Run tasks

To run a task on the `base` app, just pass the name of the task to run.

```sh
$ verb <task name> [options]
```

Unless overridden by the user, the `base` app is the default app that ships with Verb. This app doesn't really "verb" anything, but it will prompt you for a few answers (if you choose), to store data that's commonly needed by templates, like `author.name`, GitHub `username`, etc.

**Example**

Run task `bar`:

```sh
$ verb bar
```

## API

### [create](index.js#L26)

Create a customized `Verb` constructor that calls the given `fn` when an instance is created.

**Params**

* `fn` **{Function}**
* `returns` **{Function}**

**Example**

```js
var Verb = create(function(verb) {
  // add stuff to `verb`
});
var verb = new Verb();
```

### [Verb](index.js#L39)

Create an instance of `Verb` with the given `options`

**Params**

* `options` **{Object}**: Configuration options to initialize with.

**Example**

```js
var Verb = require('verb');
var verb = new Verb(options);
```

### [.process](index.js#L102)

Similar to [copy](#copy) but calls a plugin `pipeline` if passed on the `options`. This allows plugin pipelines to be programmatically built-up and dynamically changed on-the-fly.

**Params**

* `files` **{Object}**
* `options` **{Object}**
* `cb` **{Function}**
* `returns` **{Stream}**: Returns a [vinyl][] src stream

**Example**

```js
verb.process({src: ['a.txt', 'b.txt']}, options);
```

### [.each](index.js#L126)

Verb `files` configurations in parallel.

**Params**

* `config` **{Object}**
* `cb` **{Function}**

**Example**

```js
verb.each(files, function(err) {
  if (err) console.log(err);
});
```

### [.eachSeries](index.js#L148)

Verb `files` configurations in series.

**Params**

* `config` **{Object}**
* `cb` **{Function}**

**Example**

```js
verb.eachSeries(files, function(err) {
  if (err) console.log(err);
});
```

### [.scaffold](index.js#L180)

Verb files from a declarative [scaffold][] configuration.

**Params**

* `scaffold` **{Object}**: Scaffold configuration
* `cb` **{Function}**: Callback function

**Example**

```js
var Scaffold = require('scaffold');
var scaffold = new Scaffold({
  options: {cwd: 'source'},
  posts: {
    src: ['content/*.md']
  },
  pages: {
    src: ['templates/*.hbs']
  }
});

verb.scaffold(scaffold, function(err) {
  if (err) console.log(err);
});
```

## Apps

_(TODO)_

## TODO

* [x] publish a fast, composable, highly extendable project app with a user-friendly and expressive API!
* [x] support sub-apps (to any level of nesting)
* [x] support streams, tasks, and plugins compatible with both [gulp][] and [assemble][assemble-core]
* [x] make it super easy to run specific tasks from any app or sub-app, programmatically or via CLI
* [x] support _instance plugins_ that allow you to easily add functionality and features to verb
* [x] support any template engine
* [x] support using any number of template engines at once, so that different file types can simultaneously be handled by the engine that was registered for that file type
* [x] support templates as [vinyl][] files, simple to use template collections and lists (for pagination, sorting, groups etc)
* [x] support middleware that can be run on all files or specific files, and at specific points during the _build process_ (like `onLoad`, `preRender`, `postRender`, etc)
* [x] 820+ unit tests
* [ ] create and publish apps (we created a handful of apps that we've been using locally, these will be published shortly)
* [ ] CLI docs (started)
* [ ] User help (e.g. when the user does `verb help` or just `verb`)
* [ ] API docs
* [ ] App guidelines and conventions

## Related projects

* [assemble](https://www.npmjs.com/package/assemble): Static site generator for Grunt.js, Yeoman and Node.js. Used by Zurb Foundation, Zurb Ink, H5BP/Effeckt,… [more](https://www.npmjs.com/package/assemble) | [homepage](http://assemble.io)
* [assemble-core](https://www.npmjs.com/package/assemble-core): The core assemble application with no presets or defaults. All configuration is left to the… [more](https://www.npmjs.com/package/assemble-core) | [homepage](https://github.com/assemble/assemble-core)
* [base-methods](https://www.npmjs.com/package/base-methods): base-methods is the foundation for creating modular, unit testable and highly pluggable node.js applications, starting… [more](https://www.npmjs.com/package/base-methods) | [homepage](https://github.com/jonschlinkert/base-methods)
* [base-resolver](https://www.npmjs.com/package/base-resolver): 'base-methods' plugin for resolving and loading globally installed npm modules. | [homepage](https://github.com/jonschlinkert/base-resolver)
* [base-runner](https://www.npmjs.com/package/base-runner): Orchestrate multiple instances of base-methods at once. | [homepage](https://github.com/jonschlinkert/base-runner)
* [resolve-modules](https://www.npmjs.com/package/resolve-modules): Resolves local and global npm modules that match specified patterns, and returns a configuration object… [more](https://www.npmjs.com/package/resolve-modules) | [homepage](https://github.com/jonschlinkert/resolve-modules)

## Running tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/jonschlinkert/verb/issues/new).

## Author

**Jon Schlinkert**

* [github/jonschlinkert](https://github.com/jonschlinkert)
* [twitter/jonschlinkert](http://twitter.com/jonschlinkert)

## License

Copyright © 2016 [Jon Schlinkert](https://github.com/jonschlinkert)
Released under the MIT license.

***

_This file was generated by [verb](https://github.com/verbose/verb) on January 03, 2016._