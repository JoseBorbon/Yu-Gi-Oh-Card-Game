const { CardEffect } = require("../parentCardClasses");

//create equip magic card sub-class from CardEffect
class EquipMagicCard extends CardEffect {
  constructor(name, requirements, effect) {
    super(name, requirements, effect);
    this._type = ["equip", "magic"];
  }
}
