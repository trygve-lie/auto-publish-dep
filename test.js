'use strict';

const { test } = require('tap');
const index = require('./index');

test('Index() - foo', (t) => {
    t.equal(index.foo(), 42, '.value should be 42');
    t.end();
});


test('Index() - bar', (t) => {
    t.equal(index.bar(), 'beers', '.value should be "beers"');
    t.end();
});
