
function Pile()
{
	this.pileFixe = ["10_Ca", "2_Ca", "3_Ca", "4_Ca", "5_Ca", "6_Ca", "7_Ca", "8_Ca", "9_Ca", "A_Ca", "J_Ca", "K_Ca", "Q_Ca",
					 "10_Co", "2_Co", "3_Co", "4_Co", "5_Co", "6_Co", "7_Co", "8_Co", "9_Co", "A_Co", "J_Co", "K_Co", "Q_Co",
					 "10_P", "2_P", "3_P", "4_P", "5_P", "6_P", "7_P", "8_P", "9_P", "A_P", "J_P", "K_P", "Q_P",
					 "10_T", "2_T", "3_T", "4_T", "5_T", "6_T", "7_T", "8_T", "9_T", "A_T", "J_T", "K_T", "Q_T"];
	this.pile = [];
	this.defausse = [];

	this.nouvellePile = function()
	{
		this.pile = this.pileFixe;
		this.defausse = [];
		this.melanger();
	}

	this.melanger = function()
	{
		for(i = 0;i<this.pile.length; i++)
		{
			var temp = this.pile[i];
			r = Math.floor((Math.random() * this.pile.length));
			this.pile[i] = this.pile[r];
			this.pile[r] = temp;
		}
	}

	this.piocher = function()
	{
		var nomCarte = this.pile.shift();
		this.defausse.push(nomCarte);
		return new Carte(nomCarte);
	}
}
function Carte(nom)
{
	this.nom = nom;
	var prop = nom.split("_");
	this.couleur = prop[1];
	switch (prop[0])
	{
		case '2' : this.valeur = 2;  break;
        case '3' : this.valeur = 3;  break;
        case '4' : this.valeur = 4;  break;
        case '5' : this.valeur = 5;  break;
        case '6' : this.valeur = 6;  break;
        case '7' : this.valeur = 7;  break;
        case '8' : this.valeur = 8;  break;
        case '9' : this.valeur = 9;  break;
        case '1' : this.valeur = 10; break;
        case 'J' : this.valeur = 11; break;
        case 'Q' : this.valeur = 12; break;
        case 'K' : this.valeur = 13; break;
        case 'A' : this.valeur = 14; break;
	}
}

module.exports = Pile;