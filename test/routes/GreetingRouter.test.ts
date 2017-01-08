import * as mocha from 'mocha';
import * as chai from 'chai';
import chaiHttp = require('chai-http');

import app from '../../src/server';

chai.use(chaiHttp);
const expect = chai.expect;

describe('greeting resource', () => {

  it('retrieve greeting', () => {
    return chai.request(app).get('/api/v1/greeting')
      .then(res => {
        expect(res.status).to.equal(200);
        expect(res).to.be.json;
        expect(res.body.value).to.eql('Hello, World!')
      });
  });

});
