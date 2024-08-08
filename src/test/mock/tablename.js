const { User  } = require('../../../database/models')

const tableNameObj = { user : User.tableName }

const tableNameArr = []
for (let key in tableNameObj ) {
    tableNameArr.push(tableNameObj[key])
} 

module.exports = { tableNames :  tableNameArr }