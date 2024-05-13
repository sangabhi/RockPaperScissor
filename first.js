let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#button");
const ps = document.querySelector("#playerScore");
const cs = document.querySelector("#computerScore");

const generate = () => {
    const options = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    return options[randomNumber];
};

const drawGame = () => {
    console.log("Game Drawn !");
    msg.innerHTML = "Game Drawn";
};

const showWinner = (userWin, userChoice, compChoice) => {
    if (userWin) {
        console.log("You won !");
        msg.innerHTML = `You won! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
    } else {
        console.log("You Lost !");
        msg.innerHTML = `You Lost ! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
    }
    ps.textContent = userScore;
    cs.textContent = compScore;
};

const playGame = (userChoice) => {
    console.log("user choice is : ", userChoice);
    const compChoice = generate();
    console.log("Computer Choice is : ", compChoice);
    if (userChoice === compChoice) {
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper") {
            userWin = compChoice === "scissor" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});
