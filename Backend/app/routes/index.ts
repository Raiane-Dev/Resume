import express, { Router } from "express";

import auth from "../middleware/auth";
import access from "./user/access";
import mail from "./mail/send";

const routes = Router();
// const app = express();

/**
 * PUBLIC ROUTES
 */
routes.use("/access", access);

/**
 * PRIVATE ROUTES
 */
routes.use("*", auth);
routes.use("/send-mail", mail);

export default routes;