const { MySqlDialect } = require("@sequelize/mysql");
const { Sequelize } = require("sequelize");
require('dotenv').config()

console.log("mysql port", process.env.MYSQL_PORT)
const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
})

const initDb = async () => {

    sequelize.authenticate().then((val) => {
        console.log("Database connected successfully")
    })
        .catch((e) => {
            console.log("failed to connect database : ", e)
        });

    sequelize.sync();
}
module.exports = { initDb, sequelize }