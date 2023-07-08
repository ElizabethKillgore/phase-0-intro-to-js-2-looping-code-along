// Code your solutions in this file
const cards = [];

function writeCards(arrayOfStringNames, surprise) {
    for (let i = 0; i < arrayOfStringNames.length; i++) {
    console.log(`Thank you, ${arrayOfStringNames[i]}, for the wonderful surprise gift!`);
    cards.push(`Thank you, ${arrayOfStringNames[i]}, for the wonderful surprise gift!`)
  };
return cards;
}



function countDown(number) {

    while (number >= 0) {
        console.log(number--)
    }
}
///

//for (let age = 30; age < 40; age++) {
    //console.log(`I'm ${age} years old.  Happy birthday to me!`);
    
//}

//const gifts = ["teddy bear", "drone", "doll"]

//function wrapGifts(gifts) {
    //for (let i = 0; i < gifts.length; i++) {
        //console.log(`Wrapped ${gifts[i]} and added a bow!`);
    
   // }
    //return gifts;
    //}

//wrapGifts(gifts);
