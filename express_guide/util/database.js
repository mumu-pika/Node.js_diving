// const mysql = require('mysql2')

// const pool = mysql.createPool({
//   host:'localhost',
//   user: 'root',
//   database: 'mumusql',
//   password: '123456'
// })

// module.exports = pool.promise()

// 使用sequelize
const { Sequelize } = require('sequelize')

// Option 3: Passing parameters separately (other dialects)
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: /* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// });
const sequelize = new Sequelize('mumusql', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
})

module.exports = sequelize
