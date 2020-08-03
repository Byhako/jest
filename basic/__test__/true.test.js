import { isTrue, isFalse, isNull, isUndefined } from '../true.js';

describe('Probar nulos', () => {
  test('null', () => {
    expect(isNull()).toBeNull();
  })
});

describe('Probar verdadero', () => {
  test('verdaderos', () => {
    expect(isTrue()).toBeTruthy();
  })
});

describe('Probar falsos', () => {
  test('falsos', () => {
    expect(isFalse()).toBeFalsy();
  })
});

describe('Probar indefinidos', () => {
  test('indefinidos', () => {
    expect(isUndefined()).toBeUndefined();
  })
});
