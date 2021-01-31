
//Radio Button States 
//let isKg = document.getElementById("weightKg");
//let isM = document.getElementById("heightM");
//there's probably a better way to do this but for now, 
let isKilo = true;
let isMeter = true;
let isM = true;

let btnW = document.getElementById("wBtn");
let cmForm = document.getElementById("tCm");
let ftForm = document.getElementById("usa");
let btnH = document.getElementById("hBtn");


//bfc.html vars
let btnG = document.getElementById("gBtn");
let measureUnits = document.getElementById("mUnits");







//the below functions are used for the changes in the browser based on user selection

function isKg(){
    isKilo = true;
    btnW.style.left = "0px";
}

function isLbs(){
    isKilo= false;
    btnW.style.left = "80px";
}


function isCm(){
    isMeter = true;
    cmForm.style.left = "50px";
    ftForm.style.left = "450px";
    btnH.style.left = "0px";
    
}

function isFt(){
    isMeter = false;
    cmForm.style.left = "-400px";
    ftForm.style.left = "50px";
    hBtn.style.left = "80px";
    
}






function isFemale(){
    console.log("female");
    btnG.style.left = "95px";
}

function isMale(){
    console.log("male");
    btnG.style.left = "0px";

}

function inCm(){
    console.log("cm");
    mUnits.style.left = "0px";
}

function inInch(){
    console.log("inch");
    mUnits.style.left = "80px";
}
