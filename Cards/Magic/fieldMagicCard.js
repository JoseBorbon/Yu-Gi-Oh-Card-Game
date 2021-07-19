const { CardEffect } = require("../parentCardClasses");

/** Leveraging COVE to accomplish task of transporting an object from point A to B without breaking separation of concerns
 *
 * @returns {function} - function will be used to create persistent lexical scoped referenced data
 * for transporting cache object from one file to another utilizing module exports
 */
function storeFieldMagicCards() {
  //create field magic card sub-class from CardEffect
  class FieldMagicCard extends CardEffect {
    constructor(name, requirements, effect, buffedMonsterTypes, nerfedMonsterTypes) {
      super(name, requirements, effect);
      this._buffedMonsterTypes = buffedMonsterTypes; // array of types(string format) or opponent
      this._nerfedMonsterTypes = nerfedMonsterTypes;
      this._type = ["field", "magic"];
    }
  }
  //assign a memo to store all magic cards being created by invoking returned function
  const fieldMagicCardsCache = {};

  /** Stores field magic card inside of cache object
   * @param {string} fieldMagicCardName - name of magic card, represented as a string
   * @param {string[]} requirements - Requirement/ Requirements represented as an array of strings
   * @param {string[]} effects - Effect / Effects, represented as an array of strings
   * @returns {object} - Recently created object || existing value(object) inside of cache object
   */
  return function (fieldMagicCardName, requirements, effects, buffedMonsterTypes, nerfedMonsterTypes) {
    //if magic card name is inside of the object already return value
    fieldMagicCardName = fieldMagicCardName.toUpperCase();
    // console.log(fieldMagicCardName.toUpperCase());
    if (fieldMagicCardsCache[fieldMagicCardName]) {
      return fieldMagicCardsCache[fieldMagicCardName];
    }

    //not a-zA-Z , used to filter out strings that contain numbers or special characters in them
    const regex = /[^a-zA-Z0-9-\s]/;

    //edge-cases:
    //if fieldMagicCardName is not a string or is a string that contains numbers or special characters, throw an Eval Error
    if (fieldMagicCardName === "GET ALL CARDS") return fieldMagicCardsCache;
    if (typeof fieldMagicCardName !== "string" || regex.test(fieldMagicCardName)) {
      throw new EvalError("fieldMagicCardName must be a string and not contain numbers or special characters");
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

    if (buffedMonsterTypes.length > 0) {
      //iterate through affected array
      for (let i = 0; i < buffedMonsterTypes.length; i++) {
        //if current affected type is not a strng, set flag variable to false and break out of loop
        if (typeof buffedMonsterTypes[i] !== "string") {
          indexOfReqsAndEffectsAreValid = false;
          break;
        }
        //mutate current index to evaluated result of lower casing current effect
        buffedMonsterTypes[i] = buffedMonsterTypes[i].toLowerCase();
      }
    }
    //if nerfedMonsterTypes is not null
    if (nerfedMonsterTypes !== null) {
      //if the length of nerfedMonsterTypes is greater than 0
      if (nerfedMonsterTypes.length > 0) {
        //iterate through affected array
        for (let i = 0; i < nerfedMonsterTypes.length; i++) {
          //if current affected type is not a strng, set flag variable to false and break out of loop
          if (typeof nerfedMonsterTypes[i] !== "string") {
            indexOfReqsAndEffectsAreValid = false;
            break;
          }
          //mutate current index to evaluated result of lower casing current effect
          nerfedMonsterTypes[i] = nerfedMonsterTypes[i].toLowerCase();
        }
      }
    }

    if (!indexOfReqsAndEffectsAreValid) throw new EvalError("all requirements and effects must be of string data type");

    //uppercase name of magic card
    fieldMagicCardName = fieldMagicCardName.toUpperCase();

    // otherwise store the key in cache and assign it an object as value
    fieldMagicCardsCache[fieldMagicCardName] = new FieldMagicCard(
      fieldMagicCardName,
      requirements,
      effects,
      buffedMonsterTypes,
      nerfedMonsterTypes
    );
    return fieldMagicCardsCache[fieldMagicCardName];
  };
}

const fieldMagicCards = storeFieldMagicCards();
/* ------- ALL CARDS ADD BELOW THIS LINE ------- */

fieldMagicCards(
  "mountain",
  null,
  ["all dragon winged beast and thunder monsters on the field gain 200 attack and defense points"],
  ["dragon", "winged", "beast", "thunder"],
  null
);

fieldMagicCards(
  "FUSION GATE",
  null,
  ["As long as card is on field monsters can be fused without polymerization card"],
  ["all monsters"],
  null
);

fieldMagicCards(
  "WASTELAND",
  null,
  ["All Dinosaur Zombie Rock monsters on the field gain 200 attack and defense points"],
  ["dinosaur", "zombie", "rock"],
  null
);

fieldMagicCards(
  "FOREST",
  null,
  ["All Insect Beast Plant and Beast-Warrior monsters on the field gain 200 attack and defense points"],
  ["insect", "beast", "plant", "beast-warrior"],
  null
);

fieldMagicCards(
  "YAMI",
  null,
  [
    "all fiend and spellcaster monsters on the field gain 200 attack and defense points",
    "all fairy type monsters on the field lose 200 attack and defense points",
  ],
  ["fiend", "spellcaster"],
  ["fairy"]
);

/* ------- ADD ALL CARDS ABOVE THIS LINE ------- */
//used to get all cards within memo
const fieldMagicCardStorage = fieldMagicCards("get all cards");

// line 187 - used to log the entire fieldMagicCardStorage
// console.log(fieldMagicCardStorage);

//line 190 - used to test whether or not field magic card was already created
// fieldmagicCards("yami");

exports.fieldMagicCardStorage = fieldMagicCardStorage;
