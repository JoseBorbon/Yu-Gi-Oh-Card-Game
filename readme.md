## Table Of Contents

- [Overview](#overview)
- [To Do 7/9](#to-do)

1. [Yu-Gi-Oh](#yu-gi-oh)
2. [Classes](#classes)
3. [Locations](#locations-map)
4. [Sources](#sources)
   ​
   ​

## Overview

Biggest things this week will be for everyone to **get up to speed on using git** (this includes not deleting stuff, creating branches and etc). The second thing will be **understanding the concept of "separation of concerns"** (understanding why and how to import things if needed and export things from one file to another). In order to accomplish this we will need 1 "Master File" where all the functions will eventually get exported to.
​

After I get a bit more used to using git, I will be looking to figure out how to create and run "unit tests"
​

If anyone has experience working with git in a team capacity and would like to help get people up to speed, feel free to post here. I'm still looking this stuff up and messing up directories and failing forward as I go.
​

## To Do

- First, get [OOP](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS) out of the way. (Jose)

- Work on the battle system - am I able to use API in VS Code or not? (Jose)
- If you want a delay to happen - [setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp). A small pause before one of these people's turns to go. Makes game more immersive.
- Get Extra Input for Ideas(If you see something extra we can add, write it down and say something then)
- Go in-depth on using git and setting up peoples vscode
- Since we are new to using git I highly recommend backing things up in [repl](https://replit.com/).
- Shadow games?
- Add a level system - character level, once they're level 20, there's a 5% chance if you're out on the map location that you'll have the chance to encounter a Rare Hunter. Choose: Yes, I want to fight you, or no I don't.
  - If user says no, stick to the current location where they were. Otherwise, if they choose yes, they enter the battle.
  - Every 10-20 seconds there's a 5% chance for this thing to pop up (asynchronous JavaScript - Including time aspect for "seconds").
  - Use setInterval for the 5% chance in the Hunter fight
  - Do a math.random for this & Rare Hunter - this is the duelist that you're going to fight now.
  - 8 for battle city random street fights, 10 for Rare Hunters

## Win or Lose

- Each player starts off with 4,000 life points
- First person to get to 0 life points = LOSE
- If you have zero cards remaining in your deck to pick from, you get eliminated from the duel = LOSE.
- Unless player chooses to concede (surrender).
  ​

## Yu-Gi-Oh
* Create a user object starting off which holds several values
* Starter Decks - How many cards? 30, 40?
    - Balance out the decks (either actual, or create decks of side characters in Yu-Gi-Oh)
    - Pick between 1 of 3 decks:
    - Yugi Deck
    - Kaiba Deck (blue eyes white dragon - strongest card in the game)
    - Joey Wheeler Deck
* Dialogue (Filled with user based choices so they can pick what starter deck they want) Also include cheatcode deck to always win since we're devs and we're cool.
    - Go as you go
* Figure out currency or something for shop
* Have Maximum number of cards player can hold in a deck (At least 40? Still need to figure out specifics on deck size limit if we go with battle city segment)
* Battle System (Life Point Options included 4k or 8k)
    * Shuffle Deck In Beginning Using Fisher-Yates Shuffle
    * Face Down card, Face Up card option place onto field as well as place in defense or attack mode onto field
    * Attack option on field
    * Defense Mode option on field
    * Pass Option
    * View Card Description Option
    * Polymerization -- VERY INTERESTING AND IM WONDERING HOW TO MAKE IT HAPPEN without ruining too much things and ensuring requirements are there. (Perhaps have a property on object called onField and originally set value to false, until object is put on the field, then set value to true.)
    * Field Spell Card Overriding
    * Potential ASCII ART??????????? To Show Cards on a "Field Plane" while in battle
    * Need usage of [Asynchronous JavaScript](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous) so that [setTimeout](https://www.w3schools.com/jsref/met_win_settimeout.asp) is invoked at appropriate times
​
## Classes

- Monster Cards (Element Type, Attack Points, Defense Points, Star Values(rules based off number of stars monster card has), Special Effects (some have special effects and some don't)
  - Include 5 Egyptian Development Dragons (3 Egyptian God Cards but with 5 pursuit values instead) as part of monster cards
- Field Spell Cards
  - Increase attack points or defense points or both of monsters of certain element type based on field spell card used.
  - Create an option in battle that overrides a previous field spell card.
- Trap Cards
  - TBD Need INPUT cause there are potential cards based on chance
  - Need More INPUT
- Magic Cards (Shuffle Deck, +Monster Att/Def Points/Both, Rebirth, +Life points/ -Life points, more)
  _ TBD Need INPUT cause there are potential cards based on chance
  _ Need More INPUT
  ​

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


# Look into later
    * Traveling Card Merchant that sells really nice cards
    * Milenium Items Arc with pieces (Currently Null On user Object)
    * Rest TBD
​
## Sources

   * [Monster Cards In Our Project](https://db.ygoprodeck.com/search/?&startdate=Thu%20Dec%2031%201998&enddate=Tue%20Nov%2030%202004&dateregion=tcg_date&sort=tcg_date&num=100&offset=0&view=Gallery)
   * [Magic Cards Info](https://yugioh.fandom.com/wiki/Spell_Card)
      * [Field Spell Card](https://yugioh.fandom.com/wiki/Field_Spell_Card)
      * [Equip Spell Card](https://yugioh.fandom.com/wiki/Equip_Spell_Card)
      * [Ritual Spell Card](https://yugioh.fandom.com/wiki/Ritual_Spell_Card)
   * [Battle City Rules](https://yugioh-x13.fandom.com/wiki/Battle_City_Rules)
   * [JSDocs Canvas Git](https://github.com/joinpursuit/8-0-technical-curriculum/blob/main/01-fundamentals/understanding-code-challenges/reading/jsdocs.md)
   * [Contributor Stats](https://github.com/JoseBorbon/Yu-Gi-Oh/graphs/contributors)

### Field Mat We Will be Mimicking In The Game
![field mat](https://i.ebayimg.com/images/g/PLwAAOSwZepderBM/s-l1600.jpg)
### Yami
![yami the pharoah returns](https://i.pinimg.com/originals/b8/84/04/b88404e0df839a99b979e6c9a218a8e3.gif)

### * UNIT TESTING WILL BE NEEDED
### * ALSO WILL NEED TO GET PEOPLE ON BOARD WITH USING [GIT](https://git-scm.com/downloads)
​
_This is still a work in progress and I know there is so much more we can add._


## Authors

- Jose Borbon - [JoseBorbon](https://github.com/JoseBorbon)
- Christina Loiacono - [christina-ml](https://github.com/christina-ml)
- Hector Ilarraza - [HectorIlarraza](https://github.com/HectorIlarraza)
- Benny Zheng - [BennyZ3](https://github.com/BennyZ3)
- [add-your-name-here](https://github.com/yourUsername)

