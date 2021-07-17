const { CardEffect } = require("../parentCardClasses");

//function to store all cards in
function storeMagicCards() {
  class MagicCard extends CardEffect {
    constructor(name, requirements, effect) {
      super(name, requirements, effect);
      this._type = ["magic"];
    }
  }

  //assign a cache to store all magic cards being created inside of function
  const magicCardsCache = {};

  /** Stores magic card inside of object
   * Appends a fruit to an array of fruits and returns the array.
   * @param {string} magicCardName - name of magic card, represented as a string
   * @param {string[]} requirements - Requirement/ Requirements represented as an array of strings
   * @param {string[]} effect - Effect / Effects, represented as an array of strings
   * @returns {object} - Recently created object || existing value(object) inside of cache object
   */
  return function (magicCardName, requirements, effect) {
    //if magic card name is inside of the object already return value
    if (magicCardsCache[magicCardName.toUpperCase()]) {
      return magicCardsCache[magicCardName];
    }

    //not a-zA-Z , used to filter out strings that contain numbers or special characters in them
    const regex = /[^a-zA-Z\s]/;

    //edge-cases:
    //if magicCardName is not a string or is a string that contains numbers or special characters, throw an Eval Error
    if(magicCardName.toUpperCase() === "GET ALL CARDS") return magicCardsCache;
    if (typeof magicCardName !== "string" || regex.test(magicCardName)) {
      throw new EvalError("magicCardName must be a string and not contain numbers or special characters");
      //if requirements is not of array datatype and not null throw an error
    } else if (!Array.isArray(requirements) && requirements !== null) {
      throw new TypeError("requirements is not an array datatype or null");
      //if effect is not of array datatype throw an error
    } else if (!Array.isArray(effect)) {
      throw new TypeError("effects is not an array datatype or null");
      //if requirements is not null(intentionally blank) go inside of the else if block
    } else if (requirements !== null) {
      //if requirements at index 0 is not a string or has numbers and special characters, throw an error
      if (requirements[0] !== "string" || regex.test(requirements[0])) {
        throw new EvalError("requirements must be an array of strings and not contain numbers or special characters");
      }
      //if effect at index 0 is not a string or has numbers and special characters, throw an error --FIX
    }
    if (typeof effect[0] !== "string" || regex.test(effect[0])) {
      throw new EvalError("effects must be an array of strings and not contain numbers or special characters");
    }
    //if requirements is not an array of strings or null, and string contains special characters or numbers
    // effect is not an array of strings, and string contains special characters or numbers

    //iterate through array if there is more than 1 string in array

    //if string at index evaluates to be a number, break and return error
    //if string at index evaluates to be special character, break and return error

    //lowercase magicCardName, requirements, effect
    magicCardName = magicCardName.toUpperCase();
    //if requirements is null just keep it null, otherwise iterate through and lowercase requirements
    requirements = !requirements ? null : requirements.map((el) => el.toLowerCase());

    effect = effect.map((el) => el.toLowerCase());

    // otherwise store the key in cache and assign it an object as value
    magicCardsCache[magicCardName] = new MagicCard(magicCardName, requirements, effect);
    return magicCardsCache[magicCardName];
  };
}

const magicCards = storeMagicCards();
/* ------- ALL CARDS ADD BELOW THIS LINE ------- */
magicCards("dark hole", null, ["destroyallmonstersonthefield"]);
magicCards("Swords Of Revealing Light", null,  [
  "Flip All Monsters Opponent Controls Face Up",
  "Card Remains on Field for 3 of your opponents turns",
  "While card is on field monsters your opponent controls cannot declare an attack",
]);
// console.log(magicCards("dark hole"));

const magicCardStorage = magicCards('get all cards');

// console.log(myMagicCards);

// magicCards("darkHole");

exports.magicCardStorage = magicCardStorage;
