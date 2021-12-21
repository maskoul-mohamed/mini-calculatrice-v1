// Variables
let x, y, solution, operation;
let xString, yString;

// Présentation
function ClickNumber(number) {
    if (xString == undefined) {
        if (xString == undefined) {
            xString = number
        }
    } else {
        if (yString == undefined) {
            yString = number
        }
    }

    display()
}


function display() {
    let display = document.getElementById("display");
    display.value = "";

    if (xString != undefined)
        display.value += xString
    if (operation != undefined)
        display.value += operation
    if (yString != undefined)
        display.value += yString

}

function Operation(OperationParm) {
    if (operation == undefined) {
        operation = OperationParm
        display()
    } else
        alert("Vous avez déjà choisi l'opération " + operation);
}

function Equal() {
    x = parseFloat(xString)
    y = parseFloat(yString)
    solution = calculer(x, y, operation)
    display(solution)
}


function calculer(x, y, operation) {
    let _solution = undefined

    switch (operation) {
        case '+':
            _solution = x + y;
            break;
        case '-':
            _solution = x - y;
            break;
    }
    return _solution
}