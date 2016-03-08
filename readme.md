[![very bullgit](https://img.shields.io/badge/very-bullgit-1393d5.svg?style=flat)](https://bullg.it/)
[![npm version](https://img.shields.io/npm/v/blah-code-cli.svg?style=flat)](https://www.npmjs.org/package/blah-code-cli)
[![Build Status](https://travis-ci.org/bullgit/blah-code-cli.svg?branch=master)](https://travis-ci.org/bullgit/blah-code-cli)
[![dependency Status](https://david-dm.org/bullgit/blah-code-cli/status.svg)](https://david-dm.org/bullgit/blah-code-cli#info=dependencies)
[![devDependency Status](https://david-dm.org/bullgit/blah-code-cli/dev-status.svg)](https://david-dm.org/bullgit/blah-code-cli#info=devDependencies)
[![XO code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![Unicorn approved](https://img.shields.io/badge/unicorn-approved-ff69b4.svg?style=flat)](https://www.youtube.com/watch?v=ihXfH-zR8qA&feature=youtu.be&t=10s)

# blah-code-cli

> Encode and decode blah code via the command line


## Install

```
$ npm install blah-code-cli -g
```


## Usage

```
$ blah-code --help          

  Encode and decode blah code via the command line

  Usage
    $ blah-code [input]

  Options
    --encode, -e  Returns the blah code representation of the given text input [Default: true]
    --decode, -d  Returns regular text of the given blah code [Default: false]
    --ooks, -o    Uses this weird ape language instead of blah code [Default: false]
    --help,   -h  Shows the help

  Examples
    $ blah-code "Hi 👻"
    blaa bluh. blah bleh bluuh. blaah bluh. bluuh bluuh blaah bluuh blaa. bluuh blehh bleeh bleeh blaah

    $ blah-code "blaa bluh. blah bleh bluuh. blaah bluh. bluuh bluuh blaah bluuh blaa. bluuh blehh bleeh bleeh blaah" --decode
    Hi 👻
```

## Related

- [blah-code](https://github.com/bullgit/blah-code) - API for this module

## License

MIT © [Michael Kühnel](http://michael-kuehnel.de)
