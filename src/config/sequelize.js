import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

export const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USERNAME, process.env.MYSQL_PASSWORD, {
    host: process.env.MYSQL_HOST,
    dialect: 'mysql'
})

export const initDb = async () => {

    sequelize.authenticate().then((val) => {
        console.log("Database connected successfully")
    })
        .catch((e) => {
            console.log("failed to connect database : ", e)
        });

    sequelize.sync();
}