import { promesa } from '../promesas';

describe('Probando async/await', () => {
  test('Error en api', async () => {
    const apiError = 'https://httpstat.us/404';
    const peticion = promesa(apiError);
    await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'));
  });

  test('Peticion a Api', async () => {
    const api = 'https://rickandmortyapi.com/api/character/';
    await promesa(api).then(data => {
      expect(data.results.length).toBeGreaterThan(0);
    });
    // const data = await promesa(api);
    // expect(data.results.length).toBeGreaterThan(0);
  });
});
