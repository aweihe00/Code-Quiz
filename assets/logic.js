document.addEventListener("DOMContentLoaded", function (event) {  //waits for page load
    //DOM targeting elements
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
    // var answerBtns = document.getElementById("answerArea");
    var clearBtn = document.getElementById("clearBtn");
    var clearBtnArea = document.getElementById("clearBtnArea");

    //Question Answers
    var a = document.getElementById("AnswerA");
    var b = document.getElementById("AnswerB");
    var c = document.getElementById("AnswerC");
    var d = document.getElementById("AnswerD");
    //Answer buttons
    var BtnA = document.getElementById("AnswerBtnA");
    var BtnB = document.getElementById("AnswerBtnB");
    var BtnC = document.getElementById("AnswerBtnC");
    var BtnD = document.getElementById("AnswerBtnD");

    //variable stack - noramlly wouldn't use globals but it's a small application (and I'm novice)
    var problemTime = 15;    //time per question and points factor
    var penalty = 5;        //time penalty for a wrong answer
    //Modify the above to change the quiz dynamics
    
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