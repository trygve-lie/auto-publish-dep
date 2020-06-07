'use strict';

const foo = () => {
    const value = 39;
    const plus = 3;
    return value + plus;
};
module.exports.foo = foo;

const bar = () => {
    return 'beer';
};
module.exports.bar = bar;

const hello = () => {
    return 'Hola';
};
module.exports.hello = hello;

const world = () => {
    return 'World';
};
module.exports.world = world;