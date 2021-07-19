/* First: You have to understand the problem
  *IIFE that will begin with starting people in tutorial and give option to leave tutorial and go to mainland
*/
// create an immediately invoked function expression

console.log('Welcome to Yu-Gi-Oh! BattleCity 2 TCG Edition.');

console.log('Do you want to leave tutorial and go to mainland?');
// if yes = continue
// if no = go back to beginning
// start at main location at beginning & keep going back to it...
// stuck in a loop until you pick something
// give an option of where to go
// go to first function, or go back to home.
// go to second function, or go back to home.
// go to third function, or go back to home.
// go to fourth function, or go back to home.

(function () {









































// // All Locations Function

// // Shop Location Function
// let shopLoc = function () {
//   console.log("At Shop - this is text inside this function");
// console.log('It's Time To Duel!');
// }

// // Tournament Mode Arena Location Function
// let tournamentModeArenaLoc = function () {
//   console.log("At Tournament - this is text inside this function");
// console.log('Get Your Game On!');
// }

// // Story Mode Arena Location Function
// let storyModeArenaLoc = function () {
//   console.log("At storymode - this is text inside this function");
// console.log('Gotchya!');
// }

// // Battle City Location Function
// let battleCityLoc = function () {
//   console.log("At battlecity - this is text inside this function");
// }

// // Deck Pouch Location Function
// let deckPouch = function () {
//   console.log("opened deckpouch - this is text inside this function");
// }

// // Deck Itself Location Function
// let onHandDeck = function () {
//   console.log("opened currentDeckOnHand - this is text inside this function");
// }


//  // Arrays can store functions!
//   let arrOfFunc = [shopLoc(), 
//   tournamentModeArenaLoc(),
//   storyModeArenaLoc(),
//   battleCityLoc(),
//   deckPouch(),
//   onHandDeck()];


// // function allLocations() {

// //   // let selection = Math.floor(Math.random()* 6);

// //   // switch (selection) {
// //   //   case 0: return arrOfFunc[0]("Muto Shop");
// //   //   case 1: return arrOfFunc[1]();
// //   //   case 2: return arrOfFunc[2]();
// //   //   case 3: return arrOfFunc[3]();
// //   //   case 4: return arrOfFunc[4]();
// //   //   case 5: return arrOfFunc[5]();
// //   // }
  
// //   //arrOfFunc.push(shopLoc());
// //   //return arrOfFunc
// // }

// // const result = allLocations();

// // give user the option of locations

// // Use this to look up user input  -Jose
// //  https://github.com/anseki/readline-sync#utility_methods-promptcl

// const readline = require('readline').createInterface({
//   input: process.stdin, // standard input
//   output: process.stdout // standard output
// })

// // change arrOfFunc to choose an index?
// let locationInput = arrOfFunc.promptCL();

// readline.question(`Choose your location out of ${locationInput} locations`, locationInput => {
//   console.log(`You chose ${locationInput} `)
//   readline.close()
// })


// /*
// Type in a number for the location you want to go to.

// let arrOfFunc = [shopLoc, 
//   tournamentModeArenaLoc,
//   storyModeArenaLoc,
//   battleCityLoc,
//   deckPouch,
//   onHandDeck];

// if input = arrOfFunc[0] {
//   console.log(`You go to shopLoc');
//   return arrOfFunc[0];
// }

// if input = arrOfFunc[1] {
//   console.log(`You go to tournamentModeArenaLoc');
//   return arrOfFunc[1];
// }

// if input = arrOfFunc[2] {
//   console.log(`You go to storyModeArenaLoc');
//   return arrOfFunc[2];
// }



// User input - choose these numbers: [0, 1, 2, 3, 4, 5]
// array.length - if it's > 5, return 
// console.log("please choose again");
// If not, please choose again.
