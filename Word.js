var Letter = require("./Letter.js");

//build an object array for the Word constructor
function Word (answer){
    this.objArray = [];

    //make a loop to go through every letter guessed
    for (var i = 0; i < answer.length; i++){
        //create new letter variable that pushes letters into objArray 
        var letter = new Letter(answer[i]);
        this.objArray.push(letter);
    }

    //write a function that will log the data in the terminal 
    this.log = function (){
        answerLog ="";
        for (var i = 0; i < this.objArray.length; i++){
            //concatenate characters and underscores
            answerLog += this.objArray[i] + " ";
        }
        console.log(answerLog + "\n=================================");
    };

    //write a function that loops through the objArray and calls the choice function from the Letter.js
    this.userGuess = function(input){
        for (var i = 0; i < this.objArray.length; i++){
            this.objArray[i].choice(input);
        }
    };
}

//export to be used index.js file
module.exports = Word;