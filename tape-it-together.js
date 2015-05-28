var test = require('tape');
var fancify = require(process.argv[2]);

test('fancify returns string wrapped in ~*~', function(t) {
	t.equal(fancify('Hello'), '~*~Hello~*~');
	t.end();
});

test('fancify takes an optional second argument that converts the string into ALLCAPS', function(t) {
	t.equal(fancify('Hello', true), '~*~HELLO~*~');
	t.end();
});

test('fancify takes a third optional argument that determines the character in the middle', function(t) {
	t.equal(fancify('Hello', false, '!'), '~!~Hello~!~');
	t.end();
});