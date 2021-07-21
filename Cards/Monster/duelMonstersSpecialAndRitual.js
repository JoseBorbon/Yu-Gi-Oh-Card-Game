const { DuelMonstersCreator } = require("../parentCardClasses");

/** Leveraging COVE to accomplish task of transporting an object from point A to B without breaking separation of concerns
 *
 * @returns {function} - function will be used to create persistent lexical scoped referenced data
 * for transporting cache object from one file to another utilizing module exports
 */
function storeDuelMonsterSpecialAndRitualCards() {
  //create DuelMonstersSpecialAndRitual sub class from DuelMonstersSpecialAndRitual
  class DuelMonstersSpecialAndRitual extends DuelMonstersCreator {
    constructor(
      name,
      starLevel,
      type,
      attribute,
      attackPoints,
      defensePoints,
      fusionID,
      monsterCardRarity,
      tributesRequired,
      effects,
      summonCardRequired
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
        effects,
        tributesRequired
      );
      this._type = [type];
      this._effects = effects; //null because these monsters don't have effects
      this._summonCardRequired = summonCardRequired;
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
  const duelMonsterSpecialAndRitualCardsCache = {};

  /** Stores magic card inside of cache object
   * @param {string} duelMonsterSpecialAndRitualCardName - name of magic card, represented as a string
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
    duelMonsterSpecialAndRitualCardName,
    starLevel,
    type,
    attribute,
    attackPoints,
    defensePoints,
    fusionID,
    monsterCardRarity,
    effects,
    summonCardRequired
  ) {
    //if magic card name is inside of the object already return value
    duelMonsterSpecialAndRitualCardName = duelMonsterSpecialAndRitualCardName.toUpperCase();
    //console.log(duelMonsterSpecialAndRitualCardName.toUpperCase());
    if (duelMonsterSpecialAndRitualCardsCache[duelMonsterSpecialAndRitualCardName]) {
      return Object.assign(
        Object.create(duelMonsterSpecialAndRitualCardsCache[duelMonsterSpecialAndRitualCardName]),
        duelMonsterSpecialAndRitualCardsCache[duelMonsterSpecialAndRitualCardName]
      );
    }

    //not a-zA-Z , used to filter out strings that contain numbers or special characters in them
    const regex = /[^a-zA-Z0-9-\s]/;

    //edge-cases:
    //if duelMonsterSpecialAndRitualCardName is not a string or is a string that contains numbers or special characters, throw an Eval Error
    if (duelMonsterSpecialAndRitualCardName === "GET ALL CARDS") return duelMonsterSpecialAndRitualCardsCache;
    if (typeof duelMonsterSpecialAndRitualCardName !== "string" || regex.test(duelMonsterSpecialAndRitualCardName)) {
      throw new EvalError("duelMonsterSpecialAndRitualCardName must be a string and not contain numbers or special characters");
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
    duelMonsterSpecialAndRitualCardName = duelMonsterSpecialAndRitualCardName.toUpperCase();

    // otherwise store the key in cache and assign it an object as value
    duelMonsterSpecialAndRitualCardsCache[duelMonsterSpecialAndRitualCardName] = new DuelMonstersSpecialAndRitual(
      duelMonsterSpecialAndRitualCardName,
      starLevel,
      type,
      attribute,
      attackPoints,
      defensePoints,
      fusionID,
      monsterCardRarity,
      tributesRequired,
      effects,
      summonCardRequired
    );
    return Object.assign(
      Object.create(duelMonsterSpecialAndRitualCardsCache[duelMonsterSpecialAndRitualCardName]),
      duelMonsterSpecialAndRitualCardsCache[duelMonsterSpecialAndRitualCardName]
    );
  };
}

const duelMonsterSpecialAndRitualCards = storeDuelMonsterSpecialAndRitualCards();
/* ------- ALL CARDS ADD BELOW THIS LINE ------- */
// duelMonsterSpecialAndRitualCardName, starLevel, type, attribute, attackPoints, defensePoints, fusionID, monsterCardRarity, effects, cardRequiredToSummon (may be null for some types)
// tier system rarity - normal, rare, ultra rare, legendary

// celtic guardian
duelMonsterSpecialAndRitualCards("celtic guardian", 4, "warrior", "earth", 1400, 1200, null, "normal", null, null);
// blue eyes
duelMonsterSpecialAndRitualCards("Blue-Eyes White Dragon", 8, "Dragon", "Light", 3000, 2500, 1, "rare");
//dark magician
duelMonsterSpecialAndRitualCards("Dark Magician", 7, "Spell Caster", "Dark", 2500, 2100, 2, "rare");

/* ------- ADD ALL CARDS ABOVE THIS LINE ------- */
//used to get all cards within memo
const duelMonstersSpecialAndRitualCardStorage = duelMonsterSpecialAndRitualCards("get all cards");

// line below - used to log the entire duelMonstersSpecialAndRitualCardStorage
console.log(duelMonstersSpecialAndRitualCardStorage);

//line below - used to test whether or not dark hole magic card was already created
// console.log("Card is already here:",duelMonsterSpecialAndRitualCards("dark magician"));

// creating a copy by using object assign to grab properties and object create to prototypally inherit duel monster methods
// const darkMagician = Object.assign(Object.create(duelMonsterSpecialAndRitualCards("dark magician")), duelMonsterSpecialAndRitualCards("dark magician"));

exports.duelMonstersSpecialAndRitualCardStorage = duelMonstersSpecialAndRitualCardStorage;
