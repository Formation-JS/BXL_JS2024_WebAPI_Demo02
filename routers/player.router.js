import { Router } from "express";
import playerController from "../controllers/player.controller.js";


const playerRouter = Router();

playerRouter.route('/')
    .get(playerController.getAll)
    .post(playerController.add);


export default playerRouter;