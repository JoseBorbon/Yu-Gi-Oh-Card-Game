const { CardEffect } = require("../parentCardClasses");

//create trap card class - Will be used to counter specific conditions (Mostly attack though)
class TrapCard extends CardEffect {
  constructor(name, requirements, effect) {
    super(name, requirements, effect);
    this._type = ["trap"];
  }
}
