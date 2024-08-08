const { before, after } = require('mocha')
const { tableNames } = require('./tablename')
const db = require('../../../database/models')

after (async () => {
    try {
        const queryTableName = tableNames.map(tableName => `public."${tableName}"` )
        await db.sequelize.query(`TRUNCATE ${queryTableName.join(' , ')} RESTART IDENTITY CASCADE;`)
    } catch (error) {
        await Promise.reject(error)
    }
})
