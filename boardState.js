//add exports at the end whenever
//create shuffle function
function draw(hand, deck, n) {//should be usable for most draw cards as well
    for (let i = 0, i<n, i++) {
        hand.push(deck.pop())
    }
}
function display(hand, playerField, enemyField,fieldSpell) {
    //can prob be ran inside a log function if it's to be played in a terminal
    let view = `Field State:\n
    ${enemyField}\n
    ${fieldSpell}\n
    ${playerField}\n
    \n
    Hand:\n
    ${hand}`
    return view
}
function shuffle(array) {
    let m = array.length, t, i;
    // While there remain elements to shuffle…
    while (m) {
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);
      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
    return array;
  }
function attack(attacker, defender) {
    //check position of attacker and defender
    //check effects/spells
    //compare point values
    //destory/pop if defender is weaker, or if attacker is weaker than attack mode defender
    //if attacker wins return point dif
    
}
//probably want a function or some way to check card descriptions

class Game {
    constructor(user1, user2) {
        this._deck1 = shuffle(user1.onHandDeck),//shuffle added
        this._deck2 = Shuffle(user2.onHandDeck),
        this._lifePts1 = user1.lifePoints,
        this._lifePts2 = user2.lifePoints,
        //insert fusion/ritual deck as needed
        this._hand1 = [],
        this._hand2 = [],
        this._field1 = [[],[]],//[[monsters],[spells]]
        this._field2 = [[],[]],//add limitations for card types and sizes later
        this.fieldSpell = []
    }
    //prob going to need an init line somewhere
    //bunch of user input lines/functions for play/reactions
    //
    draw(this._hand1, this._deck1, 5)
    draw(this._hand2, this._deck2, 5)
    let i = 0;
    while (this._lifePts1 > 0 && this._lifePts2 > 0) {//loop until someone's out of points
        if (i%2 === 0) {//setting up turns
            if (i === 0) {//skip draw on first turn

            }
            else {//draw
                draw(this._hand1, this._deck1, 1)
            }
            //standby, check effects/ magic/trap; will likely prompt user input
            //main1: probably maintaining an active display and a way to interact with 
                //the cards and view details
            //battle; will probably need other functions for the commands
            if (i === 0) {//skip battle on first turn

            }
            //main2
            //end
        }
        else {//player 2 turns
            //draw
            draw(this._hand2, this._deck2, 1)
            //standby, check effects/ magic/trap; will likely prompt user input
            //main1
            //battle
            //main2
            //end
        }

        i++
    }
}
