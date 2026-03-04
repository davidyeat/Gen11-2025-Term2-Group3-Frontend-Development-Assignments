import { QUIZ_DATA } from "../../model/data.js";

// Select modal and buttons
const dom_btnAddQuestion = document.querySelector("#add-question-btn");
const popup = document.querySelector("#addQuiz-container");
const dom_title = document.querySelector("#title");
const dom_answerA = document.querySelector("#answerA");
const dom_answerB = document.querySelector("#answerB");
const dom_answerC = document.querySelector("#answerC");
const dom_answerD = document.querySelector("#answerD");
const dom_btnCancel = document.querySelector("#cancel-btn");
const dom_btnCreate = document.querySelector("#create-btn");


// Open popup when click add question button -----------------------------------
dom_btnAddQuestion.addEventListener("click", () => {
  popup.style.display = "block";
});

// Hide modal when "Cancel" button is clicked ----------------------------------
dom_btnCancel.addEventListener("click", () => {
  popup.style.display = "none";
});

// Handle "Create" button click ------------------------------------------------
dom_btnCreate.addEventListener("click", () => {
    onCreateQuestion();
    popup.style.display = "none";
});

// Modal control functions
function closeModal() {
    modal.close();
}
function openModal() {
    modal.showModal();
}

// Create new question card function -------------------------------------------
function onCreateQuestion() {
    // Get input values
    const questionInput = dom_title.value.trim();
    const answerA_input = dom_answerA.value.trim();
    const answerB_input = dom_answerB.value.trim();
    const answerC_input = dom_answerC.value.trim();
    const answerD_input = dom_answerD.value.trim();

    // Validate inputs check if question or all answers are empty --------------
    if (questionInput === "" ||
        answerA_input === "" ||
        answerB_input === "" ||
        answerC_input === "" ||
        answerD_input === "" 
    ) {
        alert("Please fill in the question and all answer fields!");
        return;
    }

    // Create question item ----------------------------------------------------
    const questionItem = document.createElement("div");
    questionItem.classList.add("question-item");

    // Create question title ---------------------------------------------------
    const question_description = document.createElement("p");
    question_description.textContent = questionInput;

    // Append question paragraph to question item ------------------------------
    questionItem.appendChild(question_description);

    // Add edit and delete features --------------------------------------------
    questionItem.innerHTML += `
      <div class="features">
        <i class='bxr bx-edit edit-question'></i> 
        <i class='bxr bx-trash delete-question'></i> 
      </div>
    `;

    // Append question item to question list -----------------------------------
    document.getElementById("question-list").appendChild(questionItem);

    // Add question and answers to array ---------------------------------------
    QUIZ_DATA.push({
      title: questionInput,
      choiceA: answerA_input,
      choiceB: answerB_input,
      choiceC: answerC_input,
      choiceD: answerD_input,
    });

    // Clear inputs 
    questionInput.value = "";
    answerA_input.value = "";
    answerB_input.value = "";
    answerC_input.value = "";
    answerD_input.value = "";
}

function onCorrectAnswer(selectedAnswer) {
    // Mark the selected answer as correct
    // Deselect all answers first
    document.querySelectorAll(".answer-option").forEach(option => {
        option.classList.remove("correct");
    });
    
    // Mark the selected answer
    selectedAnswer.classList.add("correct");
}