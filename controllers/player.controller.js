import { PlayerDetailDTO, PlayerDTO } from "../dto/player.dto.js";
import playerModel from "../models/player.model.js";

const playerController = {

    //! /api/player?offset=2&limit=2
    getAll: (req, res) => {
        const offset = parseInt(req.query.offset || 0);
        const limit = parseInt(req.query.limit || 10);
        
        const players = playerModel.find({ offset, limit }).map(p => new PlayerDTO(p));

        res.status(200).json(players);
    },

    add: (req, res) => {
        const data = req.body;

        const playerAdded = playerModel.insert(data);

        res.location(`/api/player/${playerAdded.id}`);
        res.status(201).json(new PlayerDetailDTO(playerAdded));
    }
}

export default playerController;