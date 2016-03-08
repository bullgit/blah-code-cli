#!/usr/bin/env node
'use strict';
var meow = require('meow');
var chalk = require('chalk');
var blahCode = require('blah-code');

var cli = meow([
	'Usage',
	'  $ blah-code [input]',
	'',
	'Options',
	'  --encode, -e  Returns the blah code representation of the given text input [Default: true]',
	'  --decode, -d  Returns regular text of the given blah code [Default: false]',
	'  --ooks, -o    Uses this weird ape language instead of blah code [Default: false]',
	'  --help,   -h  Shows the help',
	'',
	'Examples',
	'  $ blah-code "Hi 👻"',
	'  blaa bluh. blah bleh bluuh. blaah bluh. bluuh bluuh blaah bluuh blaa. bluuh blehh bleeh bleeh blaah',
	'',
	'  $ blah-code "blaa bluh. blah bleh bluuh. blaah bluh. bluuh bluuh blaah bluuh blaa. bluuh blehh bleeh bleeh blaah" --decode',
	'  Hi 👻'
], {
	alias: {
		h: 'help',
		e: 'encode',
		d: 'decode',
		o: 'ooks'
	}
});

if (cli.input[0] === undefined) {
	console.log(chalk.red('I need input. Enter `' + chalk.bold('blah-code --help') + '` if you need assistance.'));
	process.exit(1);
} else if (cli.flags.decode) {
	if (cli.flags.ooks) {
		console.log(chalk.green(blahCode.decode(cli.input[0], 'ooks')));
	} else {
		console.log(chalk.green(blahCode.decode(cli.input[0])));
	}
} else {
	if (cli.flags.ooks) { // eslint-disable-line
		console.log(chalk.green(blahCode.encode(cli.input[0], 'ooks')));
	} else {
		console.log(chalk.green(blahCode.encode(cli.input[0])));
	}
}
