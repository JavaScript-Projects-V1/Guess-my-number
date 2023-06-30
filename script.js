// When the user wins
function win() {
  document.querySelector(".message").textContent = "🎉 Correct Number!";
  document.querySelector(".number").textContent = secretNumber;
  document.querySelector("body").style.backgroundColor = "#60b347";
  document.querySelector(".number").style.width = "30rem";
  if (score > highscore) {
    highscore = score;
    document.querySelector(".highscore").textContent = score;
  }
}

// Display message
const display = function (message) {
  document.querySelector(".score").textContent = score;
  document.querySelector(".message").textContent = message;
};

let score = 20;
let highscore = 0;
let secretNumber = Math.floor(Math.random() * 20) + 1;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (score > 1) {
    if (guess <= 0 || !guess) {
      document.querySelector(".message").textContent = "⛔ No number";
    }
    // make validation on input
    if (guess >= 1 && guess <= 20) {
      // if the guessed number is high or low
      if (guess !== secretNumber) {
        score--;
        display(`${guess > secretNumber ? "📉 Too High !" : "📈 Too Low !"}`);
      }
      // if the guessed number is correct
      else if (guess === secretNumber) {
        win();
      }
    }
  } else {
    if (guess === secretNumber) win();
    else {
      document.querySelector(".message").textContent = "💥 You lost the game !";
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  // reset all Html
  score = 20;
  secretNumber = Math.floor(Math.random() * 20) + 1;
  document.querySelector(".message").textContent = " 🤔 Start guessing...";
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";

  // reset all Css
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
});
