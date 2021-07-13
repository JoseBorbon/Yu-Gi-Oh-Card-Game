//create shuffle function
function startingDraw(hand, deck) {
    for (let i = 0, i<7,i++) {
        hand.push(deck.pop())
    }
}
function display(hand, playerField, enemyField,fieldSpell) {
    let view = `Field State:\n
    ${enemyField}\n
    ${fieldSpell}\n
    ${playerField}\n
    \n
    Hand:\n
    ${hand}`
    return view
}
//probably want a function or some way to check card descriptions

class Game {
    constructor(user1, user2) {
        this._deck1 = user1.onHandDeck,
        this._deck2 = user2.onHandDeck,
        //insert fusion/ritual deck as needed
        //insert shuffle function
        this._hand1 = [],
        this._hand2 = [],
        this._field1 = [[],[]],//[[monsters],[spells]]
        this._field2 = [[],[]],//add limitations for card types and sizes later
        this.fieldSpell = []
    }
    //prob going to need an init line somewhere
    //bunch of user input lines/functions for play/reactions

}
