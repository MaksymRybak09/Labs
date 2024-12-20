const factorial = require('./factorial');
const assert = require('assert');

const testData = [
    {value: 5, result: 120,},
    {value: 6, result: 720,},
    {value: 0, result: 1,},
    {value: -5, result: null,},
    {value: -6, result: null,},
];

describe('Factorial', () => {
    testData.forEach(testUnit => {
        it(`Should return ${testUnit.result} for ${testUnit.value}`, () => {
            assert.equal(factorial(testUnit.value), testUnit.result);
        });
    });
});