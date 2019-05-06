var Word = require("./Word.js");
var inquirer = require("inquirer");

//array of all the letters in alphabet
var letterArray = "abcdefghijklmnopqrstuvwxyz";

//array of words that can be guessed 
var schoolSubjects = [
    "geography",
    "biology",
    "physics",
    "chemistry",
    "algebra",
    "geometry",
    "history",
    "calculus",
];

//choose a random subject from the schoolSubject array that will become the word for the user to guess
var randomSubject = Math.floor(Math.random() * schoolSubjects.length);
var randomWord = schoolSubjects[randomSubject];

//pass the randomWord to the Word.js constructor
var selectedWord = new Word(randomWord);
var requireNewWord = false;

//arrays to hold the guesses
var incorrectLetters = [];
var correctLetters = [];

//allow 10 guesses
var guessesLeft = 10;

//create a function dependent of the Word.js that chooses the word for the user to guess
function logic(){
    if (requireNewWord) {
        var randomSubject = Math.floor(Math.random() * schoolSubjects.length);
        var randomWord = schoolSubjects[randomSubject];

        selectedWord = new Word (randomWord);
        requireNewWord = false;
    }

    //create an array that holds the letters of the selectedWord
    var solution = [];
    selectedWord.objArray.forEach(solutionCheck) // remember to create solutionCheck function 

    //create an inquirer prompt for the user to pick a letter
    if (solution.includes(false)){
        inquirer.prompt([
            {
                type: "input",
                message: "Choose any letter from the alphabet",
                name: "userinput"
            }
            
        ]).then(function(input){

            //check the user's input
            if (!letterArray.includes(input.userinput) || input.userinput.length > 1) {
                console.log("\nPlease try again!\n");
                logic();
            } else {
                if (incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === "") {
                console.log("\nYou already guessed that letter!\n");
                logic()
            } else {
                var  letterCheckArray = [];
                selectedWord.userGuess(input.userinput);
                selectedWord.objArray.forEach(letterCheck); //remember to create the letterCheck function

                if (letterCheckArray.join("") === solution.join("")) {
                    console.log("\nIncorrect\n");

                    incorrectLetters.push(input.userinput);
                    guessesLeft--;
                } else {
                    console.log("\nCorrect!\n");
                    correctLetters.push(input.userinput);
                }

                selectedWord.log();

                //print the guesses left and letters guessed
                console.log("Guesses Left: " + guessesLeft + "\n");
                console.log("Letters Guessed: " + incorrectLetters.join(" ") + "\n");

                //run the logic function until the guesses reach 0
                if (guessesLeft > 0){
                    logic();
                } else {
                    console.log("Sorry, you are out of guesses!\n");
                    restartGame();
                }
                function letterCheck(key) {
                    letterCheckArray.push(key.guessed);
                }
              }
            }
        });
    } else {
        console.log("YOU GUESSED IT!\n");
        restartGame();
    }
    function solutionCheck(key) {
        solution.push(key.guessed);
    }
}

//create a function to restart the game
function restartGame(){
    //use an inquirer prompt to give the user options
    inquirer.prompt ([
        {
            type: "list",
            message: "Would you like to: ",
            choices: ["play again?", "exit?"],
            name: "restart"
        }
    ])
    .then(function(input){
        if (input.restart === "play again?") {
            requireNewWord = true;
            incorrectLetters = [];
            correctLetters = [];
            guessesLeft= 10;
            logic();
        } else {
            return;
        }
    });
}
//call the logic function
logic();




