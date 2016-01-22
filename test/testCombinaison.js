var Combinaison = require("../app/models/combinaison.js")
var Pile = require("../app/models/pile.js")
var assert = require("assert")

describe('Test des combinaisons', function () {

	describe("Test paire", function()
	{
		it("Renvoi une paire de deux as", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("8_Ca"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("2_P"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isPaire(main);
			assert.equal(out.length,2);
			assert.equal(out[0].nom,"A_P");
			assert.equal(out[1].nom,"A_T");
		})

		it("Renvoi un tableau vide", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("8_Ca"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("Q_T"));
			main.push(new Pile.Carte("2_P"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isPaire(main);
			assert.equal(out.length,0);
		})
	})

	describe("Test de deux paires", function()
	{
		it("Renvoi deux paires", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("Q_T"));
			main.push(new Pile.Carte("8_Ca"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("2_P"));
			main.push(new Pile.Carte("Q_Co"));
			var out = Combinaison.isDeuxPaires(main);
			assert.equal(out.length,4);
			assert.equal(out[0].nom,"Q_Co");
			assert.equal(out[1].nom,"Q_T");
			assert.equal(out[2].nom,"A_P");
			assert.equal(out[3].nom,"A_T");
		})

		it("Renvoi un tableau vide / Test avec une seul paire", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("Q_T"));
			main.push(new Pile.Carte("8_Ca"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("2_P"));
			main.push(new Pile.Carte("J_Co"));
			var out = Combinaison.isDeuxPaires(main);
			assert.equal(out.length,0);
		})

		it("Renvoi un tableau vide / Test avec aucune paire", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("Q_T"));
			main.push(new Pile.Carte("8_Ca"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("5_T"));
			main.push(new Pile.Carte("2_P"));
			main.push(new Pile.Carte("J_Co"));
			var out = Combinaison.isDeuxPaires(main);
			assert.equal(out.length,0);
		})
	})

	describe("Test brelan", function()
	{
		it("Renvoi une brelan", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("8_Ca"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("A_Ca"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isBrelan(main);
			assert.equal(out.length,3);
			assert.equal(out[0].nom,"A_Ca");
			assert.equal(out[1].nom,"A_P");
			assert.equal(out[2].nom,"A_T");
		});

		it("Renvoi un tableau vide / Test avec une paire", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("8_Ca"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("2_P"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isBrelan(main);
			assert.equal(out.length,0);
		});

		it("Renvoi un tableau vide / Test avec aucune combinaison", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("8_Ca"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("Q_T"));
			main.push(new Pile.Carte("2_P"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isBrelan(main);
			assert.equal(out.length,0);
		})
	})

	describe("Test carré", function()
	{
		it("Renvoi un carré", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("A_Co"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("A_Ca"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isCarre(main);
			assert.equal(out.length,4);
			assert.equal(out[0].nom,"A_Ca");
			assert.equal(out[1].nom,"A_Co");
			assert.equal(out[2].nom,"A_P");
			assert.equal(out[3].nom,"A_T");
		});

		it("Renvoi un tableau vide / Test avec un brelan", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("8_Co"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("A_Ca"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isCarre(main);
			assert.equal(out.length,0);
		});

		it("Renvoi un tableau vide / Test avec une paire", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("8_Ca"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("2_P"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isCarre(main);
			assert.equal(out.length,0);
		});

		it("Renvoi un tableau vide / Test avec aucune combinaison", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("8_Ca"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("Q_T"));
			main.push(new Pile.Carte("2_P"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isCarre(main);
			assert.equal(out.length,0);
		})
	})

	describe("Test full", function()
	{
		it("Renvoi un full", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("J_Co"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("A_Ca"));
			main.push(new Pile.Carte("10_Co"));
			var out = Combinaison.isFull(main);
			assert.equal(out.length,5);
			assert.equal(out[0].nom,"10_Co");
			assert.equal(out[1].nom,"10_T");
			assert.equal(out[2].nom,"A_Ca");
			assert.equal(out[3].nom,"A_P");
			assert.equal(out[4].nom,"A_T");
		});

		it("Renvoi un full / Composer de deux brelan", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("J_Co"));
			main.push(new Pile.Carte("10_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("A_Ca"));
			main.push(new Pile.Carte("10_Ca"));
			var out = Combinaison.isFull(main);
			assert.equal(out.length,5);
			assert.equal(out[0].nom,"10_Ca");
			assert.equal(out[1].nom,"10_Co");
			assert.equal(out[2].nom,"A_Ca");
			assert.equal(out[3].nom,"A_P");
			assert.equal(out[4].nom,"A_T");
		});

		it("Renvoi un tableau vide / Test avec un brelan", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("8_Co"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("A_Ca"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isFull(main);
			assert.equal(out.length,0);
		});

		it("Renvoi un tableau vide / Test avec une paire", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("8_Ca"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("2_P"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isFull(main);
			assert.equal(out.length,0);
		});

		it("Renvoi un tableau vide / Test avec aucune combinaison", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("8_Ca"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("Q_T"));
			main.push(new Pile.Carte("2_P"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isFull(main);
			assert.equal(out.length,0);
		})
	})

	describe("Test couleur", function()
	{
		it("Renvoi une couleur", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_Co"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("5_Co"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("3_Co"));
			main.push(new Pile.Carte("Q_Ca"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isCouleur(main);
			assert.equal(out.length,5);
			assert.equal(out[0].nom,"3_Co");
			assert.equal(out[1].nom,"5_Co");
			assert.equal(out[2].nom,"7_Co");
			assert.equal(out[3].nom,"K_Co");
			assert.equal(out[4].nom,"A_Co");
		})

		it("Renvoi une couleur avec les cartes les plus fortes", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_Co"));
			main.push(new Pile.Carte("10_Co"));
			main.push(new Pile.Carte("5_Co"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("3_Co"));
			main.push(new Pile.Carte("Q_Co"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isCouleur(main);
			assert.equal(out.length,5);
			assert.equal(out[0].nom,"7_Co");
			assert.equal(out[1].nom,"10_Co");
			assert.equal(out[2].nom,"Q_Co");
			assert.equal(out[3].nom,"K_Co");
			assert.equal(out[4].nom,"A_Co");
		})

		it("Renvoi un tableau vide", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("8_Co"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("A_Ca"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isCouleur(main);
			assert.equal(out.length,0);
		})
	})

	describe("Test quinte", function()
	{
		it("Renvoi une quinte", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_Co"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("J_P"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("3_Co"));
			main.push(new Pile.Carte("Q_Ca"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isQuinte(main);
			assert.equal(out.length,5);
			assert.equal(out[0].nom,"10_T");
			assert.equal(out[1].nom,"J_P");
			assert.equal(out[2].nom,"Q_Ca");
			assert.equal(out[3].nom,"K_Co");
			assert.equal(out[4].nom,"A_Co");
		})

		it("Renvoi un tableau vide", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("8_Co"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("A_Ca"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isQuinte(main);
			assert.equal(out.length,0);
		})
	})

	describe("Test quinte flush", function()
	{
		it("Renvoi une quinte flush", function()
		{
			var main = [];
			main.push(new Pile.Carte("9_Co"));
			main.push(new Pile.Carte("10_Co"));
			main.push(new Pile.Carte("J_Co"));
			main.push(new Pile.Carte("7_P"));
			main.push(new Pile.Carte("3_Ca"));
			main.push(new Pile.Carte("Q_Co"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isQuinteFlush(main);
			assert.equal(out.length,5);
			assert.equal(out[0].nom,"9_Co");
			assert.equal(out[1].nom,"10_Co");
			assert.equal(out[2].nom,"J_Co");
			assert.equal(out[3].nom,"Q_Co");
			assert.equal(out[4].nom,"K_Co");
		})

		it("Renvoi un tableau vide / Test  avec une quinte", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_Co"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("J_P"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("3_Co"));
			main.push(new Pile.Carte("Q_Ca"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isQuinteFlush(main);
			assert.equal(out.length,0);
		})

		it("Renvoi un tableau vide", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("8_Co"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("A_Ca"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isQuinteFlush(main);
			assert.equal(out.length,0);
		})
	})

	describe("Test quinte flush", function()
	{
		it("Renvoi une quinte flush royale", function()
		{
			var main = [];
			main.push(new Pile.Carte("9_Co"));
			main.push(new Pile.Carte("10_Co"));
			main.push(new Pile.Carte("J_Co"));
			main.push(new Pile.Carte("7_P"));
			main.push(new Pile.Carte("3_Ca"));
			main.push(new Pile.Carte("Q_Co"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isQuinteFlush(main);
			assert.equal(out.length,5);
			assert.equal(out[0].nom,"9_Co");
			assert.equal(out[1].nom,"10_Co");
			assert.equal(out[2].nom,"J_Co");
			assert.equal(out[3].nom,"Q_Co");
			assert.equal(out[4].nom,"K_Co");
		})

		it("Renvoi une quinte flush", function()
		{
			var main = [];
			main.push(new Pile.Carte("9_Co"));
			main.push(new Pile.Carte("10_Co"));
			main.push(new Pile.Carte("J_Co"));
			main.push(new Pile.Carte("7_P"));
			main.push(new Pile.Carte("3_Ca"));
			main.push(new Pile.Carte("Q_Co"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isQuinteFlush(main);
			assert.equal(out.length,5);
			assert.equal(out[0].nom,"9_Co");
			assert.equal(out[1].nom,"10_Co");
			assert.equal(out[2].nom,"J_Co");
			assert.equal(out[3].nom,"Q_Co");
			assert.equal(out[4].nom,"K_Co");
		})

		it("Renvoi un tableau vide / Test  avec une quinte", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_Co"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("J_P"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("3_Co"));
			main.push(new Pile.Carte("Q_Ca"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isQuinteFlush(main);
			assert.equal(out.length,0);
		})

		it("Renvoi un tableau vide", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("8_Co"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("A_Ca"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isQuinteFlush(main);
			assert.equal(out.length,0);
		})
	})

	describe("Test quinte royale", function()
	{
		it("Renvoi une quinte flush royale", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_Co"));
			main.push(new Pile.Carte("10_Co"));
			main.push(new Pile.Carte("J_Co"));
			main.push(new Pile.Carte("7_P"));
			main.push(new Pile.Carte("3_Ca"));
			main.push(new Pile.Carte("Q_Co"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isRoyalFlush(main);
			assert.equal(out.length,5);
			assert.equal(out[0].nom,"10_Co");
			assert.equal(out[1].nom,"J_Co");
			assert.equal(out[2].nom,"Q_Co");
			assert.equal(out[3].nom,"K_Co");
			assert.equal(out[4].nom,"A_Co");
		})

		it("Renvoi un tableau vide / Test une quinte flush", function()
		{
			var main = [];
			main.push(new Pile.Carte("9_Co"));
			main.push(new Pile.Carte("10_Co"));
			main.push(new Pile.Carte("J_Co"));
			main.push(new Pile.Carte("7_P"));
			main.push(new Pile.Carte("3_Ca"));
			main.push(new Pile.Carte("Q_Co"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isRoyalFlush(main);
			assert.equal(out.length,0);
		})

		it("Renvoi un tableau vide / Test avec une quinte", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_Co"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("J_P"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("3_Co"));
			main.push(new Pile.Carte("Q_Ca"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isRoyalFlush(main);
			assert.equal(out.length,0);
		})

		it("Renvoi un tableau vide", function()
		{
			var main = [];
			main.push(new Pile.Carte("A_P"));
			main.push(new Pile.Carte("10_T"));
			main.push(new Pile.Carte("8_Co"));
			main.push(new Pile.Carte("7_Co"));
			main.push(new Pile.Carte("A_T"));
			main.push(new Pile.Carte("A_Ca"));
			main.push(new Pile.Carte("K_Co"));
			var out = Combinaison.isRoyalFlush(main);
			assert.equal(out.length,0);
		})
	})
})