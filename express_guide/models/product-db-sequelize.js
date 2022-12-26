const { Sequelize, DataTypes } = require('sequelize')

const sequelize = require('../util/database')
/* 
  实际上这里sequelize 是一个完全配置的sequelize环境,
  它有连接池, 但也有sequelize的所有功能
*/
// sequelize.define(modelName, attributes, options)
const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: false
  },
  imageURL: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
})


module.exports = Product