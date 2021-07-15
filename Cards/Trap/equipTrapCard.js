const { CardEffect } = require("../parentCardClasses");

//create trap card equip sub class
class EquipTrapCard extends CardEffect {
  constructor(name, requirements, effect) {
    super(name, requirements, effect);
    this._type = ["equip", "trap"];
  }
}
