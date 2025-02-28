export class PlayerDTO {
    constructor({ id, username }) {
        this.id = id;
        this.username = username;
        this.url = `/api/player/${id}`;
    }
}

export class PlayerDetailDTO {
    constructor({id, username, lastname, firstname, email, birthdate}) {
        this.id = id;
        this.username = username;
        this.lastname = lastname;
        this.firstname = firstname;
        this.email = email;
        this.birthdate = birthdate;
    }
}