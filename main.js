//Mention Beast/Murlock and why it's not used.
//Add healing/damage/card draw/summoning/silence - as much as you can.
//Do writeup of all of the things you are using.

var cards;
var doc;


//----------------
function createDocument(){
  doc = SpreadsheetApp.openById("1VAU-ZMY1w3ps6pkVWxBXVQPRFRsv3MqjN7Bs7DQUXLM").getActiveSheet();
  addCards();

};

//---------------SOME STUFF---------------------------------------
function addCards(){
  cards = createCards();
  //doc.getRange(2,2).setValue("doggies");
  var r = fill();
  order(3, r[0], r[1]);
};

//Whether or not a card should be included in the distribution.
//Tries its best to filter out cards with unique abilities.
function use(card){
    return !(/([aA][lL][lL]|\b[oO]ther\b|[wW]henever|[Pp]ut|[fF]or|\b[Aa]t\b|[Rr]andom|[pP]layer|[mM]inions\b)/).test(card.text);
}

function getValue(card) {
  var value = 0;
  for(var f in costFunctions){
    var fill = costFunctions[f](card);
    value += fill[1]; //Increase the card's overall value.
  }
  
  return value;
}

function fill(){
    var columns = [];
    var row = 2;
    var func = 0;
    for(var category in cards){
        //doc.getRange(3, num).setValue(category);
        //For each category
        for(var i in cards[category]){
            //For each card minion.
            if(cards[category][i].type === "Minion" && cards[category][i].collectible) {
              //if((!cards[category][i].mechanics && !cards[category][i].text) || (cards[category][i].text === "<b>Taunt</b>" || cards[category][i].text === "<b>Charge</b>" || cards[category][i].text === "<b>Spell Damage +1</b>" || cards[category][i].text === "<b>Divine Shield</b>")) {
                row++;//We're going down a row.
                doc.getRange(row, 1).setValue(cards[category][i].name);
                doc.getRange(row, 2).setValue(cards[category][i].text);
                cards[category][i].use = use(cards[category][i]);

                //Fill in all of the special cases.
                for(var f in adjustments) {
                    adjustments[f](cards[category][i]);
                }

                //Now continue on as if nothing had happened.
                doc.getRange(row, 3).setValue(cards[category][i].use);//Am I using this card's value?

                //Columns + value
                var value = 0; var column = 3;
                for(var f in costFunctions){
                    var fill = costFunctions[f](cards[category][i]);
                    cards[category][i][f + "_value"] = fill[1];
                    value += fill[1]; //Increase the card's overall value.

                    //Fill in.
                    //column++;
                    //doc.getRange(row, column).setValue(fill[0]);
                    column++;
                    doc.getRange(row, column).setValue(fill[1]);
                }

                //Now fill in the final value of the card.
                column++;
                doc.getRange(row, column).setValue(value);
                var r = Math.max(Math.min(Math.floor(150+100*(1-value)), 250), 0); var g = Math.max(Math.min(Math.floor(150 + 100*(1+value)), 250), 0); var b = Math.max(Math.min(Math.floor(250 - 100*(1-Math.abs(value))), 250), 0);
                //var r = 250; var g = 250; var b = 250;
                //doc.getRange(row+20, 1).setValue(r);doc.getRange(row+20, 2).setValue(g);doc.getRange(row+20, 1).setValue(b);
                if(cards[category][i].use){
                    doc.getRange(row, 1, 1, column).setBackgroundRGB(r, g, b);
                } else {
                    doc.getRange(row, 1, 1, column).setBackgroundRGB(150, 150, 150);
                }
            //}

            }

        }
    }
  
    //Put in labels for everything.
    doc.getRange(2, 1).setValue("Name");
    doc.getRange(2, 2).setValue("Text");
    doc.getRange(2, 3).setValue("Using");
    var column = 4;
    for (var f in costFunctions) {
        func++;
        doc.getRange(2, column).setValue(f);
        column += 1;//column+= 2;
     }
     doc.getRange(2, column).setValue("Final Value");

    //Return the dimensions of our data.
    return [row, 4 + func];
};

function getValue(card){
  if(card.type === "Minion") {
    
    //Fill in all of the special cases.
    for(var f in adjustments) {
      adjustments[f](card);
    }
    
    var value = 0;
    for(var f in costFunctions){
      var fill = costFunctions[f](card);
      card[f + "_value"] = fill[1];
      value += fill[1]; //Increase the card's overall value.
    }
    
    return value;
  }
  return 0;
}

