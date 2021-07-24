const { DuelMonstersCreator } = require("../parentCardClasses");

/** Leveraging COVE to accomplish task of transporting an object from point A to B without breaking separation of concerns
 *
 * @returns {function} - function will be used to create persistent lexical scoped referenced data
 * for transporting cache object from one file to another utilizing module exports
 */
function storeDuelMonstersFusionEffectCards() {
  // create DuelMonstersEffect sub class from DuelMonsters
  class DuelMonstersFusionEffect extends DuelMonstersCreator {
    constructor(name, starLevel, type, attribute, attackPoints, defensePoints, fusionID, monsterCardRarity, fusionMaterials, effects) {
      super(name, starLevel, type, attribute, attackPoints, defensePoints, fusionID, monsterCardRarity);
      this._type = [type, "Fusion", "Effect"]; //Leverage the string fusion to throw Fusion Monsters into
      this._fusionMaterials = fusionMaterials; //String Indicating which monsters are needed in order to summon fused monster
      this._effects = effects; //Array of strings in specific order in case more than 1 effect for monster
    }
  }

  //assign a memo to store all magic cards being created by invoking returned function
  const duelMonstersFusionEffectCardsCache = {};

  /** Stores magic card inside of cache object
   * @param {string} duelMonstersFusionEffectCardName - name of magic card, represented as a string
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
  return function (duelMonstersFusionEffectCardName, starLevel, type, attribute, attackPoints, defensePoints, fusionID, monsterCardRarity, fusionMaterials, effects) {
    //if magic card name is inside of the object already return value
    duelMonstersFusionEffectCardName = duelMonstersFusionEffectCardName.toUpperCase();
    //console.log(duelMonstersFusionEffectCardName.toUpperCase());
    if (duelMonstersFusionEffectCardsCache[duelMonstersFusionEffectCardName]) {
      return Object.assign(Object.create(duelMonstersFusionEffectCardsCache[duelMonstersFusionEffectCardName]), duelMonstersFusionEffectCardsCache[duelMonstersFusionEffectCardName]);
    }

    //not a-zA-Z , used to filter out strings that contain numbers or special characters in them
    const regex = /[^a-zA-Z0-9-\s]/;

    //edge-cases:
    //if duelMonstersFusionEffectCardName is not a string or is a string that contains numbers or special characters, throw an Eval Error
    if (duelMonstersFusionEffectCardName === "GET ALL CARDS") return duelMonstersFusionEffectCardsCache;
    if (typeof duelMonstersFusionEffectCardName !== "string" || regex.test(duelMonstersFusionEffectCardName)) {
      throw new EvalError("duelMonstersFusionEffectCardName must be a string and not contain numbers or special characters");
      //otherwise if tributesRequired is not of array datatype and not null throw an error
    }

    //uppercase name of magic card
    duelMonstersFusionEffectCardName = duelMonstersFusionEffectCardName.toUpperCase();
    //uppercase type string
    type = type.toUpperCase();
    //uppercase attribute
    attribute = attribute.toUpperCase();
    //concatenate the uppercase first letter of monsterCardRarity and all other characters in monsterCardRarity string
    monsterCardRarity = monsterCardRarity[0].toUpperCase() + monsterCardRarity.slice(1);

    // otherwise store the key in cache and assign it an object as value
    duelMonstersFusionEffectCardsCache[duelMonstersFusionEffectCardName] = new DuelMonstersFusionEffect(
      duelMonstersFusionEffectCardName,
      starLevel,
      type,
      attribute,
      attackPoints,
      defensePoints,
      fusionID,
      monsterCardRarity,
      fusionMaterials,
      effects
    );
    return Object.assign(Object.create(duelMonstersFusionEffectCardsCache[duelMonstersFusionEffectCardName]), duelMonstersFusionEffectCardsCache[duelMonstersFusionEffectCardName]);
  };
}
const duelMonstersFusionEffectCards = storeDuelMonstersFusionEffectCards();
/* ------- ALL CARDS ADD BELOW THIS LINE ------- */
// duelMonstersFusionEffectCardName, starLevel, type, attribute, attackPoints, defensePoints, fusionID, monsterCardRarity, effects, tributesRequired,
// tier system rarity - normal, rare, ultra rare, legendary

const thousandEyesRestrict = duelMonstersFusionEffectCards("thousand-eyes restrict", 1, "spellcaster", "dark", 0, 0, null, "legendary", "thousand-eyes idol + relinquished", ["effects"]);

/* ------- ADD ALL CARDS ABOVE THIS LINE ------- */
//used to get all cards within memo
const duelMonstersFusionEffectCardStorage = duelMonstersFusionEffectCards("get all cards");

// line below - used to log the entire duelMonstersFusionEffectCardStorage
console.log(duelMonstersFusionEffectCardStorage);

//line below - used to test whether or not dark hole magic card was already created
// console.log("Card is already here:",duelMonstersFusionEffectCards("dark magician"));

// creating a copy by using object assign to grab properties and object create to prototypally inherit duel monster methods
// const darkMagician = Object.assign(Object.create(duelMonstersFusionEffectCards("dark magician")), duelMonstersFusionEffectCards("dark magician"));

exports.duelMonstersFusionEffectCardStorage = duelMonstersFusionEffectCardStorage;
