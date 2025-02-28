import playerModel from "../models/player.model.js";

const playerController = {

    getAll: (req, res) => {
        const players = playerModel.find();
        res.status(200).json(players);
    },

    add: (req, res) => {
        res.sendStatus(501);
    }
}

export default playerController;