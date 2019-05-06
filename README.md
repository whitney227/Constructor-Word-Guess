# Constructor Word Guess:
### A command-line game similar to hangman that prompts an user to guess a randomly selected word. 

## Directions
In your terminal, cd into the folder with the following JavaScript files:
* index.js
* Letter.js
* Word.js 

In order to install the needed npm packages for the node commands, run the following in your terminal:
```
npm install
```
To begin the command-line prompts, run
```
node index.js
```
You should be prompted with a question like this:

![node prompt](/node-prompt.png)


The user will need to enter a letter from the alphabet before receiving further prompts.

If the user guesses correctly, the letter guessed will appear and the remaining letters will be left blank with an underscore.  The user may choose another letter until all the blanks have been filled.

If the user guesses incorrectly, they will be prompted to choose another letter; however the user has a limited amount of incorrect guesses before the game ends.

### A video demonstration of the game and command-line prompts can be found here:
https://drive.google.com/file/d/1jGj9MZtpl3RgAuwP5C1Q6r8xzCEHzqt-/view

## API Credits
* Inquirer.js : a npm package

