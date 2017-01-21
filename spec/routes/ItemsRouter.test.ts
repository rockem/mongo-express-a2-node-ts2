import * as chai from "chai";
import app from "../../src/server";
import chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

describe('names resource', () => {
    beforeEach(() => {
        return chai.request(app).del('/api/v1/items')
            .then(res => {
                expect(res.status).to.equal(200);
            });
    });

    it('retrieve empty list', () => {
        return chai.request(app).get('/api/v1/items')
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res.body).to.have.length(0);
            });
    });

    it('create new item', () => {
        return chai.request(app).post('/api/v1/items').send({"value": "kuku"}).then(res => {
            expect(res.status).to.equal(201);
            chai.request(app).get('/api/v1/items')
                .then(res => {
                    expect(res.body).to.have.length(1);
                    expect(res.body[0].title).to.be.eql("kuku");
                });

        });
    });

});
