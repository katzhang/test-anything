var test = require('tape');
var feedCat = require(process.argv[2]);

test('feedCat', function(t) {
	t.equal(feedCat('whatever'), 'yum', 'whatever is fed returns yum');
	t.throws(function() {
		feedCat('chocolate');
	});
	t.end();
});