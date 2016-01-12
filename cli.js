#!/usr/bin/env node
'use strict';
var meow = require('meow');
var blahCode = require('blah-code');

var cli = meow([
	'Usage',
	'  $ blah-code [input]',
	'',
	'Options',
	'  --encode, -e  Returns the blah code representation of the given text input [Default: true]',
	'  --decode, -e  Returns regular text of the given blah code [Default: false]',
	'  --help,   -h  Shows the help',
	'',
	'Examples',
	'  $ blah-code Hi!',
	'  blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah',
	'',
	'  $ blah-code --decode "blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah"',
	'  hi!'
], {
	alias: {
		h: 'help',
		e: 'encode',
		d: 'decode'
	}
});

if (cli.input[0] === undefined) {
	console.log('I need input. Enter `blah-code --help` if you need assistance`');
} else if (cli.flags.decode) {
	console.log(blahCode.decode(cli.input[0]));
} else {
	console.log(blahCode.encode(cli.input[0]));
}
