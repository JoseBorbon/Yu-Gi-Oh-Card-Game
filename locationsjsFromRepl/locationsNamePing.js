/*
I want this locations function to give the user the
ability to:
1. select which map to go to after they did
certain things.

For now create something in which
user can:
1. go from one location to another location
2. and within every function log the name of random locations.
*/

// array of functions
// Math.random 0-5
// math.floor (math.random * 6) exclusive

// Math.floor(Math.random()* 6);

// All Locations Function




// Shop Location Function
let shopLoc = function () {
  console.log("At Shop");
}

// Tournament Mode Arena Location Function
let tournamentModeArenaLoc = function () {
  console.log("At Tournament");
}

// Story Mode Arena Location Function
let storyModeArenaLoc = function () {
  console.log("At storymode");
}

// Battle City Location Function
let battleCityLoc = function () {
  console.log("At battlecity");
}

// Deck Pouch Location Function
let deckPouch = function () {
  console.log("opened deckpouch");
}

// Deck Itself Location Function
let onHandDeck = function () {
  console.log("opened currentDeckOnHand");
}

function allLocations() {
  let arrOfFunc = [shopLoc, 
  tournamentModeArenaLoc,
  storyModeArenaLoc,
  battleCityLoc,
  deckPouch,
  onHandDeck];

  let selection = Math.floor(Math.random()* 6);

  switch (selection) {
    case 0: return arrOfFunc[0]();
    case 1: return arrOfFunc[1]();
    case 2: return arrOfFunc[2]();
    case 3: return arrOfFunc[3]();
    case 4: return arrOfFunc[4]();
    case 5: return arrOfFunc[5]();
  }
  
  //arrOfFunc.push(shopLoc());
}

allLocations();