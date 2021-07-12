//create user object which will end up storing all our values
/*
Name, LifePoints, Currency, Deck Pouch, On Hand Deck(Max 40 Cards Held), locator cards, level, increment level, milenium items, milenium pieces

*/

const user = {
  name: null, //name will be changed at beginning of story
  lifePoints: 4000,
  currency: 0, //start user off with 0 of currency
  onHandDeck: [], //initialize to empty array since empty card deck starting off
  deckPouch: [], // initialize to empty array since empty card deck starting off
  coreValues: 2, //initalized to 2, in order to gain coreValues you need to do certain things MAX is 5 
  locatorCards: 0, // 6 needed to get access to battle city finals tournament
  level: 1,
  incrementLevel: function () {
    //if level is under 20, increment level, otherwise do nothing
    if (this.level < 20) this.level++;
  },
  getLifePoints: function () {
    return this.lifePoints;
  },
  decreaseLifePoints: function (damage) {
    this.getLifePoints() - damage; //used to lower life points
  },
  increaseLifePoints: function (heal) {
    this.getLifePoints() + heal; //used to increase life points
  },
  completedIntro: false, //indicate whether or not user completed intro
  mileniumItems: null, // milenium items arc is in development, will work on it after base proj is done
  mileniumPieces: null, // will be a part of milenium items arc
};

//create magic card class

class MagicCard {
  constructor(name, requirement, effect) {
    this._name = name;
    this._type = ["magic"];
    this._requirement = requirement;
    this._effect = effect; // an array of a string if 1 effect only, otherwise an array of strings
  }
  //getters
  get type() {
    return this._type;
  }
  get requirement() {
    return this._requirement;
  }
  get effect() {
    return this._effect;
  }
  //setters
  set requirement(changedRequirement) {
    this._requirement = changedRequirement;
  }
  set effect(changedEffect) {
    this._effect = changedEffect;
  }
}

//create field magic card sub-class from magic card
class FieldMagicCard extends MagicCard {
  constructor(name, requirement, effect) {
    super(name, requirement, effect);
    this._type = ["field", "magic"];
  }
}
//create equip magic card sub-class from magic card

class EquipMagicCard extends MagicCard {
  constructor(name, requirement, effect) {
    super(name, requirement, effect);
    this._type = ["equip", "magic"];
  }
}
//create ritual magic card sub-class from magic card
class RitualMagicCard extends MagicCard {
  constructor(name, requirement, effect) {
    super(name, requirement, effect);
    this._type = ["ritual", "magic"];
  }
}

//create trap card class - Will be used to counter specific conditions (Mostly attack though)
class TrapCard extends MagicCard {
  constructor(name, requirement, effect) {
    super(name, requirement, effect);
    this._type = ["trap"];
  }
}

//create trap card equip sub class
class EquipTrapCard extends MagicCard {
  constructor(name, requirement, effect) {
    super(name, requirement, effect);
    this._type = ["equip", "trap"];
  }
}

//create duelMonster class [underscore is needed for property names otherwise it'll cause stack overflow error]
class DuelMonster {
  constructor(
    name,
    starLevel,
    type,
    attribute,
    attackPoints,
    defensePoints,
    fusionID
  ) {
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
  constructor(
    name,
    starLevel,
    type,
    attribute,
    attackPoints,
    defensePoints,
    fusionID,
    specialEffect
  ) {
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
  constructor(
    name,
    starLevel,
    type,
    attribute,
    attackPoints,
    defensePoints,
    fusionID,
    fusionMaterials
  ) {
    super(
      name,
      starLevel,
      type,
      attribute,
      attackPoints,
      defensePoints,
      fusionID
    );
    this._specialEffect = null;
    this._type = [type, "Fusion"]; //Leverage the string fusion to throw Fusion Monsters into
    this._fusionMaterials = fusionMaterials; //String Indicating which monsters are needed in order to summon fused monster
  }
}

class DuelMonsterFusionSpecial extends DuelMonster {
  constructor(
    name,
    starLevel,
    type,
    attribute,
    attackPoints,
    defensePoints,
    fusionID,
    fusionMaterials,
    specialEffect
  ) {
    super(
      name,
      starLevel,
      type,
      attribute,
      attackPoints,
      defensePoints,
      fusionID
    );
    this._type = [type, "Fusion", "Effect"]; //Leverage the string fusion to throw Fusion Monsters into
    this._fusionMaterials = fusionMaterials; //String Indicating which monsters are needed in order to summon fused monster
    this._specialEffect = specialEffect; //Array of strings in specific order in case more than 1 effect for monster
  }
}

const blueEyesWhiteDragon = new DuelMonster(
  "Blue-Eyes White Dragon",
  8,
  "Dragon",
  "Light",
  3000,
  2500,
  1
);

const darkMagician = new DuelMonster(
  "Dark Magician",
  7,
  "Spell Caster",
  "Dark",
  2500,
  2100,
  2
);

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

// console.log(blueEyesUltimateDragon.defensePoints);

// const bigOcean = new FieldMagicCard("Big Ocean");

// const blackLusterRitual = new RitualMagicCard('black luster ritual', ['this card is used to ritual summon', 'BLACK LUSTER SOLDER', 'Tribute monsters whose total levels are greater than or equal to 8'], null);

