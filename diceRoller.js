
console.log("Dice roller file is loaded!");

// function that rolls a dice and the dice size is a parameter
// generic dice roller function
function rollDice(diceSize = 6) {
    console.log("Dice rolling function has been called with a dice size of " + diceSize);

    // generating a random number between 0 and 1 
    // multiplying number by dicesize so that it's between 0 and dice size;
    //                  multiplied number is between 0 and (diceSize -1)
    //                  rg. diceSize of 20 is 0-19 
    // round the diceResult down to nearest whole number 
    // add one  to prevent it from being 0 
    // diceResult is now anything between 1 and 20 inclusive

    // let diceResult = Math.floor(Math.random() * diceSize) + 1;

    let diceResult = Math.random() * diceSize;

    let floorDiceResult = Math.floor(diceResult) + 1;
    let ceilDiceResult = Math.ceil(diceResult);

    console.log(floorDiceResult, ceilDiceResult);
}

// rollDice(); // dice size is 6 (default value)
rollDice(20);
// rollDice(1000);


// function that rolls a dice and the dice is a 6-sided dice
// specific dice roller function that calls the generic function



// function that rolls a dice and the dice is a 20-sided dice
// specific dice roller function that calls the generic function