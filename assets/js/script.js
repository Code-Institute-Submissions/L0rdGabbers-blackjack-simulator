//Waits for the DOM to finish loading before beginning the first round
//Gets the bets input element and adds an event listener to it
document.addEventListener("DOMContentLoaded", function() {
    let bet = document.getElementById('bet');
    bet.addEventListener('keydown', function(event) {
        if (event.key === "Enter") {
            if (this.valueAsNumber === 0) {
                alert("You gotta pay to play round 'ere")
            } else if (this.valueAsNumber < 0) {
                alert("I ain't givin' you money!")
            } else {
                alert("Collecting bets")
                let subtractBet = (this.valueAsNumber);
                let oldScore = parseFloat(document.getElementById('score').innerHTML);
                let newScore = oldScore - subtractBet;
                document.getElementById('score').innerHTML = newScore;
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

function determineMaxBet() {

}
