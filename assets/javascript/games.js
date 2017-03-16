/****************************************************************
 James Larkin

 Trivia game
 ***********************************************************************/
/*

 1. Create a GitHub repo called `TriviaGame`, then clone the repo to your computer.

 2. Create a file inside of the `TriviaGame` folder called `index.html`. This is where you'll mark up all of your HTML.
 3. Don't forget to include a script tag with the jQuery library.

 4. Create a folder inside of the `TriviaGame` folder called `assets`.
 5. Inside `assets`, create three folders: `css`, `javascript`, `images`

 * In your `css` folder, create a `style.css` file.
 * In your `javascript` folder, create an `app.js` file; here you'll write all of your JavaScript and jQuery.
 * In your `images` folder, save whatever images you'd like to use in this exercise.

 6. Choose a game to build from your options below.

 ### Option One: Basic Quiz (Timed Form)

 ![Basic](Images/1-basic.jpg)

 **[Click Here to Watch the Demo](basic-trivia-demo.mov)**.

 * You'll create a trivia form with multiple choice or true/false options (your choice).

 * The player will have a limited amount of time to finish the quiz.

 * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

 * Don't let the player pick more than one answer per question.

 * Don't forget to include a countdown timer.



 /*
 -----------------------------------------------------------------------------------------
 Global Variables
 */


var timer = 30;

var questionCounter = 0;
var selecterAnswer;
var theClock;
var correctAns = 0;
var incorrectAns = 0;


//-------------------------------------------------------------------------------------------



function myFunction() {
    var x = document.getElementById('myDIV');
    if (x.style.display === 'none') {
        x.style.display = 'block';
    } else {
        x.style.display = 'none';
    }
}


$(document).ready(function() {

    $('#btnGetValue').click(function() {
        var selValue = $('input[name=rbnNumber]:checked').val();
        $('p').html('<br/>Selected Radio Button Value is : <b>' + selValue + '</b>');
    });

    myFunction()






    $("body").on("click", ".reset-button", function(event){

        resetGame();
    }); // Closes reset-button click




    function timer() {
        theClock = setInterval(thirtySeconds, 1000);
        function thirtySeconds() {
            if (counter === 0) {
                clearInterval(theClock);
                generateLossDueToTimeOut();
            }
            if (counter > 0) {
                counter--;
            }
            $(".timer").html(counter);
        }
    }

    function win()
    {
        alert("You won!");
        wins++;
        $('#wins').html(wins);
        reset();
    }

    function lose()
    {
        alert ("You lose!");
        losses++;
        $('#losses').html(losses);
        reset()
    }


    function resetGame() {
        questionCounter = 0;
        correctTally = 0;
        incorrectTally = 0;
        unansweredTally = 0;
        counter = 30;
        generateHTML();
        timer();
    }

})