import { Router } from "express";

import access from "./user/access";
import mail from "./mail/send";

const routes = Router();

routes.use("/access", access);
routes.use("/send-mail", mail);

export default routes;