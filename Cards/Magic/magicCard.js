const { CardEffect } = require("../parentCardClasses");

//function to store all cards in
const magicCardStorage = function () {
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
    const regex = /[^a-zA-Z]/;
    //edge-cases:
    //if magicCardName is not a string or is a string that contains numbers or special characters, throw an Eval Error
    if (typeof magicCardName !== "string" || regex.test(magicCardName))
      throw new EvalError(
        "magicCardName must not contain a number or special character in string"
      );

    // requirements is not an array of strings or null, and string contains special characters or numbers
    // effect is not an array of strings, and string contains special characters or numbers

    //iterate through array if there is more than 1 string in array
    //iterate through string
    //if string at index evaluates to be a number, break and return error
    //if string at index evaluates to be special character, break and return error

    //lowercase magicCardName, requirements, effect
    magicCardName = magicCardName.toUpperCase();
    //if requirements is null just keep it null, otherwise iterate through and lowercase requirements
    requirements = !requirements
      ? null
      : requirements.map((el) => el.toLowerCase());

    effect = effect.map((el) => el.toLowerCase());

    // otherwise store the key in cache and assign it an object as value
    magicCardsCache[magicCardName] = new MagicCard(
      magicCardName,
      requirements,
      effect
    );
    return magicCardsCache[magicCardName];
  };
};

const magicCards = magicCardStorage();
/* ------- ALL CARDS ADD BELOW THIS LINE ------- */
console.log(
  magicCards("darkhole", null, ["destroy all monsters on the field"])
);

// magicCards("darkHole");
