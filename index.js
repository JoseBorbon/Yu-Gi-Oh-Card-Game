//create user object which will end up storing all our values
/*
Name, LifePoints, Currency, Deck Pouch, On Hand Deck(Max 40 Cards Held), locator cards, level, increment level, milenium items, milenium pieces
*/

//import all modules needed
const fs = require("fs");

//importing magicCards object
const imported = require("./Cards/Magic/magicCard");
const magicCardStorage = imported.magicCardStorage;

// WILL BE WORKING ON THIS LATER, I intend to
const user = {
  lifePoints: 4000,
  //saveData key will store user save data in an object
  saveData: JSON.parse(fs.readFileSync("duelist.json")),

  //have to keep methods here because stringifying the object will remove all methods
  incrementLevel: function () {
    //if level is under 20, increment level, otherwise do nothing
    if (this.saveData.level < 10) this.saveData.level++;
  },
  getLifePoints: function () {
    return this.lifePoints;
  },
  decreaseLifePoints: function (damage) {
    if (this.getLifePoints() - damage <= 0) this.lifePoints = 0;
    //edge case for if life points are less than or equal to 0, to be 0
    else this.lifePoints = this.getLifePoints() - damage; //used to lower life points
  },
  increaseLifePoints: function (heal) {
    this.lifePoints = this.getLifePoints() + heal; //used to increase life points
  },
};

//declare a variable called userSaveData and assign it user at saveData which points to an object
const userSaveData = user.saveData;
// userSaveData.currency += 10000000000000;
console.log(user.getLifePoints());
console.log(userSaveData);

//create duelMonster class [underscore is needed for property names otherwise it'll cause stack overflow error]
class DuelMonster {
  constructor(name, starLevel, type, attribute, attackPoints, defensePoints, fusionID) {
    this._name = name;
    this._starLevel = starLevel; //star level is amount of stars on top right of card
    this._type = [type];
    this._attribute = attribute; // elemental attribute
    this._attackPoints = attackPoints;
    this._defensePoints = defensePoints;
    this._fusionID = fusionID;
    this._specialEffect = null;
    this._onField = false;
    this._inGraveyard = false;
    this._attackPos = true; //false for defense
    this._faceUp = true; //set to false for face-down
  }
  //getters
  get attackPoints() {
    return this._attackPoints;
  }
  get defensePoints() {
    return this._defensePoints;
  }
  get starLevel() {
    return this._starLevel;
  }
  get type() {
    return this._type;
  }
  get attribute() {
    return this._attribute;
  }
  get fusionID() {
    return this._fusionID;
  }
  get faceUp() {
    return this._faceUp;
  }
  get specialEffect() {
    return this._specialEffect; //May not need this, added it incase we end up needing to give a normal card an effect
  }

  //setters
  set attackPoints(newAttackPoints) {
    this._attackPoints = newAttackPoints;
  }
  set defensePoints(newDefensePoints) {
    this._defensePoints = newDefensePoints;
  }
  set starLevel(newStarLevel) {
    this._starLevel = newStarLevel;
  }
  set type(newType) {
    this._type = newType;
  }
  set attribute(newAttribute) {
    this._attribute = newAttribute;
  }
  set specialEffect(newSpecialEffect) {
    this._specialEffect = newSpecialEffect;
  }

  //methods
  setfaceDown() {
    this.faceUp = false;
  }
}

// create duelMonsterSpecialClass
class DuelMonsterSpecial extends DuelMonster {
  constructor(name, starLevel, type, attribute, attackPoints, defensePoints, fusionID, specialEffect) {
    super(
      name,
      starLevel,
      type,
      attribute,
      attackPoints,
      defensePoints,
      fusionID //setting to null if card does not have a fusion
    );
    this._type = [type, "effect"];
    this._specialEffect = specialEffect.toLowerCase(); //takes in string value
  }

  get specialEffect() {
    return this._specialEffect;
  }

  set specialEffect(newSpecialEffect) {
    this._specialEffect = newSpecialEffect; // May not need this, put it just in case
  }
}

class DuelMonsterFusion extends DuelMonster {
  constructor(name, starLevel, type, attribute, attackPoints, defensePoints, fusionID, fusionMaterials) {
    super(name, starLevel, type, attribute, attackPoints, defensePoints, fusionID);
    this._specialEffect = null;
    this._type = [type, "Fusion"]; //Leverage the string fusion to throw Fusion Monsters into
    this._fusionMaterials = fusionMaterials; //String Indicating which monsters are needed in order to summon fused monster
  }
}

class DuelMonsterFusionSpecial extends DuelMonster {
  constructor(name, starLevel, type, attribute, attackPoints, defensePoints, fusionID, fusionMaterials, specialEffect) {
    super(name, starLevel, type, attribute, attackPoints, defensePoints, fusionID);
    this._type = [type, "Fusion", "Effect"]; //Leverage the string fusion to throw Fusion Monsters into
    this._fusionMaterials = fusionMaterials; //String Indicating which monsters are needed in order to summon fused monster
    this._specialEffect = specialEffect; //Array of strings in specific order in case more than 1 effect for monster
  }
}

