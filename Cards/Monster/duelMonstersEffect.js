const { DuelMonstersCreator } = require("../parentCardClasses");

/** Leveraging COVE to accomplish task of transporting an object from point A to B without breaking separation of concerns
 *
 * @returns {function} - function will be used to create persistent lexical scoped referenced data
 * for transporting cache object from one file to another utilizing module exports
 */
function storeDuelMonsterEffectCards() {
  //create DuelMonstersEffect sub class from DuelMonsters
  class DuelMonstersEffect extends DuelMonstersCreator {
    constructor(
      name,
      starLevel,
      type,
      attribute,
      attackPoints,
      defensePoints,
      fusionID,
      monsterCardRarity,
      effects,
      tributesRequired
    ) {
      super(
        name,
        starLevel,
        type,
        attribute,
        attackPoints,
        defensePoints,
        fusionID, //setting to null if card does not have a fusion
        monsterCardRarity,
        effects
      );
      this._type = [type, "effect"];
      this._effects = effects; //takes in array of strings
      this._tributesRequired = tributesRequired;
    }
    //getters
    get effects() {
      return this._effects;
    }
    //setters
    set effects(newEffects) {
      this._effects = newEffects; // May not need this, put it in just in case
    }
  }

  //assign a memo to store all magic cards being created by invoking returned function
  const duelMonsterEffectCardsCache = {};

  /** Stores magic card inside of cache object
   * @param {string} duelMonsterEffectCardName - name of magic card, represented as a string
   * @param {number} starLevel - amount of stars on top right hand side of yu-gi-oh card
   * @param {string[]} type - array of strings(There are 24 types of monsters in Yu-Gi-Oh)
   * @param {string} attribute - string representing  monsters attribute
   * @param {number} attackPoints - number repesenting the amount of attack points a monster has
   * @param {number} defensePoints - number repesenting the amount of defense points a monster has
   * @param {number} fusionID - associates fusion ID number with card for Polymerization to fuse with another duel monster
   * @param {string} monsterCardRarity - used to specify the rarity the card is used to give winner rarest card in opponents deck (battlecity duels + finals)
   * @param {string[]} effects - Effects, represented as an array of strings
   * @returns {object} - Recently created object || existing value(object) inside of cache object
   */
  return function (
    duelMonsterEffectCardName,
    starLevel,
    type,
    attribute,
    attackPoints,
    defensePoints,
    fusionID,
    monsterCardRarity,
    effects
  ) {
    //if magic card name is inside of the object already return value
    duelMonsterEffectCardName = duelMonsterEffectCardName.toUpperCase();
    //console.log(duelMonsterEffectCardName.toUpperCase());
    if (duelMonsterEffectCardsCache[duelMonsterEffectCardName]) {
      return duelMonsterEffectCardsCache[duelMonsterEffectCardName];
    }

    //not a-zA-Z , used to filter out strings that contain numbers or special characters in them
    const regex = /[^a-zA-Z0-9-\s]/;

    //edge-cases:
    //if duelMonsterEffectCardName is not a string or is a string that contains numbers or special characters, throw an Eval Error
    if (duelMonsterEffectCardName === "GET ALL CARDS") return duelMonsterEffectCardsCache;
    if (typeof duelMonsterEffectCardName !== "string" || regex.test(duelMonsterEffectCardName)) {
      throw new EvalError("duelMonsterEffectCardName must be a string and not contain numbers or special characters");
      //otherwise if tributesRequired is not of array datatype and not null throw an error
    } else if (!Array.isArray(effects)) {
      throw new TypeError("effects is not an array datatype or null");
    }
    //if effects at index 0 is not a string or has numbers and special characters other than space
    if (typeof effects[0] !== "string" || regex.test(effects[0])) {
      throw new EvalError("effects must be an array of strings and not contain numbers or special characters");
    }

    //declare a variable named tributesRequired and initialize it to null
    let tributesRequired = null;
    //depending on monsters star level assign it a value between 0 and 3
    if (starLevel >= 10) {
      tributesRequired = 3;
    } else if (starLevel >= 7) {
      tributesRequired = 2;
    } else if (starLevel >= 5) {
      tributesRequired = 1;
    } else {
      tributesRequired = 0;
    }

    //declare a flag variable to determine if tributesRequired or effects has a non string in their index as we lowercase strings.
    let indexOfReqsAndEffectsAreValid = true;
    //iterate through array if tributesRequired is not null and there is more than 1 string in array
    if (tributesRequired !== null && tributesRequired.length > 1) {
      //iterate through array
      for (let i = 0; i < tributesRequired.length; i++) {
        //if current requirement is not a strng, set flag variable to false and break out of loop
        if (typeof tributesRequired[i] !== "string") {
          indexOfReqsAndEffectsAreValid = false;
          break;
        }
        //mutate current index to evaluated result of lower casing current requirement
        tributesRequired[i] = tributesRequired[i].toLowerCase();
      }
    }

    if (effects.length > 0) {
      //iterate through array
      for (let i = 0; i < effects.length; i++) {
        //if current requirement is not a strng, set flag variable to false and break out of loop
        if (typeof effects[i] !== "string") {
          indexOfReqsAndEffectsAreValid = false;
          break;
        }
        //mutate current index to evaluated result of lower casing current effect
        effects[i] = effects[i].toLowerCase();
      }
    }

    if (!indexOfReqsAndEffectsAreValid) throw new EvalError("all tributesRequired and effects must be of string data type");

    //uppercase name of magic card
    duelMonsterEffectCardName = duelMonsterEffectCardName.toUpperCase();

    // otherwise store the key in cache and assign it an object as value
    duelMonsterEffectCardsCache[duelMonsterEffectCardName] = new DuelMonstersEffect(
      duelMonsterEffectCardName,
      starLevel,
      type,
      attribute,
      attackPoints,
      defensePoints,
      fusionID,
      monsterCardRarity,
      effects,
      tributesRequired
    );
    return duelMonsterEffectCardsCache[duelMonsterEffectCardName];
  };
}

const duelMonsterEffectCards = storeDuelMonsterEffectCards();
/* ------- ALL CARDS ADD BELOW THIS LINE ------- */
//      duelMonsterEffectCardName, starLevel, type, attribute, attackPoints, defensePoints, fusionID, monsterCardRarity, effects, tributesRequired,
//tier system rarity - normal, rare, ultra rare, legendary

//jinzo
duelMonsterEffectCards("jinzo", 6, "machine", "dark", 2400, 1500, null, "ultra rare", [
  "trap cards cannot be activated",
  "the effects of all face-up trap cards are negated",
]);

//copycat
duelMonsterEffectCards("copycat", 1, "spellcaster", "light", 0, 0, null, "normal", [
  "When this card is summoned target 1 face-up monster your opponent controls",
  "this cards ATK and DEF become equal to that monsters original ATK and DEF",
]);

//buster blader
duelMonsterEffectCards("buster blader", 7, "warrior", "earth", 2600, 2300, null, "rare", [
  "This card gains 500 ATK for each dragon-type monster on your opponents side of the field or in their graveyard",
]);

/* ------- ADD ALL CARDS ABOVE THIS LINE ------- */
//used to get all cards within memo
const duelMonstersEffectCardStorage = duelMonsterEffectCards("get all cards");

// line below - used to log the entire duelMonstersEffectCardStorage
console.log(duelMonstersEffectCardStorage);

//line below - used to test whether or not dark hole magic card was already created
// console.log("Card is already here:",duelMonsterEffectCards("copycat"));

exports.duelMonstersEffectCardStorage = duelMonstersEffectCardStorage;
