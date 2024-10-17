import express from "express";
const router = express.Router();
import {restUserController} from '../controller/restUser.js';
const initApiRouter = (app) => {
    router.all("*");

    router.post("/restuser", restUserController);// api xoa tin nhắn


    return app.use("/api", router);
};
export default initApiRouter;
