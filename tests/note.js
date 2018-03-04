process.env.NODE_ENV = 'test';

let mongoose = require("mongoose");
let Note = require('../models/noteModel');

let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../server');
let should = chai.should();

chai.use(chaiHttp);

describe('Notes', () => {
    beforeEach((done) => {
        Note.remove({}, (err) => {
            done();
        });
    });

    //test /GET

    describe('/GET note', () => {
        it('it should GET all notes', (done) => {
            chai.request(server)
                .get('/note')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.be.eql(0);
                    done();
                });
        });
    });
});