//Mention Beast/Murlock and why it's not used.
//Add healing/damage/card draw/summoning/silence - as much as you can.
//Do writeup of all of the things you are using.

var cards;
var doc;


//----------------
function createDocument(){
  doc = SpreadsheetApp.openById("1Dqa5oTZq567NDHJHI6CsqXvcZbwicG1BqkgJKhtoF-4").getActiveSheet();
  addCards();

};

//---------------SOME STUFF---------------------------------------
function addCards(){
  cards = getCards();
  //doc.getRange(2,2).setValue("doggies");
  var r = fill();
  order(3, r[0], r[1]);
};

//Whether or not a card should be included in the distribution.
//Tries its best to filter out cards with unique abilities.
function use(card){
    return (card.text === " ");
    //return !(/([aA][lL][lL]|\b[oO]ther\b|[wW]henever|[eE]nrage|[Pp]ut|[fF]or|\b[Aa]t\b|[Rr]andom|[pP]layer|[mM]inions\b)/).test(card.text);
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
    for(var i in cards){
      row++;//We're going down a row.
        doc.getRange(row, 1).setValue(cards[i].name);
        doc.getRange(row, 2).setValue(cards[i].text);
        cards[i].use = use(cards[i]);

        //Fill in all of the special cases.
        for(var f in adjustments) {
            adjustments[f](cards[i]);
        }

        //Now continue on as if nothing had happened.
        doc.getRange(row, 3).setValue(cards[i].use);//Am I using this card's value?

        //Columns + value
        var value = 0; var column = 3;
        for(var f in costFunctions){
            var fill = costFunctions[f](cards[i]);
            cards[i][f + "_value"] = fill[1];
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
        if(cards[i].use){
            doc.getRange(row, 1, 1, column).setBackgroundRGB(r, g, b);
        } else {
            doc.getRange(row, 1, 1, column).setBackgroundRGB(150, 150, 150);
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
  "Cost": function(card){
   return [card.cost, -card.cost]; 
  }
  
  
}

var adjustments = {

    //A custom function to fix some oversights in the regex.
    "abandon": function(card) {
        if(card.name === "Felguard") {
            //-------------------------------------
            card.use = false;
        }

        //And some of the cards that we want in.
        if(/*card.name === "Leroy Jenkins"*/false) {
            //--------------------------------------
            card.use = true;
        }
      
        //Fix the "Or" cards. Probably overdoing it.
      
    },
  
  "bonus": function(card) {
      //if(card.name === "
    
  }
}



