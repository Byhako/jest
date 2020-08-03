import { arrayColors, arrayFruits } from '../arrays.js';

describe('Probando arrays', () => {
  test('Existe banana', () => {
    expect(arrayFruits()).toContain('banana');
  });

  test('Tienen 6 elementos', () => {
    expect(arrayColors()).toHaveLength(6);
  });
});
