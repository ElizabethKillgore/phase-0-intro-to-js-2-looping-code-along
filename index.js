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
