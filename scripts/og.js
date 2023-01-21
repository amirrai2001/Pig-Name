const btnNew = document.getElementById('btn--new');
const btnRoll = document.getElementById('btn--roll');
const btnHold = document.getElementById('btn--hold');

const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.getElementById('dice');

const player0El = document.getElementById('player--0');
const player1El = document.getElementById('player--1');


let score,currentScore,activePlayer,dice


const init = function () {
    score=[0,0];
    currentScore=0
    activePlayer=0
    
    score0El.textContent=0
    score1El.innerText=0
    current0El.innerText=0
    current1El.innerText=0

    diceEl.classList.add('hidden');
    player0El.classList.add('player--active');
    player1El.classList.remove('player--active');
   
    player0El.classList.remove('player--winner')
    player1El.classList.remove('player--winner')
    btnRoll.classList.remove('hidden')
    btnHold.classList.remove('hidden')

}


const switchPlayer=function () {
    document.getElementById(`current--${activePlayer}`).textContent=0;
    currentScore=0;
    activePlayer=activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
    diceEl.classList.add('hidden');
}

btnRoll.addEventListener('click',()=>{
 dice = Math.trunc(Math.random()*6)+1
 diceEl.classList.remove('hidden')
 diceEl.src=`./images/dice-${dice}.png`
 if (dice!==1) {
    currentScore+=dice
    document.getElementById(`current--${activePlayer}`).textContent=currentScore;
 }else{
    switchPlayer()
 }
})

btnHold.addEventListener('click',()=>{
score[activePlayer]+=currentScore;
document.getElementById(`score--${activePlayer}`).textContent=score[activePlayer];

if (score[activePlayer]>=25) {
    diceEl.classList.add('hidden');
    document.getElementById(`player--${activePlayer}`).classList.add('player--winner');
    document.getElementById(`player--${activePlayer}`).classList.remove('player--active');
    btnRoll.classList.add('hidden')
    btnHold.classList.add('hidden')
}else{
    switchPlayer()
   
}
})
btnNew.addEventListener('click', function () {
    init();
  });
init();