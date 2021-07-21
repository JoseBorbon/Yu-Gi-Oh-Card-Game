const { CardEffectCreator } = require("../parentCardClasses");

/** Leveraging COVE to accomplish task of transporting an object from point A to B without breaking separation of concerns
 *
 * @returns {function} - function will be used to create persistent lexical scoped referenced data
 * for transporting cache object from one file to another utilizing module exports
 */
function storeContinousMagicCards() {
  //create continuous magic card sub-class from CardEffectCreator
  class ContinuousMagicCard extends CardEffectCreator {
    constructor(name, requirements, effect) {
      super(name, requirements, effect);
      this._type = ["continuous", "magic"];
    }
  }

  //assign a memo to store all magic cards being created by invoking returned function
  const continuousMagicCardsCache = {};

  /** Stores magic card inside of cache object
   * @param {string} continuousMagicCardName - name of magic card, represented as a string
   * @param {string[]} requirements - Requirement/ Requirements represented as an array of strings
   * @param {string[]} effects - Effect / Effects, represented as an array of strings
   * @returns {object} - Recently created object || existing value(object) inside of cache object
   */
  return function (continuousMagicCardName, requirements, effects) {
    //if magic card name is inside of the object already return value
    continuousMagicCardName = continuousMagicCardName.toUpperCase();
    // console.log(continuousMagicCardName.toUpperCase());
    if (continuousMagicCardsCache[continuousMagicCardName]) {
      return Object.assign(Object.create(continuousMagicCardsCache[continuousMagicCardName]), continuousMagicCardsCache[continuousMagicCardName]);
    }

    //not a-zA-Z , used to filter out strings that contain numbers or special characters in them
    const regex = /[^a-zA-Z0-9-\s]/;

    //edge-cases:
    //if continuousMagicCardName is not a string or is a string that contains numbers or special characters, throw an Eval Error
    if (continuousMagicCardName === "GET ALL CARDS") return continuousMagicCardsCache;
    if (typeof continuousMagicCardName !== "string" || regex.test(continuousMagicCardName)) {
      throw new EvalError("continuousMagicCardName must be a string and not contain numbers or special characters");
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
    continuousMagicCardName = continuousMagicCardName.toUpperCase();

    // otherwise store the key in cache and assign it an object as value
    continuousMagicCardsCache[continuousMagicCardName] = new ContinuousMagicCard(continuousMagicCardName, requirements, effects);
    return Object.assign(Object.create(continuousMagicCardsCache[continuousMagicCardName]), continuousMagicCardsCache[continuousMagicCardName]);
  };
}

const continuousMagicCards = storeContinousMagicCards();
/* ------- ALL CARDS ADD BELOW THIS LINE ------- */
continuousMagicCards("INFINITE CARDS", null, ["As long as infinite cards is on the field hand limit of 6 is removed"]);

continuousMagicCards("AMANDAS NAGGING CATS", null, ["inflict 300 life points at the beginning of opponents turn"]);

continuousMagicCards("BURNING LAND", null, [
  "if there are any field spell cards on the field destroy them",
  "During each players stand by phase the turn player takes 500 damage",
]);

continuousMagicCards("DARK ROOM OF NIGHTMARE", null, [
  "each time opponent takes damage from a spell or trap card effect inflict 300 damage to opponent",
]);

continuousMagicCards("ATTRITION", null, [
  "If opponents monster is not destroyed by battle it loses attack equal to the battle damage", //what is battle damage? Net Difference?
]);

continuousMagicCards("TOON WORLD", null, ["Pay 1000 life points to activate the card on field"]);

// spiral spear strike to add later

/* ------- ADD ALL CARDS ABOVE THIS LINE ------- */
//used to get all cards within memo
const continuousMagicCardStorage = continuousMagicCards("get all cards");

// line below - used to log the entire magicCardStorage
console.log(continuousMagicCardStorage);

//line below - used to test whether or not dark hole magic card was already created
// console.log("Card is already here:",continuousMagicCards("amandas nagging cats"));

exports.continuousMagicCardStorage = continuousMagicCardStorage;
