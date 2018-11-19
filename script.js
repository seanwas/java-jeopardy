var numberOfQuestion = 25
currentPlayer = 1

document.getElementById('play-btn').addEventListener('click', setUpGame)
document.getElementById('name-btn').addEventListener('click', function () {
    setPlayerName(document.getElementById('player-name').value)
})
document.getElementById('avatar-btn').addEventListener('click', setUpGame)



for (i = 0; i < 5; i++) {
    document.getElementsByClassName('category')[i].innerHTML = questiondata[i].categoryName

    for (j = 0; j < 5; j++) {
        document.getElementsByClassName('question')[i * 5 + j].dataset.categorySet = i
        document.getElementsByClassName('question')[i * 5 + j].dataset.questionSet = j
        document.getElementsByClassName('question')[i * 5 + j].innerHTML = "$" + (j + 1) * 100
        document.getElementsByClassName('question')[i * 5 + j].addEventListener("click", function () {
            showQuestion(event)
        });
    }

}

for (i = 0; i < 3; i++) {
    document.getElementsByClassName('players')[i].addEventListener('click', function (e) {
        addPlayers(e.target.innerHTML)
    })
}

document.getElementById('question-btn').addEventListener('click', function () {
    if (document.getElementById('question-btn').innerHTML === "Show Answer") {
        showAnswer()
    } else {
        closeQuestion()
    }
})

function setUpGame() {
    document.getElementsByClassName('logo-area')[0].style.visibility = "hidden"
    document.getElementsByClassName('settings-area')[0].style.visibility = "visible"
}

function addPlayers(amount) {
    players.number = amount
    getPlayerName()
}



function getPlayerName() {
    document.getElementById('settings-message').innerHTML = 'ENTER THE NAME OF PLAYER/TEAM ' + (currentPlayer)
    document.getElementById('num-players').style.visibility = 'hidden'
    document.getElementById('player-area').style.visibility = 'visible'
    document.getElementById('player-name').value = ''
    

}

function setPlayerName(playerName) {
    players.name[currentPlayer - 1] = playerName
    document.getElementsByClassName('score-name')[currentPlayer - 1].innerHTML = playerName
    document.getElementsByClassName('player-score-area')[currentPlayer - 1].style.visibility='visible'

    
    currentPlayer++
    if (currentPlayer <= players.number) {
        getPlayerName()
    } else {
        startGame()
    }
}



function startGame() {
    document.getElementsByClassName('settings-area')[0].style.visibility = "hidden"
    document.getElementById('player-area').style.visibility = 'hidden'

}

function showQuestion(e) {
    document.getElementById('show-question').innerHTML = questiondata[e.target.dataset.categorySet].questions[e.target.dataset.questionSet]
    document.getElementById('show-answer').innerHTML = questiondata[e.target.dataset.categorySet].answers[e.target.dataset.questionSet]
    document.getElementById('question-btn').innerHTML = "Show Answer"
    e.target.style.visibility = 'hidden'
    document.getElementById('question-area').style.visibility = 'visible'
    numberOfQuestion--
}

function showAnswer() {
    document.getElementById('question-btn').innerHTML = "Close"
    document.getElementById('show-question').innerHTML = document.getElementById('show-answer').innerHTML
}

function closeQuestion() {

    document.getElementById('question-area').style.visibility = 'hidden'

    if (numberOfQuestion === 0) {
        endGame()
    }
}

function endGame() {
    alert('Game Over')
}