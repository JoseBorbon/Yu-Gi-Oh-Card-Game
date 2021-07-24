const { CardEffectCreator } = require("../parentCardClasses");

function storeContinuousTrapCards() {
  //create continuous trap card sub class from CardEffectCreator
  class ContinuousTrapCard extends CardEffectCreator {
    constructor(name, requirements, effect) {
      super(name, requirements, effect);
      this._type = ["continous", "trap"];
    }
  }

  //assign a memo to store all magic cards being created by invoking returned function
  const continuousTrapCardsCache = {};

  /** Stores magic card inside of cache object
   * @param {string} continuoustrapCardName - name of magic card, represented as a string
   * @param {string[]} requirements - Requirement/ Requirements represented as an array of strings
   * @param {string[]} effects - Effect / Effects, represented as an array of strings
   * @returns {object} - Recently created object || existing value(object) inside of cache object
   */
  return function (continuoustrapCardName, requirements, effects) {
    //if magic card name is inside of the object already return value
    continuoustrapCardName = continuoustrapCardName.toUpperCase();
    // console.log(continuoustrapCardName.toUpperCase());
    if (continuousTrapCardsCache[continuoustrapCardName]) {
      return Object.assign(Object.create(continuousTrapCardsCache[continuoustrapCardName]), continuousTrapCardsCache[continuoustrapCardName]);
    }

    //not a-zA-Z , used to filter out strings that contain numbers or special characters in them
    const regex = /[^a-zA-Z0-9-\s]/;

    //edge-cases:
    //if continuoustrapCardName is not a string or is a string that contains numbers or special characters, throw an Eval Error
    if (continuoustrapCardName === "GET ALL CARDS") return continuousTrapCardsCache;
    if (typeof continuoustrapCardName !== "string" || regex.test(continuoustrapCardName)) {
      throw new EvalError("continuoustrapCardName must be a string and not contain numbers or special characters");
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
    continuoustrapCardName = continuoustrapCardName.toUpperCase();

    // otherwise store the key in cache and assign it an object as value
    continuousTrapCardsCache[continuoustrapCardName] = new ContinuousTrapCard(continuoustrapCardName, requirements, effects);
    return Object.assign(Object.create(continuousTrapCardsCache[continuoustrapCardName]), continuousTrapCardsCache[continuoustrapCardName]);
  };
}

const continuousTrapCards = storeContinuousTrapCards();
/* ------- ALL CARDS ADD BELOW THIS LINE ------- */

continuousTrapCards("SPELLBINDING CIRCLE", ["1 monster must be on opponents side of the field"], ["selected monster on opponents side is unable to attack or change its battle position"]);

continuousTrapCards("IMPERIAL ORDER", null, [
  "negate all spell effects on the field",
  "during standby phase, lose 700 life points or destroy this card", //when it's players stand by phase, user loses 700 life points and when it's npcs stand by phase, opponent loses 700 life points
]);

continuousTrapCards("GRAVITY BIND", null, ["Level 4 or higher monsters cannot attack"]);

continuousTrapCards(
  "CALL OF THE HAUNTED",
  ["must have at least 1 monster in own graveyard"],
  [
    "special summon monster card from graveyard back onto field in attack mode",
    "when monster gets destroyed, destroy this card and send to graveyard",
    "otherwise if trap card gets destroyed then send monster back to graveyard that was summoned using the card",
  ]
);

continuousTrapCards("MASK OF RESTRICT", null, ["monster cards cannot be tributed"]);

/* ------- ADD ALL CARDS ABOVE THIS LINE ------- */
//used to get all cards within memo
const continuousTrapCardStorage = continuousTrapCards("get all cards");
// line below - used to log the entire continuousTrapCardStorage
console.log(continuousTrapCardStorage);

//line below - used to test whether or not dark hole magic card was already created
// console.log("Card is already here:",continuousTrapCards("spellbinding circle"));

exports.continuousTrapCardStorage = continuousTrapCardStorage;
