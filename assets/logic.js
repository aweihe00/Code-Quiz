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
    var aBtn = document.getElementById("AnswerBtnA");
    var bBtn = document.getElementById("AnswerBtnB");
    var cBtn = document.getElementById("AnswerBtnC");
    var dBtn = document.getElementById("AnswerBtnD");