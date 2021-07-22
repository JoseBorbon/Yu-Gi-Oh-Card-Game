const { DuelMonstersCreator } = require("../parentCardClasses");

//create an cache to store monsters and a cache that will filter type if user provides an invalid type

/** Leveraging COVE to accomplish task of transporting an object from point A to B without breaking separation of concerns
 *
 * @returns {function} - function will be used to create persistent lexical scoped referenced data
 * for transporting cache object from one file to another utilizing module exports
 */
function storeDuelMonstersFusionCards() {
  //create DuelMonstersEffect sub class from DuelMonsters
  class DuelMonstersFusion extends DuelMonstersCreator {
    constructor(name, starLevel, type, attribute, attackPoints, defensePoints, fusionID, monsterCardRarity, fusionMaterials) {
      super(name, starLevel, type, attribute, attackPoints, defensePoints, fusionID, monsterCardRarity);
      this._effects = null;
      this._type = [type, "Fusion"]; //Leverage the string fusion to throw Fusion Monsters into
      this._fusionMaterials = fusionMaterials; //String Indicating which monsters are needed in order to summon fused monster
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
  const duelMonstersFusionCardsCache = {};

  /** Stores magic card inside of cache object
   * @param {string} duelMonstersFusionCardName - name of magic card, represented as a string
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
  return function (duelMonstersFusionCardName, starLevel, type, attribute, attackPoints, defensePoints, fusionID, monsterCardRarity, fusionMaterials) {
    //if magic card name is inside of the object already return value
    duelMonstersFusionCardName = duelMonstersFusionCardName.toUpperCase();
    //console.log(duelMonstersFusionCardName.toUpperCase());
    if (duelMonstersFusionCardsCache[duelMonstersFusionCardName]) {
      return Object.assign(Object.create(duelMonstersFusionCardsCache[duelMonstersFusionCardName]), duelMonstersFusionCardsCache[duelMonstersFusionCardName]);
    }

    //not a-zA-Z , used to filter out strings that contain numbers or special characters in them
    const regex = /[^a-zA-Z0-9-\s]/;

    //edge-cases:
    //if duelMonstersFusionCardName is not a string or is a string that contains numbers or special characters, throw an Eval Error
    if (duelMonstersFusionCardName === "GET ALL CARDS") return duelMonstersFusionCardsCache;
    if (typeof duelMonstersFusionCardName !== "string" || regex.test(duelMonstersFusionCardName)) {
      throw new EvalError("duelMonstersFusionCardName must be a string and not contain numbers or special characters");
      //otherwise if tributesRequired is not of array datatype and not null throw an error
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

    if (!indexOfReqsAndEffectsAreValid) throw new EvalError("all tributesRequired and effects must be of string data type");

    //uppercase name of magic card
    duelMonstersFusionCardName = duelMonstersFusionCardName.toUpperCase();
    //uppercase type string
    type = type.toUpperCase();
    //uppercase attribute
    attribute = attribute.toUpperCase();
    //concatenate the uppercase first letter of monsterCardRarity and all other characters in monsterCardRarity string
    monsterCardRarity = monsterCardRarity[0].toUpperCase() + monsterCardRarity.slice(1);

    // otherwise store the key in cache and assign it an object as value
    duelMonstersFusionCardsCache[duelMonstersFusionCardName] = new DuelMonstersFusion(
      duelMonstersFusionCardName,
      starLevel,
      type,
      attribute,
      attackPoints,
      defensePoints,
      fusionID,
      monsterCardRarity,
      fusionMaterials
    );
    return Object.assign(Object.create(duelMonstersFusionCardsCache[duelMonstersFusionCardName]), duelMonstersFusionCardsCache[duelMonstersFusionCardName]);
  };
}
const duelMonstersFusionCards = storeDuelMonstersFusionCards();
/* ------- ALL CARDS ADD BELOW THIS LINE ------- */
//      duelMonstersFusionCardName, starLevel, type, attribute, attackPoints, defensePoints, fusionID, monsterCardRarity, effects, tributesRequired,
//tier system rarity - normal, rare, ultra rare, legendary

const blueEyesUltimateDragon = duelMonstersFusionCards(
  "Blue-Eyes Ultimate Dragon",
  12,
  "Dragon",
  "Light",
  4500,
  3800,
  null,
  "legendary",
  "Blue-Eyes White Dragon + Blue-Eyes White Dragon2 + Blue-Eyes White Dragon3"
);

const gaiaTheDragonChampion = duelMonstersFusionCards("Gaia the dragon champion", 7, "dragon", "wind", 2600, 2100, null, "rare", "Gaia The Fierce Knight + Curse of Dragon");

/* ------- ADD ALL CARDS ABOVE THIS LINE ------- */
//used to get all cards within memo
const duelMonstersFusionCardStorage = duelMonstersFusionCards("get all cards");

// line below - used to log the entire duelMonstersFusionCardStorage
console.log(duelMonstersFusionCardStorage);

//line below - used to test whether or not dark hole magic card was already created
// console.log("Card is already here:",duelMonstersFusionCards("copycat"));

//monster chant test below
// console.log(copycat.monsterChant());

exports.duelMonstersFusionCardStorage = duelMonstersFusionCardStorage;
