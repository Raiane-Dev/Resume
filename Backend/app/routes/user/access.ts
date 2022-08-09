import { Router } from "express";
import AccessController from "../../controllers/Users/AccessController";

const route = Router();
const controller = new AccessController();

route.post("/", controller.login.bind(controller));
route.post("/register", controller.register.bind(controller));
route.post("/logout", controller.logout.bind(controller));

export default route;