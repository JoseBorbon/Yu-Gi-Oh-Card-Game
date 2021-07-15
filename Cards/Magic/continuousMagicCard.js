const { CardEffect } = require("../parentCardClasses");

//create continuous magic card sub-class from CardEffect
class ContinuousMagicCard extends CardEffect {
  constructor(name, requirements, effect) {
    super(name, requirements, effect);
    this._type = ["continuous", "magic"];
  }
}
