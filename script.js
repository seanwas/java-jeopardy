var numberOfQuestion = 25;

document.getElementById('play-btn').addEventListener('click', setUpGame);
document.getElementById('name-btn').addEventListener('click', function() {
  setPlayerName(document.getElementById('player-name').value);
});
document.getElementById('avatar-btn').addEventListener('click', setUpGame);
document
  .getElementsByClassName('player-buttons')[0]
  .addEventListener('click', function(e) {
    if (e.target.id !== '') {
        console.log(e.target.id)
        playerGuess(e.target.id);
    }
  });

for (i = 0; i < 5; i++) {
  document.getElementsByClassName('category')[i].innerHTML =
    questiondata[i].categoryName;

  for (j = 0; j < 5; j++) {
    document.getElementsByClassName('question')[
      i * 5 + j
    ].dataset.categorySet = i;
    document.getElementsByClassName('question')[
      i * 5 + j
    ].dataset.questionSet = j;
    document.getElementsByClassName('question')[i * 5 + j].innerHTML =
      '$' + (j + 1) * 100;
    document
      .getElementsByClassName('question')
      [i * 5 + j].addEventListener('click', function() {
        showQuestion(event);
        showPlayerButtons();
      });
  }
}

for (i = 0; i < 3; i++) {
  document
    .getElementsByClassName('players')
    [i].addEventListener('click', function(e) {
      addPlayers(e.target.innerHTML);
    });
}

document.getElementById('question-btn').addEventListener('click', function() {
  if (document.getElementById('question-btn').innerHTML === 'Show Answer') {
    showAnswer();
  } else {
    closeQuestion();
  }
});

function setUpGame() {
  document.getElementsByClassName('logo-area')[0].style.visibility = 'hidden';
  document.getElementsByClassName('settings-area')[0].style.visibility =
    'visible';
}

function addPlayers(amount) {
  players.number = amount;
  assignButtons();
  getPlayerName();
}

function getPlayerName() {
  document.getElementById('settings-message').innerHTML =
    'ENTER THE NAME OF PLAYER/TEAM ' + players.current;
  document.getElementById('num-players').style.visibility = 'hidden';
  document.getElementById('player-area').style.visibility = 'visible';
  document.getElementById('player-name').value = '';
}

function setPlayerName(playerName) {
  players.name[players.current - 1] = playerName;
  
  document.getElementsByClassName('score-name')[
    players.current - 1
  ].innerHTML = playerName;
  document.getElementsByClassName('player-score-area')[
    players.current - 1
  ].style.visibility = 'visible';

  players.current++;

  if (players.current <= players.number) {
    getPlayerName();
  } else {
    startGame();
  }
}

function assignButtons() {
  players.buttons[0] = '0';
  players.buttons[1] = '0';
  players.buttons[2] = '0';
  switch (players.number) {
    case '1':
      players.buttons[1] = '1';
      break;
    case '2':
      players.buttons[0] = '1';
      players.buttons[2] = '2';
      break;
    case '3':
      players.buttons[0] = '1';
      players.buttons[1] = '2';
      players.buttons[2] = '3';
      break;
    default:
      break;
  }
}

function startGame() {
  document.getElementsByClassName('settings-area')[0].style.visibility =
    'hidden';
  document.getElementById('player-area').style.visibility = 'hidden';
}

function showQuestion(e) {
    players.currentAmount = e.target.innerHTML.slice(1,e.target.innerHTML.length)

  document.getElementById('show-question').innerHTML =
    questiondata[e.target.dataset.categorySet].questions[
      e.target.dataset.questionSet
    ];
  document.getElementById('show-answer').innerHTML =
    questiondata[e.target.dataset.categorySet].answers[
      e.target.dataset.questionSet
    ];
  document.getElementById('question-btn').innerHTML = 'Show Answer';
  e.target.style.visibility = 'hidden';
  document.getElementById('question-area').style.visibility = 'visible';
  numberOfQuestion--;
}

function showPlayerButtons() {
  for (i = 0; i < 3; i++) {
    if (players.buttons[i] === '0') {
      document.getElementsByClassName('player-btn')[i].style.visibility =
        'hidden';
    } else {
      document.getElementsByClassName('player-btn')[i].innerHTML =
        players.name[players.buttons[i] - 1];
      document.getElementsByClassName('player-btn')[i].style.visibility =
        'visible';
    }
  }
}

function playerGuess(buttonClicked) {
  players.current = players.buttons[buttonClicked];
  showAnswer();
}

function showAnswer() {
  document.getElementById('question-btn').innerHTML = 'Correct';
  document.getElementById('show-question').innerHTML = document.getElementById(
    'show-answer'
  ).innerHTML;
  document.getElementById('question-btn').style.visibility = 'visible';

  document.getElementsByClassName('player-btn')[0].style.visibility = 'hidden';
  document.getElementsByClassName('player-btn')[1].style.visibility = 'hidden';
  document.getElementsByClassName('player-btn')[2].style.visibility = 'hidden';
}

function closeQuestion() {
  document.getElementById('question-area').style.visibility = 'hidden';
  document.getElementById('question-btn').style.visibility = 'hidden';

  updateScores()
  if (numberOfQuestion === 0) {
    endGame();
  }
}

function updateScores(){
    players.score[players.current-1] = ((players.score[players.current-1])*1)+((players.currentAmount)*1)
    document.getElementsByClassName('score')[0].innerHTML="$"+players.score[0]
    document.getElementsByClassName('score')[1].innerHTML="$"+players.score[1]
    document.getElementsByClassName('score')[2].innerHTML="$"+players.score[2]
}

function endGame() {
  alert('Game Over');
}
