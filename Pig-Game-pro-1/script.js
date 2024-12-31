'use strict';
const score0E = document.getElementById('score--0');
const score1E = document.getElementById('score--1');
const current0E = document.getElementById('current--0');
const current1E = document.getElementById('current--1');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const btnNew = document.querySelector('.btn--new');
const dice = document.querySelector('.dice');
let currentScore = 0;
let activeplayer = 0;
const secureNumber = Math.trunc(Math.random() * 20) + 1;
score0E.textContent = 0;
score1E.textContent = 0;
let score = [0, 0];
dice.classList.add('hidden');
const switchplayer = function () {
  document.getElementById(`current--${activeplayer}`).textContent = 0;
  currentScore = 0;
  activeplayer = activeplayer !== 1 ? 1 : 0;
  document.querySelector('.player--0').classList.toggle('player--active');
  document.querySelector('.player--1').classList.toggle('player--active');
};

btnRoll.addEventListener('click', function () {
  let secureNumber = Math.trunc(Math.random() * 6) + 1;
  dice.classList.remove('hidden');
  dice.src = `dice-${secureNumber}.png`;
  if (secureNumber !== 1) {
    currentScore += secureNumber;
    document.getElementById(`current--${activeplayer}`).textContent =
      currentScore;
  } else {
    switchplayer();
  }
});
btnHold.addEventListener('click', function () {
  score[activeplayer] += currentScore;
  document.getElementById(`score--${activeplayer}`).textContent =
    score[activeplayer];
  if (score[activeplayer] > 20) {
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.add('player--winner');
    document
      .querySelector(`.player--${activeplayer}`)
      .classList.remove('player--active');
  } else {
    switchplayer();
  }
});
btnNew.addEventListener('click', function () {
  currentScore = 0;
  score = [0, 0];
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove('player--winner');
  dice.classList.add('hidden');
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.remove('player--active');
  activeplayer = 0;
  document
    .querySelector(`.player--${activeplayer}`)
    .classList.add('player--active');
  score0E.textContent = 0;
  score1E.textContent = 0;
  current0E.textContent = 0;
  current1E.textContent = 0;
});
