const options = ["rock", "paper", "scissors"];

const userScore = document.querySelector(".user-score");
const cpuScore = document.querySelector(".cpu-score");

const result = document.querySelector(".result");

const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");

rockBtn.addEventListener("click", () => getResult("rock", cpuOption()));
paperBtn.addEventListener("click", () => getResult("paper", cpuOption()));
scissorsBtn.addEventListener("click", () => getResult("scissors", cpuOption()));

function cpuOption() {
  return options[Math.floor(Math.random() * 3)];
}

function getResult(userOption, cpuOption) {
  if (userOption === cpuOption) result.innerHTML = "It's a tie!";
  else if (
    (userOption === "rock" && cpuOption === "scissors") ||
    (userOption === "paper" && cpuOption === "rock") ||
    (userOption === "scissors" && cpuOption === "paper")
  ) {
    result.innerHTML = "You win!";
    userScore.innerHTML = Number(userScore.innerHTML) + 1
  } else {
    result.innerHTML = "You lose!";
    cpuScore.innerHTML = Number(cpuScore.innerHTML) + 1
  }
}
