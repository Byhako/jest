import { shot } from '../snapshot';
import data from '../toto.json';

describe('Probando snapshot', () => {
  test('Verifica a Toto', () => {
    expect(shot(data)).toMatchSnapshot();
  });
});

