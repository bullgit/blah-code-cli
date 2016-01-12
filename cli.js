#!/usr/bin/env node
'use strict';
var meow = require('meow');
var blahCodeCli = require('./');

var cli = meow([
	'Usage',
	'  $ blah-code-cli [input]',
	'',
	'Options',
	'  --foo  Lorem ipsum. [Default: false]',
	'',
	'Examples',
	'  $ blah-code-cli',
	'  unicorns & rainbows',
	'  $ blah-code-cli ponies',
	'  ponies & rainbows'
]);

console.log(blahCodeCli(cli.input[0] || 'unicorns'));
