import express from "express";
import connectDb from "./config/db.config.js";
import config from "./config/env.config.js";
import errorHandlingMiddleware from "./middlewares/errorHandlingMiddleware.js";
import morgan from 'morgan'
import cors from 'cors'
import mongoSanitize from 'express-mongo-sanitize'
import helmet from "helmet";
import cookieParser from 'cookie-parser'
import routes from "./routes/routes.js";
import authenticate from "./middlewares/authenticate.js";
import corsOptions from "./config/cors.options.js";



const app = express()
const router = express.Router()

//middleware
app.use(cors(corsOptions))
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
    await connectDb();
    app.listen(config.port, () => {
        console.log(`Server listening on port ${config.port}...✅ `);
    });
};
start();
