describe('Comparadores comunes', () => {
  const user = {
    name: 'Toto',
    apellido: 'Toro'
  };
  const user2 = {
    name: 'Toto',
    apellido: 'Toro'
  };

  test('Igualdad de elementos', () => {
    expect(user).toEqual(user2);
    // expect(user).not.toEqual(user2);
  });
})