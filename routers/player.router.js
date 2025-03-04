import { Router } from "express";
import playerController from "../controllers/player.controller.js";
import { paginationMiddleware } from "../middlewares/pagination.middleware.js";


const playerRouter = Router();

playerRouter.route('/')
    .get(paginationMiddleware({maxLimit: 100}),playerController.getAll)
    .post(playerController.add);

playerRouter.route('/:id')
    .get(playerController.getById)
    .delete(playerController.delete);

export default playerRouter;