import "regenerator-runtime/runtime.js";
import { promesa } from '../promesas';

describe('Probando async/await', () => {
  test('Error en api', async () => {
    const apiError = 'https://httpstat.us/404';
    const peticion = promesa(apiError);
    await expect(peticion).rejects.toEqual(Error('Request failed with status code 404'));
  });

  test('Peticion a Api', async () => {
    const api = 'https://rickandmortyapi.com/api/character/';
    const data = await promesa(api);
    expect(data.results.length).toBeGreaterThan(0);
  });
});
