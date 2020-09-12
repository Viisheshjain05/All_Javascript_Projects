// CODDING CHALLANGE NO 2

var johnScore1 = document.getElementById("John_Scores1");
// const johnScore2 = document.getElementById("John_Scores2");
// const johnScore3 = document.getElementById("John_Scores3");

// const mikeScore1 = document.getElementById("Mike_Scores1");
// const mikeScore2 = document.getElementById("Mike_Scores2");
// const mikeScore3 = document.getElementById("Mike_Scores3");

// const maryScore1 = document.getElementById("Mary_Scores1");
// const maryScore2 = document.getElementById("Mary_Scores2");
// const maryScore3 = document.getElementById("Mary_Scores3");

const submit = document.getElementById("Submit");
const result = document.getElementById("Result");

function Output(text) {
    result.textContent = text;
}
johnScore1 = 21;

let jScore = 0;
// let jScoe = init;
// let jScor = init;

jScore += parseInt(johnScore1);

var jScoe = `  jscore type is  ${typeof jScore} and value is ${jScore}  and johnScore1 = ${
    johnScore1.value
} typeof ${typeof johnScore1.value} `;

function ok() {
    Output(jScoe);
}

submit.addEventListener("dblclick", ok);

// jScor = parseInt(johnScore2.value);
// jScoe = parseInt(johnScore3.value);

// johnTotalScore = (jScore1 + jScore2 + jScore3);

// function log() {
//     score += johnTotalScore;
//     console.log("johnScore1.value", score);
// }

// submit.addEventListener("click", log );

// Ordinary Solution

var johnTeam = (19 + 120 + 103) / 3;
var mikeTeam = (19 + 12 + 103) / 3;
var maryTeam = (97 + 134 + 105) / 3;

console.log('john', johnTeam, 'mike', mikeTeam, 'mary', maryTeam);


if (johnTeam > mikeTeam && johnTeam > maryTeam) {
    console.log("JohnWins" , johnTeam);
} else if (mikeTeam > maryTeam && mikeTeam > johnTeam) {
    console.log("mikeWins" , mikeTeam);
} else if (maryTeam > mikeTeam && maryTeam > johnTeam) {
    console.log("maryWins", maryTeam );
}else {
    console.log('its a draw');
    
}


