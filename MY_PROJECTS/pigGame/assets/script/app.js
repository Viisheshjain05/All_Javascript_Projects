// PIG GAME JAVASCRIPT FILE

var currentScore, finalScore, dice, activePlayer, winScore, score;

//NEW GAME BUTTON
function newGame() {
    document.getElementById("CurrentScore-0").textContent = "0";
    document.getElementById("CurrentScore-1").textContent = "0";
    document.querySelector("#Score-0").textContent = "0";
    document.querySelector("#Score-1").textContent = "0";
    score = [0, 0, 0];
    currentScore = 0;
    finalScore = 0;
    activePlayer = 0;
    winScore = 0;
    document.querySelector(".player").className = "player";
}
newGame(); // USING AS GLOBAL VERIABLE
document.getElementById("btn-w").addEventListener("click", newGame);

function selectPlayer() {
    //CONVERTING ACTIVE PLAYER STATUS
    //TO PLAYER 0
    if (activePlayer === 0) {
        document.querySelector(".box-" + activePlayer).className =
            "box-" + activePlayer + " active";

        activePlayer++;
        document.querySelector(".box-" + activePlayer).className =
            "box-" + activePlayer;
        activePlayer--;
    } else {
        //TO PLAYER 1
        document.querySelector(".box-" + activePlayer).className =
            "box-" + activePlayer + " active";

        activePlayer--;
        document.querySelector(".box-" + activePlayer).className =
            "box-" + activePlayer;
        activePlayer++;
    }
}
selectPlayer();

//* ROLL BUTTON
function btnDice() {
    //GENERATING RANDOM NUMBER

    var diceNum1 = Math.floor(Math.random() * 6) + 1;
    var diceNum2 = Math.floor(Math.random() * 6) + 1;
    console.log(diceNum1, diceNum2);

    //CHANGEING DICE WITH RANDOM NUMBER
    document.getElementById("diceImg-0").src = `dice-${+diceNum1}.png`;
    document.getElementById("diceImg-1").src = `dice-${+diceNum2}.png`;

    //PROPERTY IF NUM IS 1
    if (diceNum1 === 1 || diceNum2 === 1) {
        document.getElementById("diceImg-0").style.display = "None";
        document.getElementById("diceImg-1").style.display = "None";
        currentScore = 0;
        document.getElementById(
            "CurrentScore-" + activePlayer
        ).textContent = currentScore;
        //CHANGE PLAYER IN CASE OF 1
        changePlayer();

        //PROPERTY IF NUM IS NOT 1
    } else if (diceNum1 !== 1 || diceNum2 !== 1) {
        //ADD DICE IF NOT 1
        currentScore += diceNum1 + diceNum2;
        document.getElementById(
            "CurrentScore-" + activePlayer
        ).textContent = currentScore;
        document.getElementById("diceImg-0").style.display = "block";
        document.getElementById("diceImg-1").style.display = "block";

        //CHANGING CURRENT PLAYER IN CASE OF 1
    }
}
document.querySelector(".btn-roll").addEventListener("click", btnDice);

function btnHold() {
    //TRANFERING CURRENTSCORE TO PLAYER SCORE
    if (activePlayer === 0 || activePlayer === 1) {
        score[activePlayer] += currentScore;
        document.querySelector("#Score-" + activePlayer).textContent =
            score[activePlayer];
    } else if (activePlayer === 2) {
        activePlayer = 2;
        return;
    }

    //CONVERTING CURRENT SCORE TO ZERO
    currentScore = 0;
    document.getElementById(
        "CurrentScore-" + activePlayer
    ).textContent = currentScore;

    //WINNING SCORE
    var chkScore = parseInt(document.querySelector(".add-score").value);
    
    //*IF STATEMENT IS USED AS CHK OF TRUE AND FALSE IF THERE IS NO PARAMETER IT SIMPLY CHK FOR 
    //* UNDEFINED, NAN, "", OR NULL
    //* ANOTHER WAY = isNaN(chkScore) == false;
    if (chkScore) {
        winScore = document.querySelector(".add-score").value;
    } else {
        winScore = 100;
    }

    //CHEAKING FOR WINNER
    if (score[activePlayer] > winScore) {
        document.querySelector(".player").className = "player winner";
        activePlayer = 2;
    }

    //CHANGING ACTIVE PLAYER
    changePlayer();
}
document.querySelector(".btn-hold").addEventListener("click", btnHold);

function changePlayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
        selectPlayer();
    } else if (activePlayer === 1) {
        activePlayer = 0;
        selectPlayer();
    }
    document.querySelector("#diceImg-0").style.display = "none";
    document.querySelector("#diceImg-1").style.display = "none";
}
