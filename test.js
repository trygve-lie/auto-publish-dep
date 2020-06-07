'use strict';

const { test } = require('tap');
const index = require('./index');

test('Index() - foo', (t) => {
    t.equal(index.foo(), 42, '.value should be 42');
    t.end();
});

test('Index() - bar', (t) => {
    t.equal(index.bar(), 'beer', '.value should be "beer"');
    t.end();
});

test('Index() - hello', (t) => {
    t.equal(index.hello(), 'Hola', '.value should be "Hola"');
    t.end();
});

test('Index() - world', (t) => {
    t.equal(index.world(), 'World', '.value should be "World"');
    t.end();
});