// Select modal and buttons
const modal = document.querySelector("#question-modal");
const btnAddQuestion = document.querySelector("#add-question-btn");
const btnCancel = document.querySelector("#cancel-btn");
const btnCreate = document.querySelector("#create-btn");

// Display modal when "Add Question" button is clicked
btnAddQuestion.addEventListener("click", () => {
    // Clear previous inputs
    document.querySelector("#q-title").value = "";
    document.querySelectorAll(".q-answer").forEach(input => input.value = "");
    openModal();
});

// Hide modal when "Cancel" button is clicked
btnCancel.addEventListener("click", () => {
    closeModal();
});

// Handle "Create" button click
btnCreate.addEventListener("click", () => {
    const title = document.querySelector("#q-title").value;
    const answers = Array.from(document.querySelectorAll(".q-answer")).map(input => input.value);

    // Here you would typically add the new question to your data structure
    console.log("New Question:", title);
    console.log("Answers:", answers);
    modal.style.display = "none";
});

// Modal control functions
function closeModal() {
    modal.style.display = "none";
}
function openModal() {
    modal.style.display = "block";
}

// Create new question card function
function onCreateQuestion() {
    // Get input values
    const questionInput = document.getElementById("q-title");
    const answerInputs = document.querySelectorAll(".q-answer");

    // Validate inputs
    const question = questionInput.value;
    const answers = Array.from(answerInputs).map(input => input.value);

    // Prevent creating empty questions
    if(question === "" && answers.every(text => text) === ""){
        return;
    }

    // Create question card element
    const questionCard = document.createElement("div");
    questionCard.className = "question-item";

    // Create question title
    const questionItem = document.createElement("p");
    questionItem.textContent = question;

    // Append title to card
    questionCard.appendChild(questionItem);

    // Add edit and delete features
    questionCard.innerHTML += `
        <div class="features">
            <i class='bxr bx-edit edit-question'></i> 
            <i class='bxr bx-trash delete-question'></i> 
        </div>
    `;

    // Append question card to question list
    document.getElementById("question-list").appendChild(questionCard);

    // Add question and answers to array
    questions.push({
        title: question,
        choiceA: answers[0],
        choiceB: answers[1],
        choiceC: answers[2],
        choiceD: answers[3],
        correct: "check"
    });

    // Clear inputs
    questionInput.value = "";
    Array.from(answerInputs).forEach(input => input.value = "");
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