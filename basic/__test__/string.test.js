describe('Comprobar cadenas de texto', () => {

  const text = () => 'Un bonito texto';

  test('Contiene texto "bonito"', () => {
    expect(text()).toMatch(/bonito/);
  });
  test('Comprobar longitud', () => {
    expect(text()).toHaveLength(15);
  });
});
