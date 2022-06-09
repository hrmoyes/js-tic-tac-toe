let currentChoice = "X";
let trustArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];
let preventPress = "You already made a turn there!";


function playerChooseX() {
    currentChoice = "X"
}
function playerChooseO() {
    currentChoice = "O"
}

function clickBlock(blockNum) {
    if (trustArray[blockNum - 1] == true) {
        document.getElementById(blockNum).value = currentChoice;
        trustArray[blockNum - 1] = 0;
    } else {
        alert(preventPress);
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


    if ((s1 == s2 && s2 == s3) && s1 != "") {
        alert(`Player ${s1} won!`);
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