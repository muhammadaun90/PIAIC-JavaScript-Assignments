/* Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

If the alien is green, print a message that the player earned 5 points.
If the alien is yellow, print a message that the player earned 10 points.
If the alien is red, print a message that the player earned 15 points
Write three versions of this program, making sure each message is printed for the appropriate color alien. */

let alien_color = ['green', 'yellow', 'red'];
let userInput = prompt('Enter alien color');
if(userInput == 'green'){
    console.log('The player earned 5 points');
}
else if(userInput == 'yellow'){
    console.log('The player earned 10 points');
}
else if(userInput == 'red'){
    console.log('The player earned 15 points');
}
else{
    console.log('Color is not available');
}