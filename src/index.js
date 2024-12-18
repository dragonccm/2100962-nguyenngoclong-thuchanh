const express = require('express');
import configViewEngine from "./config/viewEngine.js";
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const app = express();
const PORT = process.env.PORT || 6969
import  initWebRouter from "./routes/web.js";
import initApiRouter from "./routes/api.js";
import { redisStore } from './redisClient.js';
import session from 'express-session';
import {letConnect} from "./connectDB.js";
const corsOptions = {
    origin: 'http://localhost:3000', 
    optionsSuccessStatus: 200, 
    credentials: true,
}; 

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());



app.use(express.json());
configViewEngine(app);

app.use(
    session({
        store: redisStore,
        resave: false,
        saveUninitialized: false,
        secret: 'keyboard cat',
        cookie: {
            httpOnly: true,
            secure: false,
        },
    }),
);



initWebRouter(app); 
initApiRouter(app); 


letConnect();
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});