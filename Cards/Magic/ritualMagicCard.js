const { CardEffect } = require("../parentCardClasses");

/** Leveraging COVE to accomplish task of transporting an object from point A to B without breaking separation of concerns
 *
 * @returns {function} - function will be used to create persistent lexical scoped referenced data
 * for transporting cache object from one file to another utilizing module exports
 */
function storeRitualMagicCards() {
  //create ritual magic card sub-class from CardEffect
  class RitualMagicCard extends CardEffect {
    constructor(name, requirements, effect) {
      super(name, requirements, effect);
      this._type = ["ritual", "magic"];
    }
  }

  //assign a memo to store all magic cards being created by invoking returned function
  const ritualMagicCardsCache = {};

  /** Stores magic card inside of cache object
   * @param {string} ritualMagicCardName - name of magic card, represented as a string
   * @param {string[]} requirements - Requirement/ Requirements represented as an array of strings
   * @param {string[]} effects - Effect / Effects, represented as an array of strings
   * @returns {object} - Recently created object || existing value(object) inside of cache object
   */
  return function (ritualMagicCardName, requirements, effects) {
    //if magic card name is inside of the object already return value
    ritualMagicCardName = ritualMagicCardName.toUpperCase();
    // console.log(ritualMagicCardName.toUpperCase());
    if (ritualMagicCardsCache[ritualMagicCardName]) {
      return ritualMagicCardsCache[ritualMagicCardName];
    }

    //not a-zA-Z , used to filter out strings that contain numbers or special characters in them
    const regex = /[^a-zA-Z0-9-\s]/;

    //edge-cases:
    //if ritualMagicCardName is not a string or is a string that contains numbers or special characters, throw an Eval Error
    if (ritualMagicCardName === "GET ALL CARDS") return ritualMagicCardsCache;
    if (typeof ritualMagicCardName !== "string" || regex.test(ritualMagicCardName)) {
      throw new EvalError("ritualMagicCardName must be a string and not contain numbers or special characters");
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
    ritualMagicCardName = ritualMagicCardName.toUpperCase();

    // otherwise store the key in cache and assign it an object as value
    ritualMagicCardsCache[ritualMagicCardName] = new RitualMagicCard(ritualMagicCardName, requirements, effects);
    return ritualMagicCardsCache[ritualMagicCardName];
  };
}

const ritualMagicCards = storeRitualMagicCards();
/* ------- ALL CARDS ADD BELOW THIS LINE ------- */
ritualMagicCards(
  "BLACK LUSTER RITUAL",
  ["BLACK LUSTER SOLDER monster card must be in hand", "Tribute monsters whose total levels are greater than or equal to 8"],
  ["Summon Black Luster Soldier onto the field and move tribute cards to graveyard"]
);

ritualMagicCards(
  "BLACK MAGIC RITUAL",
  ["Magician Of Black Chaos must be in hand", "Tribute monsters used must have total level greater than or equal to 8 combined"],
  ["Summon Magician Of Black Chaos onto the field and move tribute cards to graveyard"]
);
ritualMagicCards(
  "ZERA RITUAL",
  ["Zera The Mant must be in hand", "Tribute monsters used must have total level greater than or equal to 8 combined"],
  ["Summon Zera the mant onto the field and move tribute cards to graveyard"]
);

ritualMagicCards(
  "WHITE DRAGON RITUAL",
  [
    "Paladin of the white dragon must be in hand",
    "Tribute monsters used must have total level greater than or equal to 4 combined",
  ],
  ["Summon Paladin Of White Dragon onto the field and move tribute cards to graveyard"]
);
/* ------- ADD ALL CARDS ABOVE THIS LINE ------- */
//used to get all cards within memo
const ritualMagicCardStorage = ritualMagicCards("get all cards");

// line below - used to log the entire magicCardStorage
console.log(ritualMagicCardStorage);

//line below - used to test whether or not dark hole magic card was already created
// console.log("Card is already here:",ritualMagicCards("white dragon ritual"));

exports.ritualMagicCardStorage = ritualMagicCardStorage;
