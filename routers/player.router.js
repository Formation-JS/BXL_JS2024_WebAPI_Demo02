import { Router } from "express";
import playerController from "../controllers/player.controller.js";


const playerRouter = Router();

playerRouter.route('/')
    .get(playerController.getAll)
    .post(playerController.add);

playerRouter.route('/:id')
    .get(playerController.getById)
    .delete(playerController.delete);

export default playerRouter;