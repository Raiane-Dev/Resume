import winston from "winston";
import path from "path";

const file_logging = path.normalize( path.join(__dirname, "../../logs/", "logging.log") ); 

const logger = winston.createLogger(
    {
        level: "info",
        format: winston.format.combine(
            winston.format.colorize({ all: true }),
            winston.format.json()
        ),
        defaultMeta: { service: "user-service" },
        transports: [
            new winston.transports.File({ filename: file_logging }),
        ]
    }
);

if( process.env.NODE_ENV !== "production" )
{
    logger.add(new winston.transports.Console(
        {
            format: winston.format.simple()
        }
    ));
}

export default logger;