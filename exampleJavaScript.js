console.log("Hello World");

// if condition
let someMessage = "Bananas";

if (someMessage) {
    console.log("Conditional log");
}
// loose equality
if (someMessage == "oranges") {
    console.log("We have oranges");
}

// strick equality 
let someNumberMessage = "10";

if (someNumberMessage === 10) {
    console.log("We have a number 10!")
}

// greater than or equal to
if (someNumberMessage >= 5) {
    console.log("Numer is greater than 5");
}

// ternary / simplified if else
let someCoolMessage = someMessage === "oranges" ? someMessage.substring(0,2).toLocaleUpperCase() : "Default message here";
//                                                "Bananas"  .  "ba"        .      "BA"
console.log(someCoolMessage);

// block scope - 'let' keyword is for local scope
if (someMessage == "oranges") {
    let someCoolMessage = someMessage.substring(0,2).toLocaleUpperCase() + "inside the if statement";
    console.log(someCoolMessage);
} else {
    let someCoolMessage = "Default message here inside the else statement ";
    console.log(someCoolMessage, someCoolMessage, someCoolMessage);
}

console.log("Some cool message is now: " + someCoolMessage);

// swith case 
let fruitChoices = ["oranges", "bananas", "mangoes"];

let fruitChoicesAsObject = {
    oranages: "oranges",
    bananas: "bananas",
    mangoes: "mangoes"
}

let fruit = fruitChoicesAsObject.bananas;

switch (fruit) {
    case fruitChoicesAsObject.bananas:
        console.log("We have bananas!");
        break;
    case fruitChoicesAsObject.oranges:
        console.log("We have oranges!");
        break;
    default:
        console.log("We have some exotic fruits!")
        break;
}

someMessage = "bananas";
switch (someMessage) {
    case "oranges":
    console.log("We have oranges");
    break;
    case "bananas":
    console.log("We have bananas");
    break;
    case "magoes":
    console.log("We have mangoes");
    break;
    default:
    console.log("We some exotic fruits");
    break;
}

// short circut 
someCoolMessage = false;

// AND &&
let someShortCircuitLogicValue = (someMessage && someCoolMessage) && "Super cool short circuit logic string"; 
console.log(someShortCircuitLogicValue);

// OR ||
let someOrCircuitMessage = someMessage || someCoolMessage || "super cool OR operator logic string"
//                           "banana"          false                       ^^^
console.log(someOrCircuitMessage);


let newUser = {
    username: "something",
    bio: ""
}

console.log("Saving newUser to Database, doing all pre-save checks now...");

let userToSave = {
    username: newUser.username,
    bio: newUser.bio || "Default bio here"
}

console.log("Pretend we've written this to the database:");
console.log(userToSave);