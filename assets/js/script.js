//Waits for the DOM to finish loading before beginning the first round
//Gets the bet's input element and adds an event listener to it
//Checks to ensure player's bet is valid and if valid
//will remove player's bet from winnings
document.addEventListener("DOMContentLoaded", function() {
    let bet = document.getElementById('bet');
    bet.addEventListener('keypress', function collectBets(event) {
        if (event.key === "Enter") {
            if (this.valueAsNumber === 0) {
                alert("You gotta pay to play round 'ere")
            } else if (this.valueAsNumber < 0) {
                alert("I ain't givin' you money!")
            } else if (this.valueAsNumber > parseFloat(document.getElementById('score').innerHTML)) {
                alert("I'm sorry kiddo, we don't accept pretend money here...")
            } else {
                alert("Collecting bets ...")
                let subtractBet = (this.valueAsNumber);
                let oldScore = parseFloat(document.getElementById('score').innerHTML);
                let newScore = oldScore - subtractBet;
                let bet = document.getElementById('bet')
                document.getElementById('score').innerHTML = newScore;
                bet.setAttribute("max", newScore);
                bet.removeEventListener('keypress', collectBets);
                bet.value = ''
                beginRound();
            }
        }
    })
})



function beginRound() {

}

function endRound() {

}

function dealWholeTable() {

}

function hit() {

}

function stand() {

}

function split() {

}

function doubleDown() {

}
