const inputs=document.querySelectorAll('.angle-input');
const isTriangleBtn=document.querySelector('#is-triangle-btn');
console.log(isTriangleBtn);

const outputE1=document.querySelector('#output');

function calculateSumOfAngles(angle1,angle2,angle3){
    const sumOfAngles=angle1+angle2+angle3;
    return sumOfAngles;
}

function isTriangle(){
    var angle1=Number(inputs[0].value);
    var angle2=Number(inputs[1].value);
    var angle3=Number(inputs[2].value);
    const sumOfAngles=calculateSumOfAngles(angle1,angle2,angle3);
    if(sumOfAngles===180){
        outputE1.innerText=("Yay,The angles form a triangles");
    }
    else{
        outputE1.innerText=("Oh Oh!,The angles doesn't form a triangles");

    }


}
isTriangleBtn.addEventListener('click',isTriangle);