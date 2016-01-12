# blah-code-cli [![Build Status](https://travis-ci.org/mischah/blah-code-cli.svg?branch=master)](https://travis-ci.org/mischah/blah-code-cli)

> My luminous module


## Install

```
$ npm install --save blah-code-cli
```


## Usage

```js
const blahCodeCli = require('blah-code-cli');

blahCodeCli('unicorns');
//=> 'unicorns & rainbows'
```


## API

### blahCodeCli(input, [options])

#### input

Type: `string`

Lorem ipsum.

#### options

##### foo

Type: `boolean`  
Default: `false`

Lorem ipsum.


## CLI

```
$ npm install --global blah-code-cli
```

```
$ blah-code-cli --help

  Usage
    blah-code-cli [input]

  Options
    --foo  Lorem ipsum. [Default: false]

  Examples
    $ blah-code-cli
    unicorns & rainbows
    $ blah-code-cli ponies
    ponies & rainbows
```


## License

MIT © [Michael Kühnel](http://michael-kuehnel.de)
