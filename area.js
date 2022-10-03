const inputBase=document.querySelector('#base');
const inputHeight=document.querySelector('#height');
const output=document.querySelector('#output');
const areaBtn=document.querySelector('#area-btn');

areaBtn.addEventListener('click',calculateArea);

function calculateArea(){
    let base=Number(inputBase.value );
    let height=Number(inputHeight.value);
    let area=((base*height)/2).toFixed(2);
    showOutput(area);
}

function showOutput(area){
    output.innerHTML="The area of a given triangle is  "  + area + " cm2";

}
