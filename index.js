'use strict';

const hapi = require("@hapi/hapi");
const {userRoutes} = require("./routes/user-routes");
const {getUser} = require("./controllers/user-controller")

const init = async () => {
    const server = hapi.server({
        port: process.env.PORT,
        host: 'localhost'
    });

    server.start()
    .then((val) => {
        console.log(userRoutes)
        console.log("hapi is listening on port:", server.info.port)
    })
    .catch((e) => {
        console.log("failed to start hapi: ", e)
    });

    server.route([
       {
         method: "GET", 
         path: "/users",
         handler: getUser,
       }
    ])
}
//
init();