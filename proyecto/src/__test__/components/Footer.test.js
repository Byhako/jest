import React from 'react';
import { mount } from 'enzyme';
import Footer from '../../components/Footer';

describe('Probando el Footer', () => {
  const footer = mount(<Footer />);
  test('Render del Footer', () => {
    expect(footer.length).toEqual(1);
  });

  test('Render del titulo', () => {
    expect(footer.find('.Footer-title').text()).toEqual('Platzi Store');
  });
});
