import { PlayerDetailDTO, PlayerDTO } from "../dto/player.dto.js";
import playerModel from "../models/player.model.js";
import { PlayerSchema } from "../validators/player.validator.js";

const playerController = {

    //! /api/player?offset=2&limit=2
    getAll: (req, res) => {
        const {offset, limit} = req.pagination
        
        const pseudoData = (typeof(req.query.pseudo) === 'string') ? [req.query.pseudo] : req.query.pseudo;
        const pseudos = pseudoData?.map(pseudo => pseudo.toLowerCase());

        const players = playerModel
            .findFilter((player) => {
                return !pseudos || pseudos.some(pseudo => player.username.toLowerCase().includes(pseudo)) 
            }, { offset, limit })
            .map(p => new PlayerDTO(p));

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
    },

    getById: (req, res) => {
        const id = parseInt(req.params.id);

        if(isNaN(id) || id < 1) {
            res.status(400).json({ error: 'Bad parameter Id' });
            return;
        }

        const player = playerModel.findById(id);

        if(!player) {
            res.status(404).json({ error: 'Player not found' });
        }

        res.status(200).json(new PlayerDetailDTO(player));
    }, 

    delete: (req, res) => {
        const id = parseInt(req.params.id);

        if(isNaN(id) || id < 1) {
            res.status('400').json({ error : 'Bad parameter Id'});
            return;
        }

        const isDeleted = playerModel.remove(id);

        if(!isDeleted) {
            res.sendStatus(404);
            return
        }
        res.sendStatus(204);
    }
}

export default playerController;