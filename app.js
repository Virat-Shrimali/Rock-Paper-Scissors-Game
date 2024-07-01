let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        console.log("Choice was clicked! ", userChoice);
        playgame(userChoice);
    });
});

const genCompChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randidx = Math.floor(Math.random() * 3);

    return options[randidx];
};

const drawGame = () => {
    console.log("Game was draw!");
    msg.innerText = "Game was draw. Play again";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        console.log("You win!");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        console.log("You lose!");
        msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playgame = (userChoice) => {
    console.log("User choice =", userChoice);
    // Generate Computer Choice
    const compChoice = genCompChoice();
    console.log("Comp choice =", compChoice);

    if (userChoice == compChoice) {
        // Draw game 
        drawGame();
    } else {
        let userWin = true;
        if (userChoice == "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice == "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};
