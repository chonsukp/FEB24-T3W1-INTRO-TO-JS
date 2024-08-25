console.log("Some interator stuff is happening");


// for loop 
let fruitsChoices = [
    "oranges",
    "banana",
    "mangoes"
];

// most optimised loop to use (better performance)
for (let index = 0; index < fruitsChoices.length; index++) {
    const element = fruitsChoices[index];
    console.log(element);
    break;
}

// start at 0, until 0 reaches 10, do a thing and increase 0 up by 1 every time we do a thing
for (let i = 0; i <= 10; i++) {
    console.log(`This is the ${i} interation of the loop.`);
}

// convenience loop but slower
fruitsChoices.forEach(element => {
    element = element.toLocaleUpperCase();
    console.log(element + " from the forEach loop");
});
console.log(fruitsChoices);


// for of loop
for (const fruit of fruitsChoices) {
    console.log(fruit);
}

// forEach interates over existing array and returns nothing
// map iterates over existing array and returns a new array
let fruitChoicesAllCaps = fruitsChoices.map((whatever) => {
    return whatever.toLocaleLowerCase();
})

console.log(fruitChoicesAllCaps);
console.log(fruitsChoices);

let nonCitrusFruits = fruitsChoices.filter((fruit) => {
    // if one of these two conditions is true, the fruit is good!
    // return fruit != "oranges" || fruit != "lemons"
    // NO!
    // if both of these conditions is true, the fruit is good! 
    // return fruit != "oranges" && fruit != "lemons"
    // YES!
    return fruit != "oranges" && fruit != "lemons"
});
console.log(nonCitrusFruits);

let myFavouriteFruitisAvailable = fruitsChoices.includes("Watermelon");
console.log(`My favourite fruit is available: ${myFavouriteFruitisAvailable}`);


// //  while checks for condition, and then do the block of code
// while (fruitsChoices.length > 0 ) {
//     console.log(fruitsChoices);
// }

// // dowhile do the block of code, and then check the conditino
// do {
//     console.log(fruitsChoices);
// } while (condition);