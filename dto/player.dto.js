export class PlayerDTO {
    constructor({ id, username }) {
        this.id = id;
        this.username = username;
        this.url = `/api/player/${id}`;
    }
}


//id, username, lastname, firstname, email, birthdate, active