/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:    Class
	Effect:     This script adds the class called "Feywalker" in its final incarnation as presented in EN5ider 420.
				The class was originally published standalone in EN5ider 91 (in 2016), and reprinted in 2017's
				special EN5ider collection "A Touch of Class".

				This class has been made by EN World EN5ider

				This class can be found here: https://www.patreon.com/posts/6947104

				Please support the creators of this content on their Patreon: https://www.patreon.com/ensider

	Code by:	allaryin
	Date:		2022-08-16 (sheet v13.1.0)
*/
var iFileName = "Feywalker [EN World EN5ider, transcribed by allaryin].js";
RequiredSheetVersion(13);

// The Feywalker class (EN5ider 420)
SourceList["EN5:420"] = {
	name : "EN World EN5ider [420] The Masterclass Codex",
	abbreviation : "EN5:420",
	group : "EN World EN5ider",
	url : "https://www.patreon.com/posts/masterclass-57775710",
	date : "2021/10/23"
};

ClassList["feywalker"] = {
	name : "Feywalker",
	regExpSearch : /^(?=.*fey)(?=.*walker).*$/i,
	source : [["EN5:420", 45], ["EN5:91", 0], ["EN5:AToC", 43]],
	primaryAbility : "Dexterity or Charisma",
	prereqs : "Wisdom 13 or Charisma 13",
	die : 10,
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Dex", "Cha"],
	skills : [
		// primary class
		"\n\n" + toUni("Feywalker") + ": Choose three from Athletics, Deception, Perception, Performance, Persuasion, and Survival.",
		// secondary class
		"\n\n" + toUni("Feywalker") + ": Choose one from Athletics, Deception, Perception, Performance, Persuasion, and Survival.",
	],
	toolProfs : {
		primary : [["Dice"], ["Playing Cards"], ["Musical Instrument", 2]]
	},
	armorProfs : [
		// primary class
		[true, true, false, true],
		// secondary class - no shield for secondary
		[true, true, false, false],
	],
	weaponProfs : [
		// primary class
		[true, true, []],
		// secondary class - no martial weapons for secondary
		[true, false, []],
	],
	equipment : "Feywalker starting equipment:\n \u2022 A scimitar -or- a greataxe;\n \u2022 A longbow and 20 arrows -or- ten darts;\n \u2022 Studded leather -or- breastplate;\n \u2022 An entertainer's pack -or- an explorer's pack.",
	subclasses : ["Primal Sphere", []],
	attacks : [1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3],
	abilitySave : 6,
	features : {
		// level 1
		"feytalker": {
			name : "Feytalker",
			source : ["EN5:420", 47],
			minlevel : 1,
			languageProfs : [
				"Sylvan",
			],
			description : desc([
				"You can grant a number of creatures equal to your proficiency bonus the ability to understand Sylvan.",
				"These creatures must be the same type of creature as your Fey Companion (determined by your choice of Primal Sphere).",
				"Creatures do not need to be re-taught Sylvan, but teaching any more creatures than your maximum causes previous creatures to forget the language.",
			]),
			usages : 1,
			recovery : "long rest",
		},
		"subclassfeature1" : {
			name : "Primal Sphere",
			source : ["EN5:420", 47],
			minlevel: 1,
		},
		// level 2
		"feystep" : {
			name : "Feystep",
			source : ["EN5:420", 47],
			minlevel : 2,
			description : desc([
				"You can draw upon the power of the Fey Realm to exploit the chaotic connections of reality, folding space and stepping between it.",
				"As part of your movement, you can teleport to an unoccupied space you can see that is within 5 feet times your feywalker level.",
				"You cannot use this feature if you are blinded, grappled, prone, restrained, or stunned.",
			]),
			// proficiency modifier
			usages : levels.map(function (n) { return n < 5 ? 2 : n < 9 ? 3 : n < 13 ? 4 : n < 17 ? 5 : 6; }),
			recovery : "short rest",
		},
		"feytouch" : {
			name : "Feytouch",
			source : ["EN5:420", 47],
			minlevel : 2,
			description : desc([
				"You can touch a creature as a bonus action to magically know the creature's current emotional state.",
				"If the target fails a Charisma saving throw, you also know the creature's alignment.",
				"Celestials, fiends, and undead automatically fail the saving throw.",
			]),
			action : ["bonus action", ""],
		},
		// level 3
		"fey companion" : {
			name : "Fey Companion",
			source : ["EN5:420", 48],
			minlevel : 3,
			description : desc([
				"Your Primal Sphere grants you a Fey Companion willing to fight alongside you.",
				"You must spend 4 hours in meditation calling to your companion before it passes into your plane from the Fey Realm",
				"Your fey companion is of the fey type, and gains a bonus to its Armor Class, attack rolls, damage rolls, and any saving throws and skills it has proficiency in equal to your proficiency bonus.",
				"Your fey companion's maximum hit points equal its normal maximum or four times your feywalker level (whichever is higher).",
				"Your fey companion may also make use of your Feystep feature by expending one of your uses.",
				//
				"You can use your bonus action to verbally command your fey companion to take the Attack, Disengage, Dodge, or Help action (no action is required to tell the companion how and where to move).",
				"Unless commanded, on your initiative your fey companion takes no hostile actions and acts as it normally would (usually to Disengage or Dodge).",
				"When you have multiple fey companions, you may spend your action giving all of them different commands or a bonus action to command one of them.",
				//
				"If your fey companion dies, you can obtain another one by spending 8 hours meditating to call another creature.",
			]),
			action : ["bonus action", ""],
		}
	},
}

AddSubClass("feywalker", "sphere of beasts", {
	regExpSearch : /^(?=.*fey)(?=.*walker)(?=.*sphere)(?=.*beast).*$/i,
	subname : "Sphere of Beasts",
	source : ["EN5:420", 50],
});

AddSubClass("feywalker", "sphere of plants", {
	regExpSearch : /^(?=.*fey)(?=.*walker)(?=.*sphere)(?=.*plant).*$/i,
	subname : "Sphere of Plants",
	source : ["EN5:420", 50],
	features : {
		"subclassfeature1" : {
			name : "Cantrips and Skill",
			minlevel : 1,
			description : desc([
				"Choose three of the following cantrips: acid splash, chill touch, control flames, fire bolt, gust, prestidigitation, produce flame, ray of frost, shocking grasp.",
				"You use Charisma as your spellcasting attribute and never require material components to cast these cantrips.",
				"Additionally, you gain proficiency in Nature.",
			]),
			skills : ["Nature"],
			spellcastingBonus : {
				name : "Feywalker",
				spells : ["acid splash", "chill touch", "control flames", "fire bolt", "gust", "prestidigitation", "produce flame", "ray of frost", "shocking grasp"],
				selection : ["acid splash", "chill touch", "control flames", "fire bolt", "gust", "prestidigitation", "produce flame", "ray of frost", "shocking grasp"],
				times : 3,
			},
		}
	}
});

AddSubClass("feywalker", "sphere of entropy", {
	regExpSearch : /^(?=.*fey)(?=.*walker)(?=.*sphere)(?=.*entropy).*$/i,
	subname : "Sphere of Entropy",
	source : ["EN5:420", 51],
});
