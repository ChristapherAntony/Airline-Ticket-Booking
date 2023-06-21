import config from "./env.config";


const corsOptions = {
    origin: config.allowedOrigins,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true
};

export default corsOptions;
