const { default: expect } = require('expect');
const sum = require('./sum');
test('adds 1 + 2 to equal 3', () => {
    expect(sum.sum(1,2)).toBe(3);
});
test('subracts 1 from 2 to equal 1', () => {
    expect(sum.subtract(2,1)).toBe(1);
});
