'use strict';

const hapi = require("@hapi/hapi");
const {userRoutes} = require("./routes/user-routes");
const env = require("dotenv").config({path: "./.env"});


const init = async () => {
    const server = hapi.server({
        port: process.env.PORT,
        host: '0.0.0.0'
    });
    console.log(process.env.PORT)
    server.start()
    .then((val) => {
        console.log("hapi is listening on port:", server.info.port)
    })
    .catch((e) => {
        console.log("failed to start hapi: ", e)
    });

    server.route([
       ...userRoutes
    ])
}
//
init();