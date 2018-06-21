// with Dylan F

console.log("Please think of a number between 1 and 100 (inclusive). \nI will try to guess it. \n"); 
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min; 
}
let currentGuess = randomNumber(1,100)
let newMin = 1
let newMax = 100
console.log("Is it... " + currentGuess + "?")
let numberOfTries = 1;
loop();
function loop() {
    console.log("Enter Y for Yes, H if it's higher than " + currentGuess + ", L if it's lower than " + currentGuess + ":")
    process.stdin.once('data', (response) => {
        if (response.toString().trim() === "H") {
            newMin = Math.max(newMin, currentGuess + 1)
            currentGuess = randomNumber(newMin, newMax)
            console.log("Is it... " + currentGuess + "?");
        }
        else if (response.toString().trim() === "L") {
            newMax = Math.min(newMax, currentGuess - 1)
            currentGuess = randomNumber(newMin, newMax)
            console.log("Is it... " + currentGuess + "?");
        } 
        else if (response.toString().trim() === "Y") {
            console.log("Your number was " + currentGuess + "!\nI guessed it in " + numberOfTries + " tries.")
            process.exit();
        }
        numberOfTries = numberOfTries + 1;
        loop();
    });
}