import test from 'ava';
import childProcess from 'child_process';

test.cb(t => {
	childProcess.execFile('./cli.js', {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.is(stdout.trim(), 'I need input. Enter `blah-code --help` if you need assistance.');
		t.end();
	});
});

test.cb(t => {
	childProcess.execFile('./cli.js', ['Huhu 👻'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.is(stdout.trim(), 'blaa bluh. blah blah blaa. blah bleh bleeh. blah blah blaa. blaah bluh. bluuh bluuh blaah bluuh blaa. bluuh blehh bleeh bleeh blaah');
		t.end();
	});
});

test.cb(t => {
	childProcess.execFile('./cli.js', ['blaa bluh. blah blah blaa. blah bleh bleeh. blah blah blaa. blaah bluh. bluuh bluuh blaah bluuh blaa. bluuh blehh bleeh bleeh blaah', '--decode'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.is(stdout.trim(), 'Huhu 👻');
		t.end();
	});
});

test.cb(t => {
	childProcess.execFile('./cli.js', ['Hi 👻', '--ooks'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.is(stdout.trim(), 'Oook! Ook!. Ook? Ook Oook. Ook?! Ook!. Oook Oook Ook?! Oook Oook!. Oook Oook? Ook!? Ook!? Ook?!');
		t.end();
	});
});

test.cb(t => {
	childProcess.execFile('./cli.js', ['Oook! Ook!. Ook? Ook Oook. Ook?! Ook!. Oook Oook Ook?! Oook Oook!. Oook Oook? Ook!? Ook!? Ook?!', '--decode', '--ooks'], {
		cwd: __dirname
	}, (err, stdout) => {
		t.ifError(err);
		t.is(stdout.trim(), 'Hi 👻');
		t.end();
	});
});
