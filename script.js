const quizData = [
    {
        question: "Qual é o país com a maior população do mundo atualmente?",
        a: "índia",
        b: "China",
        c: "Estados Unidos",
        d: "Brasil",
        correct: "b",
    },
    {
        question: "Qual é o sistema operacional mais utilizado em smartphones atualmente?",
        a: "iOS",
        b: "Android",
        c: "Windows Phone",
        d: "Blackberry OS",
        correct: "b",
    },
    {
        question: "Qual é o país que recentemente superou a Alemanha como a maior economia da União Europeia?",
        a: "França",
        b: "Espanha", 
        c: " Itália",
        d: "Reino Unido",
        correct: "d",
    },
    {
        question: "O que é o 5G?",
        a: "Uma tecnologia de rede de quinta geração para dispositivos móveis",
        b: "Um software de segurança cibernética",
        c: "Uma tecnologia de realidade virtual",
        d: "Uma plataforma de comércio eletrônico",
        correct: "a",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
                <h2>Você teve ${score}/${quizData.length} respostas corretas</h2>

                <button onclick="location.reload()">Recomeçar</button>
            `
        }
    }
})