import express from "express";
import http from "http";
import path from "path";
import cors from "cors";
import bodyParser from "body-parser";
import { logger as loggerExpress } from "express-winston";
import socketio from "socket.io";

import env from "./config/env";
import logger from "./config/logger";
import deathNote from "./config/deathNote";
import routes from "./routes/index";

process.title = "RESUME_BACKEND";

function main()
{
    
    const app: any = express();
    const serving: any = http.createServer(app);
    
    const port = process.env.PORT || env.SERVER_PORT;
    const io = new socketio.Server(serving);

    // [INITIALIZING]

    io.on( "connection", () => console.log("connected"));

    app.use(express.json());
    app.use(bodyParser.json());
    app.use(cors());
    app.use(loggerExpress(logger));
    app.disable("x-powered-by");
    app.use("/api/v1", routes);

    const server = app.listen(port, () => console.log(`Its running in port ${port}!`));

    new deathNote(server).deathEvents();
}

main();