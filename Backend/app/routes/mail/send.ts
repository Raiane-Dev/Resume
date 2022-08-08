import { Router } from "express";
import MailController from "../../controllers/Emails/MailController";

const route = Router();
const controller = new MailController();

route.post("/", controller.store.bind(controller));

export default route;