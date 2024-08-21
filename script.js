const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Lisbon"],
        correct: "Paris"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        options: ["Harper Lee", "J.K. Rowling", "Ernest Hemingway", "Mark Twain"],
        correct: "Harper Lee"
    },
    {
        question: "What is the smallest planet in our solar system?",
        options: ["Venus", "Mars", "Mercury", "Earth"],
        correct: "Mercury"
    }
];

let currentQuiz = 0;
let score = 0;

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];
    let optionsHTML = '';
    for (let i = 0; i < currentQuizData.options.length; i++) {
        const option = currentQuizData.options[i];
        optionsHTML += `
        <button class="option" identifyOption="${option}">
            ${option}
        </button>
    `;
    }
    quizContainer.innerHTML = `
        <h1>${currentQuizData.question}</h1>
        ${optionsHTML}
    `;

    document.querySelectorAll('.option').forEach(option => {
        option.addEventListener('click', selectOption);
    });
}

function selectOption(e) {
    const selectedAnswer = e.target.getAttribute('identifyOption');
    if (selectedAnswer === quizData[currentQuiz].correct) {
        score++;
    }

    currentQuiz++;

    if (currentQuiz < quizData.length) {
        loadQuiz();
    } else {
        showResults();
    }
}

function showResults() {
    quizContainer.innerHTML = '';
    resultsContainer.innerHTML = `Correct answers are ${score} out of ${quizData.length}`;
    resultsContainer.classList.add('show');
}

loadQuiz();
