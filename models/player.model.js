import { fakeDB } from "./fake-db.js";

const defaultOptions = {};
const playerModel = {

    find: ({ offset = 0, limit = 3 } = defaultOptions) => {
        const players = fakeDB.players.slice(offset, offset + limit);
        return structuredClone(players);
    },

    findFilter: (conditionCallback, { offset = 0, limit = 3 } = defaultOptions) => {
        const players = fakeDB.players.filter(conditionCallback)
                                      .slice(offset, offset + limit);
        return structuredClone(players);
    },

    findById: (id) => {
        const player = fakeDB.players.find(p => p.id === id);
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

    remove: (id) => {
        const playerIndex = fakeDB.players.findIndex(player => player.id === id);
       
        if(playerIndex === -1) {
            return false;
        }

        fakeDB.players.splice(playerIndex, 1);
        return true;
    }

}
export default playerModel;
