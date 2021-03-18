//globales
let texto = document.getElementById ("texto"); 


//letras
let btnQ = document.getElementById("btnQ");
let btnW = document.getElementById("btnW");
let btnE = document.getElementById("btnE");
let btnR = document.getElementById("btnR");
let btnT = document.getElementById("btnT");
let btnY = document.getElementById("btnY");
let btnU = document.getElementById("btnU");
let btnI = document.getElementById("btnI");
let btnO = document.getElementById ("btnO");
let btnP = document.getElementById ("btnP");
let btnA = document.getElementById ("btnA");
let btnS = document.getElementById ("btnS");
let btnD = document.getElementById ("btnD");
let btnF = document.getElementById ("btnF");
let btnG = document.getElementById ("btnG");
let btnH = document.getElementById ("btnH");
let btnJ = document.getElementById ("btnJ");
let btnK = document.getElementById ("btnK");
let btnL = document.getElementById ("btnL");
let btnÑ = document.getElementById ("btnÑ");
let btnz = document.getElementById ("btnZ");
let btnX = document.getElementById ("btnX");
let btnC = document.getElementById ("btnC");
let btnV = document.getElementById ("btnV");
let btnB = document.getElementById ("btnB");
let btnN = document.getElementById ("btnN");
let btnM = document.getElementById ("btnM");
let btncoma = document.getElementById ("btncoma");
let btnpunto = document.getElementById ("btnpunto");
let btnguion = document.getElementById ("btnguion");
let btn7 = document.getElementById ("btn7");
let btn8 = document.getElementById ("bnt8");
let btn9 = document.getElementById ("btn9");
let btn4 = document.getElementById ("btn4");
let btn5 = document.getElementById ("btn5");
let btn6 = document.getElementById ("btn6");
let btn1 = document.getElementById ("btn1");
let btn2 = document.getElementById ("btn2");
let btn3 = document.getElementById ("btn3");

//temporales
let textoTemp = "";


//Funciones letras
const btnQF = () => {
if (textoTemp === "") {
    texto.innerHTML = textoTemp + "Q";
    textoTemp = textoTemp + "Q";
    console.log (letras);    
} else {
    
}
}



//ONCLICK NÚMEROS
btnQ.onclick = function () {
    btnQF();
}