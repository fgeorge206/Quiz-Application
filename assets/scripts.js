var startButton = document.querySelector('#start-btn')
var nextButton = document.querySelector('#next-btn')
var questionContainerEl = document.querySelector ('#question-container')
var questionEl = document.querySelector('#question')
var answerButtonsEl = document.querySelector('#answer-buttons')

var shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click',() => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerEl.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach(answer => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct)
        button.dataset.correct = answer.correct
        button.addEventListener('click', selectAnswer)
        answerButtonsEl.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsEl.firstChild) {
        answerButtonsEl.removeChild (answerButtonsEl.firstChild)
    }
}

function selectAnswer(e) {
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsEl.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    nextButton.classList.remove('hide')
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if(correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

var questions = [
    {
        question : "what is the name of the one type of dragon the no one has been able to kill",
        answers:[
            {text:'Bewilderbeast', correct: false},
            {text:'Bearded Dragon', correct: false},
            {text:'Night Fury', correct: true},
            {text:'Razorback', correct: false}
        ]
    },
    {
        question : "What does Hiccup's father give hime in the first movie becuase he proud at how well he done in training?",
        answers:[
            {text:'A Sheild', correct: false},
            {text:'A Sword', correct: false},
            {text:'A Helmet', correct: true},
            {text:'A Spear', correct: false}
        ]
    },
    {
        question : "What body part does Hiccup lose in the first film?",
        answers:[
            {text:'His left foot', correct: true},
            {text:'His right hand', correct: false},
            {text:'His right foot', correct: false},
            {text:'Both arms', correct: false}
        ]
    },
    {
        question : "What is the name of Hiccup’s home? ",
        answers:[
            {text:'Hogwarts', correct: false},
            {text:'Morder', correct: false},
            {text:'Narnia', correct: false},
            {text:'The Isle of Berk', correct: true}
        ]
    },
    {
        question : "What is the name of the twins?",
        answers:[
        {text:'Luke and Leiar', correct: false},
        {text:'Ruffnut and Tuffnut', correct: true},
        {text:'Fred and George Weasley', correct: false},
        {text:'Wanda and Pietro Maximoff', correct: false}
    ]
    },
    {
        question : "Who is Hiccup reunited with in the second movie?",
        answers:[
        {text:'His Mother', correct: true},
        {text:'His Brother', correct: false},
        {text:'His Grandfather', correct: false},
        {text:'His Uncle', correct: false}
    ]
    }
]