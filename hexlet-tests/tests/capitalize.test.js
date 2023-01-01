import { strict as assert } from 'node:assert';
// import chai from 'chai';
import capitalize from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает неверно');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает неверно')
}

console.log('Все тесты пройдены');

assert(capitalize('hello') === 'Hello');
assert.equal(capitalize('hello'), 'Hello');
assert.equal(capitalize(''), '');

// assert.deepEqual({}, {});
// assert.deepEqual({ key: value }, { key: value });
// assert.deepEqual({ key: value }, { key: anotherValue });