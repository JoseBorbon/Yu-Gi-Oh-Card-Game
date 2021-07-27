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

function mainPhase1(hand, field){ //do we need to reference the opponent field? can the cards pull that info?
    let main = true
    let sumAvailable = true
    while (main){
        let command = readlineSync.question('Commands are: summon, set, change, effect, spell, next').toLowerCase()
        switch (command) {
            case ('summon' || 'set')://limit to 1/whole turn, check if tribute needed
                if (!sumAvailable){ 
                    console.log('Already summoned this turn')
                    break;}
                let monInHand = []
                for (let [index,card] of hand.entries()){
                    if (card._type.includes('monster')){
                        monInHand.push([index,card])
                    }
                }
                let monster = readlineSync.question(`Eligible summon/sets are: ${monInHand}, input index`)//do we want index or string input? whats easier?
                //something to check summon requirements if any
                let position = readlineSync.question(`What position?: Attack or Set`).toLowerCase()
                //take card out of hand
                if (position === 'set'){
                    //monster access placeholder
                    hand[monster]._attackPos = false
                    hand[monster]._faceUp = false
                }
                field[0].push(hand.splice(monster,1)[0])
                //play to field in chosen position
                sumAvailable = false
                break;
            case 'special'://Special summon
                //Check conditions
                break;
            case 'change'://Change position of mon that wasn't played this turn
                let monster = readlineSync.question(`Eligible monsters are: ${field[0]}, input index`)
                if (monsterPlayedThisTurn){//prevent change of pos for things played this turn
                    //some way to keep track of when things entered
                }
                if (field[0][monster]._attackPos ===true){
                    field[0][monster]._attackPos = false
                }else if(field[0][monster]._faceUp ===false){
                    field[0][monster]._attackPos = true
                    field[0][monster]._faceUp = true
                    if (field[0][monster]._flipEffect){//flip effect check placeholder
                        //trigger as needed
                    }
                }
                break;
            case 'effect'://activate monster/spell effects if applicable
                break;
            case 'spell': //need a check for some trap cards having been set prior, 
                break;
            case 'next': //next phase
                main = false 
                break;
            default:
                console.log('type better')
                break;
            }
        }
}



function attack(attacker, defender, user1, user2, field1, field2) {//prob to be selected with this._field1[0][n] atm
    let lp1 = user1._lifePoints
    let lp2 = user2._lifePoints
    //check position of attacker and defender
    //allow only if selected monster is in attack mode
    if (attacker._attackPos === true) {
        continue
    }else {return "invalid monster selected"}
    //check effects/spells
    if (field2[1]){
        //prompt defender for trap/magic
    }
    if (field1[1]) {
        //prompt attacker for trap/magic cards
    }
    //compare point values
    if (defender._attackPos === true) {//don't think I see an atk or def mode item
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
        
    }1
    //destory/pop if defender is weaker, or if attacker is weaker than attack mode defender
    //return new lp values if any
    return (user1._lifePoints = lp1, user2.lifePoints = lp2)
}

//probably want a function or some way to check card descriptions

class Game {
    constructor(user1, user2) {
        this._deck1 = shuffle(user1.onHandDeck),//shuffle added
        this._deck2 = shuffle(user2.onHandDeck),
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