function order(start, end, columns) {
    doc.getRange(1, 1).setValue(columns);
    doc.getRange(start, 1, end-start, columns).sort({column: columns, ascending: false});
    doc.getRange(start, 1, end-start, columns).sort({column: 3, ascending: false});
}

//Our value functions.
var costFunctions = {

    "mana": function(card){
        if(card.type === "Minion"){
            return [card.cost, -card.cost];
        }

        return [0, 0];
    },

    //Probably needs some revising.
    "health": function(card){
      if(card.type === "Minion"){
        return [card.health, card.health*.53];
      }

      return [0, 0];
    },

    //Probably needs a little revising.
    "attack": function(card){
        if(card.type === "Minion"){  
            return [card.attack, card.attack*.47];
        }

        return [0, 0];
    },

    //Every card has a secondary cost in that it's a card.  It takes up a slot in your deck and your hand.
    //Arguably, this opportunity cost should be ignored, but arguably, it really shouldn't.  
    //It explains why some low cost cards are actually pretty bad, like Wisp.
    "cards": function(card){
        if(card.type === "Minion"){
          if(card.cards == undefined || card.cards == 1) {
            return [1, -3/(card.health + card.attack)];
          }
        }

        return [0, 0];
    },

    //There's a drawback to not evenly distributing your stats.
    "balance": function(card){
        if(card.type === "Minion"){
            return [card.health-card.attack, -(Math.max(card.health, card.attack)/((card.health + card.attack)/2)-1)];
        }

        return [0, 0];
    },

    //Taunt is more valuable on cards with higher health.
    //It's also one of the weirder formulas, and one that I spent the most time on.
    //I'm still not 100% sure how I feel about it, but it does (somewhat) accurately reflect card ratings online, so the cards it says are overpowered, seem to actually be overpowered.
    "taunt": function(card){
        if(card.type === "Minion"){
            //Does it have taunt?
            if((/Taunt/).test(card.text)) {
                if(!(/([M|m]inion[^\.;,]*)<b>(Taunt)<\/b>/).test(card.text)) {
                    return [1, card.health/(card.cost+1)];//Math.max(card.cost, 4);
                }
            }
        }

        return [0, 0];
    },

    //Charge is more valuable on cards with a higher attack.
    //This is easily the most simplistic formula here, but it actually works fairly well.
    //There are some cards that appear to be undervalued using this formula, but when you look closely at them,
    //they actually end up having some of the best charge values in the game.  
    //This explains how cards like Leroy Jenkins are so stinking powerful.  They're not OP cards, but strategies that focus on the value from charge get ridiculous value,
    //because all of the card's value is compressed into charge at the expense of a lot of other negatives.
    //
    //Hearthstone, in so far as I can tell, is a game about figuring out where value has been placed on a card, and exploiting that or ignoring another mechanic of the card.
    //For example, Leroy players pretty much use him as finisher, which makes the 2 (1,1) creatures you get off of him pretty much not a negative at all.
    //You're playing situational rock-paper-scissors with how you alocate value.
    "charge": function(card){
        if(card.type === "Minion"){
            //Does it have Charge?
            if((/Charge/).test(card.text)) {
                //Is it a weird Charge that I don't know how to deal with (giving it to another minion, or to all minions).
                if(!(/([M|m]inion[^\.;,]*)<b>(Charge)<\/b>/).test(card.text)) {
                    return [1, card.attack/3];
                }
            }
        }

        return [0, 0];
    },
  
  //Basically, spellpower's value comes from the health of card that has it, modified by how expensive that card is.
  //The more survivable a card is, the better value you get out of it.
  //A low cost spellpower is also better, because you're more likely to have the mana to do something with it.
  //
  //This formula is a close, but imperfect aproximation of that relationship.  I'm not particularly proud of this one.
  "spellpower": function(card){
    if(card.type === "Minion"){
            if((/Spell Damage \+1/).test(card.text)) {
                if(!(/([M|m]inion[^\.;,]*)<b>(Spell Damage \+1)<\/b>/).test(card.text)) {
                    return [1, (card.health*.75)/(3)];
                }
            }
        }

        return [0, 0];
    },

    //There pretty much aren't any bad divine shield cards, which makes balancing them difficult.
    //Divine shield allows you (almost guaranteed) a way to ping off another creature or survive a removal - that's essentially giving you a second opportunity to attack.
    //That being said, Divine Shield really only protects against certain types of strategies, since it falls to 1 damage as easily as it falls for 2.  That means the best value
    //is early in the game, combined with a high attack value.
    //
    //I'm proud of the fact that divine shield cards aren't being rated higher than everything else, but still seem to be semi-accurately reflecting their values.
    //That being said, I don't think this is the best formula in this sheet.  It feels very hacky, I'm not sure I like it.
    "divine_shield": function(card){
        if(card.type === "Minion"){
            if((/Divine Shield/).test(card.text)) {
                if(!(/([M|m]inion[^\.;,]*)<b>(Divine Shield)<\/b>/).test(card.text)) {
                    return [1, (card.attack + .6)*3/(card.cost+1)];
                }
            }
        }

        return [0, 0];
    },
  
  //The current windfury formula doesn't combo off of charge.  Arguably, it really should.
  //Windfury + charge is very much additional value.
  //I use 2.13 in this formula, not because it's an arbitrary number, but because it matches the value of an attack point. Attack*.47 = Attack/2.13
  "windfury": function(card){
    if(card.type === "Minion"){
      if((/Windfury/).test(card.text)){
        if(!(/([M|m]inion[^\.;,]*)Windfury/).test(card.text)) {
          return [1, card.attack/Math.max(6-card.health, 2.13)];
        }
      }
    }
    return [0, 0];
  },
  
  //Stealth is honestly pretty tricky to value,
  //since it's almost always a combo ability.
  //The easy way to look at it is to look at cards with stealth and see how they're rated.
  //I did a bit of that, and also a bit of analysis to figure out how stealth works.
  //At first glance, (Uncomboed) Stealth is basically an alternate version of charge.
  // - you don't have to immediately use it as soon as you sink mana in though, and this makes it sometimes a more efficient play.
  //The disadvantage of stealth is security.  You aren't guaranteed an attack (AOE, taunters, etc... that your opponent can play in response)
  //This makes stealth, in some ways, a little bit riskier than charge.
  //Think of Stealth as an investment version of charge (again, we're only talking about uncomboed here).  I'm putting mana down at a slight risk
  //in order to have access to that value for free whenever I actually need it.
  //In those terms, it's clear why I use the charge formula but divide by the card cost rather than 3 (the pseudo average of other cards).
  "stealth": function(card){
    if((/Stealth/).test(card.text)){
      if(!(/([M|m]inion[^\.;,]*)Stealth/).test(card.text)) {
         return [1, card.attack/(card.cost+1)];
       }
    }
    return [0, 0];
  },
  
  //I'll be honest, I just kind of guessed a bit at this number.
  //Overload isn't a straight drawback though, it's a little bit better than it looks.
  //I'd love to say that the .7 I got here has a logical reason, but that number is purely derived from making the cards fit into their cost curves.
  //I don't know why that exact number is used, but that's the most correct one I've found.
  "overload": function(card){
    if(card.type === "Minion"){
      if(card.text != undefined) {
        var cost = card.text.match(/Overload[^0-9]*([0-9]+)/);
        if(cost != undefined) {
          return [cost[1], -cost[1]*.7]; //Overload is better than having it cost (x) more.
        }
      }
    }  
    return [0, 0];
  },
  
  //This is used for by-hand tweaks.  I only do it for cards that have weird abilities that need hand-tweaking but that I'm not willing to throw out entirely.
  //For example, Leroy Jenkins summons stuff for your opponent, Injured Blademaster does damage to himself, etc... etc...
  //All of this stuff is clearly marked, so you can easily tell if a card is what it is because of the formulas, or because I hand-added or subtracted some value.
  "bonus": function(card){
    if(card.bonus !== undefined) {
     return[1, card.bonus]; 
    }
    return [0, 0];
  },

  //Pretty straight formula.  A card is worth about 2 mana.
  "draw": function(card){
    if(card.text !== undefined){
      card_draw = card.text.match(/Draw (a|[0-9]+) card/);
      if(card_draw != undefined){
        if(card_draw[1] == 'a'){ card_draw[1] = 1 };
        return [card_draw[1], card_draw[1]*2];
      }
    }
    return [0, 0];
  },
  
  //We simulate the minion, get its value, and then add it to this one.
  //By this algorithm, summon cards are, like, really good.
  "summon": function(card){
    var minion_value = 0;
    if(card.text !== undefined) {
      if((/Summon/).test(card.text)){
        //Battlecry or deathrattle?
        modifier = card.text.split("Deathrattle");
        //I know that I have a deathrattle, which is better.
        if(modifier.length > 1) {
          death_bonus = 2;
          modifier = modifier[1];
        } else {
          modifier = modifier[0];
        }
        
        //Extract the data
        var summonStats = modifier.match(/Summon (a|two) ([0-9]+)\/([0-9]+)*/);
        if(summonStats) {
          summonStats.concat(modifier.match(/(Charge|Taunt)/) || []);
          //Build the card
          if(summonStats[1] == "two") { summonStats[1] = 2; } else { summonStats[1] = 1; }
          var virtual_card = {
            "type": "Minion",
            "cost": 0,
            "cards": 1, /*Not sure if this is true*/
            "attack": Number(summonStats[2]),
            "health": Number(summonStats[3]),
            "text": summonStats[2]
          }
          
          for(var i = 0; i < summonStats[1]; i++){
            minion_value += getValue(virtual_card);
          }
          
          
          return [1, minion_value];
        }
      }
    }
    return [0, 0];
  },

  //We either give a straight buff, or if it's an ability, we simulate an "average" card with that ability, see what the value is, then return it.
  "buff": function(card){
    var minion_value = 0;
    if(card.text !== undefined) {
      if((/[gG]ive/).test(card.text)){
        
        //Extract the data
        var summonStats = card.text.match(/[gG]ive a friendly minion \+([0-9]+)\/\+([0-9]+)*/);
        if(!summonStats || summonStats.length < 3) {
          summonStats = card.text.match(/(Charge|Taunt|Divine Shield|Windfury|Stealth)/) || [];
          //Build the card (Random minion with average stats)
          var virtual_card = {
            "type": "Minion",
            "cost": 3,
            "cards": 1,
            "attack": 3.3,
            "health": 3.3,
            "text": "<b>" + summonStats[1] + "</b>"
          } //What would be the value?
          
          
          return [1, getValue(virtual_card)];
        } else {
            return [1, summonStats[1]*.7 + summonStats[2]*.7]
        }
      }
    }
    return [0, 0];
  }
}

