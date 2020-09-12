const defaultResult = 0;
let currentResult = defaultResult;
let trackOutput = defaultResult;
let logEntries = [];

//* USE TO ACTIVATE BUTTONS
function add() {
    // trackOutput = `${currentResult} + ${userInput.value}`;
    // currentResult = currentResult + parseInt(userInput.value);
    // console.log("input", trackOutput, currentResult);
    // outputResult(currentResult, trackOutput);
    operatorRule("add");
    objectLogEntry("add");
}
addBtn.addEventListener("click", add);

function subtract() {
    // trackOutput = `${currentResult} - ${userInput.value} `;
    // currentResult = currentResult - parseInt(userInput.value);
    // outputResult(currentResult, trackOutput);
    operatorRule("subtract");
    objectLogEntry("subtract");
}
subtractBtn.addEventListener("click", subtract);

function multiply() {
    // trackOutput = `${currentResult} * ${userInput.value} `;
    // currentResult = currentResult * parseInt(userInput.value);
    // outputResult(currentResult, trackOutput);
    operatorRule("multiply");
    objectLogEntry("multiply");
}
multiplyBtn.addEventListener("click", multiply);

function divide() {
    // trackOutput = `${currentResult} / ${userInput.value} `;
    // currentResult = currentResult / parseInt(userInput.value);
    // outputResult(currentResult, trackOutput);
    operatorRule("divide");
    objectLogEntry("divide");
}
divideBtn.addEventListener("click", divide);

function operatorRule(sign) {
    if (sign === "add") {
        trackOutput = `(${currentResult}+${userInput.value})`;
        currentResult += parseInt(userInput.value);
        outputResult(currentResult, trackOutput);
    } else if (sign === "subtract") {
        trackOutput = `(${currentResult}-${userInput.value})`;
        currentResult -= parseInt(userInput.value);
        outputResult(currentResult, trackOutput);
    } else if (sign === "multiply") {
        trackOutput = `(${currentResult}*${userInput.value})`;
        currentResult *= parseInt(userInput.value);
        outputResult(currentResult, trackOutput);
    } else {
        trackOutput = `(${currentResult} / ${userInput.value})`;
        currentResult /= parseInt(userInput.value);
        outputResult(currentResult, trackOutput);
    }
}

//! Object and Array function
//* converted into function to use multiple times
function objectLogEntry(oper1) {
    //! Extra const to support
    const previousResult = currentResult;
    //! Entries object in consol log
    const entry = {
        operation: oper1,
        previousValue: currentResult,
        trackOperation: trackOutput,
        result: currentResult,
        type: typeof oper1 // shows the type of variable (i.e string)
    };
    //!  Entries Array in consol log
    //* We use arrays (logEntries) to fetch data as a form and use (entry) to fetch data from objects
    logEntries.push(entry);
    console.log(logEntries);
}
