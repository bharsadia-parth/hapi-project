'use strict';

const hapi = require("@hapi/hapi");
const {userRoutes} = require("./routes/user-routes");


const init = async () => {
    const server = hapi.server({
        port: 8082,
        host: 'localhost'
    });

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