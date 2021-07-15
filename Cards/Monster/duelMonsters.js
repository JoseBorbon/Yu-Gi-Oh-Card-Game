//create duelMonster class [underscore is needed for property names otherwise it'll cause stack overflow error]

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

class DuelMonsterFusion extends DuelMonster {
  constructor(
    name,
    starLevel,
    type,
    attribute,
    attackPoints,
    defensePoints,
    fusionID,
    fusionMaterials
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
    this._specialEffect = null;
    this._type = [type, "Fusion"]; //Leverage the string fusion to throw Fusion Monsters into
    this._fusionMaterials = fusionMaterials; //String Indicating which monsters are needed in order to summon fused monster
  }
}

class DuelMonsterFusionSpecial extends DuelMonster {
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
