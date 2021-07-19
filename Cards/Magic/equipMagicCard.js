const { CardEffect } = require("../parentCardClasses");

/** Leveraging COVE to accomplish task of transporting an object from point A to B without breaking separation of concerns
 * @param - No parameters
 * @returns {function} - function will be used to create persistent lexical scoped referenced data
 * for transporting cache object from one file to another utilizing module exports
 */
function storeEquipMagicCards() {
  //create equip magic card sub-class from CardEffect
  class EquipMagicCard extends CardEffect {
    constructor(name, requirements, effect) {
      super(name, requirements, effect);
      this._type = ["equip", "magic"];
    }
  }

  //assign a memo to store all magic cards being created by invoking returned function
  const equipMagicCardsCache = {};

  /** Stores magic card inside of cache object
   * @param {string} equipMagicCardName - name of magic card, represented as a string
   * @param {string[]} requirements - Requirement/ Requirements represented as an array of strings
   * @param {string[]} effects - Effect / Effects, represented as an array of strings
   * @returns {object} - Recently created object || existing value(object) inside of cache object
   */
  return function (equipMagicCardName, requirements, effects) {
    //if magic card name is inside of the object already return value
    equipMagicCardName = equipMagicCardName.toUpperCase();
    // console.log(equipMagicCardName.toUpperCase());
    if (equipMagicCardsCache[equipMagicCardName]) {
      return equipMagicCardsCache[equipMagicCardName];
    }

    //not a-zA-Z , used to filter out strings that contain numbers or special characters in them
    const regex = /[^a-zA-Z0-9-\s]/;

    //edge-cases:
    //if equipMagicCardName is not a string or is a string that contains numbers or special characters, throw an Eval Error
    if (equipMagicCardName === "GET ALL CARDS") return equipMagicCardsCache;
    if (typeof equipMagicCardName !== "string" || regex.test(equipMagicCardName)) {
      throw new EvalError("equipMagicCardName must be a string and not contain numbers or special characters");
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
    equipMagicCardName = equipMagicCardName.toUpperCase();

    // otherwise store the key in cache and assign it an object as value
    equipMagicCardsCache[equipMagicCardName] = new EquipMagicCard(equipMagicCardName, requirements, effects);
    return equipMagicCardsCache[equipMagicCardName];
  };
}

const equipMagicCards = storeEquipMagicCards();
/* ------- ALL CARDS ADD BELOW THIS LINE ------- */
equipMagicCards(
  "BLACK PENDANT",
  ["at least 1 monster must be on your side of the field"],
  [
    "The equipped monster gains 500 attack points",
    "when this card is sent to the graveyard(death of monster card equipping it or usage of magic card remover) inflict 500 damage to your opponent",
  ]
);

equipMagicCards(
  "UNITED WE STAND",
  ["at least 1 monster must be on your side of the field"],
  ["Equipped Monster gains 800 Attack and Defense points for each monster you control on the field"]
);

equipMagicCards(
  "GRAVITY AXE - GRARL",
  ["at least 1 monster must be on your side of the field"],
  ["Equipped Monster gains 500 attack points", "monsters opponent controls cannot change battle positions"]
);

equipMagicCards(
  "TWIN SWORDS OF FLASHING LIGHT - TRYCE",
  ["Must send 1 card from hand to graveyard"],
  [
    "monster equipped with this card loses 500 attack points",
    "monster equipped with this card can attack twice during same battle phase",
  ]
);

equipMagicCards("SALAMANDRA", ["Monster card being equipped this card must be FIRE type"], ["Gain 700 Attack Points"]);
/* ------- ADD ALL CARDS ABOVE THIS LINE ------- */
//used to get all cards within memo
const equipMagicCardStorage = equipMagicCards("get all cards");

// line below - used to log the entire equipMagicCardStorage
// console.log(equipMagicCardStorage);

//line below - used to test whether or not field magic card was already created
// console.log("Card is already here:",equipMagicCards("salamandra"));

exports.equipMagicCardStorage = equipMagicCardStorage;