var adjustments = {

    //A custom function to fix some oversights in the regex.
    "abandon": function(card) {
        if(card.name === "Felguard" || 
            card.name === "Millhouse Manastorm" ||
            card.name === "Trion Fording" ||
            card.name === "Ancient Brewmaster" ||
            card.name === "Water Elemental" ||
            card.name === "Khin Tor Mage" ||
            card.name === "Phrophet Velen" ||
            card.name === "Acidic Swamp Ooze" ||
            card.name === "Lord Jaraxxus" ||
            card.name === "Ancient Watcher" ||
            card.name === "King Mukla" ||
            card.name === "Kirin Tor Mage" ||
            card.name === "Southsea Deckhand" ||
            card.name === "Prophet Velen" ||
            card.name === "Bloodsail Raider" ||
            card.name === "Auchenai Soulpriest" ||
            card.name === "Pint-Sized Summoner" ||
            card.name === "Bloodsail Corsair" ||
            card.name === "Hungry Crab" ||
            card.name === "Big Game Hunter" ||
            card.name === "Dread Corsair" ||
            card.name === "Captain Greenskin" ||
            card.name === "Alexstrasza" ||
            card.name === "Onyxia" ||
            card.name === "Arathi Weaponsmith" ||
            card.name === "Tundra Rhino" ||
            /*card.name === "Patient Assassin" ||*/
            card.name === "The Black Knight" ||
            card.name === "Kidnapper" ||
            card.name === "Lightspawn" ||
            card.name === "Faceless Manipulator" ||
            card.name === "Arcane Golem" || 
            card.name === "Gelbin Mekkatorque" ||
            card.name === "Faerie Dragon" ||
            card.name === "Sorcerer's Aprrentice" ||
            card.name === "Youthful Brewmaster" ||
            card.name === "Aldor Peacekeeper" ||
            card.name === "Crazed Alchemist" ||
            card.name === "Harrison Jones" ||
            card.name === "Cruel Taskmaster" ||
            card.name === "Frost Elemental" ||
            card.name === "Abusive Sergeant" ||
            card.name === "Malygos" ||
            card.name === "Cabal Shadow Priest" //||
            /*card.name ===*/) {
            //-------------------------------------
            card.use = false;
        }

        //And some of the cards that we want in.
        if(/*card.name === "Leroy Jenkins"*/false) {
            //--------------------------------------
            card.use = true;
        }
    },
  
  "bonus": function(card) {
      //if(card.name === "
    
  }
}



