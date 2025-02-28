import { Router } from "express";
import playerRouter from "./player.router.js";


const mainRouter = Router();

mainRouter.use('/player', playerRouter);


export default mainRouter;