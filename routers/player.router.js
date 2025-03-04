import { Router } from "express";
import playerController from "../controllers/player.controller.js";
import { paginationMiddleware } from "../middlewares/pagination.middleware.js";
import { bodyValidatorMiddleware } from "../middlewares/body-validation.middleware.js";
import { PlayerSchema } from "../validators/player.validator.js";


const playerRouter = Router();

playerRouter.route('/')
    .get(paginationMiddleware({maxLimit: 100}),playerController.getAll)
    .post(bodyValidatorMiddleware(PlayerSchema), playerController.add);

playerRouter.route('/:id')
    .get(playerController.getById)
    .delete(playerController.delete);

export default playerRouter;