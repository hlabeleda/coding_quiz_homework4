//script file for interactive coding quiz homework

//create body
var body = document.body;
var div1El = document.createElement("div");//create containing div element
var h1El = document.createElement("h1");//create h1 element
var descEl = document.createElement("p");//create p element
var startQzbtn = document.createElement("button");//create button element
//var timeEl =  document.createElement("");//for timer

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





