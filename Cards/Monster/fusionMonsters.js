const { DuelMonstersCreator } = require("../parentCardClasses");

//create an cache to store monsters and a cache that will filter type if user provides an invalid type

class DuelMonsterFusion extends DuelMonstersCreator {
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

const blueEyesUltimateDragon = new DuelMonsterFusion(
  "Blue-Eyes Ultimate Dragon",
  12,
  "Dragon",
  "Light",
  4500,
  3800,
  null,
  "Blue-Eyes White Dragon + Blue-Eyes White Dragon2 + Blue-Eyes White Dragon3"
);

console.log(blueEyesUltimateDragon);
