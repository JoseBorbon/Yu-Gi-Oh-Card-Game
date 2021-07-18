//add exports at the end whenever
//create shuffle function
function draw(hand, deck, numOfCardsToDraw) {//should be usable for most draw cards as well
    //guaranteed to at least draw 1 so decided to use 1 and <= numOfCardsToDraw
    for (let i = 1; i <= numOfCardsToDraw; i++) {
        hand.push(deck.pop());
    }
}

function displayBoard(hand, playerField, enemyField,fieldSpell) {
    //can prob be ran inside a log function if it's to be played in a terminal
    let view = `Field State:\n
    ${enemyField}\n
    ${fieldSpell}\n
    ${playerField}\n
    \n
    Hand:\n
    ${hand}`;
    return view;
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

function attack(attacker, defender, user1, user2) {//prob to be selected with this._field1[0][n] atm
    let lp1 = user1._lifePoints
    let lp2 = user2._lifePoints
    //check position of attacker and defender
    //currently don't see an indicator for position other than facedown
    //allow only if selected monster is in attack mode
    //check effects/spells
    //compare point values
    if (defender._faceUp === true) {//don't think I see an atk or def mode item
        let dif = (attacker._attackPoints - defender._attackPoints)
        if (dif > 0) {
            //destroy def and affect enemy lp
            lp2 -= dif
        }else if (dif === 0) {
            //destroy both
        }else {
            //destroy self and affect own lp
            lp1 -= dif
        }
    }else {
        let dif = (attacker._attackPoints - defender._defensePoints)
        if (dif > 0) {
            //destroy def
        }else if (dif === 0) {
            //defender becomes faceup
        }else {
            //affect own lp, no destroy
            lp1 -= dif
        }
        
    }
    //destory/pop if defender is weaker, or if attacker is weaker than attack mode defender
    //return new lp values if any
    return (user1._lifePoints = lp1, user2.lifePoints = lp2)
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
        this._field1 = [[],[]],//[[monsters],[spells / traps]]
        this._field2 = [[],[]],//add limitations for card types and sizes later
        this.fieldSpell = []
    }

    //methods
    itsTimeToDuel() {
        //prob going to need an init line somewhere
        //bunch of user input lines/functions for play/reactions
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
                console.log(displayBoard(this._hand1, this._field1, this._field2, this._fieldSpell))
                //battle; will probably need other functions for the commands
                if (i === 0) {//skip battle on first turn
    
                }
                //main2
                console.log(displayBoard(this._hand1, this._field1, this._field2, this._fieldSpell))
                //end
                }
                else {//player 2 turns
                //draw
                draw(this._hand2, this._deck2, 1)
                //standby, check effects/ magic/trap; will likely prompt user input
                //main1
                console.log(displayBoard(this._hand2, this._field2, this._field1, this._fieldSpell))
                //battle
                //main2
                console.log(displayBoard(this._hand2, this._field2, this._field1, this._fieldSpell))
                //end
                }
    
            i++
        }
    }
}
