import { add } from '../src/add.js';
import assert from 'assert';

it('add(3, 4) should be 7', () => {
    assert.equal(add(3, 4), 7);
});