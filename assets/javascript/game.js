
document.onkeyup = function (event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        var keypress = String.fromCharCode(event.keyCode); //convert keycode to character code
        if (guessed.indexOf(keypress) == -1) { // use an array to check if character was already guessed
            document.getElementById("guesses").innerHTML += (" " + keypress) //add character to guesses
            // some sort of chacter checker for guess to answer
            guessed.push(keypress);
            console.log(guessed);
            checker();
        }
    } // if statements to check if key enter is A - Z, if not nothing happens

    if (event.keyCode === 16) { // when shift is pressed reset game

        guessed = [];
        guess = 10;
        win = 0;
        lost = 0;

        document.getElementById("guesses").innerHTML = ("You've guessed:");
        document.getElementsByClassName("guessLeft")[0].innerHTML = ("Number of Guesses Left: " + guess);
        document.getElementsByClassName("winGame")[0].innerHTML = ("Win: " + win);
        document.getElementsByClassName("lostGame")[0].innerHTML = ("Lost: " + lost);

        console.log("Reset Game");
        console.log("New Answer: " + answer()); // check answer
        console.log("Letter is Currently: " + letter);
    }
}

function answer() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (var i = 0; i < 1; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    // console.log(text + " " + (text.toUpperCase().charCodeAt(0))); //checking computer random letter
    return letter = text; // why does this return replaces a global value?
}

function checker() {
    if (guessed.indexOf(letter) >= 0) {
        guess = 10
        document.getElementById("guesses").innerHTML = ("You've guessed:");
        document.getElementsByClassName("guessLeft")[0].innerHTML = ("Number of Guesses Left: " + guess);
        document.getElementsByClassName("winGame")[0].innerHTML = ("Win: " + (win += 1));
        console.log("Right");
        answer();
        console.log("New Answer: " + answer());
        guessed = [];
    }
    else {
        document.getElementsByClassName("guessLeft")[0].innerHTML = ("Number of Guesses Left: " + (guess -= 1));
        if (guess == 0) {
            guess = 10;
            document.getElementsByClassName("guessLeft")[0].innerHTML = ("Number of Guesses Left: " + guess);
            document.getElementsByClassName("lostGame")[0].innerHTML = ("Lost: " + (lost += 1));
            document.getElementById("guesses").innerHTML = ("You've guessed:");
            answer();
            console.log("New Answer: " + answer());
            guessed = [];
        }
    }
}


var guessed = []; // array to check if key was already pressed

var guess = 10;
var win = 0;
var lost = 0;

var letter = answer();

console.log("Initial Answer: " + letter);