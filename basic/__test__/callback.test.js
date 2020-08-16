import { callbackHell } from '../callback';

describe('Probanco callback', () => {
  test('Callback', done => {
    const otroCb = (data) => {
      expect(data).toBe('Hola');
      done();
    };
    callbackHell(otroCb);
  });
});
