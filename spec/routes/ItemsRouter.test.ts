import * as chai from "chai";
import app from "../../src/server";
import chaiHttp = require('chai-http');

chai.use(chaiHttp);
const expect = chai.expect;

describe('names resource', () => {
    beforeEach((done) => {
        return chai.request(app).del('api/v1/items').end(done);
            // .then((res) => {
            //     expect(res.status).to.equal(200);
            // })
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
        //createNewItem("kuku");
        return chai.request(app).post('/api/v1/items').send({"value": "kuku"}).then(res => {
            chai.request(app).get('/api/v1/items')
                .then(res => {
                    expect(res.body).to.have.length(1);
                    expect(res.body[0].name).to.be.eql("kuku");
                });

        });
    });

    function createNewItem(value: string) {
        chai.request(app).post('/api/v1/items').send({"value": value})
            .then((res) => {
                res.should.have.status(201);
            });
    }
});
