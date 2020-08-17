import "regenerator-runtime/runtime.js";

const reverse = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'));
    } else {
      resolve(str.split('').reverse().join(''));
    }
  });
};

describe('Probando promesas', () => {
  test('Promesa con then.', () => {
    return reverse('Hola')
      .then(str => {
        expect(str).toBe('aloH');
      });
  });

  test('Probar asyn/await', async () => {
    const string = await reverse('Hola');
    expect(string).toBe('aloH');
  });
});
