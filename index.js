const quizData = [
    {
        title: "What does the Java icon represents?",
        a: "Elephant",
        b: "Snake",
        c: "Coffee",
        d: "Gamepad",
        correct: 'c'
    },

    {
        title: "When was Javascript created?",
        a: "1995",
        b: "1994",
        c: "1996",
        d: "1997",
        correct: 'a'
    },

    {
        title: "Which company did create C#?",
        a: "Google",
        b: "Microsoft",
        c: "Oracle",
        d: "Ecma",
        correct: 'b'
    },
    
    {
        title: "When was flash discontinued?",
        a: "Jan 2020",
        b: "Dec 2019",
        c: "Fev 2020",
        d: "November 2019",
        correct: 'b'
    },

    {
        title: "What is Bootstrap?",
        a: "A framework",
        b: "A library",
        c: "A programming language",
        d: "A company",
        correct: 'a'
    }
]

let currentQuiz = 0
let score = 0

const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const d_text = document.getElementById("d_text")
const submitBtn = document.getElementById("check-answer-button")
const section = document.getElementsByClassName("questions")
let answerEls = document.querySelectorAll(".options")
const questionsBox = document.getElementById("questionsBox")


loadQuiz();

function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer =  answerEl.id;
        }
    })

    return answer
}

function loadQuiz(){

    deselectAnswer()

    let currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.title

    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswer(){
    answerEls.forEach((answerEl) => {
            answerEl.checked = false
    })
}

submitBtn.addEventListener('click', () => {
 
    const answer = getSelected()

        if(answer){
            if(answer === quizData[currentQuiz].correct){
                score++
            }
            currentQuiz++
            if(currentQuiz < quizData.length) {
                loadQuiz()
            } else {
                questionsBox.innerHTML = `<h2>Você acertou ${score} em ${quizData.length} perguntas! Parabéns</h2>
                <button style="margin-top: 4rem;" onclick="location.reload()">Reiniciar Quiz</button>`
                submitBtn.remove()
            }
        
        }

       
})
