//Link zum Tutorial: https://www.youtube.com/watch?v=pN5Bxjte22s&ab_channel=CodingNepal

const inputs = document.querySelector(".inputs"),
  resetBtn = document.querySelector(".reset-btn"),
  hint = document.querySelector(".hint span"),
  guessLeft = document.querySelector(".guess-left span"),
  wrongLetter = document.querySelector(".wrong-letter span"),
  typingInput = document.querySelector(".typing-input"),
  price = document.querySelector(".price span");

let word,
  maxGuesses,
  corrects = [],
  incorrects = [];

function randomWord() {
  //Getting random Word from the wordList
  let ranObj = wordList[Math.floor(Math.random() * wordList.length)];
  word = ranObj.word;
  maxGuesses = 10;
  corrects = [];
  incorrects = [];

  hint.innerText = ranObj.hint;
  wrongLetter.innerText = incorrects;
  guessLeft.innerText = maxGuesses;

  let html = "";
  for (let i = 0; i < word.length; i++) {
    html += `<input type="text" disabled>`;
  }
  inputs.innerHTML = html;
}

randomWord();

function initGame(e) {
  let key = e.target.value;
  if (
    key.match(/^[A-Z-z]+$/) &&
    !incorrects.includes(` ${key}`) &&
    !corrects.includes(` ${key}`)
  ) {
    if (word.includes(key)) {
      //If user's letter found in the word

      for (let i = 0; i < word.length; i++) {
        if (word[i] === key) {
          corrects.push(key);
          inputs.querySelector("input")[i].value = key;
        }
      }
    } else {
      maxGuesses--; //decrement guesses left
      incorrects.push(` ${key}`);
    }

    wrongLetter.innerText = incorrects;
    guessLeft.innerText = maxGuesses;
  }

  typingInput.value = "";

  setTimeout(() => {
    if (corrects.length === word.length) {
      alert(`You found the word! ${word.toUppercase()}`);
      // Generate a random number between 100 and 1000 (inclusive)
      const randomNumber = Math.floor(Math.random() * 901) + 100;
      price = (randomNumber);

      //Game reset
      randomWord();
    } else if (maxGuesses < 1) {
      alert("Game over! You don't have any guesses left!");
      for (let i = 0; i < word.length; i++) {
        //show all letters in the input
        inputs.querySelector("input")[i].value = word[i];
      }
    }
  });
}

resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());
