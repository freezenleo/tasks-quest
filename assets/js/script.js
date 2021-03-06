var timerEl = document.querySelector("#countdown");
var questionBlockEl = document.querySelector("#question-block");

var timeInterval;
// set time to 90 seconds
var timeLeft = 90;


function countdown() {
    if (timeLeft > 0) {
        // set the 'textContent' of 'timerEl' to show the remaining time
        timerEl.textContent = "Time " + timeLeft;
        // decrement 'timeLeft' by 1
        timeLeft--;
    }
}

// create question 1
var question1 = function () {
    var penalty = function () {
        timeLeft = timeLeft - 5;
        alert("Incorrect");
        questionEl.remove();
        question2();
    }

    //create question container div block
    var questionEl = document.createElement("div");
    questionEl.className = "question-ans";
    questionBlockEl.appendChild(questionEl);

    //create question 
    var question1 = document.createElement("h2");
    question1.className = "question-para";
    question1.textContent = "Commonly used data types DO NOT include:"
    questionEl.appendChild(question1);

    // create answer container
    var answerContainer = document.createElement("div")
    answerContainer.className = "answer";
    questionEl.appendChild(answerContainer);

    //create answer 1
    var answer1 = document.createElement("button");
    answer1.className = "answer-one";
    answer1.textContent = "1. string";
    answerContainer.appendChild(answer1);
    answer1.addEventListener("click", function (event) {
        penalty();
    })

    // create answer 2
    var answer2 = document.createElement("button");
    answer2.className = "answer-two";
    answer2.textContent = "2. alerts";
    answerContainer.appendChild(answer2);
    answer2.addEventListener("click", function (event) {
        alert("Correct");
        questionEl.remove();
        question2();
    })

    // create answer 3
    var answer3 = document.createElement("button");
    answer3.className = "answer-three";
    answer3.textContent = "3. booleans";
    answerContainer.appendChild(answer3);
    answer3.addEventListener("click", function (event) {
        penalty();
    })

    //create answer 4
    var answer4 = document.createElement("button");
    answer4.className = "answer-four";
    answer4.textContent = "4. numbers";
    answerContainer.appendChild(answer4);
    answer4.addEventListener("click", function (event) {
        penalty();
    })
}

// create question 2
var question2 = function () {
    var penalty = function () {
        timeLeft = timeLeft - 5;
        alert("Incorrect");
        questionEl.remove();
        question3();
    }

    //create question container div block
    var questionEl = document.createElement("div");
    questionEl.className = "question-ans";
    questionBlockEl.appendChild(questionEl);

    //create question 
    var question1 = document.createElement("h2");
    question1.className = "question-para";
    question1.textContent = "How do we add element to html using javascript?"
    questionEl.appendChild(question1);

    // create answer container
    var answerContainer = document.createElement("div")
    answerContainer.className = "answer";
    questionEl.appendChild(answerContainer);

    //create answer 1
    var answer1 = document.createElement("button");
    answer1.className = "answer-one";
    answer1.textContent = "1. className";
    answerContainer.appendChild(answer1);
    answer1.addEventListener("click", function (event) {
        penalty();
    })

    // create answer 2
    var answer2 = document.createElement("button");
    answer2.className = "answer-two";
    answer2.textContent = "2. createElement";
    answerContainer.appendChild(answer2);
    answer2.addEventListener("click", function (event) {
        alert("Correct");
        questionEl.remove();
        question3();
    })

    // create answer 3
    var answer3 = document.createElement("button");
    answer3.className = "answer-three";
    answer3.textContent = "3. appendChild";
    answerContainer.appendChild(answer3);
    answer3.addEventListener("click", function (event) {
        penalty();
    })

    //create answer 4
    var answer4 = document.createElement("button");
    answer4.className = "answer-four";
    answer4.textContent = "4. addEventListener";
    answerContainer.appendChild(answer4);
    answer4.addEventListener("click", function (event) {
        penalty();
    })
}

