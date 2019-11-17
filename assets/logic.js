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
    instructions.textContent = ("Your score is the number of correct answers times "+problemTime+", plus the time left. Be careful - wrong answers will also subtract "+penalty+" seconds from the time remaining!");

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