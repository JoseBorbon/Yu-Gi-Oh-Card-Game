const { DuelMonstersCreator } = require("../parentCardClasses");

/** Leveraging COVE to accomplish task of transporting an object from point A to B without breaking separation of concerns
 *
 * @returns {function} - function will be used to create persistent lexical scoped referenced data
 * for transporting cache object from one file to another utilizing module exports
 */
function storeDuelMonsterCards() {
  //create DuelMonsters sub class from DuelMonsters
  class DuelMonsters extends DuelMonstersCreator {
    constructor(name, starLevel, type, attribute, attackPoints, defensePoints, fusionID, monsterCardRarity, tributesRequired) {
      super(
        name,
        starLevel,
        type,
        attribute,
        attackPoints,
        defensePoints,
        fusionID, //setting to null if card does not have a fusion
        monsterCardRarity
      );
      this._type = [type];
      this._effects = null; //null because these monsters don't have effects
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
  const duelMonsterCardsCache = {};

  /** Stores magic card inside of cache object
   * @param {string} duelMonsterCardName - name of magic card, represented as a string
   * @param {number} starLevel - amount of stars on top right hand side of yu-gi-oh card
   * @param {string[]} type - array of strings(There are 24 types of monsters in Yu-Gi-Oh)
   * @param {string} attribute - string representing  monsters attribute
   * @param {number} attackPoints - number repesenting the amount of attack points a monster has
   * @param {number} defensePoints - number repesenting the amount of defense points a monster has
   * @param {number} fusionID - associates fusion ID number with card for Polymerization to fuse with another duel monster
   * @param {string} monsterCardRarity - used to specify the rarity the card is used to give winner rarest card in opponents deck (battlecity duels + finals)
   * @param {string[]} tributesRequired - Requirement/ Requirements represented as an array of strings
   * @param {string[]} effects - Effect / Effects, represented as an array of strings
   * @returns {object} - Recently created object || existing value(object) inside of cache object
   */
  return function (
    duelMonsterCardName,
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
    duelMonsterCardName = duelMonsterCardName.toUpperCase();
    //console.log(duelMonsterCardName.toUpperCase());
    if (duelMonsterCardsCache[duelMonsterCardName]) {
      return Object.assign(Object.create(duelMonsterCardsCache[duelMonsterCardName]), duelMonsterCardsCache[duelMonsterCardName]);
    }

    //not a-zA-Z , used to filter out strings that contain numbers or special characters in them
    const regex = /[^a-zA-Z0-9-\s]/;

    //edge-cases:
    //if duelMonsterCardName is not a string or is a string that contains numbers or special characters, throw an Eval Error
    if (duelMonsterCardName === "GET ALL CARDS") return duelMonsterCardsCache;
    if (typeof duelMonsterCardName !== "string" || regex.test(duelMonsterCardName)) {
      throw new EvalError("duelMonsterCardName must be a string and not contain numbers or special characters");
      //otherwise if tributesRequired is not of array datatype and not null throw an error
    } // else if (effects !== null) {
    //   throw new TypeError("effects is not an array datatype or null");
    // }

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

    //uppercase name of magic card
    duelMonsterCardName = duelMonsterCardName.toUpperCase();

    // otherwise store the key in cache and assign it an object as value
    duelMonsterCardsCache[duelMonsterCardName] = new DuelMonsters(
      duelMonsterCardName,
      starLevel,
      type,
      attribute,
      attackPoints,
      defensePoints,
      fusionID,
      monsterCardRarity,
      tributesRequired
    );
    return Object.assign(Object.create(duelMonsterCardsCache[duelMonsterCardName]), duelMonsterCardsCache[duelMonsterCardName]);
  };
}

const duelMonsterCards = storeDuelMonsterCards();
/* ------- ALL CARDS ADD BELOW THIS LINE ------- */
//      duelMonsterCardName, starLevel, type, attribute, attackPoints, defensePoints, fusionID, monsterCardRarity, effects, tributesRequired,
//tier system rarity - normal, rare, legendary

// celtic guardian
duelMonsterCards("celtic guardian", 4, "warrior", "earth", 1400, 1200, null, "normal");

duelMonsterCards("Blue-Eyes White Dragon", 8, "Dragon", "Light", 3000, 2500, 1, "rare");

duelMonsterCards("Dark Magician", 7, "Spell Caster", "Dark", 2500, 2100, 2, "rare");

/* ------- ADD ALL CARDS ABOVE THIS LINE ------- */
//used to get all cards within memo
const duelMonstersCardStorage = duelMonsterCards("get all cards");

// line below - used to log the entire duelMonstersCardStorage
// console.log(duelMonstersCardStorage);

//line below - used to test whether or not dark hole magic card was already created
// console.log("Card is already here:",duelMonsterCards("dark magician"));

// creating a copy by using object assign to grab properties and object create to prototypally inherit duel monster methods
// const darkMagician = Object.assign(Object.create(duelMonsterCards("dark magician")), duelMonsterCards("dark magician"));
const darkMagician = duelMonsterCards('dark magician');
const darkMagician2 = duelMonsterCards('dark magician');

darkMagician.starLevel = 8;
darkMagician.attackPoints++;
console.log('DM1: ',darkMagician);
console.log('---------------');
console.log('DM2: ',darkMagician2);

exports.duelMonstersCardStorage = duelMonstersCardStorage;
