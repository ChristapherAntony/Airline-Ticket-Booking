import express from "express";
import connectDb from "./src/config/db.config.js";
import config from "./src/config/env.config.js";
import errorHandlingMiddleware from "./src/middlewares/errorHandlingMiddleware.js";
import morgan from 'morgan'
import cors from 'cors'
import mongoSanitize from 'express-mongo-sanitize'
import helmet from "helmet";
import cookieParser from 'cookie-parser'
import routes from "./src/routes/routes.js";
import authenticate from "./src/middlewares/authenticate.js";



const app = express()
const router = express.Router()

//middleware
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
}))
app.use(morgan('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(helmet({ xssFilter: true }))
app.use(mongoSanitize())
app.use(authenticate())

//routes
routes(app, router);



//errorHandling middleware 
app.use(errorHandlingMiddleware)


// Start server
const start = async () => {
    connectDb();
    app.listen(config.port, () => {
        console.log(`Server listening on port ${config.port}...✅ `);
    });
};
start();
