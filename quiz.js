const quizForm=document.querySelector('.quiz-form');
const submitAnwerBtn=document.querySelector('#submit-answer-btn');
const outputE1=document.querySelector('#output');
const correctAnswers=['90',"equilateral-Triangle","right-angled Triangle"];
function calculateScore(){
    let score=0;
    let idx=0;
    let formResults=new FormData(quizForm);
    for(value of  formResults.values()){
        if(correctAnswers[idx]===value){
            score++;
        }
        idx++;
    }
    showOutput(score);
}
function showOutput(score){
    outputE1.innerHTML=`you got ${score} correct answer`;
}



submitAnwerBtn.addEventListener('click',calculateScore);


