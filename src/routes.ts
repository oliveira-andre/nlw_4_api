import { Router } from "express";

const router = Router();

import { UsersController } from "./controllers/UsersController";

const usersController = new UsersController();

router.post("/users", usersController.create);

export { router };
