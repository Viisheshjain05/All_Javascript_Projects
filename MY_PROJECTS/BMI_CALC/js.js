// DOM  MODEL

const height = document.getElementById("My_Height");
const weight = document.getElementById("My_Weight");

const submit = document.getElementById("Submit_Button");

let result = document.getElementById("Your_Result");
/*
function output(yourResult) {
    result.textContent = yourResult;
}


const assumedValue = 0;
let myWeight = assumedValue;
let myHeight = assumedValue;

function BMI() {
    myWeight += parseInt(weight.value);
    console.log(myWeight);
    myHeight += parseInt(height.value);
    console.log(myHeight); 
    weight in kg and  height in cm
    myBmi = (myWeight / (myHeight * myHeight)) *10000 ; // hight converted to m*m
    output(myBmi);
}
submit.addEventListener("click", BMI);

*/

// Coding challenge 4

var john = {
    firstName: "john",
    mass: weight.value,
    height: height.value,
    calBmi: function() {
        this.BMI = (this.mass / (this.height * this.height)) * 10000;
    }
};
john.calBmi();

// var done = console.log(john);

function outputResult(text) {
    result.textContent = text;
}
function ok() {
    outputResult(john.weight);  
} 

submit.addEventListener("click", ok);

var mark = {
    firstName: "mark",
    mass: 50,
    height: 170,
    calBmi: function() {
        this.BMI = (this.mass / (this.height * this.height)) * 10000;
    }
};
mark.calBmi();
console.log(mark);

// var johnMass =prompt('what is your weight john', 'bmi');
// var johnHeight = prompt('what is your height john' ,'bmi');

// var markMass =prompt('what is your weight mark', 'bmi');
// var markHeight = prompt('what is your height mark' ,'bmi');

// var JohnBMI = johnMass / (johnHeight * johnHeight );
// //  console.log('johns bmi '+ JohnBMI );
// result.addEventListener('click',JohnBMI)

// var MarkBMI = markMass / (markHeight * markHeight)
// console.log('Marks Bmi '+ MarkBMI ) ;

// if (CompareBMI) {
//     console.log('john \'s you have a heigher BMI', JohnBMI );
// } else {
//     console.log('Mark \'s you have a heigher BMI', MarkBMI );

// }
