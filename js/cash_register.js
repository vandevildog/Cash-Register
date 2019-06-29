// create isNum function when converting string
// if NaN ~ Alert "Please Use a Real Number"

let newDisplay = 0; //"screen" display
function setDisplay(newDisplay) {
    document.getElementById("display").innerHTML = newDisplay;
}

function init() {
    let clickableNumbers = document.getElementsByClassName('clickable');
    let firstArray = []; // array before operator
    let secondArray = []; //Array after operator
    let numString = "";
    let operatorControl ={
      adding : "",
      subtracting : "",
      dividing : "",
      multiplying : ""
    };

    stringTakerNumbaMaker = function() {
        if (typeof firstArray === 'number') {
            parseFloat(numString);
            secondArray.push(numString);
            newDisplay = secondArray.join('');
            setDisplay(newDisplay);
        } else {
            parseFloat(numString);
            firstArray.push(numString);
            newDisplay = firstArray.join('');
            setDisplay(newDisplay);
        }
    };

isNumber = function() {
    let newNum = firstArray.toString();
    let occurence = [];
    for (let i = 0; i < newNum.length; i++) {
        if (newNum[i] === ".") occurence.push(i);
    }
    if (occurence.length > 1) {
        newDisplay = 0;
        answer = 0;
        firstArray = [];
        numArray2 = [];
        setDisplay(newDisplay);
        alert("Please use a real number");
        location.reload();
    }

};

    for (let i = 0; i < clickableNumbers.length; i++) {
        clickableNumbers[i].addEventListener('click', function(event) {
            numString = (event.target.innerHTML);
            stringTakerNumbaMaker();
        });
    }
    document.getElementById("clear").addEventListener('click', function() {
        newDisplay = 0;
        answer = 0;
        firstArray = [];
        numArray2 = [];
        setDisplay(newDisplay);
    });
    document.getElementById("add").addEventListener('click', function addItUp() {
        isNumber();
        let newNum = firstArray.toString();
        calculatorModule.memory = Number(newNum.replace(/,/g, ''));
        operatorControl.adding = calculatorModule.memory + " " + "+";
        firstArray = calculatorModule.memory;
        setDisplay(operatorControl.adding);
        return {
            adding: operatorControl.adding,
        };
    });

    document.getElementById("subtract").addEventListener('click', function subItUp() {
        isNumber();
        let newNum = firstArray.toString();
        calculatorModule.memory = Number(newNum.replace(/,/g, ''));
        operatorControl.subtracting = calculatorModule.memory + " " + "-";
        firstArray = calculatorModule.memory;
        setDisplay(operatorControl.subtracting);
        return {
            subtracting : operatorControl.subtracting,
        };
    });
    document.getElementById("divide").addEventListener('click', function divItUp() {
        isNumber();
        let newNum = firstArray.toString();
        calculatorModule.memory = Number(newNum.replace(/,/g, ''));
        operatorControl.dividing = calculatorModule.memory + " " + "/";
        firstArray = calculatorModule.memory;
        setDisplay(operatorControl.dividing);
        return {
            dividing: operatorControl.dividing,
        };
    });

    document.getElementById("multiply").addEventListener('click', function multIt() {
        isNumber();
        let newNum = firstArray.toString();
        calculatorModule.memory = Number(newNum.replace(/,/g, ''));
        operatorControl.multiplying = calculatorModule.memory + " " + "*";
        firstArray = calculatorModule.memory;
        setDisplay(operatorControl.multiplying);
        return {
            multiplying: operatorControl.multiplying,
        };
    });

document.getElementById("deposit").addEventListener('click', function multIt() {
        isNumber();
        calculatorModule.saveMemory = newDisplay;
        newDisplay = 0.00;
        firstArray=[];
        answer = 0;
        secondArray = [];
        setDisplay(newDisplay);
    });
document.getElementById("getBalance").addEventListener('click', function multIt() {
        newDisplay = Number(calculatorModule.saveMemory).toFixed(2);
        firstArray=[];
        answer = 0;
        secondArray = [];
        setDisplay(newDisplay);
        newDisplay = 0;
    });

document.getElementById("withdraw").addEventListener('click', function multIt() {
       let  numberAfterOperator;
        numberAfterOperator = secondArray.toString();
        numberAfterOperator = Number(numberAfterOperator.replace(/,/g, ''));
        newDisplay = calculatorModule.decrease(calculatorModule.saveMemory, numberAfterOperator).toFixed(2);
        firstArray=[];
        answer = 0;
        secondArray = [];
        setDisplay(newDisplay);
        alert("You withdrew" + " " + newDisplay + "" + "dollars");
        calculatorModule.saveMemory = 0;
    });

    document.getElementById("equals").addEventListener('click', function() {

        let numberAfterOperator;
        let answer;

        equalsPt1 = function() {
            numberAfterOperator = secondArray.toString();
            numberAfterOperator = Number(numberAfterOperator.replace(/,/g, ''));
        };
        equalsPt2 = function() {
            if (isNaN(answer)){
                newDisplay = 0;
                answer = 0;
                firstArray = [];
                numArray2 = [];
                setDisplay(newDisplay);
                alert("Please use a real number");
                location.reload();
            }
            else{
                setDisplay(answer);
                newDisplay = answer;
                firstArray=answer;
                answer = 0;
                secondArray = [];
            }
        };

        if (operatorControl.adding) {
            equalsPt1();
            answer = calculatorModule.sum(calculatorModule.memory, numberAfterOperator).toFixed(2);
            equalsPt2();
            operatorControl.adding = "";
        } else if (operatorControl.subtracting) {
            equalsPt1();
            answer = calculatorModule.decrease(calculatorModule.memory, numberAfterOperator).toFixed(2);
            equalsPt2();
            operatorControl.subtracting = "";
        } else if (operatorControl.dividing) {
            equalsPt1();
            answer = calculatorModule.division(calculatorModule.memory, numberAfterOperator).toFixed(2);
            equalsPt2();
            operatorControl.dividing = "";
        } else if (operatorControl.multiplying) {
            equalsPt1();
            answer = calculatorModule.multiplication(calculatorModule.memory, numberAfterOperator).toFixed(2);
            equalsPt2();
            operatorControl.multiplying = "";
        }
    });
}
document.addEventListener('DOMContentLoaded', function() {
    init();
});