const { default: TestRunner } = require('jest-runner');
const addFive = require('./addFive');

test('returns the number plus 5', () => {
    expect(addFive(2)).toBe(7);
    // if (addFive(10) !== 15) throw new Error('Expected addFive(10) to be 15');
    // if (addFive(-5) !== 0) throw new Error('Expected addFive(-5) to be 0');
    // if (addFive(0) !== 5) throw new Error('Expected addFive(0) to be 5');
});