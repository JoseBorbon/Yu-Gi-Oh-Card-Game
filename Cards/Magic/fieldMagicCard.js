const { CardEffect } = require("../parentCardClasses");

//create field magic card sub-class from CardEffect
class FieldMagicCard extends CardEffect {
  constructor(name, requirements, effect) {
    super(name, requirements, effect);
    this._type = ["field", "magic"];
  }
}
