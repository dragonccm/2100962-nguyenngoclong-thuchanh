import express from "express";
const router = express.Router();
import { restUserController } from '../controller/restUser.js';
import getNhom  from '../controller/grController.js';
import {
    getSanpham,
    getSanphamById
} from '../controller/productController.js';
import {
    LoginCtrl,
    RegisterCtrl,
    Logout
} from '../controller/authController.js';
import { checkUserJWT } from '../middleware/auth.js';
const initApiRouter = (app) => {
    router.all('*', checkUserJWT);
    router.post("/restuser", restUserController);// api xoa tin nhắn
    router.post("/login", LoginCtrl);
    router.post("/register", RegisterCtrl);
    router.get("/logout", Logout);
    router.get("/getgr", getNhom);
    router.get("/getsp", getSanpham);
    router.get("/getsp/:id", getSanphamById);

    return app.use("/api", router);
};
export default initApiRouter;
