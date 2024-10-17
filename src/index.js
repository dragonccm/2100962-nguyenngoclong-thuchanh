const express = require('express');
import configViewEngine from "./config/viewEngine.js";
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
const app = express();
const PORT = process.env.PORT || 6969
import  initWebRouter from "./routes/web.js";
import initApiRouter from "./routes/api.js";


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



initWebRouter(app); 
initApiRouter(app); 
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});