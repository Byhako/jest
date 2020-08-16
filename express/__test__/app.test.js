const request = require('supertest');
const app = require('../app');

describe('Probando express', () => {
  test('Debe responder metodo GET', done => {
    request(app).get('/').then(response => {
      expect(response.statusCode).toBe(200);
      done();
    });
  });
});
