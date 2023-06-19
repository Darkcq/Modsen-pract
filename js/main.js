const quiz = document.querySelector('.quiz'),
      nextbtn = document.querySelector('.next-btn'),
      score_window = document.querySelector('.score__window');

let count = 0,
    userscore = 0;

    showQuestions(count);
    nextbtn.addEventListener('click', nextQuestion);

function showQuestions(index) {
    const qtitle = document.querySelector('.question');
    const answers = document.querySelector('.answers_list');
    const totalamount = document.querySelector('.totalquests');

    qtitle.innerHTML = `${quizs[index].question}`;
    answers.innerHTML = '';

    quizs[index].options.forEach(item => {
        const text = `<li class="answer">${item}</li>`;
        answers.insertAdjacentHTML("beforeend", text);
    });

    const options = answers.querySelectorAll('.answer');
    options.forEach(item => item.setAttribute("onclick", "optionSelected(this)"));

    totalamount.innerHTML = `${index + 1} of ${quizs.length}`;
}

function nextQuestion() {
    const option = document.querySelector('.answer');
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
        alert("First you need to choose the answer option!")
    }
}

function optionSelected(choice) {
    const userAnswer = choice.textContent,
        correctAnswer = quizs[count].answer,
        options = document.querySelectorAll(".answer");

    if (userAnswer == correctAnswer) {
        userscore++;
        choice.classList.add("correct");
        
    }
    else {
        choice.classList.add("incorrect");
    }

    options.forEach(item => item.classList.add("disabled"));
}