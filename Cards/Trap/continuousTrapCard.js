const { CardEffect } = require("../parentCardClasses");

//create continuous trap card sub class from magic card
class ContinousTrapCard extends CardEffect {
  constructor(name, requirements, effect) {
    super(name, requirements, effect);
    this._type = ["continous", "trap"];
  }
}
