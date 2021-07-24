const { CardEffectCreator } = require("../parentCardClasses");

function storeTrapCards() {
  //create trap card sub class from CardEffectCreator - Will be used to counter specific conditions (Mostly attack though)
  class TrapCard extends CardEffectCreator {
    constructor(name, requirements, effect) {
      super(name, requirements, effect);
      this._type = ["trap"];
    }
  }

  //assign a memo to store all magic cards being created by invoking returned function
  const trapCardsCache = {};

  /** Stores magic card inside of cache object
   * @param {string} trapCardName - name of magic card, represented as a string
   * @param {string[]} requirements - Requirement/ Requirements represented as an array of strings
   * @param {string[]} effects - Effect / Effects, represented as an array of strings
   * @returns {object} - Recently created object || existing value(object) inside of cache object
   */
  return function (trapCardName, requirements, effects) {
    //if magic card name is inside of the object already return value
    trapCardName = trapCardName.toUpperCase();
    // console.log(trapCardName.toUpperCase());
    if (trapCardsCache[trapCardName]) {
      return Object.assign(Object.create(trapCardsCache[trapCardName]), trapCardsCache[trapCardName]);
    }

    //not a-zA-Z , used to filter out strings that contain numbers or special characters in them
    const regex = /[^a-zA-Z0-9-\s]/;

    //edge-cases:
    //if trapCardName is not a string or is a string that contains numbers or special characters, throw an Eval Error
    if (trapCardName === "GET ALL CARDS") return trapCardsCache;
    if (typeof trapCardName !== "string" || regex.test(trapCardName)) {
      throw new EvalError("trapCardName must be a string and not contain numbers or special characters");
      //otherwise if requirements is not of array datatype and not null throw an error
    } else if (!Array.isArray(requirements) && requirements !== null) {
      throw new TypeError("requirements is not an array datatype or null");
      //otherwise if effects is not of array datatype throw an error
    } else if (!Array.isArray(effects)) {
      throw new TypeError("effects is not an array datatype or null");
      //otherwise if requirements is not null(intentionally blank) go inside of the else if block
    } else if (requirements !== null) {
      //if requirements at index 0 is not a string and does not have numbers and special characters other than space, throw an error
      if (requirements[0] !== "string" && regex.test(requirements[0])) {
        throw new EvalError("requirements must be an array of strings and not contain numbers or special characters");
      }
    }
    //if effects at index 0 is not a string or has numbers and special characters other than space
    if (typeof effects[0] !== "string" || regex.test(effects[0])) {
      throw new EvalError("effects must be an array of strings and not contain numbers or special characters");
    }

    //declare a flag variable to determine if requirements or effects has a non string in their index as we lowercase strings.
    let indexOfReqsAndEffectsAreValid = true;
    //iterate through array if requirements is not null and there is more than 1 string in array
    if (requirements !== null && requirements.length > 1) {
      //iterate through array
      for (let i = 0; i < requirements.length; i++) {
        //if current requirement is not a strng, set flag variable to false and break out of loop
        if (typeof requirements[i] !== "string") {
          indexOfReqsAndEffectsAreValid = false;
          break;
        }
        //mutate current index to evaluated result of lower casing current requirement
        requirements[i] = requirements[i].toLowerCase();
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

    if (!indexOfReqsAndEffectsAreValid) throw new EvalError("all requirements and effects must be of string data type");

    //uppercase name of magic card
    trapCardName = trapCardName.toUpperCase();

    // otherwise store the key in cache and assign it an object as value
    trapCardsCache[trapCardName] = new TrapCard(trapCardName, requirements, effects);
    return Object.assign(Object.create(trapCardsCache[trapCardName]), trapCardsCache[trapCardName]);
  };
}

const trapCards = storeTrapCards();
/* ------- ALL CARDS ADD BELOW THIS LINE ------- */

trapCards("MIRROR FORCE", ["opponent has to declare an attack"], ["destoy all attack position monsters opponent controls on their side of the field"]);

trapCards(
  "LIGHTFORCE SWORD",
  ["opponent must at least have 1 card in hand"],
  ["randomly select a card from opponents hand and remove it from play face-down for 3 opponent turns", "after 4th turn, put card back in opponents hand "]
);

trapCards("MAGIC CYLINDER", ["opponent must declare an attack"], ["negate attack using this card", "inflict damage to opponent equal to monsters attack points"]);

trapCards("MAGIC JAMMER", ["opponent must activate spell card"], ["negate spell card activation and send to graveyard unless opponent has a counter trap card on field"]);

trapCards("MASK OF WEAKNESS", ["opponent monster must attack"], ["decrease the attack points of opponents attacking monster by 700 until the end of opponents turn"]);

/* ------- ADD ALL CARDS ABOVE THIS LINE ------- */
//used to get all cards within memo
const trapCardStorage = trapCards("get all cards");

// line below - used to log the entire trapCardStorage
console.log(trapCardStorage);

//line below - used to test whether or not dark hole magic card was already created
// console.log("Card is already here:",trapCards("mirror force"));

exports.trapCardStorage = trapCardStorage;
