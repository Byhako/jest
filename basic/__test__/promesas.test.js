import { promesa } from '../promesas';

describe('Probando promesa', () => {
  test('Mi promesa', done => {
    const api = 'https://rickandmortyapi.com/api/character/';
    promesa(api).then(data => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });

  test('Resuelve promesa', () => {
    return expect(Promise.resolve('Hola')).resolves.toBe('Hola');
  });

  test('Rechaza con error', () => {
    return expect(Promise.reject('Error')).rejects.toBe('Error');
  })
});

// recuerda el done para funciones asincronas
