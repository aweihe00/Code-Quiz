document.addEventListener("DOMContentLoaded", function (event) {  //waits for page to load
    //targeting DOM elements
    var startBtn = document.getElementById("startButton");

    var initCard = document.getElementById("initalCard");
    var questCard = document.getElementById("questionCard");
    var timerDisp = document.getElementById("timer");
    var alert = document.getElementById("alert");
    var footer = document.getElementById("footer");
    var scoreLink = document.getElementById("scoreLink");
    var scoreCard = document.getElementById("scoreCard");
    var highScoreList = document.querySelector("#highScore-list");
    var instructions = document.getElementById("instructions");


    var questText = document.getElementById("questionPrompt");
    var answerBtns = document.getElementById("answerArea");
    var clearBtn = document.getElementById("clearBtn");
    var clearBtnArea = document.getElementById("clearBtnArea");

    //Answer texts
    var a = document.getElementById("AnswerA");
    var b = document.getElementById("AnswerB");
    var c = document.getElementById("AnswerC");   
    var d = document.getElementById("AnswerD");
    //Answer buttons
    var aBtn = document.getElementById("AnswerBtnA");
    var bBtn = document.getElementById("AnswerBtnB");
    var cBtn = document.getElementById("AnswerBtnC");
    var dBtn = document.getElementById("AnswerBtnD");

    //time per question and points factor
    var problemTime = 15;    
    //time penalty for a wrong answer
    var penalty = 5; 

    var iter = 0;
    var timer = 75;
    var endTime = 0;
    var correct = 0;
    var wrong = 0;
    var user = "";
    var score = 0;
    var newQuestions = questions;
    var scoreList = [];
    var maxScore = 0;
    var scoreShown = false;

    //quiz info on how scores are calc
    instructions.textContent = ("Your score is the number of correct answers x"+problemTime+", plus the time left. Be careful, wrong answers will subtract "+penalty+" seconds from the time left over!");

    //Randomize array element order in-place.
    function shuffle(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }

    //card content resets to the next questions
    function setQuestion(index) {
        questText.textContent = questions[index].title;
        let choiceArray = questions[index].choices
        choiceArray = shuffle(choiceArray)      //shuffling answer options

        a.textContent = choiceArray[0];
        b.textContent = choiceArray[1];
        c.textContent = choiceArray[2];
        d.textContent = choiceArray[3];
    }

    //adding event listeners to buttons
    startBtn.addEventListener("click", function () {
        initCard.style.display = "none";
        questCard.style.display = "block";
        beginGame();
    });

      //score list
      scoreLink.addEventListener("click", function (event) {
        event.preventDefault();
        if (scoreShown) {
            scoreShown = false;
            scoreCard.style.display = "none";
        } else {
            scoreShown = true;
            scoreCard.style.display = "block";
        }
        scoreSet();
    });

    //set scores hidden by default
    scoreCard.style.display = "none";

    //clearing saved scores
    clearBtn.addEventListener("click", function (event) {
        event.preventDefault();
        clearScores();
    });

    //assigning listeners to answer buttons
    var addBtns = document.getElementsByClassName("answerBtn");
    for (var i = 0; i < addBtns.length; i++) {
        addBtns[i].addEventListener("click", userChoice, false);
    }

    //runs initial scoreSet in case there is saved data
    scoreSet();

    //when the user selects an answer this checks if it's correct
    function userChoice(event) {
        event.preventDefault();

        let userAnswer = "";
        userAnswer = event.target.nextElementSibling.textContent;
        // console.log(userAnswer);
        if (userAnswer === newQuestions[iter].answer) {
            console.log("win");
            console.log(iter);
            correct++;
            footer.textContent = "Right!"
        } else {
            console.log("lose");
            console.log(iter);
            timer -= penalty; //5 seconds (or penalty) lost for wrong answer
            wrong++;
            footer.textContent = "Wrong!"
        }
        if (iter < (newQuestions.length - 1)) {
            iter++;
            setQuestion(iter);
        } else if (iter === (newQuestions.length - 1)) {  //kicks user out of game but doesn't reset question to undefined
            iter++;
        }

    }

    //building scorecard 
    function scoreSet() {
        scoreList = JSON.parse(localStorage.getItem("scores") || "[]");
        highScoreList.innerHTML = "";
        console.log(scoreList);

        scoreList.sort(function (a, b) {  //sorting scores from highest to lowest
            return parseInt(b.score) - parseInt(a.score);  //if positive, sorts higher, negative, sorts lower
        });
        console.log(scoreList);

        if (scoreList.length === 0) {  //checking for stored values
            clearBtnArea.style.display = "none";
            alert.textContent = "Lets see what you got!";
        } else {
            clearBtnArea.style.display = "block";
            maxScore = scoreList[0].score; //current high scores
            alert.textContent = "Previous high score: " + maxScore;
        }
        //building score list
        for (let j = 0; j < scoreList.length; j++) {
            var scoreDisp = scoreList[j].user + ": " + scoreList[j].score;

            var li = document.createElement("li");
            li.textContent = scoreDisp;
            highScoreList.appendChild(li);
        }
    }

        //clearing saved scores and storage
    function clearScores() {
        scoreList = [];
        localStorage.setItem("scores", JSON.stringify(scoreList));
        scoreSet();

    }

    //ending game, caclulating and storing scores
    function endGame() {
        clearInterval(interval);
        endTime = timer;
        timer = 0;
        timerDisp.textContent = timer;
        console.log("wins " + correct + ", Losses " + wrong + ", " + endTime);
        initCard.style.display = "block";
        questCard.style.display = "none";

        let highscore = (correct * problemTime + endTime);  //score formula
        let userInput = prompt(`Your score is ${correct * problemTime + endTime}. Enter your initials:`);
        if (userInput === null) {  //prevents saving nulls if no user input
            userInput = "";
        }
        scoreList = JSON.parse(localStorage.getItem("scores") || "[]");
        scoreList.push({ score: highscore, user: userInput });

        localStorage.setItem("scores", JSON.stringify(scoreList));
        scoreSet();

        footer.textContent = "Going to better your score..eh?";
    }

   // starting game, initializing counters and intervals
   function beginGame() {
    correct = 0;
    wrong = 0;
    iter = 0;
    timer = questions.length * problemTime;  //initial timer length set

    newQuestions = shuffle(newQuestions);   //questions randomly arranged

    setQuestion(iter);

    interval = setInterval(function () {   //timer initialized

        timerDisp.textContent = timer;
        timer--;

        if (timer < 0) {  //if timer runs out, end game
            endGame();

        } else if (iter >= newQuestions.length) {   //if questions run out, end game
            endGame();
        }


    }, 1000);

}


}); 
