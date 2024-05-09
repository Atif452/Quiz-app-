document.getElementById('quizForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Define the correct answers
    const correctAnswers = ["Paris", "Jupiter", "Isalamabad", "fruit", "dehli"];

    // Initialize score
    let score = 0;

    // Loop through each question
    for (let i = 0; i < correctAnswers.length; i++) {
        // Get the selected option for the current question
        const selectedOption = document.querySelector('input[name="q' + i + '"]:checked');

        // If an option is selected, check if it's correct
        if (selectedOption) {
            const userAnswer = selectedOption.value;
            const correctAnswer = correctAnswers[i - 1]; // Adjust index since questions start from 1
            if (userAnswer === correctAnswer) {
                score++; // Increment score if answer is correct
            }
        }
    }

    localStorage.setItem('quizScore', score);

    window.location.href="result.html"
});