// create question 3
var question3 = function () {
    var penalty = function () {
        timeLeft = timeLeft - 5;
        alert("Incorrect");
        questionEl.remove();
        question4();
    }

    //create question container div block
    var questionEl = document.createElement("div");
    questionEl.className = "question-ans";
    questionBlockEl.appendChild(questionEl);

    //create question 
    var question1 = document.createElement("h2");
    question1.className = "question-para";
    question1.textContent = "The condition in an if/else statement is enclosed within ___."
    questionEl.appendChild(question1);

    // create answer container
    var answerContainer = document.createElement("div")
    answerContainer.className = "answer";
    questionEl.appendChild(answerContainer);

    //create answer 1
    var answer1 = document.createElement("button");
    answer1.className = "answer-one";
    answer1.textContent = "1. quotes";
    answerContainer.appendChild(answer1);
    answer1.addEventListener("click", function (event) {
        penalty();
    })

    // create answer 2
    var answer2 = document.createElement("button");
    answer2.className = "answer-two";
    answer2.textContent = "2. parentheses";
    answerContainer.appendChild(answer2);
    answer2.addEventListener("click", function (event) {
        alert("Correct");
        questionEl.remove();
        question4();
    })

    // create answer 3
    var answer3 = document.createElement("button");
    answer3.className = "answer-three";
    answer3.textContent = "3. curly brackets";
    answerContainer.appendChild(answer3);
    answer3.addEventListener("click", function (event) {
        penalty();
    })

    //create answer 4
    var answer4 = document.createElement("button");
    answer4.className = "answer-four";
    answer4.textContent = "4. square brackets";
    answerContainer.appendChild(answer4);
    answer4.addEventListener("click", function (event) {
        penalty();
    })
}

// create question 4
var question4 = function () {
    var penalty = function () {
        timeLeft = timeLeft - 5;
        alert("Incorrect");
        questionEl.remove();
        question5();
    }

    //create question container div block
    var questionEl = document.createElement("div");
    questionEl.className = "question-ans";
    questionBlockEl.appendChild(questionEl);

    //create question 
    var question1 = document.createElement("h2");
    question1.className = "question-para";
    question1.textContent = "Arrays in JavaScript can be used to store ____."
    questionEl.appendChild(question1);

    // create answer container
    var answerContainer = document.createElement("div")
    answerContainer.className = "answer";
    questionEl.appendChild(answerContainer);

    //create answer 1
    var answer1 = document.createElement("button");
    answer1.className = "answer-one";
    answer1.textContent = "1. numbers and strings";
    answerContainer.appendChild(answer1);
    answer1.addEventListener("click", function (event) {
        penalty();
    })

    // create answer 2
    var answer2 = document.createElement("button");
    answer2.className = "answer-two";
    answer2.textContent = "2. other arrays";
    answerContainer.appendChild(answer2);
    answer2.addEventListener("click", function (event) {
        penalty();
    })

    // create answer 3
    var answer3 = document.createElement("button");
    answer3.className = "answer-three";
    answer3.textContent = "3. booleans";
    answerContainer.appendChild(answer3);
    answer3.addEventListener("click", function (event) {
        penalty();
    })

    //create answer 4
    var answer4 = document.createElement("button");
    answer4.className = "answer-four";
    answer4.textContent = "4. all of the above";
    answerContainer.appendChild(answer4);
    answer4.addEventListener("click", function (event) {
        alert("Correct");
        questionEl.remove();
        question5();
    })
}

//create question 5
var question5 = function () {
    var penalty = function () {
        timeLeft = timeLeft - 5;
        alert("Incorrect");
        questionEl.remove();
        infoInput();
    }

    //create question container div block
    var questionEl = document.createElement("div");
    questionEl.className = "question-ans";
    questionBlockEl.appendChild(questionEl);

    //create question 
    var question1 = document.createElement("h2");
    question1.className = "question-para";
    question1.textContent = "String values must be enclosed within ___ when being asigned to variables."
    questionEl.appendChild(question1);

    // create answer container
    var answerContainer = document.createElement("div")
    answerContainer.className = "answer";
    questionEl.appendChild(answerContainer);

    //create answer 1
    var answer1 = document.createElement("button");
    answer1.className = "answer-one";
    answer1.textContent = "1. commas";
    answerContainer.appendChild(answer1);
    answer1.addEventListener("click", function (event) {
        penalty();
    })

    // create answer 2
    var answer2 = document.createElement("button");
    answer2.className = "answer-two";
    answer2.textContent = "2. quotes";
    answerContainer.appendChild(answer2);
    answer2.addEventListener("click", function (event) {
        alert("Correct");
        questionEl.remove();
        infoInput();
    })

    // create answer 3
    var answer3 = document.createElement("button");
    answer3.className = "answer-three";
    answer3.textContent = "3. curly brackets";
    answerContainer.appendChild(answer3);
    answer3.addEventListener("click", function (event) {
        penalty();
    })

    //create answer 4
    var answer4 = document.createElement("button");
    answer4.className = "answer-four";
    answer4.textContent = "4. parentheses";
    answerContainer.appendChild(answer4);
    answer4.addEventListener("click", function (event) {
        penalty();
    })
}

