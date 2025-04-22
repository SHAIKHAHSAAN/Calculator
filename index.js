function appendValue(value) {
    document.getElementById("display").value += value;
}

function calculateResult() {
    try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
    } catch {
        document.getElementById("display").value = "Error";
    }
}

function clearDisplay() {
    // document.getElementById("display").value = "";
    display.value = "";
}
function Clearlastone() {
//    document.getElementById("ahsaan");
     display.value = display.value.slice(0,-1);
}

// percentage calculate

function perCalculate() {
    let n1 = document.getElementById("display").value;
    let n2 = document.getElementById("display").value;

    let result = (n1/n2) * 100
    document.getElementById("display").value = result;
}

// show and hide sci/fi calculator
var check = false;

function turnSciCal() {
    let sciCal = document.getElementById("sci-cal");
    check = !check
    if (check){
        sciCal.style.display = "contents";
    }
    else{
        sciCal.style.display = "none";

    }
        
}