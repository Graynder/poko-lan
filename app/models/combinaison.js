

function Combinaison(table,joueurs){

	this.table = table;
	this.joueurs = joueurs;

	this.calculeResultat()
	{
		
	}
}

//Retourne un tableau qui contient une paire si elle existe dans la main
function isPaire (main)
{
	main = main.sort(triValeur);
	var paire = [{valeur:0},{valeur:0}];
	for (carte of main)
	{
		paire.shift();
		paire.push(carte);
		if(paire[0].valeur == paire[1].valeur)
			return paire;
	}
	return [];
}

//Retourne un tableau qui contient deux paire si elle existe dans la main
function isDeuxPaires (main)
{
	main = main.sort(triValeur);
	var paire = [];
	var isPaire = this.isPaire(main);
	//Si on trouve une paire
	if (isPaire.length > 0)
	{
		//On l'enregistre et l'enleve de la main
		paire = isPaire;
		for(carte of paire)
		{
			var index = main.indexOf(carte);
			main.splice(index,1);
		}
		//On regarde si il y a une deuxieme paire
		isPaire = this.isPaire(main);
		if (isPaire.length > 0)
		{
			paire = paire.concat(isPaire);
			return paire;
		}
		else
			return [];
	}
	else
		return [];
}

//Retourne un tableau qui contient un brelan si elle existe dans la main
function isBrelan (main)
{
	main = main.sort(triValeur);
	var brelan = [{valeur:0},{valeur:0},{valeur:0}];
	for (carte of main)
	{
		brelan.shift();
		brelan.push(carte);
		if(brelan[0].valeur == brelan[1].valeur)
		{
			if(brelan[1].valeur == brelan[2].valeur)
			{
				return brelan;
			}
		}
	}
	return [];
}

//Retourne un tableau qui contient une couleur si elle existe dans la main
function isCouleur (main)
{
	var couleurs = [[],[],[],[]];
	main = main.sort(triValeur);
	// On trie les cartes par couleurs
	for (carte of main)
	{
		switch(carte.couleur)
		{
			case "Co" :
			couleurs[0].push(carte);
			break;
			case "Ca" :
			couleurs[1].push(carte);
			break;
			case "P" :
			couleurs[2].push(carte);
			break;
			case "T" :
			couleurs[3].push(carte);
			break;
		}
	}
	// On verifie le nombre de cartes par couleurs
	for (val of couleurs)
	{
		if(val.length > 4)
		{
			//on recupere les 5 dernieres cases du tableau
			val = val.splice(val.length-5,val.length);
			return val;
		}
	}
	return [];
}

//Retourne un tableau qui contient une suite si elle existe dans la main
function isQuinte (main)
{
	main = main.sort(triValeur);
	var straight = [{valeur:0},{valeur:0},{valeur:0},{valeur:0},{valeur:0}];
	for (carte of main)
	{
		if (carte.valeur != straight[4].valeur)
		{
			straight.shift();
			straight.push(carte);
			if(straight[0].valeur+1 == straight[1].valeur){
				if(straight[1].valeur+1 == straight[2].valeur){
					if(straight[2].valeur+1 == straight[3].valeur){
						if(straight[3].valeur+1 == straight[4].valeur){
							return straight;
						}
					}
				}
			}
		}
	}
	return [];
}

//Retourne un tableau qui contient un full si elle existe dans la main
function isFull (main)
{
	main = main.sort(triValeur);
	var full = [];
	var isFull = this.isBrelan(main);
	//Si on trouve un brelan
	if (isFull.length > 0)
	{
		//On l'enregistre et l'enleve de la main
		full = isFull;
		for(carte of full)
		{
			var index = main.indexOf(carte);
			main.splice(index,1);
		}

		//On regarde si il y a une paire
		isFull = this.isPaire(main);
		if (isFull.length > 0)
		{
			full = full.concat(isFull);
			return full;
		}
		else
			return [];
	}
	else
		return [];
}

