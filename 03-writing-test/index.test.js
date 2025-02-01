import {test} from 'node:test';
import {strict as assert} from 'node:assert';
import {sum} from './index.js';

test('should add correctly', () => {
    // Arange
    const a = 1;
    const b = 1;

    // Action
    const actualValue = sum(a, b);

    // Assert
    const expectedValue = 2;
    assert.strictEqual(actualValue, expectedValue);


});