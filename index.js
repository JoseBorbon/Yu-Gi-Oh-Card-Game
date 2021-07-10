//create user object which will end up storing all our values
/*
Name, LifePoints, Currency, Deck Pouch, On Hand Deck(Max 40 Cards Held), locator cards, level, increment level, milenium items, milenium pieces

*/

const user = {
    name: null, //name will be changed at beginning of story
    lifePoints: 4000, 
    currency: 0, //start user off with 0 of currency
    onHandDeck: [], //initialize to empty array since empty card deck starting off
    deckPouch: [], // initialize to empty array since empty card deck starting off
    locatorCards: 0,
    level: 1,
    incrementLevel: function() {
        //if level is under 20, increment level, otherwise do nothing
        if(this.level < 20) this.level++;
    },
    completedIntro: false, //indicate whether or not user completed intro
    mileniumItems: null, // milenium items arc is in development, will work on it after base proj is done
    mileniumPieces: null, // will be a part of milenium items arc
};


console.log(user.level);





