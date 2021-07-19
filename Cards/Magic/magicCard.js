const { CardEffect } = require("../parentCardClasses");

/** Leveraging COVE to accomplish task of transporting an object from point A to B without breaking separation of concerns
 *
 * @returns {function} - function will be used to create persistent lexical scoped referenced data
 * for transporting cache object from one file to another utilizing module exports
 */
function storeMagicCards() {
  class MagicCard extends CardEffect {
    constructor(name, requirements, effects) {
      super(name, requirements, effects);
      this._type = ["magic"];
    }
  }

  //assign a memo to store all magic cards being created by invoking returned function
  const magicCardsCache = {};

  /** Stores magic card inside of cache object
   * @param {string} magicCardName - name of magic card, represented as a string
   * @param {string[]} requirements - Requirement/ Requirements represented as an array of strings
   * @param {string[]} effects - Effect / Effects, represented as an array of strings
   * @returns {object} - Recently created object || existing value(object) inside of cache object
   */
  return function (magicCardName, requirements, effects) {
    //if magic card name is inside of the object already return value
    magicCardName = magicCardName.toUpperCase();
    // console.log(magicCardName.toUpperCase());
    if (magicCardsCache[magicCardName]) {
      return magicCardsCache[magicCardName];
    }

    //not a-zA-Z , used to filter out strings that contain numbers or special characters in them
    const regex = /[^a-zA-Z0-9\s]/;

    //edge-cases:
    //if magicCardName is not a string or is a string that contains numbers or special characters, throw an Eval Error
    if (magicCardName === "GET ALL CARDS") return magicCardsCache;
    if (typeof magicCardName !== "string" || regex.test(magicCardName)) {
      throw new EvalError("magicCardName must be a string and not contain numbers or special characters");
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
    magicCardName = magicCardName.toUpperCase();

    // otherwise store the key in cache and assign it an object as value
    magicCardsCache[magicCardName] = new MagicCard(magicCardName, requirements, effects);
    return magicCardsCache[magicCardName];
  };
}

const magicCards = storeMagicCards();
/* ------- ALL CARDS ADD BELOW THIS LINE ------- */

magicCards("dark hole", null, ["destroy all monsters on the field"]);
magicCards("Swords Of Revealing Light", null, [
  "Flip All Monsters Opponent Controls Face Up",
  "Card Remains on Field for 3 of your opponents turns",
  "While card is on field monsters your opponent controls cannot declare an attack",
]);
magicCards(
  "CHANGE OF HEART",
  ["opponent must have 1 monster card on the field"],
  ["target 1 monster your opponent controls", "take control of the monster until the end of user phase"]
);
magicCards(
  "BRAIN CONTROL",
  ["opponent must have 1 monster card on the field", "selected card must be face-up"],
  ["target 1 monster your opponent controls", "take control of the monster until the end of user phase"]
);
magicCards("GRACEFUL CHARITY", null, ["Draw 3 cards from deck", "discard 2 cards from deck"]);
magicCards(
  "POLYMERIZATION",
  ["must have fusion material monsters in hand or on own side of the field that are listed by fusion monster card"],
  ["special summon 1 Fusion Monster from your fusion deck"]
);
magicCards("MONSTER REBORN", null, ["Target 1 monster in either players graveyard"]);

/* ------- ADD ALL CARDS ABOVE THIS LINE ------- */
//used to get all cards within memo
const magicCardStorage = magicCards("get all cards");

// line 123 - used to log the entire magicCardStorage
// console.log(magicCardStorage);

//line 126 - used to test whether or not dark hole magic card was already created
// magicCards("dark hole");

exports.magicCardStorage = magicCardStorage;
