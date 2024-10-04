const {getUser} = require("./../controllers/user-controller");
const  userRoutes = [
    {
        method: "GET", 
        path: "/users",
        handler: getUser,
      }
];
module.exports = {
    userRoutes
}