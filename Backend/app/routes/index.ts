import { Router } from "express";

import auth from "../middleware/auth";
import access from "./user/access";
import mail from "./mail/send";

const routes = Router();

/**
 * PUBLIC ROUTES
 */
routes.use("/access", access);
routes.use("/send-mail", mail);

/**
 * PRIVATE ROUTES
 */
routes.use("*", auth);

export default routes;