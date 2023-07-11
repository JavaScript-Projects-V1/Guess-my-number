"use strict";

let totalScore = 20;
let highScore = 0;
let playing = true;

const winning = function () {
  message.textContent = "🎉 Correct Number!";
  document.querySelector("body").style.backgroundColor = "#60b347";
  ansBox.textContent = correctGuess;
  ansBox.style.width = "30rem";
  if (totalScore > highScore) {
    highScore = totalScore;
    highScoreContent.textContent = highScore;
  }
};

const lose = function () {
  message.textContent = "💥 You lost the game!";
  score.textContent = 0;
  guessInp.setAttribute("disabled", true);
  playing = false;
};

const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const guessInp = document.querySelector(".guess");
const message = document.querySelector(".message");
const ansBox = document.querySelector(".number");
const score = document.querySelector(".score");
const highScoreContent = document.querySelector(".highscore");
let correctGuess = Math.floor(Math.random() * 20) + 1;

checkBtn.addEventListener("click", function () {
  if (playing) {
    const guessed = Number(guessInp.value);
    if (guessed <= 0 || guessed > 20)
      message.textContent = "⛔️ Not Valid number!";
    else if (guessed === correctGuess) {
      winning();
      guessInp.setAttribute("disabled", true);
      playing = false;
    } else {
      if (totalScore === 1) {
        lose();
      } else {
        --totalScore;
        score.textContent = totalScore;
        if (guessed > correctGuess) {
          message.textContent = "📈 Too high!";
        } else if (guessed < correctGuess) {
          message.textContent = "📉 Too low!";
        }
      }
    }
  }
});

againBtn.addEventListener("click", function () {
  correctGuess = Math.floor(Math.random() * 20) + 1;
  message.textContent = "🤔 Start guessing...";
  ansBox.textContent = "?";
  guessInp.value = "";
  totalScore = 20;
  score.textContent = totalScore;
  document.querySelector("body").style.backgroundColor = "#222";
  ansBox.style.width = "15rem";
  playing = true;
  guessInp.removeAttribute("disabled");
});
