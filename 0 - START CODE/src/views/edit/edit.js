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
    modal.style.display = "block";
});

// Hide modal when "Cancel" button is clicked
btnCancel.addEventListener("click", () => {
    modal.style.display = "none";
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