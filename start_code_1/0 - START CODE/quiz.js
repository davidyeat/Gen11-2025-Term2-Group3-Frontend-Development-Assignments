// DOMS ELEMENTS  ---------------------------------------------------------
const dom_quiz = document.querySelector("#quiz");
const dom_question = document.querySelector("#question");
const dom_choiceA = document.querySelector("#A");
const dom_choiceB = document.querySelector("#B");
const dom_choiceC = document.querySelector("#C");
const dom_choiceD = document.querySelector("#D");
const dom_score = document.querySelector("#scoreContainer");
const dom_start = document.querySelector("#start");

dom_start.addEventListener("click", onStart);

// DATA  ---------------------------------------------------------
let questions = [
  {
    title: "What does HTML stand for?",
    choiceA: "Hi Thierry More Laught",
    choiceB: "How To move Left",
    choiceC: "Ho Theary Missed the Laundry !",
    choiceD: "Hypertext Markup Language",
    correct: "D",
  },
  {
    title: "What does CSS stand for?",
    choiceA: "Cisco and Super Start",
    choiceB: "Ci So Sa",
    choiceC: "Cascading Style Sheets ",
    choiceD: "I don't know !",
    correct: "C",
  },
  {
    title: "What does JS stand for?",
    choiceA: "Junior stars",
    choiceB: "Justing Star",
    choiceC: "Javascript",
    choiceD: "RonanScript",
    correct: "C",
  },
  {
    title: "Which tag is used to create a link in HTML?",
    choiceA: "<p>",
    choiceB: "<a>",
    choiceC: "<div>",
    choiceD: "<img>",
    correct: "B",
  },
  {
    title: "Which property is used to change text color in CSS?",
    choiceA: "background-color",
    choiceB: "font-style",
    choiceC: "color",
    choiceD: "text-align",
    correct: "C",
  }, 
  {
    title: "Which HTML tag is used to insert an image?",
    choiceA: "<image>",
    choiceB: "<img>",
    choiceC: "<picture>",
    choiceD: "<src>",
    correct: "B",
  }, 
  {
    title: "Which CSS property is used to change background color?",
    choiceA: "color",
    choiceB: "background-color",
    choiceC: "font-color",
    choiceD: "bgcolor",
    correct: "B",
  },
  {
    title: "Which symbol is used for single-line comments in JavaScript?",
    choiceA: "//",
    choiceB: "/* */",
    choiceC: "#",
    choiceD: "<!-- -->",
    correct: "A",
  },
  {
    title: "Which keyword is used to declare a variable in JavaScript?",
    choiceA: "int",
    choiceB: "let",
    choiceC: "string",
    choiceD: "define",
    correct: "B",
  },
  {
    title: "Which HTML tag is used to create a paragraph?",
    choiceA: "<para>",
    choiceB: "<text>",
    choiceC: "<p>",
    choiceD: "<h1>",
    correct: "C",
  }
];

let runningQuestionIndex = 0;
let correctAnswer = 0;

// FUNCTIONS ---------------------------------------------------------

// Hide a given element
function hide(element) {
  // TODO
  element.style.display = "none";
}

function show(element) {
  // TODO
  element.style.display = "block";
}

function onStart() {
  // Render the current question
  // Display the quiz view,
  show(dom_quiz);
  hide(dom_start);
  hide(dom_score);
  renderQuestion();
}

function renderQuestion() {
  // Render the current question on the quiz view
  dom_question.textContent = questions[runningQuestionIndex].title;
  dom_choiceA.textContent = questions[runningQuestionIndex].choiceA;
  dom_choiceB.textContent = questions[runningQuestionIndex].choiceB;
  dom_choiceC.textContent = questions[runningQuestionIndex].choiceC;
  dom_choiceD.textContent = questions[runningQuestionIndex].choiceD;
}

function onPlayerSubmit(answer) {
  // Update the score, display the next question or the score view
  if(answer == questions[runningQuestionIndex].correct){
    correctAnswer++;
  }

  runningQuestionIndex++;

  if(runningQuestionIndex < questions.length){
    renderQuestion();
  } else {
    renderScore();
    show(dom_score);
    hide(dom_quiz);
  }
}

function renderScore() {
  // calculate the amount of question percent answered by the user
  // choose the image based on the scorePerCent
  
  const totalScore = correctAnswer * 10;  
  const scorePercent = Math.round((correctAnswer / questions.length) * 100);

  // Clear old textContent
  dom_score.innerHTML = "";

  // Create emoji span
  const emoji = document.createElement("p");
  emoji.textContent = getEmoji(totalScore);

  // Create final score h2
  const finalScore = document.createElement("h2");
  finalScore.textContent = `Total Score: ${totalScore}`

  // Create percentage h2
  const percentageScore = document.createElement("h2")

  percentageScore.textContent = `Percentage: ${scorePercent}%`

  //  Append to score div
  dom_score.appendChild(emoji);
  dom_score.appendChild(finalScore);
  dom_score.appendChild(percentageScore);
}

// Get emoji function ------------------------------------------------
function getEmoji(score) {
  if (score < 20) return "😠";
  else if (score < 40) return "😡";
  else if (score < 60) return "😐";
  else if (score < 80) return "🙂";
  else return "😄";
}

// FUNCTIONS ---------------------------------------------------------
show(dom_start);
hide(dom_quiz);
hide(dom_score);
