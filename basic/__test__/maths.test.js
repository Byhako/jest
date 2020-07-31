import { sumar, restar, multiplicar, dividir } from '../maths.js';

describe('Calculos basicos', () => {
  test('Probando suma', () => {
    expect(sumar(1, 1)).toBe(2);
  })
  test('Probando resta', () => {
    expect(restar(1, 1)).toBe(0);
  })
  test('Probando multiplicación', () => {
    expect(multiplicar(1, 1)).toBe(1);
  })
  test('Probando división', () => {
    expect(dividir(1, 1)).toBe(1);
  })
});
