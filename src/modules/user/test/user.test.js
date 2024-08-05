const chai = require('chai')
const chaiHttp = require('chai-http')
const { expect } = chai;
const app = require('../../../app')
// const { before } = require("mocha");

chai.use(chaiHttp);

describe('Create User', () => {

    it('Should Success create user', (done) => {
        const payload = {
            name : 'User Test 1',
            password: 'password',
            birthDate: '1999-01-01',
            occupation: 'QA'
        }
        chai.request(app)
            .post('/api/v1/user')
            .send(payload)
            .end((err,res) => {
                if (err) {
                    done(err)
                }

                const { body, status } = res
                const expectedResponse = {
                    err: false,
                    code: 200,
                    data: {
                        name : payload.name,
                        occupation: payload.occupation
                    },
                    message: 'Success create new user'
                }
                expect(status).to.be.equal(201)
                expect(body).to.deep.equal(expectedResponse)
                
                done()
            })
    })

    it('Should Success find one user by id', (done) => {
        chai.request(app)
            .get(`/api/v1/user/1`)
            .end((err, res) => {
                if (err) {
                    done(err)
                }

                const { body, status } = res
                const { data } = body
                
                expect(status).to.be.equal(200)
                expect(data).to.have.property('id', 1)

                done()
            })
    })

    it('Should Success update user', (done) => {
        const payload = { name : 'EDIT EDIT'}
        chai.request(app)
            .put('/api/v1/user/1')
            .send(payload)
            .end((err,res) => {
                if (err) {
                    done(err)
                }

                const { body, status } = res
                const expectedResponse = {
                    err: false,
                    code: 200,
                    data: {
                        name : payload.name,
                        occupation: 'QA'
                    },
                    message: 'Success Update User'
                }

                expect(status).to.be.equal(200)
                expect(body).to.deep.equal(expectedResponse)

                done()
            })
    })

    it('Should Success Delete user', (done) => {
        chai.request(app)
            .delete('/api/v1/user/1')
            .end((err,res) => {
                if (err) {
                    done(err)
                }

                const { body, status} = res
                const expectedResponse = {
                    err: false,
                    code: 200,
                    data : null,
                    message : 'Success Delete User'
                }

                expect(status).to.be.equal(200)
                expect(body).to.deep.equal(expectedResponse)
            })
    })
})