const timerDisplay = document.getElementById("time");
const scoreDisplay = document.getElementById("scoreValue");
const currentQuestionDisplay = document.getElementById("currentQuestion");
const totalQuestionsDisplay = document.getElementById("totalQuestions");
const questionDisplay = document.getElementById("question");
const optionsDisplay = document.getElementById("options");
const submitBtn = document.getElementById("submitBtn");

let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 10; // Change timer duration here
let timer;

const quizData = [
  {
    question: "What does HTML stands for?",
    options: [
      "Hyper Text PreProcessor",
      "Hyper Text MarkUp Language",
      "Hyper Text Multiple Language",
      "Hyper Tool Multi Language",
    ],
    correctAnswer: "Hyper Text MarkUp Language",
  },
  {
    question: "What is the full form of CSS?",
    options: [
      "Cascading Sheets Style",
      "Cascading Styling Sheets",
      "Cascading Style Sheets",
      "Cascading Server Style",
    ],
    correctAnswer: "Cascading Style Sheets",
  },
  {
    question: "What does an Html Element Contains?",
    options: ["Opening Tag", "Content", "End tag", "All of the above"],
    correctAnswer: "All of the above",
  },
  {
    question: "Which is used to structure the webpage?",
    options: ["HTML", "CSS", "JS", "SQL"],
    correctAnswer: "HTML",
  },
  {
    question: "Which makes a webpage Interactive?",
    options: ["HTML", "CSS", "JS", "Python"],
    correctAnswer: "JS",
  },
  // Add more questions here
];

function startQuiz() {
  totalQuestionsDisplay.textContent = quizData.length;
  loadQuestion();
  startTimer();
}

function loadQuestion() {
  const currentQuestion = quizData[currentQuestionIndex];
  questionDisplay.textContent = currentQuestion.question;
  optionsDisplay.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.classList.add("option");
    button.addEventListener("click", () => selectOption(option, button));
    optionsDisplay.appendChild(button);
  });
  currentQuestionDisplay.textContent = currentQuestionIndex + 1;
}

function selectOption(option, button) {
  const currentQuestion = quizData[currentQuestionIndex];
  if (option === currentQuestion.correctAnswer) {
    score++;
    scoreDisplay.textContent = score;
    button.style.backgroundColor = "#5cb85c"; // Green color for correct answer
  } else {
    button.style.backgroundColor = "#d9534f"; // Red color for wrong answer
  }
  disableOptions();
}
function disableOptions() {
  const optionButtons = document.querySelectorAll(".option");
  optionButtons.forEach((button) => {
    button.disabled = true;
  });
}

function startTimer() {
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.textContent = timeLeft;
    if (timeLeft === 0) {
      clearInterval(timer);
      loadNextQuestion();
    }
  }, 1000);
}

function loadNextQuestion() {
  clearInterval(timer);
  timeLeft = 10; // Reset timer
  timerDisplay.textContent = timeLeft;
  currentQuestionIndex++;
  if (currentQuestionIndex < quizData.length) {
    loadQuestion();
    startTimer();
  } else {
    endQuiz();
  }
}

function endQuiz() {
  questionDisplay.textContent = "Quiz completed!";
  optionsDisplay.innerHTML = "";
  submitBtn.style.display = "none";
}

submitBtn.addEventListener("click", loadNextQuestion);

startQuiz();
