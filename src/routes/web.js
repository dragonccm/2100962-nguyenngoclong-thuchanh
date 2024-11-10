import express from 'express'
import { getpath, getParamsURL } from '../getUrl.js'
import  homeController  from '../controller/homeController.js'
import  aboutCotroller  from '../controller/aboutController.js'
import  contactController  from '../controller/contactController.js'
import  loginController  from '../controller/loginPage.js'
import { checkAuth,checkUserJWT } from '../middleware/auth.js';
const router = express.Router();
const initWebRouter = (app) => {
    router.all('*', checkUserJWT);
    router.get("/login",(req, res) => loginController(req, res));
    router.get("/", checkAuth,(req, res) => homeController(req, res));
    router.get("/about",  checkAuth,(req, res) => aboutCotroller(req, res));
    router.get("/contact",  checkAuth,(req, res) => contactController(req, res));
    router.get("/geturl",  checkAuth,(req, res) => {
        res.send('Hello World!' + getpath(req) + getParamsURL(req));
    });

    return app.use("/", router);
}

export default initWebRouter;