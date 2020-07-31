import { numbers } from '../numbers.js';

describe('Comparar números', () => {
  test('Mayor que', () => {
    expect(numbers(1,1)).toBeGreaterThan(1);
  });

  test('Mayor o igual que', () => {
    expect(numbers(1,1)).toBeGreaterThanOrEqual(2);
  });

  test('Menor que', () => {
    expect(numbers(1,1)).toBeLessThan(5);
  });

  test('Menor o igual que', () => {
    expect(numbers(1,1)).toBeLessThanOrEqual(5);
  });

  test('Sumando Flotantes', () => {
    expect(numbers(0.1,0.1)).toBeCloseTo(0.2);
  });
});
