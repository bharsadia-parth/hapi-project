const { DataTypes } = require("sequelize")
const {sequelize} = require("../config/sequelize")
const UserModel = sequelize.define('users', {
    "id": {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    "fname": {
        type:  DataTypes.STRING,
        allowNull: false,
    },
    "lname": {
        type:  DataTypes.STRING,
        allowNull: false,
    },
    "mobile": {
        type:  DataTypes.STRING,
        allowNull: false,
    },
    "email": {
        type:  DataTypes.STRING,
        allowNull: false,
    },
    "password": {
        type:  DataTypes.CHAR(64),
        allowNull: false,
    },
})

sequelize.sync();

module.exports = {UserModel}