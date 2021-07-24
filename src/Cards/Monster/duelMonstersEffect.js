const { DuelMonstersCreator } = require("../parentCardClasses");

/** Leveraging COVE to accomplish task of transporting an object from point A to B without breaking separation of concerns
 *
 * @returns {function} - function will be used to create persistent lexical scoped referenced data
 * for transporting cache object from one file to another utilizing module exports
 */
function storeDuelMonstersEffectCards() {
  //create DuelMonstersEffect sub class from DuelMonsters
  class DuelMonstersEffect extends DuelMonstersCreator {
    constructor(name, starLevel, type, attribute, attackPoints, defensePoints, fusionID, monsterCardRarity, effects) {
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
      this._type = [type, "Effect"];
      this._effects = effects; //takes in array of strings
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
  const duelMonstersEffectCardsCache = {};

  /** Stores magic card inside of cache object
   * @param {string} duelMonstersEffectCardName - name of magic card, represented as a string
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
  return function (duelMonstersEffectCardName, starLevel, type, attribute, attackPoints, defensePoints, fusionID, monsterCardRarity, effects) {
    //if magic card name is inside of the object already return value
    duelMonstersEffectCardName = duelMonstersEffectCardName.toUpperCase();
    //console.log(duelMonstersEffectCardName.toUpperCase());
    if (duelMonstersEffectCardsCache[duelMonstersEffectCardName]) {
      return Object.assign(Object.create(duelMonstersEffectCardsCache[duelMonstersEffectCardName]), duelMonstersEffectCardsCache[duelMonstersEffectCardName]);
    }

    //not a-zA-Z , used to filter out strings that contain numbers or special characters in them
    const regex = /[^a-zA-Z0-9-\s]/;

    //edge-cases:
    //if duelMonstersEffectCardName is not a string or is a string that contains numbers or special characters, throw an Eval Error
    if (duelMonstersEffectCardName === "GET ALL CARDS") return duelMonstersEffectCardsCache;
    if (typeof duelMonstersEffectCardName !== "string" || regex.test(duelMonstersEffectCardName)) {
      throw new EvalError("duelMonstersEffectCardName must be a string and not contain numbers or special characters");
      //otherwise if  is not of array datatype and not null throw an error
    } else if (!Array.isArray(effects)) {
      throw new TypeError("effects is not an array datatype or null");
    }
    //if effects at index 0 is not a string or has numbers and special characters other than space
    if (typeof effects[0] !== "string" || regex.test(effects[0])) {
      throw new EvalError("effects must be an array of strings and not contain numbers or special characters");
    }

    //declare a variable named  and initialize it to null
    let = null;

    //declare a flag variable to determine if  or effects has a non string in their index as we lowercase strings.
    let indexOfReqsAndEffectsAreValid = true;
    //iterate through array if  is not null and there is more than 1 string in array
    if (effects !== null && effects.length > 1) {
      //iterate through array
      for (let i = 0; i < effects.length; i++) {
        //if current requirement is not a strng, set flag variable to false and break out of loop
        if (typeof [i] !== "string") {
          indexOfReqsAndEffectsAreValid = false;
          break;
        }
        //mutate current index to evaluated result of lower casing current requirement
        [i] = [i].toLowerCase();
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

    //uppercase name of magic card
    duelMonstersEffectCardName = duelMonstersEffectCardName.toUpperCase();
    //uppercase type string
    type = type.toUpperCase();
    //uppercase attribute
    attribute = attribute.toUpperCase();
    //concatenate the uppercase first letter of monsterCardRarity and all other characters in monsterCardRarity string
    monsterCardRarity = monsterCardRarity[0].toUpperCase() + monsterCardRarity.slice(1);

    // otherwise store the key in cache and assign it an object as value
    duelMonstersEffectCardsCache[duelMonstersEffectCardName] = new DuelMonstersEffect(
      duelMonstersEffectCardName,
      starLevel,
      type,
      attribute,
      attackPoints,
      defensePoints,
      fusionID,
      monsterCardRarity,
      effects
    );
    return Object.assign(Object.create(duelMonstersEffectCardsCache[duelMonstersEffectCardName]), duelMonstersEffectCardsCache[duelMonstersEffectCardName]);
  };
}

const duelMonstersEffectCards = storeDuelMonstersEffectCards();
/* ------- ALL CARDS ADD BELOW THIS LINE ------- */
//      duelMonstersEffectCardName, starLevel, type, attribute, attackPoints, defensePoints, fusionID, monsterCardRarity, effects, ,
//tier system rarity - normal, rare, ultra rare, legendary

//jinzo
duelMonstersEffectCards("jinzo", 6, "machine", "dark", 2400, 1500, null, "ultra rare", ["trap cards cannot be activated", "the effects of all face-up trap cards are negated"]);

//copycat
duelMonstersEffectCards("copycat", 1, "spellcaster", "light", 0, 0, null, "normal", [
  "When this card is summoned target 1 face-up monster your opponent controls",
  "this cards ATK and DEF become equal to that monsters original ATK and DEF",
]);

//buster blader
duelMonstersEffectCards("buster blader", 7, "warrior", "earth", 2600, 2300, null, "rare", [
  "This card gains 500 ATK for each dragon-type monster on your opponents side of the field or in their graveyard",
]);

/* ------- ADD ALL CARDS ABOVE THIS LINE ------- */
//used to get all cards within memo
const duelMonstersEffectCardStorage = duelMonstersEffectCards("get all cards");

// line below - used to log the entire duelMonstersEffectCardStorage
console.log(duelMonstersEffectCardStorage);

//line below - used to test whether or not dark hole magic card was already created
// console.log("Card is already here:",duelMonstersEffectCards("copycat"));

const copycat = duelMonstersEffectCards("copycat");
console.log(copycat);

//monster chant test below
// console.log(copycat.monsterChant());

exports.duelMonstersEffectCardStorage = duelMonstersEffectCardStorage;
