# Code-Quiz
Unit 04 Web APIs Code-Quiz HW

As you proceed in your career as a web developer, you will probably be asked to complete a coding assessment. These assessments are typically a combination of multiple-choice questions and interactive challenges. In this homework assignment, your challenge is to build a code quiz with multiple-choice questions.

Link to deployed site https://aweihe00.github.io/Code-Quiz/

Instructions
From scratch, build a timer-based quiz application that stores high scores client-side.

Play proceeds as follows:

The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in localStorage.

Your application should also be responsive, ensuring that it adapts to multiple screen sizes.

![Capture](https://user-images.githubusercontent.com/56567819/71752025-26fca700-2e43-11ea-859f-7ea15f48621e.PNG)

Scoring is caluclated as: (number of questions correct) X ([const]time set per question) + (time remaining)

The 'High Scores' button toggles the display card of scores.

Pages include:

logic.js (main code)

questions.js (array with questions)

style.css (basic modifications) 

The DOG Quiz (framework & index.html)
