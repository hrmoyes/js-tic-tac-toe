let currentChoice = "X";
let trustArray = [1, 1, 1, 1, 1, 1, 1, 1, 1];
let preventPress = "You already made a turn there!";
let turnCounter = 1;

let winCountsX = 0;
let winCountsO = 0;
let tieCounts = 0;

function clickBlock(blockNum) {
    if ((turnCounter == 1 && currentChoice == "X") || (turnCounter == 0 && currentChoice == "O")) {
        if (trustArray[blockNum - 1] == true) {
            document.getElementById(blockNum).value = currentChoice;
            trustArray[blockNum - 1] = 0;
            if (currentChoice == "X") {
                let whoseTurn = document.getElementById("turn-indic") 
                whoseTurn.textContent = `It is O's turn to go.`;
                turnCounter = 0;
                currentChoice = "O";
            } else if (currentChoice == "O") {
                let whoseTurn = document.getElementById("turn-indic") 
                whoseTurn.textContent = `It is X's turn to go.`;
                turnCounter = 1;
                currentChoice = "X";
            }
        } else {
            alert(preventPress);
        }
    } 
}

function resetButton() {
    for (let i = 1; i <= 9; i++) {
        document.getElementById(i).value = "";
        trustArray[i-1] = 1;
        document.getElementById(i).style.color = "black";

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
        s1Style.style.color = "green";
        s2Style.style.color = "green";
        s3Style.style.color = "green";
        s4Style.style.color = "red";
        s5Style.style.color = "red";
        s6Style.style.color = "red";
        s7Style.style.color = "red";
        s8Style.style.color = "red";
        s9Style.style.color = "red";
        alert(`Player ${s1} won!`);
        if (s1 == "X") {
            winCountsX += 1;
            document.getElementById("X-wins").textContent = winCountsX;
        } else if (s1 == "O") {
            winCountsO += 1;
            document.getElementById("O-wins").textContent = winCountsO;
        }
        gameOver();
    } else if ((s1 == s4 && s4 == s7) && s1 != "") {
        s1Style.style.color = "green";
        s2Style.style.color = "red";
        s3Style.style.color = "red";
        s4Style.style.color = "green";
        s5Style.style.color = "red";
        s6Style.style.color = "red";
        s7Style.style.color = "green";
        s8Style.style.color = "red";
        s9Style.style.color = "red";
        alert(`Player ${s1} won!`);
        if (s1 == "X") {
            winCountsX += 1;
            document.getElementById("X-wins").textContent = winCountsX;
        } else if (s1 == "O") {
            winCountsO += 1;
            document.getElementById("O-wins").textContent = winCountsO;
        }
        gameOver();
    } else if ((s1 == s5 && s5 == s9) && s1 != "") {
        s1Style.style.color = "green";
        s2Style.style.color = "red";
        s3Style.style.color = "red";
        s4Style.style.color = "red";
        s5Style.style.color = "green";
        s6Style.style.color = "red";
        s7Style.style.color = "red";
        s8Style.style.color = "red";
        s9Style.style.color = "green";
        alert(`Player ${s1} won!`);
        if (s1 == "X") {
            winCountsX += 1;
            document.getElementById("X-wins").textContent = winCountsX;
        } else if (s1 == "O") {
            winCountsO += 1;
            document.getElementById("O-wins").textContent = winCountsO;
        }
        gameOver();
    } else if ((s2 == s5 && s5 == s8) && s2 != "") {
        s1Style.style.color = "red";
        s2Style.style.color = "green";
        s3Style.style.color = "red";
        s4Style.style.color = "red";
        s5Style.style.color = "green";
        s6Style.style.color = "red";
        s7Style.style.color = "red";
        s8Style.style.color = "green";
        s9Style.style.color = "red";
        alert(`Player ${s2} won!`);
        if (s2 == "X") {
            winCountsX += 1;
            document.getElementById("X-wins").textContent = winCountsX;
        } else if (s2 == "O") {
            winCountsO += 1;
            document.getElementById("O-wins").textContent = winCountsO;
        }
        gameOver();
    } else if ((s3 == s5 && s5 == s7) && s3 != "") {
        s1Style.style.color = "red";
        s2Style.style.color = "red";
        s3Style.style.color = "green";
        s4Style.style.color = "red";
        s5Style.style.color = "green";
        s6Style.style.color = "red";
        s7Style.style.color = "green";
        s8Style.style.color = "red";
        s9Style.style.color = "red";
        alert(`Player ${s3} won!`);
        if (s3 == "X") {
            winCountsX += 1;
            document.getElementById("X-wins").textContent = winCountsX;
        } else if (s3 == "O") {
            winCountsO += 1;
            document.getElementById("O-wins").textContent = winCountsO;
        }
        gameOver();
    } else if ((s3 == s6 && s6 == s9) && s3 != "") {
        s1Style.style.color = "red";
        s2Style.style.color = "red";
        s3Style.style.color = "green";
        s4Style.style.color = "red";
        s5Style.style.color = "red";
        s6Style.style.color = "green";
        s7Style.style.color = "red";
        s8Style.style.color = "red";
        s9Style.style.color = "green";
        alert(`Player ${s3} won!`);
        if (s3 == "X") {
            winCountsX += 1;
            document.getElementById("X-wins").textContent = winCountsX;
        } else if (s3 == "O") {
            winCountsO += 1;
            document.getElementById("O-wins").textContent = winCountsO;
        }
        gameOver();
    } else if ((s4 == s5 && s5 == s6) && s4 != "") {
        s1Style.style.color = "red";
        s2Style.style.color = "red";
        s3Style.style.color = "red";
        s4Style.style.color = "green";
        s5Style.style.color = "green";
        s6Style.style.color = "green";
        s7Style.style.color = "red";
        s8Style.style.color = "red";
        s9Style.style.color = "red";
        alert(`Player ${s4} won!`);
        if (s4 == "X") {
            winCountsX += 1;
            document.getElementById("X-wins").textContent = winCountsX;
        } else if (s4 == "O") {
            winCountsO += 1;
            document.getElementById("O-wins").textContent = winCountsO;
        }
        gameOver();
    } else if ((s7 == s8 && s8 == s9) && s7 != "") {
        s1Style.style.color = "red";
        s2Style.style.color = "red";
        s3Style.style.color = "red";
        s4Style.style.color = "red";
        s5Style.style.color = "red";
        s6Style.style.color = "red";
        s7Style.style.color = "green";
        s8Style.style.color = "green";
        s9Style.style.color = "green";
        alert(`Player ${s7} won!`);
        if (s7 == "X") {
            winCountsX += 1;
            document.getElementById("X-wins").textContent = winCountsX;
        } else if (s7 == "O") {
            winCountsO += 1;
            document.getElementById("O-wins").textContent = winCountsO;
        }
        gameOver();
    } else if ((s1 == "X" || s1 == "O") && (s2 == "X" || s2 == "O") && (s3 == "X" || s3 == "O") &&
    (s4 == "X" || s4 == "O") && (s5 == "X" || s5 == "O") && (s6 == "X" || s6 == "O") &&
    (s7 == "X" || s7 == "O") && (s8 == "X" || s8 == "O") && (s9 == "X" || s9 == "O")) {
        s1Style.style.color = "blue";
        s2Style.style.color = "blue";
        s3Style.style.color = "blue";
        s4Style.style.color = "blue";
        s5Style.style.color = "blue";
        s6Style.style.color = "blue";
        s7Style.style.color = "blue";
        s8Style.style.color = "blue";
        s9Style.style.color = "blue";
        alert("The game is a tie! No one wins.")
        tieCounts += 1;
        document.getElementById("num-ties").textContent = tieCounts;
    }
}

function gameOver() {
    trustArray = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    preventPress = "The game is over! Press reset to play again! :)"
}