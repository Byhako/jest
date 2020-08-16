import { promesa } from '../promesas';

describe('Probando promesa', () => {
  test('Mi promesa', done => {
    const api = 'https://rickandmortyapi.com/api/character/';
    promesa(api).then(data => {
      expect(data.results.length).toBeGreaterThan(0);
      done();
    });
  });
});

// recuerda el done para funciones asincronas
