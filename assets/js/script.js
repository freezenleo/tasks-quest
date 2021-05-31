var timerEl = document.querySelector("#countdown");
var questionBlockEl = document.querySelector("#question-block");

// set time to 120 seconds
var timeLeft = 90;
//set totalscore 
var ttlScore = 0;

// score calculation function
var score = function () {
    ttlScore = ttlScore + 5;
}

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
    //
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
        subTitle.remove();
        paragraph.remove();
        startBtn.remove();
        countdown();

    })
}

homepage();