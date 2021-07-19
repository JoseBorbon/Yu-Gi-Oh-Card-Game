## Locations (Map)

(IIFE that will begin with starting people in tutorial and give option to leave tutorial and go to mainland)
- Can use a regular function (you create 1 function & within that function you have a while loop that points back to the first thing...we give the user choices. Give them an option to input of where to go. Once they choose an option - go into a store, or go back, to the first function that they currently were at. Nested loops with functions in them. If we invoke this location, otherwise we invoke this other location. So..you're currently here: where would you like to go next? Using a [While Loop](https://www.w3schools.com/js/js_loop_while.asp) - to keep on going.) Or to exit game, change the variable to Exit Game.
   * Shop to buy special rare cards
        - Give a currency to buy stuff (coins, dollars, or something...make it a number)
        * Dialogue - Each location will have it's own kind of dialogue
        * Card Prices
        * Give option for user to store card in deck if their deck size is less than max number of cards, otherwise send to their "deck pouch"
        - Create an object, user would have to pick which number would they want - iterate through this object and let the user know these are all your choices: pick one. If you have enough currency, they can buy it. Otherwise you don't have enough, come back later.
* Tournament Mode Arena (Can technically create closure as well here for save point)
  - Dialogue
  - TBD Need INPUT
* Story Mode (Can potentially create check points by utilizing a closure and taking advantage of memoization)
  - TBD Need Input
* Battle City random street fights, collect 3 cards and be eligible to participate in tournament mode arena.
  - TBD Need Input
  * You're out on the street
  * Do a math.random for this & Rare Hunter - this is the duelist that you're going to fight now.
  * 8 for battle city random street fights, 10 for Rare Hunters
* Deck Pouch (Technically a part of Locations since it's a free to roam around map)
  - Have Players view what's in their deck by having it logged to the console if they hit yes, otherwise boot them back out to locations
  - Deck Pouch iterates through array and then logs to the console a wrapped up list of each monster in deck with appropriate index number so player can pick card to grab.
    - Create Option for player to choose more than one card, will have to specify a range or pick index numbers as input to get it to work. (Would need to check deck length and do a bit of math, someone who ain't scared of math gotta do this)
    - View Card Description
  - Need More INPUT
* Deck Itself
    * Have Players view what's in their deck by having it logged to the console if they hit yes, otherwise boot them back out to locations
    * Deck iterates  iterates through array and then logs to the console a wrapped up list of each monster in deck with appropriate index number so player can pick card to view
        * if they want to remove a specific number of cards, pick the indexes all at once, or one, or specify range
        * View Card Description
    * Need More INPUT