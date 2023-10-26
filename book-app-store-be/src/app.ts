import express from 'express';
import winston from "winston";
import cors from "cors";
import router from './routes/index';

const app = express()

const logger = winston.createLogger({
    level: "info",
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({format: "YYYY-MM-DD HH:mm:ss"}),
        winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`)
    ),
    defaultMeta: {},
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({filename: "logs/error.log", level: "error"}),
        new winston.transports.File({filename: "logs/combined.log"})
    ]
})

app.use(cors())
app.use(express.json())

app.use((req, _res, next)=> {
    logger.info(`${req.method} ${req.url}`)
    logger.info(`Request Body: ${JSON.stringify(req.body, null, 2)}`);
    next()
})

app.use('/api', router)

export {app, logger};