class DuelMonsterRitual extends DuelMonster {
  constructor(name, starLevel, type, attribute, attackPoints, defensePoints) {
    super(name, starLevel, type, attribute, attackPoints, defensePoints);
    this._type = [type, "Ritual"]; //ritual card needs magic card to summon monster
  }
}

/*
//magic cards - done
const swordsOfRevealingLight = new MagicCard(
  "Swords Of Revealing Light",
  null,
  [
    "Flip All Monsters Opponent Controls Face-Up",
    "Card Remains on Field for 3 of your opponents turns",
    "While card is on field, monsters your opponent controls cannot declare an attack",
  ]
);

const changeOfHeart = new MagicCard(
  "CHANGE OF HEART",
  ["opponent must have 1 monster card on the field"],
  [
    "target 1 monster your opponent controls",
    "take control of the monster until the end of user phase",
  ]
);

const brainControl = new MagicCard(
  "BRAIN CONTROL",
  [
    "opponent must have 1 monster card on the field",
    "selected card must be face-up",
  ],
  [
    "target 1 monster your opponent controls",
    "take control of the monster until the end of user phase",
  ]
);

const gracefulCharity = new MagicCard("GRACEFUL CHARITY", null, [
  "Draw 3 cards from deck",
  "discard 2 cards from deck",
]);

const polymerization = new MagicCard(
  "POLYMERIZATION",
  [
    "must have fusion material monsters in hand or on own side of the field that are listed by fusion monster card",
  ],
  ["special summon fusion monster from your fusion deck"]
);

const darkHole = new MagicCard("DARK HOLE", null, [
  "destroy all monsters on the field",
]);

const monsterReborn = new MagicCard("MONSTER REBORN", null, [
  "Target 1 monster in either player's graveyard",
]);

//field magic cards - done
const fusionGate = new FieldMagicCard("FUSION GATE", null, [
  "As long as card is on field, monsters can be fused without polymerization card",
]);

const wasteLand = new FieldMagicCard("WASTELAND", null, [
  "All Dinosaur, Zombie, Rock monsters on the field gain 200 attack and defense points",
]);

const forest = new FieldMagicCard("FOREST", null, [
  "All Insect, Beast, Plant, and Beast-Warrior monsters on the field gain 200 attack and defense points",
]);

const yami = new FieldMagicCard("YAMI", null, [
  "all fiend and spellcaster monsters on the field gain 200 attack and defense points",
  "all fairy type monsters on the field lose 200 attack and defense points",
]);

const mountain = new FieldMagicCard("MOUNTAIN", null, [
  "all dragon, winged beast, and thunder monsters on the field gain 200 attack and defense points",
]);

//continuous magic cards - done
const infiniteCards = new ContinuousMagicCard("INFINITE CARDS", null, [
  "As long as infinite cards is on the field, hand limit of 6 is removed",
]);

const amandasNaggingCats = new ContinuousMagicCard(
  "AMANDAS NAGGING CATS",
  null,
  ["inflict 300 life points at the beginning of opponents turn"]
);

const burningLand = new ContinuousMagicCard("BURNING LAND", null, [
  "if there are any field spell cards on the field, destroy them",
  "During each players stand by phase, the turn player takes 500 damage",
]);

const darkRoomOfNightmare = new ContinuousMagicCard(
  "DARK ROOM OF NIGHTMARE",
  null,
  [
    "each time opponent takes damage from a spell or trap card effect, inflict 300 damage to opponent",
  ]
);

const attrition = new ContinuousMagicCard("ATTRITION", null, [
  "If opponents monster is not destroyed by battle, it loses attack equal to the battle damage", //what is battle damage? Net Difference?
]);

const toonWorld = new ContinuousMagicCard("TOON WORLD", null, [
  "Pay 1000 life points to activate the card on field",
]);

// spiral spear strike to add later

//equip magic cards - done
const blackPendant = new EquipMagicCard(
  "BLACK PENDANT",
  ["at least 1 monster must be on your side of the field"],
  [
    "The equipped monster gains 500 attack points",
    "when this card is sent to the graveyard(death of monster card equipping it or usage of magic card remover) inflict 500 damage to your opponent",
  ]
);

const unitedWeStand = new EquipMagicCard(
  "UNITED WE STAND",
  ["at least 1 monster must be on your side of the field"],
  [
    "Equipped Monster gains 800 Attack and Defense points for each monster you control on the field",
  ]
);

const gravityAxe = new EquipMagicCard(
  "GRAVITY AXE - GRARL",
  ["at least 1 monster must be on your side of the field"],
  [
    "Equipped Monster gains 500 attack points",
    "monsters opponent controls cannot change battle positions",
  ]
);

const twinSwordsOfFlashingLightTryce = new EquipMagicCard(
  "TWIN SWORDS OF FLASHING LIGHT - TRYCE",
  ["Must send 1 card from hand to graveyard"],
  [
    "monster equipped with this card loses 500 attack points",
    "monster equipped with this card can attack twice during same battle phase",
  ]
);

const salamandra = new EquipMagicCard(
  "SALAMANDRA",
  ["Monster card being equipped this card must be FIRE type"],
  ["Gain 700 Attack Points"]
);

//ritual magic cards
const blackLusterRitual = new RitualMagicCard(
  "BLACK LUSTER RITUAL",
  [
    "BLACK LUSTER SOLDER monster card must be in hand",
    "Tribute monsters whose total levels are greater than or equal to 8",
  ],
  [
    "Summon Black Luster Soldier onto the field and move tribute cards to graveyard",
  ]
);

const blackMagicRitual = new RitualMagicCard(
  "BLACK MAGIC RITUAL",
  [
    "Magician Of Black Chaos must be in hand",
    "Tribute monsters used must have total level greater than or equal to 8 combined",
  ],
  [
    "Summon Magician Of Black Chaos onto the field and move tribute cards to graveyard",
  ]
);

const zeraRitual = new RitualMagicCard(
  "ZERA RITUAL",
  [
    "Zera The Mant must be in hand",
    "Tribute monsters used must have total level greater than or equal to 8 combined",
  ],
  ["Summon Zera the mant onto the field and move tribute cards to graveyard"]
);

const whiteDragonRitual = new RitualMagicCard(
  "WHITE DRAGON RITUAL",
  [
    "Paladin of the white dragon must be in hand",
    "Tribute monsters used must have total level greater than or equal to 4 combined",
  ],
  [
    "Summon Paladin Of White Dragon onto the field and move tribute cards to graveyard",
  ]
);

//trap cards - done
const mirrorForce = new TrapCard(
  "MIRROR FORCE",
  ["opponent has to declare an attack"],
  [
    "destoy all attack position monsters opponent controls on their side of the field",
  ]
);

const lightForceSword = new TrapCard(
  "LIGHTFORCE SWORD",
  ["opponent must at least have 1 card in hand"],
  [
    "randomly select a card from opponents hand and remove it from play face-down for 3 opponent turns",
    "after 4th turn, put card back in opponents hand ",
  ]
);

const magicCylinder = new TrapCard(
  "MAGIC CYLINDER",
  ["opponent must declare an attack"],
  [
    "negate attack using this card",
    "inflict damage to opponent equal to monsters attack points",
  ]
);

const magicJammer = new TrapCard(
  "MAGIC JAMMER",
  ["opponent must activate spell card"],
  [
    "negate spell card activation and send to graveyard unless opponent has a counter trap card on field",
  ]
);

const maskOfWeakness = new TrapCard(
  "MASK OF WEAKNESS",
  ["opponent monster must attack"],
  [
    "decrease the attack points of opponents attacking monster by 700 until the end of opponents turn",
  ]
);

//continuous trap cards - done
const spellBindingCircle = new ContinousTrapCard(
  "SPELLBINDING CIRCLE",
  ["1 monster must be on opponents side of the field"],
  [
    "selected monster on opponents side is unable to attack or change it's battle position",
  ]
);

const imperialOrder = new ContinousTrapCard("IMPERIAL ORDER", null, [
  "negate all spell effects on the field",
  "during standby phase, lose 700 life points or destroy this card", //when it's players stand by phase, user loses 700 life points and when it's npcs stand by phase, opponent loses 700 life points
]);

const gravityBind = new ContinousTrapCard("GRAVITY BIND", null, [
  "Level 4 or higher monsters cannot attack",
]);

const callOfTheHaunted = new ContinousTrapCard(
  "CALL OF THE HAUNTED",
  ["must have at least 1 monster in own graveyard"],
  [
    "special summon monster card from graveyard back onto field in attack mode",
    "when monster gets destroyed, destroy this card and send to graveyard",
    "otherwise if trap card gets destroyed, then send monster back to graveyard that was summoned using the card",
  ]
);

const maskOfRestrict = new ContinousTrapCard("MASK OF RESTRICT", null, [
  "monster cards cannot be tributed",
]);

//equip trap cards - NONE FOUND SO FAR MAY END UP REMOVING CLASS
*/

//monster cards Summon Below
const blueEyesWhiteDragon = new DuelMonster("Blue-Eyes White Dragon", 8, "Dragon", "Light", 3000, 2500, 1);

const darkMagician = new DuelMonster("Dark Magician", 7, "Spell Caster", "Dark", 2500, 2100, 2);

const blueEyesUltimateDragon = new DuelMonsterFusion(
  "Blue-Eyes Ultimate Dragon",
  12,
  "Dragon",
  "Light",
  4500,
  3800,
  null,
  "Blue-Eyes White Dragon + Blue-Eyes White Dragon2 + Blue-Eyes White Dragon3"
);

// console.log(blueEyesUltimateDragon);

// console.log(amandasNaggingCats);
