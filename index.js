// Pick words at random

const words = [
  'doctor',
  'dog',
  'pasta',
  'laptop',
  'june',
  'spring',
  'toyota',
  'history',
  'rose',
  'friday',
  'dinner',
  'hair',
  'clown'];

const selectRandomWord = Math.floor(Math.random() * words.length);
function randomWord() {
  return words[selectRandomWord];
}
const word = randomWord();
console.log(word, word.length);


// Create word holders

const wordHolder = document.getElementById('holders');

function createHolders(char) {
  for (char of word) {
    const span = document.createElement('span');
    span.textContent = '_';
    span.dataset.letter = char;
    wordHolder.append(span);
  }
}
window.addEventListener('load', createHolders);


// Create Buttons

const lettersEl = document.querySelector('.letters');
const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
  'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
  'w', 'x', 'y', 'z'];

letters.forEach(letter => {
  const letterel = document.createElement('button');
  letterel.textContent = letter;
  letterel.classList.add('letter');
  lettersEl.append(letterel);
});

let moves = 0;
const playerMoves = document.getElementById('moves');

function checkGuess(e) {
  let wrongGuess = true;
  if (e.target.className === 'letter') {
    e.target.classList.add('clicked');
    moves++;
    playerMoves.textContent = 'Moves: ' + moves;
    const clicked = e.target.textContent.toLowerCase();
    console.log(clicked);

    // Display guessed letter
    const spans = document.querySelectorAll('#holders span');
    const wordArr = Array.from(word.toLowerCase());

    wordArr.forEach((letter, wordIndex) => {
      if (clicked === letter) {
        wrongGuess = false;
        spans.forEach((span, spanIndex) => {
          if (wordIndex === spanIndex) {
            span.textContent = clicked;
          }
        });
      }
    });
    displayGameStatus(wrongGuess);
  }
}

// Hints

const hint = document.getElementById('hint');

function displayHint() {
  const listOfHints = ['A person qualified to treat ill people', 'A pet', 'A dish originating from Italy', 'A device for storing and processing data',
    'A month of the year', 'A season', 'A car brand', 'The study of past events', 'A garden plant with thorns',
    'A day of the week', 'An meal of the day', 'Grows on a persons head', 'A circus entertainer'];

  hint.textContent = 'Hint: ' + listOfHints[selectRandomWord];
}
document.getElementById('hints').addEventListener('click', displayHint);

// Display loss

let lives = 10;
const endGame = document.getElementById('win-or-loss');
const livesel = document.getElementById('lives');
const hangman = document.querySelector('.the-hanged-man');

function displayGameStatus(wrongGuess) {
  if (wrongGuess) {
    lives--;
    hangman.classList.add('false-' + lives);
    livesel.textContent = 'You have ' + lives + ' lives left';
    endGame.append(livesel);
    if (lives === 0) {
      endGame.textContent = 'You Lost.' + ' The answer is ' + word;
      lettersEl.classList.add('done');
    }
  }
  if (checkCorrectGuess()) {
    endGame.textContent = 'You Won!';
    lettersEl.classList.add('done');
  }
}
window.addEventListener('click', checkGuess);

// Display Win

function checkCorrectGuess() {
  const spans = document.querySelectorAll('#holders span');
  let won = true;
  spans.forEach((span) => {
    if (span.textContent === '_') {
      won = false;
    }
  });
  return won;
}
checkCorrectGuess();
