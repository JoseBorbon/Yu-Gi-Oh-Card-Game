const { CardEffect } = require("../parentCardClasses");

//create ritual magic card sub-class from CardEffect
class RitualMagicCard extends CardEffect {
  constructor(name, requirements, effect) {
    super(name, requirements, effect);
    this._type = ["ritual", "magic"];
  }
}
