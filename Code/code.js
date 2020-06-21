var div=document.querySelector("#machine");
//console.log(div);
var emoj=["🍇","🍋","🍒","🍓","🍑"];
//Functions
function getFruit(emo){
    return emo[Math.floor(Math.random()*emo.length)];
}
function createMachine(){
    var p=document.createElement("p");
    var check=[getFruit(emoj),getFruit(emoj),getFruit(emoj)];
    p.appendChild(document.createTextNode(
        check[0]+" "+check[1]+" "+check[2]
    ));
    div.appendChild(p);
    var winner=(check[0]==check[1])&&(check[1]==check[2]);
    p=document.createElement("p");
    p.appendChild(document.createTextNode(
        (winner?"You Win!":"You Lose!")
    ));
    p.classList.add((winner?"green":"red"));
    div.appendChild(p);
}
function clickMe(){
    div.innerHTML="";
    createMachine();
}

//Executions
createMachine();