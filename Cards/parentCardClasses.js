class DuelMonstersCreator {
  constructor(name, starLevel, type, attribute, attackPoints, defensePoints, fusionID, monsterCardRarity) {
    this._name = name;
    this._starLevel = starLevel; //star level is amount of stars on top right of card
    this._type = [type];
    this._attribute = attribute; // elemental attribute
    this._attackPoints = attackPoints;
    this._defensePoints = defensePoints;
    this._fusionID = fusionID;
    this._monsterCardRarity = monsterCardRarity;
    this._specialEffect = null;
    this._onField = false;
    this._inGraveyard = false;
    this._attackPos = true //false for defense
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
    this._faceUp = false;
  }
  monsterChant() {
    return `I summon ${this._name}!`;
  }
}

//create CardEffectCreator class
class CardEffectCreator {
  constructor(name, requirements, effect) {
    this._name = name;
    this._requirements = requirements;
    this._effect = effect; // an array of a string if 1 effect only, otherwise an array of strings
    this._faceUp = true;
    this._attackPos = true //false for defense
  }
  //getters
  get type() {
    return this._type; //returns the type in an array
  }
  get requirements() {
    return this._requirements; //returns an array back in chronological order if there are more conditions in effect
  }
  get effect() {
    return this._effect; //returns an array back in chronological order if there are more conditions in the effect
  }
  //setters
  set requirements(changedRequirements) {
    this._requirements = changedRequirements; //may not be used much if at all but placing here in case requirements end up changing from the result of using a card
  }
  set effect(changedEffect) {
    this._effect = changedEffect; //may not be used much if at all
  }
  //methods
  setfaceDown() {
    this._faceUp = false; //set card to facedown
  }
}

module.exports = { DuelMonstersCreator, CardEffectCreator };

//My goal is to use seperation of concerns to get all these objects created in specific places

//once we have everything exported, leverage closures to get memoized object from
//one location to another and have the closed in function take in an argument
// which will be a key and then to access a monster or card in a function must
//use key
