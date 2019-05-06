//constructor function used to define user's letter
function Letter (value){
    this.letter = value;
    this.guessed = false;

    //return the value as a string
    this.toString = function (){
        //check the value of the letter
        if (this.letter === " "){
            this.guessed = true;
            return " ";
        } else {
            //return an underscore if the letter guessed is incorrect
            if (this.guessed === false) {
                return "_";
            } else {
                return this.letter;
            }
        }
    };

    //return the letter if guessed is correct
    this.choice = function(choice){
        if (choice === this.letter){
            this.guessed = true;
        }
    };
}

//export to be used in Word.js file
module.exports = Letter;




