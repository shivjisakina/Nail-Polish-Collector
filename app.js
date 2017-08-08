$(document).ready(function () {


    // GLOBAL VARIABLES
    // =================================================================

    var polish = {

        purple: {
            name: "purple",
            value: 0
        },
        green: {
            name: "green",
            value: 0
        },
        maroon: {
            name: "maroon",
            value: 0
        },
        white: {
            name: "white",
            value: 0
        }

    }

    // Setting everything to 0 to start
    var startScore = 0;
    var targetScore = 0;

    // Counting wins and losses
    var wins = 0;
    var losses = 0;

// FUNCTIONS
// =================================================================

    // Getting random numbers
    var getNumber = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    // Function to start, and restart the game
    var startGame = function () {

        // Resetting current score
        currentScore = 0;

        // Set a new Target Score (between 11 and 111)
        targetScore = getNumber(11, 111);

        // Set different random values for each of the colors (between 1 and 12)
        polish.purple.value = getNumber(1, 12);
        polish.green.value = getNumber(1, 12);
        polish.maroon.value = getNumber(1, 12);
        polish.white.value = getNumber(1, 12);


        // Changing the HTML to show changes
        $("#your-score").html(currentScore)
        $("#target-score").html(targetScore);

        // Console logging
        console.log("Target Score:" + targetScore)
        console.log("purple: " + polish.purple.value + " , Green " + polish.green.value + " , Maroon " + polish.maroon.value + " , White " + polish.white.value)

    }

    startGame()




})