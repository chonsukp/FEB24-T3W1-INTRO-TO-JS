console.log("Dice roller file is loaded!");

// close is an order of operation
// closure because rollDice is a funtion
console.log(rollDice(20));
// not a closure because this is a const variable (arrow function)
console.log(rollD20());


// function that rolls a dice and the dice size is a parameter
// generic dice roller function



/**
 * Example JSDoc comment goes here
 *
 * @param {number} diceSize Size of the dice. This is the maximum number that you can roll. 
 * @returns {number} 
 */
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

    // console.log(floorDiceResult, ceilDiceResult);
    return floorDiceResult;
}

// rollDice(); // dice size is 6 (default value)
// rollDice(20);
// rollDice(1000);


/**
 * Function that rolls a dice and the dice is a 6-sided dice    
 * @returns {number}
 */
const rollD6 = () => rollDice(6);

console.log("rollD6 function result is " + rollD6());


/**
 * Function that rolls a dice and the dice is a 20-sided dice
 * @returns 
 */
const rollD20 = () => {
    // let diceResult = rollDice(20);
    // return diceResult;

    return rollDice(20);
}

let superAwesomeDiceResult = rollD20();
console.log("Super awesome dice result is: " + superAwesomeDiceResult);

// declare without assignment 
let diceResults;

// let (local), var (default global), const 

/**
 * Roll two dice and return the highest result.
 * @returns {number} 
 */
function rollD20WithAdvantage(){
    let tempDiceResults = [
        rollD20(),
        rollD20()
    ];

    let highestRoll = 0;

    tempDiceResults.forEach((individualResult) => {
        if (highestRoll < individualResult){
            highestRoll = individualResult;
        }
    })

    console.log(tempDiceResults);

    return highestRoll;     
}

console.log("Rolling 2 D20 with advantage: " + rollD20WithAdvantage());

// console.log("First roll in advantage roll is: " + diceResults[0]);

// console.log(tempDiceResults);

// var and let can be changed after declaration
let diceResultChangable = rollD20();
diceResultChangable = rollD20();

// const can't be changed after declaration
const diceResultConstant = rollD20();
diceResultConstant = rollD20();

