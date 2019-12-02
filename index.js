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