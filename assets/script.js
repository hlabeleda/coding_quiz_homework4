//script file for interactive coding quiz homework

//create body
var body = document.body;
var div1El = document.createElement("div");//create containing div element
var h1El = document.createElement("h1");//create h1 element
var descEl = document.createElement("p");//create p element
var startQzbtn = document.createElement("button");//create button element


h1El.textContent = "Coding Quiz Challenge";//text for h1 element
descEl.textContent = "Try to answer the following code-related questions within the time limit.  Keep in mind that incorrect answers will penalize your scorte/time by ten seconds!";
//text for p element
startQzbtn.textContent = "Start Quiz";//text for start button



body.appendChild(div1El);//append containing div to body
div1El.appendChild(h1El);//append h1 text to containing div
div1El.appendChild(descEl);//append p text to containing div
div1El.appendChild(startQzbtn);//append button text containing div

div1El.setAttribute("style", /*border: solid 2px blue;*/ "text-align:center;")//text-align center, centered the startQzBtn
h1El.setAttribute("style", "margin: 250px auto auto; width:50%; text-align:center; ");//set top margin to 250px to push it down from the top.  first auto is left/right margin, second auto is bottom margin.
descEl.setAttribute("style", "margin:auto; width:50%; text-align:center; padding:20px; ");
startQzbtn.setAttribute("style", "width:10%; padding:5px;");

var resultsDiv = document.createElement("div");//containing div for timer and score
var scoreElDiv = document.createElement("div");//container div for score
var scoreh4WinEl = document.createElement("h4");//h4 element for score win
var scoreh4LoseEl = document.createElement("h4");//h4 element for score lose
var timeElDiv =  document.createElement("div");//containg div for timer
var timeh4El = document.createElement("h4");//h4 element for timer

resultsDiv.setAttribute("class", "resultsdiv");//set class to container div for results and time
scoreElDiv.setAttribute("class", "scorediv");//set class to cpmtainer score div
scoreh4WinEl.setAttribute("class", "winscore");//set class to win score h4
scoreh4LoseEl.setAttribute("class", "losescore");//set class to lose score h4
timeElDiv.setAttribute("class", "timediv");//set class to container time div
timeh4El.setAttribute("class", "time");//set class to time h4


scoreh4WinEl.textContent = "Win: ";//text content for win
scoreh4LoseEl.textContent = "Lose: ";//text content for lose
timeh4El.textContent = "Time Left: ";//text content for time h4



body.appendChild(resultsDiv);//appending container resultsDiv for timer and score to body
resultsDiv.appendChild(scoreElDiv);//appending score div to resultsDiv container
scoreElDiv.appendChild(scoreh4WinEl);//appending win h4 to score div
scoreElDiv.appendChild(scoreh4LoseEl);//appending lose h4 to score div
resultsDiv.appendChild(timeElDiv);//appending timer div to container resultsDiv
timeElDiv.appendChild(timeh4El);//appending time left to containing timer div


resultsDiv.setAttribute("style", "margin:-390px auto;");


/*var timeEl = document.querySelector(".time");


function setTime() {
    var secondsLeft = 10;
    var timerInterval = setInterval(function() {
        secondsLeft--;



    }, 1000);

}

setTime();*/






