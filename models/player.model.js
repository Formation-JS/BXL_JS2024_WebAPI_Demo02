import { fakeDB } from "./fake-db.js";

const defaultOptions = {};


function getActivePlayers(byPass = false) {
    return fakeDB.players.filter(player => byPass || player.active);
}

const playerModel = {

    find: ({ offset = 0, limit = 3, byPassActive = false } = defaultOptions) => {
        const players = getPlayers(byPassActive).slice(offset, offset + limit);
        return structuredClone(players);
    },

    findFilter: (conditionCallback, { offset = 0, limit = 3, byPassActive = false  } = defaultOptions) => {
        const players = getActivePlayers(byPassActive).filter(conditionCallback)
                                                      .slice(offset, offset + limit);
        return structuredClone(players);
    },

    findById: (id, byPassActive = false) => {
        const player = getActivePlayers(byPassActive).find(p => p.id === id);
        return structuredClone(player);
    },

    insert: ({ username, lastname, firstname, email, birthdate }) => {
        if(!username?.trim() || !email?.trim()) {
            throw new Error ('Error on insert player');
        };

        fakeDB.playerLastId++;
        const playerAdded = {
            id: fakeDB.playerLastId,
            username, lastname, firstname, email, birthdate,
            active: true
        };
        fakeDB.players.push(playerAdded);
        
        return structuredClone(playerAdded);
    },

    modify: (id, { username, lastname, firstname, email, birthdate }) => {
        throw new Error('Not implemented');
    },

    remove: (id, forceRemove = false) => {
        const playerIndex = fakeDB.players.findIndex(player => player.id === id);
       
        if(playerIndex === -1) {
            return false;
        }

        const player = fakeDB.players[playerIndex];

        if(player.active) {
            // Soft delete
            player.active = false;
            return true;
        }
        else if(forceRemove) {
            // True delete
            fakeDB.players.splice(playerIndex, 1);
            return true;
        }

        return false;
    }

}
export default playerModel;
