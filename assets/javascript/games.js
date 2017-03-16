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




var intervalId
var selecterAnswer;
var time=90;
var correctAns = 0;
var incorrectAns = 0;


//-------------------------------------------------------------------------------------------






$(document).ready(function() {



    $("#myDIV").hide();
    $("#begin").click(function(){
        $("#myDIV").toggle();

        start()
    });




    $('#btnGetValue').click(function() {
        var selValue1 = $('input[name=question1]:checked').val();
        var selValue2 = $('input[name=question2]:checked').val();
        var selValue3 = $('input[name=question3]:checked').val();
        var selValue4 = $('input[name=question4]:checked').val();
        console.log(selValue1);
        console.log(selValue2);
        console.log(selValue3);
        console.log(selValue4);

        if (selValue1 === "3") {
            correctAns++;
        } else{
            incorrectAns++;
        }
        if (selValue2==="2"){
            correctAns++;
        }else {
            incorrectAns++;
        }
        if (selValue3==="1"){
            correctAns++;
        }else {
            incorrectAns++;
        }
        if (selValue4==="3"){
            correctAns++;
        }else {
            incorrectAns++;
        }

        $('.correct').html("Correct:"+correctAns+"");
        $('.incorrect').html("Incorrect:"+incorrectAns+"");

    });




    $("#reset").click(function reset() {

        correctAns = 0;
        incorrectAns = 0;
        time = 90;
        clearInterval(intervalId);
        $("#display").html("00:00");
        $(".correct").html("Correct:" + "0");
        $(".incorrect").html("Incorrect:" + "0");
        $("#myDIV").hide();
    });


    function count() {
        var converted = timeConverter(time);
        time--;
        $("#display").html(converted);
    }

    function start() {

        // DONE: Use setInterval to start the count here.
        intervalId = setInterval(count, 1000);
    }

    function timeConverter(t) {

        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    }
})