var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var guesses = 0;
var hits = 0;
var isSunk = false;


// LOOP isSunk == false {
//   GET alert("Enter a number between 0 and 6");
//   IF valid number
//     TELL user to enter valid input
//   ELSE
//     ADD one to guesses
//     IF user guess a matched location
//       ADD one to number of hits
//       IF number of hits is 3
//       TELL user "You sank my battleship!"
//     END IF
//   END ELSE
// END LOOP
//
// TELL user stats

while (isSunk == false) {
  guess = prompt("Ready, aim, fire! (enter a number from 0-6):");
  if (guess < 0 || guess > 6) {
    alert("Please enter a valid cell number!");
  } else {
    guesses = guesses + 1;

    if (guess == location1 || guess == location2 || guess == location3) {
      alert("Hit!");
      hits = hits + 1;
      if (hits == 3) {
        isSunk = true;
        alert("You sank my battleship!");
      }
    } else {
        alert("Miss!");
    }
  }
}

var stats = "You took " + guesses + " guesses to sink the battleship, " +
            "which means your shooting accuracy was " + (3/guesses);
alert(stats);
