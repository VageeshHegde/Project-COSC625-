// JavaScript to handle opening and closing the contact form popup

document.addEventListener('DOMContentLoaded', function () {
    var openBtn = document.getElementById('openSquiz');
    var closeBtn = document.getElementById('closeSquiz');
    var popup = document.getElementById('quiz-popUp');

    openBtn.addEventListener('click', function () {
        popup.style.display = 'block';
    });

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });

    // Close the popup if the user clicks outside of it
    window.addEventListener('click', function (event) {
        if (event.target == popup) {
            popup.style.display = 'none';
        }
    });
});

const quizData = [
    { question: "1. What do the letters NBA stand for?", options: ["National Baseball Association", "National Basketball Association", "National Bowling Association", "National Boxing Association"], answer: "National Basketball Association" },
    { question: "2. Who has scored the most points in NBA history?", options: ["Kareem Abdul-Jabbar", "Chris Bosh", "Charles Barkley", "Rick Barry"], answer: "Kareem Abdul-Jabbar"},
    { question: "3. How many fouls can a player commit before being ejected?", options: ["Four", "Three", "Two", "Six"], answer: "Six"},
    { question: "4. How long are NBA quarters?", options: ["10 minutes", "5 minutes", "3 minutes", "12 minutes"], answer: "12 minutes"},
    { question: "5. What Canadian cities have ever had an NBA team?", options: ["Ottawa", "Calgary", "Toronto", "Montreal"], answer: "Toronto"},
    { question: "6. Which team’s logo is shaped like a musical note?", options: ["Utah Jazz", "Charlotte Bobcats", "Detroit Pistons", "Cleveland Cavaliers"], answer: "Utah Jazz"}
    // Add more quiz data as needed
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options-container');
    const currentQuizData = quizData[currentQuestion];

    questionContainer.innerHTML = `<p>${currentQuizData.question}</p>`;

    optionsContainer.innerHTML = '';
    currentQuizData.options.forEach((option, index) => {
        const optionBtn = document.createElement('button');
        optionBtn.classList.add('option-btn');
        optionBtn.innerText = option;
        optionBtn.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(optionBtn);
    });
}

function checkAnswer(userAnswer) {
    const currentQuizData = quizData[currentQuestion];
    if (userAnswer === currentQuizData.answer) {
        score++;
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert(`Quiz completed! Your score: ${score}/${quizData.length}`);
        resetQuiz();
    }
}

function resetQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

// ... (previous code)

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        alert(`Quiz completed! Your score: ${score}/${quizData.length}`);
        resetQuiz();
    }
}

// ... (rest of the code)


// Initial load
loadQuestion();
