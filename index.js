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

//create monstercard class

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
    this.name = name;
    this.starLevel = starLevel; //star level is amount of stars on top right of card
    this.type = [type, "Normal"];
    this.attribute = attribute; // elemental attribute
    this.attackPoints = attackPoints;
    this.defensePoints = defensePoints;
    this.fusionID = fusionID;
    this.onField = false;
    this.inGraveyard = false;
    this.faceUp = true; //set to false for face-down
  }
  //getters
  get attackPoints() {
    return this.attackPoints;
  }
  get defensePoints() {
    return this.defensePoints;
  }
  get starLevel() {
    return this.starLevel;
  }
  get type() {
    return this.type;
  }
  get attribute() {
    return this.attribute;
  }
  get fusionID() {
    return this.fusionID;
  }
  get faceUp() {
    return this.faceUp;
  }
  //setters
  set attackPoints(newAttackPoints) {
    this.attackPoints = newAttackPoints;
  }
  set defensePoints(newDefensePoints) {
    this.defensePoints = newDefensePoints;
  }
  set starLevel(newStarLevel) {
    this.starLevel = newStarLevel;
  }
  set type(newType) {
    this.type = newType;
  }
  set attribute(newAttribute) {
    this.attribute = newAttribute;
  }

  //methods
  setfaceDown() {
    this.faceUp = false;
  }
}
