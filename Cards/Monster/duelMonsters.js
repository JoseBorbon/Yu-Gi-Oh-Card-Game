const { DuelMonster } = require("../parentCardClasses");



// create duelMonsterSpecialClass
class DuelMonsterSpecial extends DuelMonster {
  constructor(
    name,
    starLevel,
    type,
    attribute,
    attackPoints,
    defensePoints,
    fusionID,
    specialEffect
  ) {
    super(
      name,
      starLevel,
      type,
      attribute,
      attackPoints,
      defensePoints,
      fusionID //setting to null if card does not have a fusion
    );
    this._type = [type, "effect"];
    this._specialEffect = specialEffect.toLowerCase(); //takes in string value
  }

  get specialEffect() {
    return this._specialEffect;
  }

  set specialEffect(newSpecialEffect) {
    this._specialEffect = newSpecialEffect; // May not need this, put it just in case
  }
}


