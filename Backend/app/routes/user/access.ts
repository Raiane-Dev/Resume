import { Router } from "express";
import UserController from "../../controllers/Users/UserController";

const route = Router();
const controller = new UserController();

route.post("/", controller.store.bind(controller));

export default route;