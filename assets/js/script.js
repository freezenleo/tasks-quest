var timerEl = document.querySelector("#countdown");
var questionBlockEl = document.querySelector("#question-block");

// set time to 120 seconds
var timeLeft = 90;
//set totalscore 

function countdown() {
    //use the 'setInterval()' method to call a function to be executed
    var timeInterval = setInterval(function () {
        // countdown as 'timeLeft' is greater than 1

        if (timeLeft > 0) {
            // set the 'textContent' of 'timerEl' to show the remaining time
            timerEl.textContent = 'Time Remaining: ' + timeLeft;
            // decrement 'timeLeft' by 1
            timeLeft--;
        }

        else {
            // once 'timeLeft' gets to 0, set 'timerEl' to an empty string
            timerEl.textContent = "";
            //use 'clearInterval()' to stop the timer
            clearInterval(timeInterval);
            // display name input with high score
        }
    }, 1000);
}

var question1 = function () {
    var penalty = function () {
        timeLeft = timeLeft - 5;
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
    question1.textContent = "What is the sky color?"
    questionEl.appendChild(question1);

    // create answer container
    var answerContainer = document.createElement("div")
    answerContainer.className = "answer";
    questionEl.appendChild(answerContainer);

    //create answer 1
    var answer1 = document.createElement("button");
    answer1.className = "answer-one";
    answer1.textContent = "1. Black";
    answerContainer.appendChild(answer1);
    answer1.addEventListener("click", event => {
        penalty();
    })

    // create answer 2
    var answer2 = document.createElement("button");
    answer2.className = "answer-two";
    answer2.textContent = "2. Blue";
    answerContainer.appendChild(answer2);
    answer2.addEventListener("click", event => {
        console.log("Correct");
        question2();
    })

    // create answer 3
    var answer3 = document.createElement("button");
    answer3.className = "answer-three";
    answer3.textContent = "3. Green";
    answerContainer.appendChild(answer3);
    answer3.addEventListener("click", event => {
        penalty();
    })

    //create answer 4
    var answer4 = document.createElement("button");
    answer4.className = "answer-four";
    answer4.textContent = "4. Neon Blue";
    answerContainer.appendChild(answer4);
    answer4.addEventListener("click", event => {
        penalty();
    })
}

// create question 2
var question2 = function () {
    var penalty = function () {
        timeLeft = timeLeft - 5;
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
    answer1.addEventListener("click", event => {
        penalty();
    })

    // create answer 2
    var answer2 = document.createElement("button");
    answer2.className = "answer-two";
    answer2.textContent = "2. createElement";
    answerContainer.appendChild(answer2);
    answer2.addEventListener("click", event => {
        console.log("Correct");
        question3();
    })

    // create answer 3
    var answer3 = document.createElement("button");
    answer3.className = "answer-three";
    answer3.textContent = "3. appendChild";
    answerContainer.appendChild(answer3);
    answer3.addEventListener("click", event => {
        penalty();
    })

    //create answer 4
    var answer4 = document.createElement("button");
    answer4.className = "answer-four";
    answer4.textContent = "4. addEventListener";
    answerContainer.appendChild(answer4);
    answer4.addEventListener("click", event => {
        penalty();
    })
}

// create question 3
var question3 = function () {
    var penalty = function () {
        timeLeft = timeLeft - 5;
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
    answer1.addEventListener("click", event => {
        penalty();
    })

    // create answer 2
    var answer2 = document.createElement("button");
    answer2.className = "answer-two";
    answer2.textContent = "2. createElement";
    answerContainer.appendChild(answer2);
    answer2.addEventListener("click", event => {
        console.log("Correct");
        question4();
    })

    // create answer 3
    var answer3 = document.createElement("button");
    answer3.className = "answer-three";
    answer3.textContent = "3. appendChild";
    answerContainer.appendChild(answer3);
    answer3.addEventListener("click", event => {
        penalty();
    })

    //create answer 4
    var answer4 = document.createElement("button");
    answer4.className = "answer-four";
    answer4.textContent = "4. addEventListener";
    answerContainer.appendChild(answer4);
    answer4.addEventListener("click", event => {
        penalty();
    })
}

// create question 4
var question4 = function () {
    var penalty = function () {
        timeLeft = timeLeft - 5;
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
    answer1.addEventListener("click", event => {
        penalty();
    })

    // create answer 2
    var answer2 = document.createElement("button");
    answer2.className = "answer-two";
    answer2.textContent = "2. createElement";
    answerContainer.appendChild(answer2);
    answer2.addEventListener("click", event => {
        console.log("Correct");
        question5();
    })

    // create answer 3
    var answer3 = document.createElement("button");
    answer3.className = "answer-three";
    answer3.textContent = "3. appendChild";
    answerContainer.appendChild(answer3);
    answer3.addEventListener("click", event => {
        penalty();
    })

    //create answer 4
    var answer4 = document.createElement("button");
    answer4.className = "answer-four";
    answer4.textContent = "4. addEventListener";
    answerContainer.appendChild(answer4);
    answer4.addEventListener("click", event => {
        penalty();
    })
}

//create question 5
var question5 = function () {
    var penalty = function () {
        timeLeft = timeLeft - 5;
        questionEl.remove();

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
    answer1.addEventListener("click", event => {
        penalty();
    })

    // create answer 2
    var answer2 = document.createElement("button");
    answer2.className = "answer-two";
    answer2.textContent = "2. createElement";
    answerContainer.appendChild(answer2);
    answer2.addEventListener("click", event => {
        console.log("Correct");

    })

    // create answer 3
    var answer3 = document.createElement("button");
    answer3.className = "answer-three";
    answer3.textContent = "3. appendChild";
    answerContainer.appendChild(answer3);
    answer3.addEventListener("click", event => {
        penalty();
    })

    //create answer 4
    var answer4 = document.createElement("button");
    answer4.className = "answer-four";
    answer4.textContent = "4. addEventListener";
    answerContainer.appendChild(answer4);
    answer4.addEventListener("click", event => {
        penalty();
    })
}

// name info input page
var infoInput = function () {
    var
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
    questionBlockEl.appendChild(subTitle);

    //home page quiz description
    var paragraph = document.createElement("p");
    paragraph.className = "home-para";
    paragraph.textContent = "Try to answer the following questions. Incorrect answer penealize your time by 5 seconds.";
    questionBlockEl.appendChild(paragraph);

    var startBtn = document.createElement("button");
    startBtn.className = "start";
    startBtn.textContent = "Ready, Go";
    questionBlockEl.appendChild(startBtn);

    startBtn.addEventListener("click", event => {
        container.remove();
        subTitle.remove();
        paragraph.remove();
        startBtn.remove();
        countdown();
        question1();

    })
}



homepage();