//Retourne un tableau qui contient un carre si elle existe dans la main
function isCarre (main)
{
	main = main.sort(triValeur);
	var carre = [{valeur:0},{valeur:0},{valeur:0},{valeur:0}];
	for (carte of main)
	{
		carre.shift();
		carre.push(carte);
		if(carre[0].valeur == carre[1].valeur){
			if(carre[1].valeur == carre[2].valeur){
				if(carre[2].valeur == carre[3].valeur){
					return carre;
				}
			}
		}
	}
	return [];
}

//Retourne un tableau qui contient une suite de couleur si elle existe dans la main
function isQuinteFlush (main)
{
	main = main.sort(triCouleur);
	var straight = [{valeur:0},{valeur:0},{valeur:0},{valeur:0},{valeur:0}];
	for (carte of main)
	{
		if (carte.valeur != straight[4].valeur)
		{
			straight.shift();
			straight.push(carte);
			if(straight[0].valeur+1 == straight[1].valeur){
				if(straight[1].valeur+1 == straight[2].valeur){
					if(straight[2].valeur+1 == straight[3].valeur){
						if(straight[3].valeur+1 == straight[4].valeur)
						{	
							//On verifie la couleur
							if (this.verificationCouleur(straight)){
								return straight;
							}
						}
					}
				}
			}
		}
	}
	return [];
}

//Retourne un tableau qui contient une suite royale si elle existe dans la main
function isRoyalFlush (main)
{
	main = main.sort(triCouleur);
	var straight = [{valeur:0},{valeur:0},{valeur:0},{valeur:0},{valeur:0}];
	for (carte of main)
	{
		if (carte.valeur != straight[4].valeur)
		{
			straight.shift();
			straight.push(carte);
			if(straight[0].valeur+1 == straight[1].valeur){
				if(straight[1].valeur+1 == straight[2].valeur){
					if(straight[2].valeur+1 == straight[3].valeur){
						if(straight[3].valeur+1 == straight[4].valeur)
						{	
							//On verifie la couleur
							if (this.verificationCouleur(straight))
								if (this.verificationRoyale(straight)){
									return straight;
								}
							}
						}
					}
				}
			}
		}
		return [];
	}

//Retourne si un lot de carte est de la meme couleur
function verificationCouleur (cartes) {
	var couleur = cartes[0].couleur;
	for (carte of cartes)
	{
		if(couleur != carte.couleur){
			return false;
		}
	}
	return true;
}

//Retourne si un lot de carte est une suite royale
function verificationRoyale(cartes) {
	if(cartes[0].valeur == 10){
		if(cartes[1].valeur == 11){
			if(cartes[2].valeur == 12){
				if(cartes[3].valeur == 13){
					if(cartes[4].valeur == 14){
						return true;
					}
				}
			}
		}
	}
	return false;
}

function triValeur(a,b)
{
	if(a.valeur < b.valeur)
		return -1;
	if(a.valeur > b.valeur)
		return 1;
	if(a.couleur < b.couleur)
		return -1;
	if(a.couleur > b.couleur)
		return 1;
	return 0;
}

function triCouleur(a,b)
{
	if(a.couleur < b.couleur)
		return -1;
	if(a.couleur > b.couleur)
		return 1;
	if(a.valeur < b.valeur)
		return -1;
	if(a.valeur > b.valeur)
		return 1;
	return 0;
}


function ScoreMain()
{
	this.valeur = 0;
	this.nom = "High card";
	this.kicker = [];

	this.setValeur = function(valeur) {
		this.valeur = valeur;
		switch (valeur)
		{
			case 0 : this.nom = "Plus Haute";  break;
	        case 1 : this.nom = "Une paire";  break;
	        case 2 : this.nom = "Deux paire";  break;
	        case 3 : this.nom = "Brelan";  break;
	        case 4 : this.nom = "Quinte";  break;
	        case 5 : this.nom = "Couleur";  break;
	        case 6 : this.nom = "Full";  break;
	        case 7 : this.nom = "Carré";  break;
	        case 8 : this.nom = "Quinte Flush";  break;
	        case 9 : this.nom = "Quinte Flush Royale";  break;
		}
	}
}


module.exports = {Combinaison,isPaire,isDeuxPaires,isFull,isBrelan,isCarre,isQuinte,isCouleur,isRoyalFlush,isQuinteFlush};