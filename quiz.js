function checkAnswer() {
    const correctAnswer = "4";

    // Select the checked radio input with name="quiz"
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Reference to the feedback paragraph
    const feedback = document.getElementById('feedback');

    if (selectedOption) {
        const userAnswer = selectedOption.value;

        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
        }
    } else {
        // No option selected
        feedback.textContent = "Please select an answer before submitting.";
    }
}

// Attach event listener to the submit button after DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
    const submitBtn = document.getElementById('submit-answer');
    submitBtn.addEventListener('click', checkAnswer);
});
