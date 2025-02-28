import { PlayerDetailDTO, PlayerDTO } from "../dto/player.dto.js";
import playerModel from "../models/player.model.js";
import { PlayerSchema } from "../validators/player.validator.js";

const playerController = {

    //! /api/player?offset=2&limit=2
    getAll: (req, res) => {
        const offset = parseInt(req.query.offset || 0);
        const limit = parseInt(req.query.limit || 10);
        
        const players = playerModel.find({ offset, limit }).map(p => new PlayerDTO(p));

        res.status(200).json(players);
    },

    add: (req, res) => {
        if(!req.body) {
            res.status(400).json({ error: 'No request body !'})
            return;
        }

        const { data, success, error } = PlayerSchema.safeParse(req.body);
        if(!success) {
            res.status(422).json({ error: error.flatten().fieldErrors });
            return;
        }

        const playerAdded = playerModel.insert(data);

        res.location(`/api/player/${playerAdded.id}`);
        res.status(201).json(new PlayerDetailDTO(playerAdded));
    }
}

export default playerController;