let expression = "";
function addZero(){
    expression = expression + '0';
    document.getElementById("screen").innerText = expression;
}
function addOne(){
    expression = expression + '1';
    document.getElementById("screen").innerText = expression;
}
function addTwo(){
    expression = expression + '2';
    document.getElementById("screen").innerText = expression;
}
function addThree(){
    expression = expression + '3';
    document.getElementById("screen").innerText = expression;
}
function addFour(){
    expression = expression + '4';
    document.getElementById("screen").innerText = expression;
}
function addFive(){
    expression = expression + '5';
    document.getElementById("screen").innerText = expression;
}
function addSix(){
    expression = expression + '6';
    document.getElementById("screen").innerText = expression;
}
function addSeven(){
    expression = expression + '7';
    document.getElementById("screen").innerText = expression;
}
function addEight(){
    expression = expression + '8';
    document.getElementById("screen").innerText = expression;
}
function addNine(){
    expression = expression + '9';
    document.getElementById("screen").innerText = expression;
}
function add(){
    expression = expression + '+';
    document.getElementById("screen").innerText = expression;
}
function sub(){
    expression = expression + '-';
    document.getElementById("screen").innerText = expression;
}
function mul(){
    expression = expression + '*';
    document.getElementById("screen").innerText = expression;
}
function div(){
    expression = expression + '/';
    document.getElementById("screen").innerText = expression;
}
function dot(){
    expression = expression + '.';
    document.getElementById("screen").innerText = expression;
}
function equalTo(){
    expression = eval(expression);
    document.getElementById("screen").innerText = expression;
    if(expression != ""){
        expression = "";
    }
}
function del(){
    expression = "";
    document.getElementById("screen").innerText = expression;
}

