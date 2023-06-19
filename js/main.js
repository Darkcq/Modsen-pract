const quiz = document.querySelector('.quiz'),
      nextbtn = document.querySelector('.next-btn'),
      score_window = document.querySelector('.score__window');

let count = 0,
    userscore = 0;

    showQuestions(count);
    nextbtn.addEventListener('click', nextQuestion);

function showQuestions(index) {
    const title = document.querySelector('.question');
    const answers = document.querySelector('.answers_list');
    const total = document.querySelector('.totalquests');

    title.innerHTML = `${quizs[index].question}`;
    answers.innerHTML = '';

    quizs[index].options.forEach(item => {
        const text = `<li class="btn">${item}</li>`;
        answers.insertAdjacentHTML("beforeend", text);
    });

    const options = answers.querySelectorAll('.btn');
    options.forEach(item => item.setAttribute("onclick", "optionSelected(this)"));

    total.innerHTML = `${index + 1} of ${quizs.length}`;
}

function nextQuestion() {
    const option = document.querySelector('.btn');
    const score_info = document.querySelector('.score__info');

    if ((count + 1) == quizs.length && option.classList.contains("disabled")) {
        score_window.classList.remove('hidden');
        quiz.classList.add('hidden');
        score_info.innerHTML = `Correct answers: ${userscore} of ${quizs.length}`;
        return;
    }

    if (option.classList.contains("disabled")) {
        count++;
        showQuestions(count);
    }
    else {
        alert("Для начала необходимо выбрать вариант ответа!")
    }
}

function optionSelected(choice) {
    const userAnswer = choice.textContent,
        correctAnswer = quizs[count].answer,
        options = document.querySelectorAll(".btn");

    if (userAnswer == correctAnswer) {
        userscore++;
        choice.classList.add("correct");
        
    }
    else {
        choice.classList.add("incorrect");
    }

    options.forEach(item => item.classList.add("disabled"));
}