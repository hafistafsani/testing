const { beforeEach, afterEach } = require('mocha')
const sinon = require('sinon')

class Sinon {
    static stub(origin, objectName) {
        let stub

        beforeEach(() => {
            stub = sinon.stub(origin, objectName)

            return stub
        })

        return stub
    }

    static restore(stub) {
        afterEach(() => {
            stub.restore()
        })
    }

    static createStub(origin, objectName, data) {
        const stub = sinon.stub(origin, objectName)

        stub.resolves(data)

        Sinon.restore(stub)
    }

    static throw(origin, objectName, data) {
        const stub = sinon.stub(origin, objectName)

        stub.throws(data)

        Sinon.restore(stub)
    }

    static returns(origin, objectName, data) {
        const stub = sinon.stub(origin, objectName)

        stub.returns(data)

        Sinon.restore(stub)
    }

    static createCallsFakeFunction(functionName, data) {
        const stub = sinon.stub()

        stub.callsFake(functionName)
        stub.resolves(data)
    }

}

module.exports = Sinon
