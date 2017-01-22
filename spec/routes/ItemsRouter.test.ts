import * as chai from "chai";
import app from "../../src/server";
import chaiHttp = require('chai-http');
import mongoose = require('mongoose');

chai.use(chaiHttp);
const expect = chai.expect;

mongoose.connect('mongodb://localhost/test');

describe('names resource', () => {

    let ITEMS_PATH = '/api/v1/items';

    beforeEach(() => {
        return chai.request(app).del(ITEMS_PATH)
            .then(res => {
                expect(res.status).to.equal(200);
            });
    });

    it('retrieve empty list', () => {
        return chai.request(app).get(ITEMS_PATH)
            .then(res => {
                expect(res.status).to.equal(200);
                expect(res).to.be.json;
                expect(res.body).to.have.length(0);
            });
    });

    it('create new item', () => {
        return chai.request(app).post(ITEMS_PATH).send({"value": "kuku"}).then(res => {
            expect(res.status).to.equal(201);
            chai.request(app).get(ITEMS_PATH)
                .then(res => {
                    expect(res.body).to.have.length(1);
                    expect(res.body[0].title).to.be.eql("kuku");
                });

        });
    });

});
