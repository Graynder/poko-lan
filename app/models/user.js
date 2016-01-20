//model User

function User (username, ip){

    this.name = username;
    this.ip = ip;
    this.pot = 3000;    // TODO: v0.2 : 1er joueur connecter defini les parametres de la partie
    this.mise = 0;
    this.position = "";
    this.sessionSocket;
}

module.exports = User;
