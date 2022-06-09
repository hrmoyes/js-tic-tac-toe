let currentChoice = "X";
let trustArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];
let preventPress = "You already made a turn there!";
let turnCounter = 1;

function playerChooseX() {
    currentChoice = "X"
}
function playerChooseO() {
    currentChoice = "O"
}

function clickBlock(blockNum) {
    if ((turnCounter == 1 && currentChoice == "X") || (turnCounter == 0 && currentChoice == "O")) {
        if (trustArray[blockNum - 1] == true) {
            document.getElementById(blockNum).value = currentChoice;
            trustArray[blockNum - 1] = 0;
            if (currentChoice == "X") {
                let whoseTurn = document.getElementById("turn-indic") 
                whoseTurn.textContent = `It is O's turn to go.`;
                turnCounter = 0;
            } else if (currentChoice == "O") {
                let whoseTurn = document.getElementById("turn-indic") 
                whoseTurn.textContent = `It is X's turn to go.`;
                turnCounter = 1;
            }
        } else {
            alert(preventPress);
        }
    } else {
        alert(`It's not your turn, please let other player go first!`)
    }
}

function resetButton() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i).value = "";
        trustArray[i-1] = 1;
    }

}

function winChecker() {
    let s1 = document.getElementById("1").value;
    let s2 = document.getElementById("2").value;
    let s3 = document.getElementById("3").value;
    let s4 = document.getElementById("4").value;
    let s5 = document.getElementById("5").value;
    let s6 = document.getElementById("6").value;
    let s7 = document.getElementById("7").value;
    let s8 = document.getElementById("8").value;
    let s9 = document.getElementById("9").value;

    let s1Style = document.getElementById("1");
    let s2Style = document.getElementById("2");
    let s3Style = document.getElementById("3");
    let s4Style = document.getElementById("4");
    let s5Style = document.getElementById("5");
    let s6Style = document.getElementById("6");
    let s7Style = document.getElementById("7");
    let s8Style = document.getElementById("8");
    let s9Style = document.getElementById("9");


    if ((s1 == s2 && s2 == s3) && s1 != "") {
        alert(`Player ${s1} won!`);
        s1Style.style.color = "green";
        s2Style.style.color = "green";
        s3Style.style.color = "green";
        gameOver();
    } else if ((s1 == s4 && s4 == s7) && s1 != "") {
        alert(`Player ${s1} won!`);
        gameOver();
    } else if ((s1 == s5 && s5 == s9) && s1 != "") {
        alert(`Player ${s1} won!`);
        gameOver();
    } else if ((s2 == s5 && s5 == s8) && s2 != "") {
        alert(`Player ${s2} won!`);
        gameOver();
    } else if ((s3 == s5 && s5 == s7) && s3 != "") {
        alert(`Player ${s3} won!`);
        gameOver();
    } else if ((s3 == s6 && s6 == s9) && s3 != "") {
        alert(`Player ${s3} won!`);
        gameOver();
    } else if ((s4 == s5 && s5 == s6) && s4 != "") {
        alert(`Player ${s4} won!`);
        gameOver();
    } else if ((s7 == s8 && s8 == s9) && s7 != "") {
        alert(`Player ${s7} won!`);
        gameOver();
    }
}

function gameOver() {
    trustArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    preventPress = "The game is over! Press reset to play again! :)"
}