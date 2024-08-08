const { describe } = require('mocha')
require('./mock')


describe('User Test', () => {
    require('../modules/user/test')
})