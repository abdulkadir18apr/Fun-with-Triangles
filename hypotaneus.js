const inputs=document.querySelectorAll('.side-input');
const hypoBtn=document.querySelector('#hypo-btn');
const output=document.querySelector('#output');

hypoBtn.addEventListener('click',calculateHypo)
function calculateHypo(){
    let a=Number(inputs[0].value);
    let b=Number(inputs[1].value);
    let hypo=Math.sqrt((a*a)+(b*b));
    hypo=hypo.toFixed(2);
    showOutput(hypo);

    
}

function showOutput(hypo){
    output.innerText=`Hypotaneus is : ${hypo}`;

}