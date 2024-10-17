import express from 'express'
import { getpath, getParamsURL } from '../getUrl.js'
import  homeController  from '../controller/homeController.js'
import  aboutCotroller  from '../controller/aboutController.js'
import  contactController  from '../controller/contactController.js'
const router = express.Router();
const initWebRouter = (app) => {
    router.get("/", (req, res) => homeController(req, res));
    router.get("/about", (req, res) => aboutCotroller(req, res));
    router.get("/contact", (req, res) => contactController(req, res));
    router.get("/geturl", (req, res) => {
        res.send('Hello World!' + getpath(req) + getParamsURL(req));
    });

    return app.use("/", router);
}

export default initWebRouter;