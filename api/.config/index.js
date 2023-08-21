require('dotenv').config()
const { createPool } = require('mysql')

const connection = createPool({
    host: process.env.dbHost,
    name: process.env.dbName,
    user: process.env.dbUser,
    password: process.env.dbPwd,
    port: process.env.dbPort,
    multipleStatements: true,
    connectionLimit: 30
})

module.exports = connection