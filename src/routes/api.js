import express from "express";
const router = express.Router();
import { restUserController } from '../controller/restUser.js';
import {
    LoginCtrl,
    RegisterCtrl
} from '../controller/authController.js';
import { checkUserJWT } from '../middleware/auth.js';
const initApiRouter = (app) => {
    router.all('*', checkUserJWT);

    router.post("/restuser", restUserController);// api xoa tin nhắn
    router.post("/login", LoginCtrl);
    router.post("/register", RegisterCtrl);
    return app.use("/api", router);
};
export default initApiRouter;
