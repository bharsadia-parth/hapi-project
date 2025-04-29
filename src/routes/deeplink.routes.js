import {getDeeplink, creeateDeeplink, updateDeeplink, getDeeplinkList, deleteDeeplink} from "../controllers/deeplink.controller.js";
export const deeplinkRoutes = [
    {
        method: "GET", 
        path: "/deeplink",
        handler: getDeeplinkList,
    },
    {
        method: "GET", 
        path: "/deeplink/{shortcode}",
        handler: getDeeplink,
    },
    {
        method: "POST", 
        path: "/deeplink/{id}",
        handler: updateDeeplink,
    },
    {
        method: "PUT", 
        path: "/deeplink",
        handler: creeateDeeplink,
    },
    {
        method: "DELETE", 
        path: "/deeplink/{id}",
        handler: deleteDeeplink,
    },
]



