## Table Of Contents
* [Overview](#overview)
* [To Do 7/9](#to-do)
​
1. [Yu-Gi-Oh](#yu-gi-oh)
2. [Classes](#classes)
3. [Locations](#locations-map)
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
- Get Extra Input for Ideas(If you see something extra we can add, write it down and say something then)
- Go in-depth on using git and setting up peoples vscode
- Since we are new to using git I highly recommend backing things up in repl.
​
## Yu-Gi-Oh
* Starter Decks
* Dialogue (Filled with user based choices so they can pick what starter deck they want) Also include cheatcode deck to always win since we're devs and we're cool.
* [Battle City Rules](https://yugioh-x13.fandom.com/wiki/Battle_City_Rules) - if we go this route.
* Figure out currency or something for shop
* Have Maximum number of cards player can hold in a deck (At least 40? Still need to figure out specifics on deck size limit if we go with battle city segment)
* Battle System (Life Point Options included 4k or 8k)
    * Face Down card, Face Up card option place
    * Attack option
    * Defense Mode option
    * Pass Option
    * Polymerization -- VERY INTERESTING AND IM WONDERING HOW TO MAKE IT HAPPEN without ruining too much things and ensuring requirements are there. (Perhaps have a property on object called onField and originally set value to false, until object is put on the field, then set value to true.)
    * Field Spell Card Overriding
    * Potential ASCII ART??????????? To Show Cards on a "Field Plane" while in battle
    * Need usage of Asynchronous JavaScript so that setTimeout is invoked at appropriate times
​
## Classes
* Monster Cards (Element Type, Attack Points, Defense Points Potentional Special Effects (some have special effects and some don't)
    * Include 5 Egyptian Development Dragons (3 Egyptian God Cards but with 5 pursuit values instead) as part of monster cards
* Field Spell Cards
    * Increase attack points or defense points or both of monsters of certain element type based on field spell card used.
    * Create an option in battle that overrides a previous field spell card.
* Trap Cards
    * TBD Need INPUT cause there are potential cards based on chance
    * Need More INPUT
* Magic Cards (Shuffle Deck, +Monster Att/Def Points/Both, Rebirth, +Life points/ -Life points, more)
    * TBD Need INPUT cause there are potential cards based on chance
    * Need More INPUT
​
## Locations (Map)
(IIFE that will begin with starting people in tutorial and give option to leave tutorial and go to mainland)
   * Shop to buy special rare cards
        * Dialogue
        * Card Prices
        * Give option for user to store card in deck if their deck size is less than max number of cards, otherwise send to their "deck pouch"
* Tournament Mode Arena (Can technically create closure as well here for save point)
    * Dialogue
    * TBD Need INPUT
* Story Mode (Can potentially create check points by utilizing a closure and taking advantage of memoization)
    * TBD Need Input
* Battle City random street fights, collect 3 cards and be eligible to participate in tournament mode arena.
    * TBD Need Input
* Deck Pouch (Technically a part of Locations since it's a free to roam around map)
    * Have Players view what's in their deck by having it logged to the console if they hit yes, otherwise boot them back out to locations
    * Deck Pouch iterates through array and then logs to the console a wrapped up list of each monster in deck with appropriate index number so player can pick card to grab.
        * Create Option for player to choose more than one card, will have to specify a range or pick index numbers as input to get it to work. (Would need to check deck length and do a bit of math, someone who ain't scared of math gotta do this)
    * Need More INPUT
* Deck Itself
    * Have Players view what's in their deck by having it logged to the console if they hit yes, otherwise boot them back out to locations
    * Deck iterates  iterates through array and then logs to the console a wrapped up list of each monster in deck with appropriate index number so player can pick card to view
        * if they want to remove a specific number of cards, pick the indexes all at once, or one, or specify range
    * Need More INPUT
​
### * UNIT TESTING WILL BE NEEDED
### * ALSO WILL NEED TO GET PEOPLE ON BOARD WITH USING [GIT](https://git-scm.com/downloads)
​
*This is still a work in progress and I know there is so much more we can add.*
​
## Authors
- Jose Borbon - [JoseBorbon](https://github.com/JoseBorbon)
- Christina Loiacono - [christina-ml](https://github.com/christina-ml)
- [add-your-name-here](https://github.com/yourUsername)

![yami the pharoah returns](https://i.pinimg.com/originals/b8/84/04/b88404e0df839a99b979e6c9a218a8e3.gif)