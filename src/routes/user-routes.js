import {getUser, createUser, deleteUser, updateUser} from "../controllers/user-controller.js";
export const  userRoutes = [
    {
        method: "GET", 
        path: "/user/{id?}",
        handler: getUser,
    },
    {
        method: "PUT", 
        path: "/user",
        handler: createUser,
    },
    {
        method: "DELETE", 
        path: "/user/{id}",
        handler: deleteUser,
    },
    {
        method: "PATCH", 
        path: "/user/{id}",
        handler: updateUser,
    }
];
