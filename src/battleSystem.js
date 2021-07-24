//create user object which will end up storing all our values
/*
Name, LifePoints, Currency, Deck Pouch, On Hand Deck(Max 40 Cards Held), locator cards, level, increment level, milenium items, milenium pieces

*/



/*magic cards - done and added to magicCardJS 
const swordsOfRevealingLight = new MagicCard(
  "Swords Of Revealing Light",
  null,
  [
    "Flip All Monsters Opponent Controls Face-Up",
    "Card Remains on Field for 3 of your opponents turns",
    "While card is on field, monsters your opponent controls cannot declare an attack",
  ]
);

const changeOfHeart = new MagicCard(
  "CHANGE OF HEART",
  ["opponent must have 1 monster card on the field"],
  [
    "target 1 monster your opponent controls",
    "take control of the monster until the end of user phase",
  ]
);

const brainControl = new MagicCard(
  "BRAIN CONTROL",
  [
    "opponent must have 1 monster card on the field",
    "selected card must be face-up",
  ],
  [
    "target 1 monster your opponent controls",
    "take control of the monster until the end of user phase",
  ]
);

const gracefulCharity = new MagicCard("GRACEFUL CHARITY", null, [
  "Draw 3 cards from deck",
  "discard 2 cards from deck",
]);

const polymerization = new MagicCard(
  "POLYMERIZATION",
  [
    "must have fusion material monsters in hand or on own side of the field that are listed by fusion monster card",
  ],
  ["special summon fusion monster from your fusion deck"]
);

const darkHole = new MagicCard("DARK HOLE", null, [
  "destroy all monsters on the field",
]);

const monsterReborn = new MagicCard("MONSTER REBORN", null, [
  "Target 1 monster in either player's graveyard",
]);
*/

/* field magic cards - done and added to fieldMagicCardJS
const fusionGate = new FieldMagicCard("FUSION GATE", null, [
  "As long as card is on field, monsters can be fused without polymerization card",
]);

const wasteLand = new FieldMagicCard("WASTELAND", null, [
  "All Dinosaur, Zombie, Rock monsters on the field gain 200 attack and defense points",
]);

const forest = new FieldMagicCard("FOREST", null, [
  "All Insect, Beast, Plant, and Beast-Warrior monsters on the field gain 200 attack and defense points",
]);

const yami = new FieldMagicCard("YAMI", null, [
  "all fiend and spellcaster monsters on the field gain 200 attack and defense points",
  "all fairy type monsters on the field lose 200 attack and defense points",
]);

const mountain = new FieldMagicCard("MOUNTAIN", null, [
  "all dragon, winged beast, and thunder monsters on the field gain 200 attack and defense points",
]);
*/

/*
continuous magic cards - done and added to continuousMagicCardJS
const infiniteCards = new ContinuousMagicCard("INFINITE CARDS", null, [
  "As long as infinite cards is on the field, hand limit of 6 is removed",
]);

const amandasNaggingCats = new ContinuousMagicCard(
  "AMANDAS NAGGING CATS",
  null,
  ["inflict 300 life points at the beginning of opponents turn"]
);

const burningLand = new ContinuousMagicCard("BURNING LAND", null, [
  "if there are any field spell cards on the field, destroy them",
  "During each players stand by phase, the turn player takes 500 damage",
]);

const darkRoomOfNightmare = new ContinuousMagicCard(
  "DARK ROOM OF NIGHTMARE",
  null,
  [
    "each time opponent takes damage from a spell or trap card effect, inflict 300 damage to opponent",
  ]
); 

const attrition = new ContinuousMagicCard("ATTRITION", null, [
  "If opponents monster is not destroyed by battle, it loses attack equal to the battle damage", //what is battle damage? Net Difference?
]);

const toonWorld = new ContinuousMagicCard("TOON WORLD", null, [
  "Pay 1000 life points to activate the card on field",
]); 

*/

/*equip magic cards - done and added to equipMagicCardsJS
const blackPendant = new EquipMagicCard(
  "BLACK PENDANT",
  ["at least 1 monster must be on your side of the field"],
  [
    "The equipped monster gains 500 attack points",
    "when this card is sent to the graveyard(death of monster card equipping it or usage of magic card remover) inflict 500 damage to your opponent",
  ]
);

const unitedWeStand = new EquipMagicCard(
  "UNITED WE STAND",
  ["at least 1 monster must be on your side of the field"],
  [
    "Equipped Monster gains 800 Attack and Defense points for each monster you control on the field",
  ]
);

const gravityAxe = new EquipMagicCard(
  "GRAVITY AXE - GRARL",
  ["at least 1 monster must be on your side of the field"],
  [
    "Equipped Monster gains 500 attack points",
    "monsters opponent controls cannot change battle positions",
  ]
);

const twinSwordsOfFlashingLightTryce = new EquipMagicCard(
  "TWIN SWORDS OF FLASHING LIGHT - TRYCE",
  ["Must send 1 card from hand to graveyard"],
  [
    "monster equipped with this card loses 500 attack points",
    "monster equipped with this card can attack twice during same battle phase",
  ]
);

const salamandra = new EquipMagicCard(
  "SALAMANDRA",
  ["Monster card being equipped this card must be FIRE type"],
  ["Gain 700 Attack Points"]
); */

/* ritual magic cards - done and added to ritualMagicCardJS
const blackLusterRitual = new RitualMagicCard(
  "BLACK LUSTER RITUAL",
  [
    "BLACK LUSTER SOLDER monster card must be in hand",
    "Tribute monsters whose total levels are greater than or equal to 8",
  ],
  [
    "Summon Black Luster Soldier onto the field and move tribute cards to graveyard",
  ]
);

const blackMagicRitual = new RitualMagicCard(
  "BLACK MAGIC RITUAL",
  [
    "Magician Of Black Chaos must be in hand",
    "Tribute monsters used must have total level greater than or equal to 8 combined",
  ],
  [
    "Summon Magician Of Black Chaos onto the field and move tribute cards to graveyard",
  ]
);

const zeraRitual = new RitualMagicCard(
  "ZERA RITUAL",
  [
    "Zera The Mant must be in hand",
    "Tribute monsters used must have total level greater than or equal to 8 combined",
  ],
  ["Summon Zera the mant onto the field and move tribute cards to graveyard"]
);

const whiteDragonRitual = new RitualMagicCard(
  "WHITE DRAGON RITUAL",
  [
    "Paladin of the white dragon must be in hand",
    "Tribute monsters used must have total level greater than or equal to 4 combined",
  ],
  [
    "Summon Paladin Of White Dragon onto the field and move tribute cards to graveyard",
  ]
);
*/

//trap cards - done added to trapCardJS
//continuous trap cards - done added to continuousTrapCardJS

//monster cards Summon Below


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

//   console.log(blueEyesUltimateDragon);
//   console.log(amandasNaggingCats);