// name info input page
var infoInput = function () {
    clearInterval(timeInterval);

    //create info container div
    var info = document.createElement("div");
    info.className = "name-info";
    questionBlockEl.appendChild(info);

    //create sub title
    var allDone = document.createElement("h2");
    allDone.className = "all-done";
    allDone.textContent = "All Done!";
    info.appendChild(allDone);

    //create final socre 
    var finalScore = document.createElement("h3");
    finalScore.className = "final-score";
    finalScore.textContent = "Your final score is " + timeLeft;
    info.appendChild(finalScore);

    //create initial input div
    var inputContainer = document.createElement("div");
    inputContainer.className = "input-container";
    info.appendChild(inputContainer);

    //create name input field
    var initial = document.createElement("h3");
    initial.className = "initial-info";
    initial.textContent = "Enter Initial: ";
    inputContainer.appendChild(initial);

    //initial input box
    var initialBox = document.createElement("input");
    initialBox.className = "text-input";
    initialBox.setAttribute("type", "text");
    initialBox.setAttribute("placeholder", "Enter Your Initial");
    inputContainer.appendChild(initialBox);

    //create submit button
    var initialBtn = document.createElement("button");
    initialBtn.className = "initial-button";
    initialBtn.textContent = "Submit";
    inputContainer.appendChild(initialBtn);
    initialBtn.addEventListener("click", function (event) {
        var initialName = document.querySelector(".text-input").value
        localStorage.setItem("initial", initialName);
        localStorage.setItem("score", timeLeft);
        info.remove();
        //enter load score page
        scorePage();
    })
}

//load high score page
var scorePage = function () {
    // create div block
    var loadScore = document.createElement("div")
    loadScore.className = "load";
    questionBlockEl.appendChild(loadScore);

    //create title
    var scoreTitle = document.createElement("h2");
    scoreTitle.className = "score-title";
    scoreTitle.textContent = "High Score";
    loadScore.appendChild(scoreTitle);

    //create score display section
    var loadBox = document.createElement("h3");
    var initialName = localStorage.getItem("initial");
    var timeLeft = localStorage.getItem("score");
    loadBox.className = "load-box";
    loadBox.textContent = initialName + " with score of " + timeLeft;
    loadScore.appendChild(loadBox);

    //create button container div
    var buttonContainer = document.createElement("div")
    buttonContainer.className = "button-container";
    loadScore.appendChild(buttonContainer);

    //back to home page button
    var backBtn = document.createElement("button");
    backBtn.className = "back-button";
    backBtn.textContent = "Back to Home Page";
    buttonContainer.appendChild(backBtn);
    backBtn.addEventListener("click", function (event) {
        loadScore.remove();
        homepage();
    });

    //clear score button
    var clearScore = document.createElement("button");
    clearScore.className = "clear-score";
    clearScore.textContent = "Clear High Score";
    buttonContainer.appendChild(clearScore);
    clearScore.addEventListener("click", function () {
        localStorage.removeItem("initial");
        localStorage.removeItem("score");
        loadBox.remove();
    })
}

var homepage = function () {
    // create a div block to contain info
    var container = document.createElement("div");
    container.className = "home-page";
    questionBlockEl.appendChild(container);

    //quiz title
    var subTitle = document.createElement("h1")
    subTitle.className = "page-title";
    subTitle.textContent = "Task Quiz";
    container.appendChild(subTitle);

    //home page quiz description
    var paragraph = document.createElement("p");
    paragraph.className = "home-para";
    paragraph.textContent = "Try to answer the following questions. Incorrect answer penealize your time by 5 seconds.";
    container.appendChild(paragraph);

    var startBtn = document.createElement("button");
    startBtn.className = "start";
    startBtn.textContent = "Ready, Go";
    container.appendChild(startBtn);

    startBtn.addEventListener("click", function (event) {
        container.remove();
        timeInterval = setInterval(countdown, 1000);
        question1();
        timeLeft = 90;
    });
}

homepage();