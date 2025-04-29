'use strict';
import {deeplinkRoutes} from "./routes/deeplink.routes.js"

import hapi from "@hapi/hapi";
import {userRoutes} from "./routes/user-routes.js";
import {initDb} from "./config/sequelize.js";

import env from "dotenv";
env.config({path: "./.env"});

const init = async () => {
    const server = hapi.server({
        port: process.env.PORT,
        host: '0.0.0.0'
    });
    console.log(process.env.PORT)
    server.start()
    .then(() => {
        console.log("hapi is listening on port:", server.info.port)
    })
    .catch((e) => {
        console.log("failed to start hapi: ", e)
    });

    await initDb();


    server.route([
       ...userRoutes,
       ...deeplinkRoutes
    ])
}
//
init();