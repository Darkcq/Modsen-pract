const quiz = document.querySelector('.quiz');
const next_btn = document.querySelector('.next_btn');
const quiz_score = document.querySelector('.quiz_score');

let question_counter = 0;
let user_score = 0;

function showQuestions(index) {
    const question_title = document.querySelector('.question_title');
    const answers = document.querySelector('.answers_list');
    const total_amount = document.querySelector('.quests_amount');

    question_title.innerHTML = `${quizQuestions[index].question}`;
    answers.innerHTML = '';

    quizQuestions[index].options.forEach(item => {
        const text = `<li class="answer">${item}</li>`;
        answers.insertAdjacentHTML("beforeend", text);
    });

    const options = answers.querySelectorAll('.answer');
    options.forEach(item => item.setAttribute("onclick", "optionSelected(this)"));

    total_amount.innerHTML = `${index + 1} of ${quizQuestions.length}`;
}

function nextQuestion() {
    const option = document.querySelector('.answer');
    const score_info = document.querySelector('.score_info');

    if (question_counter === quizQuestions.length - 1 && option.classList.contains("disabled")) {
        quiz_score.classList.remove('hidden');
        quiz.classList.add('hidden');
        score_info.innerHTML = `Correct answers: ${user_score} of ${quizQuestions.length}`;
        return;
    }

    if (option.classList.contains("disabled")) {
        question_counter++;
        showQuestions(question_counter);
    }
    else {
        alert("First you need to choose the answer option!")
    }
}

function optionSelected(choice) {
    const userAnswer = choice.textContent;
    const correctAnswer = quizQuestions[question_counter].answer;
    const options = document.querySelectorAll(".answer");

    if (userAnswer === correctAnswer) {
        user_score++;
        choice.classList.add("correct");

    }
    else {
        choice.classList.add("incorrect");
    }

    options.forEach(item => item.classList.add("disabled"));
}

showQuestions(question_counter);
next_btn.addEventListener('click', nextQuestion);