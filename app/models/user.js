//model User

function User (username, ip){
    this.name = username;
    this.ip = ip;
    this.pot = 3000;    // TODO: v2 : 1er joueur connecter defini les parametres de la partie
    this.mise = 0;
    this.position = "";
    this.etat = false ; // true or false
    this.sessionSocket = {}; // utilisation non defini
}

module.exports = User;
