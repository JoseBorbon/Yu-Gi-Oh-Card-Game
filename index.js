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
  locatorCards: 0,
  level: 1,
  incrementLevel: function () {
    //if level is under 20, increment level, otherwise do nothing
    if (this.level < 20) this.level++;
  },
  completedIntro: false, //indicate whether or not user completed intro
  mileniumItems: null, // milenium items arc is in development, will work on it after base proj is done
  mileniumPieces: null, // will be a part of milenium items arc
};

//create duelMonsterNormal class [underscore is needed for property names otherwise it'll cause stack overflow error]
class DuelMonsterNormal {
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
    this._type = [type, "Normal"];
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

  //methods
  setfaceDown() {
    this.faceUp = false;
  }
}

// create duelMonsterSpecialClass

class DuelMonsterSpecial extends DuelMonsterNormal {
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
    super(name, starLevel, attribute, attackPoints, defensePoints, fusionID);
    this._type = [type, "Effect"];
    this._specialEffect = specialEffect.toLowerCase(); //takes in string value
  }

  get specialEffect() {
    return this._specialEffect;
  }

  set specialEffect(newSpecialEffect) {
    this._specialEffect = newSpecialEffect; // May not need this, put it just in case
  }
}

const blueEyesWhiteDragon = new DuelMonsterNormal(
  "Blue-Eyes White Dragon",
  8,
  "Dragon",
  "Light",
  3000,
  2500,
  1
);
const darkMagician = new DuelMonsterNormal(
  "Dark Magician",
  7,
  "Spell Caster",
  "Dark",
  2500,
  2100,
  2
);
const silentWobby = new DuelMonsterSpecial(
  "Silent Wobby",
  4,
  "Fish",
  "Water",
  1000,
  2000,
  null,
  `During your Main Phase: You can Special Summon this card from your hand to your opponent's side of the field. When Summoned this way: Draw 1 card, and if you do, your opponent gains 2000 Life Points. You can only use this effect of "Silent Wobby" once per turn. The hand size limit of this card's controller becomes 3.`
);

console.log(silentWobby.attackPoints);
