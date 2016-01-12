import test from 'ava';
import childProcess from 'child_process';

test.cb(t => {
	childProcess.execFile('./cli.js', {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.is(stdout.trim(), 'I need input. Enter `blah-code --help` if you need assistance`');
		t.end();
	});
});

test.cb(t => {
	childProcess.execFile('./cli.js', ['Hi!'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.is(stdout.trim(), 'blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah');
		t.end();
	});
});

test.cb(t => {
	childProcess.execFile('./cli.js', ['blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah, blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah', '--decode'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.is(stdout.trim(), 'hi!');
		t.end();
	});
});
