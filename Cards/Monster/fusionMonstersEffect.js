const { DuelMonstersCreator } = require("../parentCardClasses");



class DuelMonsterFusionSpecial extends DuelMonsters {
    constructor(
      name,
      starLevel,
      type,
      attribute,
      attackPoints,
      defensePoints,
      fusionID,
      fusionMaterials,
      specialEffect
    ) {
      super(
        name,
        starLevel,
        type,
        attribute,
        attackPoints,
        defensePoints,
        fusionID
      );
      this._type = [type, "Fusion", "Effect"]; //Leverage the string fusion to throw Fusion Monsters into
      this._fusionMaterials = fusionMaterials; //String Indicating which monsters are needed in order to summon fused monster
      this._specialEffect = specialEffect; //Array of strings in specific order in case more than 1 effect for monster
    }
  }