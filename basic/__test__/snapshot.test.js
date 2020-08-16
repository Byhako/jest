import { shot } from '../snapshot';
import data from '../toto.json';

describe('Probando snapshot', () => {
  test('Verifica a Toto', () => {
    expect(shot(data)).toMatchSnapshot();
  });

  test('Siempre fallo :(', () => {
    const user = {
      createAt: new Date(),
      id: Math.floor(Math.random()*20)
    };
    expect(user).toMatchSnapshot();
  });

  test('Excepcion', () => {
    const user = {
      createAt: new Date(),
      id: 15
    };
    expect(user).toMatchSnapshot({
      createAt: expect.any(Date)
    })
  });
});

