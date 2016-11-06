const expect = require('expect');
const request = require('supertest');

const {app} = require('./../server');

describe('GET /todos/:id', () => {
  it('should return an object with correct data', (done) => {
    request(app)
      .get('/1450137600')
      .expect(200)
      .expect((res) => {
        expect(res.body).toEqual({
          unix: 1450137600,
          natural: 'December 15, 2015'
        });
      })
      .end(done);
  });
});
